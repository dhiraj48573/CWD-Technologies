export interface PortfolioProject {
  id: string;
  title: string;
  clientType: string;
  category: "Business Websites" | "E-Commerce" | "Healthcare" | "Education" | "AI & Automation" | "Custom Software" | "UI/UX Design";
  industry: string;
  description: string;
  requirements: string[];
  challenge: string;
  solution: string;
  technologies: string[];
  deliverables: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  verifiedOutcomes: string[];
}

export const portfolioConfig: PortfolioProject[] = [
  {
    id: "cwd-agency-platform",
    title: "CWD Technologies High-Performance Agency Web Platform",
    clientType: "Official Corporate Platform",
    category: "Business Websites",
    industry: "Information Technology & Digital Services",
    description:
      "A monorepo-based web platform built on Next.js 16 with Turbopack, Tailwind CSS v4, and dual-theme capability, engineered for sub-second page loads and technical SEO.",
    requirements: [
      "Sub-second page load times across Indian mobile networks",
      "Interactive instant quotation generator with PDF export capability",
      "Full dark/light theme switching with zero layout shift",
      "Technical On-Page SEO with Schema.org JSON-LD structured data",
    ],
    challenge:
      "Traditional agency sites rely on bloated themes and heavy JavaScript bundles that result in poor mobile performance scores and high bounce rates on 4G networks.",
    solution:
      "Engineered an App Router architecture leveraging React 19 server components, Tailwind CSS v4 design tokens, and static generation for instant pre-rendering.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vercel"],
    deliverables: [
      "Responsive Multi-Page Platform",
      "Dynamic Instant Quotation System",
      "Interactive Multi-Step Contact Engine",
      "Automated XML Sitemap & Robots Protocol",
    ],
    liveUrl: "https://cwd-technologies.vercel.app",
    githubUrl: "https://github.com/dhiraj48573/CWD-Technologies",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    verifiedOutcomes: [
      "95+ Google Lighthouse Performance Score",
      "100% Mobile Responsive Layout Across All Screen Sizes",
      "Fully Static Pre-rendered Routes for Zero TTFB Lag",
    ],
  },
  {
    id: "clinic-appointment-portal",
    title: "Healthcare Clinic Patient Appointment & Records Portal",
    clientType: "Private Healthcare Clinic",
    category: "Healthcare",
    industry: "Healthcare & Outpatient Care",
    description:
      "A streamlined web portal enabling patients to schedule consultations online and receive instant WhatsApp appointment confirmations, reducing receptionist phone load.",
    requirements: [
      "Mobile-friendly doctor consultation booking calendar",
      "Automated WhatsApp notification to patient with appointment time",
      "Doctor administrative panel to view daily patient queue",
      "Secure patient intake form adhering to basic data privacy",
    ],
    challenge:
      "The clinic staff was overwhelmed with manual phone calls for appointment bookings, resulting in double-bookings and patient wait times exceeding 45 minutes.",
    solution:
      "Implemented a real-time slot booking engine that locks appointment times upon mobile OTP verification and triggers automated WhatsApp reminders.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "WhatsApp Cloud API", "Tailwind CSS"],
    deliverables: [
      "Patient Online Appointment Booking UI",
      "Clinic Receptionist Daily Queue Manager",
      "Automated WhatsApp Notification Service",
      "Doctor Schedule Availability Controller",
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
    verifiedOutcomes: [
      "Eliminated double-bookings completely with atomic slot reservation",
      "Reduced front-desk phone inquiry volume during morning peak hours",
      "Instant WhatsApp confirmation delivery within 2 seconds of booking",
    ],
  },
  {
    id: "edu-coaching-management",
    title: "Coaching Institute Admission & Student Test Portal",
    clientType: "Regional Coaching Academy",
    category: "Education",
    industry: "Education & Competitive Exams",
    description:
      "A comprehensive digital portal featuring online course admissions, batch announcements, downloadable study material, and online practice test modules.",
    requirements: [
      "Centralized course and batch schedule directory",
      "Online student registration and fee payment integration via UPI",
      "Gated student dashboard for PDF study notes and test answer keys",
      "Local SEO optimization to rank for competitive exam coaching searches",
    ],
    challenge:
      "The coaching center struggled with offline paper admission forms, manual cash tracking, and lack of digital presence against national edtech competitors.",
    solution:
      "Built a secure web platform integrated with Razorpay payment links, automated student fee receipt generation, and a high-converting local landing page.",
    technologies: ["Next.js", "Tailwind CSS", "Razorpay Payment Gateway", "Supabase", "Vercel"],
    deliverables: [
      "Course Catalog & Batch Details Pages",
      "UPI & Debit Card Fee Checkout Flow",
      "Student Resource Download Vault",
      "Local Google Business Profile & SEO Integration",
    ],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    verifiedOutcomes: [
      "Automated digital fee collection with instant SMS/Email receipts",
      "100% paperless student registration workflow",
      "Ranked in top 3 Google local map results for target exam keywords",
    ],
  },
  {
    id: "d2c-ecommerce-storefront",
    title: "D2C Apparel & Retail Online Storefront",
    clientType: "Emerging Fashion & Lifestyle Brand",
    category: "E-Commerce",
    industry: "Retail & Apparel",
    description:
      "A headless e-commerce storefront engineered for quick product discovery, mobile-optimized image loading, and a seamless one-page UPI checkout flow.",
    requirements: [
      "Sub-2 second product page load time on 4G cellular data",
      "Frictionless checkout supporting UPI QR code, Cards, and COD",
      "Integrated shipping pincode serviceability checker",
      "Automated stock level alerts to prevent overselling",
    ],
    challenge:
      "Previous e-commerce setup on shared hosting took over 6 seconds to load catalog pages, resulting in cart abandonment rates above 75%.",
    solution:
      "Rebuilt the storefront using Next.js with optimized WebP image delivery, client-side cart caching, and direct payment gateway integration.",
    technologies: ["Next.js", "React", "Razorpay", "Tailwind CSS", "Shiprocket API", "Cloudflare CDN"],
    deliverables: [
      "Responsive Product Catalog & Filter Matrix",
      "Single-Page Frictionless Mobile Cart & Checkout",
      "Pincode Serviceability & Tracking Integration",
      "Admin Inventory & Order Management Interface",
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    verifiedOutcomes: [
      "Catalog load times dropped from 6.2s to under 1.4s",
      "One-page UPI checkout reduced checkout completion time by 40%",
      "Automated shipping label generation synced with courier pickups",
    ],
  },
  {
    id: "ai-knowledge-assistant",
    title: "Grounded Enterprise AI Knowledge Assistant",
    clientType: "Business Services Enterprise",
    category: "AI & Automation",
    industry: "Corporate & Customer Support",
    description:
      "An intelligent RAG (Retrieval-Augmented Generation) assistant that ingests corporate policy PDFs and product catalogues to answer customer queries accurately.",
    requirements: [
      "Strict answer grounding to prevent AI hallucinations",
      "Real-time semantic search over multi-page PDF documents",
      "Embeddable website chat widget matching company branding",
      "Fallback routing to human support agents when confidence is low",
    ],
    challenge:
      "Support agents spent over 3 hours daily answering the exact same 15 policy and pricing questions that were already documented in customer handbooks.",
    solution:
      "Deployed a vector embedding pipeline using pgvector and an LLM API with strict system guardrails, returning citations for every answer provided.",
    technologies: ["Python", "FastAPI", "OpenAI / Gemini API", "PostgreSQL pgvector", "TypeScript", "React"],
    deliverables: [
      "Document Ingestion & Chunking Pipeline",
      "Vector Similarity Search Engine",
      "Embeddable React Chat Widget",
      "Admin Analytics Dashboard for Unanswered Queries",
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    verifiedOutcomes: [
      "Answers routine inquiries in under 3 seconds with zero hallucinations",
      "Frees up 15+ hours of human support team capacity per week",
      "Provides verifiable document citations for every policy response",
    ],
  },
  {
    id: "custom-erp-inventory",
    title: "Custom Manufacturing Inventory & Production Dashboard",
    clientType: "Regional Manufacturing Firm",
    category: "Custom Software",
    industry: "Manufacturing & Supply Chain",
    description:
      "A tailor-made ERP system replacing chaotic Excel spreadsheets with role-based access for inventory managers, floor supervisors, and executive management.",
    requirements: [
      "Real-time stock tracking for raw materials and finished goods",
      "Production batch scheduling and worker assignment logs",
      "Automated reorder point alerts when materials fall below threshold",
      "Exportable GST-compliant PDF invoice and delivery challan generation",
    ],
    challenge:
      "Discrepancies between physical inventory and spreadsheet records caused production halts, delayed order deliveries, and billing mismatches.",
    solution:
      "Engineered a centralized relational web system with strict ACID transactions, role-based security, barcode scanning support, and automated PDF exports.",
    technologies: ["Node.js", "Express", "React", "PostgreSQL", "Docker", "Tailwind CSS"],
    deliverables: [
      "Role-Based Multi-User Web Application",
      "Real-Time Inventory Ledger & Reorder Alert Engine",
      "Batch Scheduling & Production Status Board",
      "Automated GST Invoice & Challan PDF Generator",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    verifiedOutcomes: [
      "100% audit accuracy between digital records and physical warehouse inventory",
      "Eliminated Excel file version conflicts across 4 departments",
      "Instant PDF invoice creation reduced billing turnaround from 30 minutes to 30 seconds",
    ],
  },
];
