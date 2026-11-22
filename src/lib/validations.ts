import { z } from "zod";

export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number (at least 10 digits)")
    .max(20, "Phone number is too long"),
  address: z
    .string()
    .max(200, "Property address must be less than 200 characters")
    .optional()
    .or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Please provide some project details (at least 10 characters)")
    .max(2000, "Message must be less than 2000 characters"),
  // Honeypot field for spam protection
  honeypot: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
