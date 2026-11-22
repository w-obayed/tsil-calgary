import { NextRequest, NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validations";
import { Resend } from "resend";

// Simple in-memory rate limiter for serverless instance
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error:
            "Too many requests. Please wait a few minutes before submitting another enquiry.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Check honeypot for spam bot prevention
    if (body.honeypot && body.honeypot.length > 0) {
      // Silently accept bots to avoid alerting them
      return NextResponse.json({ success: true, message: "Quote request received." });
    }

    // Validate request data
    const parseResult = quoteFormSchema.safeParse(body);
    if (!parseResult.success) {
      const errorMessages = parseResult.error.errors.map((e) => e.message).join(", ");
      return NextResponse.json({ error: errorMessages }, { status: 400 });
    }

    const { fullName, email, phone, address, service, message } = parseResult.data;

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || "info@tsil-calgary.com";
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

    if (resendApiKey && resendApiKey !== "your_resend_api_key_here") {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: fromEmail,
        to: contactEmail,
        replyTo: email,
        subject: `[New Website Quote Enquiry] - ${service} from ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #DDE5D8; border-radius: 8px; background-color: #F7F7F0;">
            <div style="background-color: #173D2B; padding: 20px; border-radius: 6px 6px 0 0; color: #FFFFFF;">
              <h2 style="margin: 0; font-size: 22px;">New Quote Enquiry</h2>
              <p style="margin: 5px 0 0 0; color: #82A83D; font-size: 14px;">Tri-Star Irrigation and Lightscape</p>
            </div>
            <div style="padding: 24px; background-color: #FFFFFF; border-radius: 0 0 6px 6px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #59635C; font-weight: bold; width: 140px;">Customer Name:</td>
                  <td style="padding: 8px 0; color: #14251B;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #59635C; font-weight: bold;">Email Address:</td>
                  <td style="padding: 8px 0; color: #14251B;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #59635C; font-weight: bold;">Phone Number:</td>
                  <td style="padding: 8px 0; color: #14251B;"><a href="tel:${phone}">${phone}</a></td>
                </tr>
                ${
                  address
                    ? `<tr>
                        <td style="padding: 8px 0; color: #59635C; font-weight: bold;">Property Address:</td>
                        <td style="padding: 8px 0; color: #14251B;">${address}</td>
                      </tr>`
                    : ""
                }
                <tr>
                  <td style="padding: 8px 0; color: #59635C; font-weight: bold;">Service Interested In:</td>
                  <td style="padding: 8px 0; color: #173D2B; font-weight: bold;">${service}</td>
                </tr>
              </table>
              <div style="margin-top: 20px; padding: 15px; background-color: #EDF2E8; border-radius: 6px;">
                <p style="margin: 0 0 8px 0; font-weight: bold; color: #14251B;">Project Details:</p>
                <p style="margin: 0; color: #59635C; white-space: pre-wrap; line-height: 1.5;">${message}</p>
              </div>
            </div>
          </div>
        `,
      });
    } else {
      console.log(
        "[DEVELOPMENT/MOCK EMAIL] Quote form submitted successfully:",
        { fullName, email, phone, address, service, message }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your quote request has been received. We will contact you within 1 business day.",
    });
  } catch (err: unknown) {
    console.error("Error processing quote submission:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while sending your message. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
