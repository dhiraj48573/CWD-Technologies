# CWD Technologies Platform

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.8-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel Deployed](https://img.shields.io/badge/Deployment-Vercel-black?style=flat&logo=vercel)](https://cwd-technologies.vercel.app/)

Welcome to the official repository for **CWD Technologies** — a scalable, modern technology agency platform engineered for high conversion, technical performance, and digital growth.

**Brand Positioning:** *"Your Technology & Digital Growth Partner"*  
**Headquarters:** Haridwar, Uttarakhand, India  
**Official Live Preview:** [https://cwd-technologies.vercel.app/](https://cwd-technologies.vercel.app/)

---

## 🏗 Architecture Overview

The repository is structured as a clean **Monorepo**:

```text
CWD Technologies/
├── frontend/                 # Next.js 16 App Router (React 19, Turbopack, Tailwind CSS v4)
│   ├── public/               # Public assets (Brand Logo: cwd-techno-logo.jpeg)
│   └── src/
│       ├── app/              # App Router Pages, Dynamic Routes, APIs, Sitemap, Robots
│       │   ├── about/        # About Us & Engineering Philosophy
│       │   ├── api/contact/  # Sanitized, Validated Lead API Route
│       │   ├── contact/      # Contact Desk, Location & Direct Inquiry
│       │   ├── portfolio/    # Case Studies & Work Showcase ([id] dynamic routing)
│       │   ├── pricing/      # Transparent Pricing, Launch Packages, Milestone Disclaimers
│       │   ├── quote/        # Step-by-Step Interactive Quotation Generator
│       │   ├── services/     # 9 Dedicated Service Landing Pages ([id] dynamic routing)
│       │   ├── start/        # Multi-Field Project Intake System
│       │   ├── not-found.tsx # Custom 404 Error Page
│       │   ├── sitemap.ts    # Dynamic XML Sitemap Generator
│       │   └── robots.ts     # SEO Robots Protocol
│       ├── components/       # UI Components, Sections, Forms, Layout, Dual-Theme System
│       ├── config/           # Centralized Configuration (Services, Industries, Pricing, Site)
│       └── lib/              # Type-Safe Utilities
├── backend/                  # Node.js/Express API foundation
├── DEPLOYMENT.md             # Production Vercel & Hostinger DNS Setup Guide
└── README.md                 # Project Documentation
```

---

## ✨ Upgraded Features & Capabilities

### 1. High-Performance Frontend (`/frontend`)
* **Next.js 16 & React 19:** Powered by Turbopack for instant development cycles and optimized server-side builds.
* **Dual-Theme System:** Sleek obsidian/navy dark theme and clean slate light theme with zero layout shift.
* **9 Dedicated Service Pages:** Individual SEO-optimized landing pages with problem breakdowns, custom solutions, technical features, benefits, and workflows.
* **10 Industry Verticals:** Custom cards tailored for Healthcare, Education, Salons, Gyms, Hospitality, Retail, Real Estate, Startups, Professional Services, and Local SMBs.
* **Interactive Quotation Generator:** Step-by-step price calculation with add-ons, printable PDF layout, and instant WhatsApp export.
* **Authentic Case Studies:** Real technical challenges, architecture solutions, and verified outcomes across Web, Software, AI, and E-Commerce.
* **Lead Generation & Client Experience:** Multi-field project intake with server-side validation and a floating WhatsApp button pre-configured with verified business messaging.

### 2. Comprehensive Technical SEO
* **Schema.org Structured Data:** Injected Organization, LocalBusiness, ProfessionalService, Service, and Article JSON-LD markup.
* **Local SEO Optimization:** Targeted for Haridwar, Dehradun, Rishikesh, Uttarakhand, and nationwide.
* **Automated XML Sitemap & Robots Protocol:** Dynamic sitemap generation covering all pages and dynamic parameters.

---

## 🚀 Local Development

### Running the Frontend
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production
```bash
cd frontend
npm run build
```

---

## 🌐 Production Deployment & Hostinger DNS

For complete step-by-step instructions on connecting your Hostinger-registered domain to Vercel without disrupting corporate email, please refer to:

👉 **[DEPLOYMENT.md](DEPLOYMENT.md)**

---

## 📞 Company Contact & Verification

- **Company Name:** CWD Technologies
- **Founder & Lead Architect:** Dhiraj Kumar Singh
- **Location:** Haridwar, Uttarakhand, India
- **Phone / WhatsApp:** +91 9259534648
- **Email:** codewithdhiru07@gmail.com
- **Website:** [https://cwd-technologies.vercel.app/](https://cwd-technologies.vercel.app/)

*Designed and Developed for CWD Technologies (2026).*
