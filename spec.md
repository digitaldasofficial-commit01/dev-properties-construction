# Specification

## Summary
**Goal:** Build a responsive, modern marketing website for “Dev Properties & Construction” (Lucknow) with a premium, trustworthy blue/white theme, clear navigation, strong CTAs, and a working contact form that stores inquiries.

**Planned changes:**
- Create a mobile-first marketing site with sections/pages: Home, About Us, Services, Properties (Buy/Sell/Rent), Construction, Why Choose Us, Testimonials, Contact Us.
- Implement responsive header navigation (desktop + mobile) and a consistent footer with quick links and contact details.
- Add prominent CTAs labeled exactly: “Get Free Consultation”, “List Your Property”, “Book Site Visit” (including at least one above the fold on Home).
- Write English, non-placeholder content across all sections, prominently branding “Dev Properties & Construction”.
- Build Properties UI with Buy/Sell/Rent category switching and representative static property cards per category.
- Add Contact Us details exactly as provided, clickable tel: and mailto: links, and a floating WhatsApp chat button to +91 85659 64384.
- Implement a contact form (name, phone, email, message) with validation and success/error feedback.
- Backend: add minimal Motoko persistence for timestamped inquiries, with methods to create and list inquiries.
- Add and render generated static visual assets under `frontend/public/assets/generated` for hero/section backgrounds and service icons.

**User-visible outcome:** Visitors can browse all requested sections on a professional real estate/construction site, use prominent CTAs, contact the business via phone/email/WhatsApp, and submit the contact form successfully.
