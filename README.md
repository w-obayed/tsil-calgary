# Tri-Star Irrigation & Lightscape — Website Redesign

A luxury, high-performance, and conversion-optimized website for **Tri-Star Irrigation and Lightscape**, a premier Calgary and Chestermere-based landscaping, lawn irrigation, and outdoor lighting contractor.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Lucide Icons**, and **Resend**.

---

## 🌟 Key Highlights

- **Cinematic Photography & Architecture**: Full-width cinematic hero banners, asymmetrical editorial layouts, and dark-theme landscape lighting showcase.
- **100% Authentic Business Information**: Real phone numbers, physical address, business hours, original photography, and confirmed product specifications.
- **All 10 Pages Fully Rebuilt & Preserved**:
  1. Home (`/`)
  2. Residential Landscaping (`/landscaping`)
  3. Lawn Irrigation (`/irrigation`)
  4. Commercial Landscaping (`/commercial-landscaping`)
  5. Lightscape & Outdoor Lighting (`/lightscape`)
  6. Products Catalog (`/products`)
  7. About Us (`/about-us`)
  8. Contact Us (`/contact-us`)
  9. Privacy Policy (`/privacy-policy`)
  10. Terms of Use (`/terms-of-use`)
- **Conversion-Focused Forms**: Multi-service quotation form with React Hook Form, Zod validation, honeypot spam protection, rate limiting, and Resend email integration.
- **Local Calgary SEO**: Page-level metadata, OpenGraph tags, JSON-LD `LandscapeService` structured data, `sitemap.ts`, and `robots.ts`.
- **WCAG 2.2 AA Accessibility**: Semantic HTML, skip-to-content links, visible keyboard focus indicators, screen reader ARIA roles, and high-contrast color palette.

---

## 🛠 Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Management**: React Hook Form
- **Validation**: Zod
- **Email Service**: Resend
- **Fonts**: Manrope (Headings), Inter (Body), Playfair Display (Accents) via `next/font/google`
- **Deployment**: Vercel

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies

```bash
git clone <repository-url>
cd "Tri-Star Irrigation and Lightscape"
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory (refer to `.env.example`):

```bash
cp .env.example .env.local
```

Populate the variables:

```env
# Resend API Key for contact form delivery
RESEND_API_KEY=re_your_api_key

# Recipient email address for quotes
CONTACT_EMAIL=info@tsil-calgary.com

# Verified sender email in Resend
FROM_EMAIL=quotes@tsil-calgary.com

# Public site domain
NEXT_PUBLIC_SITE_URL=https://tsil-calgary.com
```

> **Note**: In development mode or without a valid `RESEND_API_KEY`, form submissions will log to the console and return a success response so form workflows can be tested seamlessly.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 🚢 Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In the Vercel dashboard, click **Add New Project** and import the repository.
3. In **Environment Variables**, add:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `FROM_EMAIL`
   - `NEXT_PUBLIC_SITE_URL`
4. Click **Deploy**. Vercel will build and deploy the Next.js App Router application automatically.

---

## 📞 Business Information Reference

- **Business Name**: Tri-Star Irrigation and Lightscape
- **Phone**: (825) 735-2884
- **Email**: info@tsil-calgary.com
- **Address**: 289 Lakeside Greens Crescent, Chestermere, Alberta T1X 1C3, Canada
- **Hours**: Monday – Saturday: 8:00 AM – 6:00 PM
- **Service Area**: Calgary, Chestermere, Airdrie, Cochrane, Okotoks, Rocky View County
- **Slogan**: Quality · Service · Value
