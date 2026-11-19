import {
  Code,
  Smartphone,
  LayoutTemplate,
  Bot,
  Megaphone,
  Share2,
  Brush,
  Server,
  Store,
  Layers,
  Database,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";

export interface ServiceDetail {
  id: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  targetKeywords: string[];
  badge: string;
  headline: string;
  description: string;
  businessProblem: string;
  ourSolution: string;
  features: string[];
  subServices: string[];
  benefits: { title: string; desc: string }[];
  workflow: { step: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  image: string;
  pricingKey: string;
}

export const servicesConfig = [
  {
    id: "website-development",
    title: "Website Development",
    seoTitle: "Website Development Company in Haridwar | Web Design Services Uttarakhand",
    metaDescription: "Looking for a top website development company in Haridwar, Uttarakhand? CWD Technologies builds fast, modern, mobile-responsive Next.js websites that rank #1 on Google.",
    targetKeywords: [
      "Website development company in Haridwar",
      "Website designer in Haridwar",
      "Web development Uttarakhand",
      "Web design Dehradun",
      "Corporate website development India",
      "Next.js web developer Haridwar"
    ],
    badge: "High Performance Web",
    headline: "Fast, Responsive, and Conversion-Driven Websites That Build Immediate Credibility.",
    icon: LayoutTemplate,
    description:
      "From sleek business landing pages to comprehensive corporate web platforms, we engineer websites built on modern frameworks like Next.js that rank on Google and convert visitors into clients.",
    businessProblem:
      "Most agency websites look outdated, load slowly on mobile networks, fail Google Core Web Vitals, and suffer from zero search engine visibility. Business owners lose up to 60% of potential leads due to clunky navigation and confusing user journeys.",
    ourSolution:
      "We design and build bespoke, responsive web platforms engineered with clean TypeScript code, server-side rendering for instant page loads, structured SEO metadata, and clear conversion funnels tailored to your exact industry.",
    features: [
      "Custom Next.js & React Frontend Architecture",
      "Mobile-First Responsive Design for All Viewports",
      "Technical On-Page SEO & Schema.org Structured Data",
      "Sub-second Load Speeds & 95+ Core Web Vitals",
      "Seamless Lead Capture & WhatsApp Integration",
      "Custom CMS Setup (Headless or Easy Admin)",
      "SSL, Web Security & Automated Cloud Deployment",
    ],
    subServices: [
      "Corporate & Business Websites",
      "High-Converting Landing Pages",
      "Portfolio & Agency Portals",
      "Dynamic Web Portals & CMS",
      "Website Redesign & Modernization",
      "Website Speed Optimization & SEO Repair",
      "Ongoing Maintenance & Technical Support",
    ],
    benefits: [
      {
        title: "Immediate Brand Credibility",
        desc: "Make an impressive first impression with a sleek, polished digital presence.",
      },
      {
        title: "Higher Conversion Rates",
        desc: "Strategically placed CTAs and frictionless contact flows turn visitors into inquiries.",
      },
      {
        title: "Search Engine Crawlability",
        desc: "Semantic HTML, sitemaps, and optimized metadata ensure Google indexes your site properly.",
      },
    ],
    workflow: [
      { step: "Discovery & Structure", desc: "Analyzing your target market, competitors, and defining site architecture." },
      { step: "Wireframing & UI Design", desc: "Crafting clean Figma mockups and high-fidelity interactive user flows." },
      { step: "Clean Code Development", desc: "Building modular, type-safe Next.js code with Tailwind CSS styling." },
      { step: "QA, Performance & Launch", desc: "Rigorous cross-device testing, Core Web Vitals tuning, and domain SSL deployment." },
    ],
    faqs: [
      {
        question: "How long does it take to build a corporate website?",
        answer:
          "A standard 5–7 page business website typically takes 2 to 3 weeks from requirement sign-off to production launch. Larger dynamic portals may require 4 to 6 weeks.",
      },
      {
        question: "Can I edit text and images on my website myself?",
        answer:
          "Yes. We can integrate an intuitive headless CMS or an administrative dashboard that allows your team to easily update website content, services, images, and text without touching code.",
      },
      {
        question: "Will my website be mobile-friendly and fast?",
        answer:
          "Every website we engineer is built mobile-first and optimized for speed, aiming for top-tier Google Lighthouse performance scores and instant loading on 4G/5G connections.",
      },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "website",
  },
  {
    id: "software-development",
    title: "Custom Software Development",
    seoTitle: "Custom Software Development Company in Uttarakhand & India | ERP & CRM Solutions",
    metaDescription: "Bespoke custom software development company in Uttarakhand. We build secure ERPs, CRMs, management systems, and SaaS platforms tailored to your business workflow.",
    targetKeywords: [
      "Software development company in Uttarakhand",
      "Custom software development Haridwar",
      "ERP software company India",
      "CRM development Uttarakhand",
      "Business automation software",
      "Custom software developer Dehradun"
    ],
    badge: "Enterprise Grade Systems",
    headline: "Bespoke Business Software Built Around Your Actual Workflows, Not Generic Templates.",
    icon: Code,
    description:
      "We build tailor-made CRMs, ERPs, operational dashboards, HRMS, and SaaS platforms that automate manual work and give leaders clear visibility into their business data.",
    businessProblem:
      "Off-the-shelf software tools are either too generic, outrageously expensive per user seat, or force your company to alter its real-world operations to match someone else's rigid software logic.",
    ourSolution:
      "We design and build custom software architectures tailored to your precise workflow requirements. You own the code, control your database, avoid perpetual per-user licensing fees, and scale without constraints.",
    features: [
      "Custom CRM, ERP, and Inventory Management Systems",
      "Role-Based Access Control (RBAC) & Secure Authentication",
      "Real-Time Analytics Dashboards & Data Visualization",
      "Scalable RESTful & GraphQL API Architectures",
      "Automated PDF Generation, Invoicing & Report Exports",
      "Relational & Document Databases (PostgreSQL, MongoDB)",
      "Automated CI/CD Pipelines with Cloud Deployment",
    ],
    subServices: [
      "Bespoke CRM & Lead Management Systems",
      "Enterprise Resource Planning (ERP)",
      "HRMS & Staff Attendance Portals",
      "Inventory & Order Tracking Systems",
      "SaaS MVP & Production Development",
      "Custom Internal Dashboards & Admin Panels",
      "Third-Party Software Integration & API Bridges",
    ],
    benefits: [
      {
        title: "Exact Operational Fit",
        desc: "Software designed specifically to match how your business actually runs.",
      },
      {
        title: "Zero Per-Seat License Fees",
        desc: "Stop paying escalating monthly subscriptions for every single team member you hire.",
      },
      {
        title: "Complete Data Sovereignty",
        desc: "Your data stays in your private, secure cloud databases without third-party vendor lock-in.",
      },
    ],
    workflow: [
      { step: "Requirements Mapping", desc: "Detailed breakdown of user roles, operational workflows, and data relationships." },
      { step: "Schema & Architecture", desc: "Database modeling, security permission mapping, and API contract design." },
      { step: "Sprint-Based Development", desc: "Iterative development with regular milestone demos and interactive feedback." },
      { step: "UAT & Deployment", desc: "User Acceptance Testing, stress testing, cloud rollout, and staff training." },
    ],
    faqs: [
      {
        question: "Do we own the source code after development?",
        answer:
          "Yes. Upon full project completion and final payment, you own full rights to your custom software codebase and intellectual property.",
      },
      {
        question: "Can custom software integrate with our existing accounting or payment tools?",
        answer:
          "Yes. We can integrate payment gateways (Razorpay, Stripe), SMS/WhatsApp APIs, biometric scanners, and external databases seamlessly.",
      },
      {
        question: "How do you handle software maintenance and bug fixes?",
        answer:
          "We offer a complimentary post-launch support period, followed by ongoing Annual Maintenance Contracts (AMC) covering server monitoring, updates, and feature additions.",
      },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "software",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    seoTitle: "Mobile App Development Company in Haridwar Uttarakhand | Android & iOS Apps",
    metaDescription: "Expert mobile app development company in Haridwar & Uttarakhand. We engineer cross-platform Flutter and React Native apps for iOS & Android with App Store publishing.",
    targetKeywords: [
      "Mobile app development company in Haridwar",
      "App developers in Uttarakhand",
      "Android app development India",
      "Cross-platform mobile apps",
      "React Native development",
      "iOS app developer Dehradun"
    ],
    badge: "iOS & Android",
    headline: "Reliable, Intuitive Mobile Applications That Keep Your Brand in Your Customers' Hands.",
    icon: Smartphone,
    description:
      "We design and build native and cross-platform mobile applications (React Native & Flutter) that deliver fluid performance, secure user authentication, and seamless offline/online sync.",
    businessProblem:
      "Businesses often struggle with fragmented mobile solutions—apps that crash, lag on mid-range Android devices, fail Apple App Store guidelines, or cost double to maintain across iOS and Android.",
    ourSolution:
      "We develop robust cross-platform mobile apps with modern frameworks that share up to 90% of business logic while maintaining native-level fluidity, biometric authentication, push notifications, and App Store readiness.",
    features: [
      "Cross-Platform iOS & Android Apps (React Native / Flutter)",
      "Secure Authentication & Biometric Login (FaceID / Fingerprint)",
      "Push Notification Systems & In-App Messaging",
      "Interactive Booking & Scheduling Calendars",
      "In-App Purchases & Integrated Payment Gateways",
      "Offline Storage & Background Data Synchronization",
      "Complete Google Play Store & Apple App Store Publishing",
    ],
    subServices: [
      "Customer-Facing Mobile Apps",
      "Service Booking & Appointment Apps",
      "Mobile E-Commerce & Catalog Apps",
      "Internal Field-Force & Employee Apps",
      "Delivery & Tracking Mobile Solutions",
      "App Store Optimization (ASO) & Publishing",
      "Mobile App Maintenance & OS Upgrade Support",
    ],
    benefits: [
      {
        title: "Single Codebase Efficiency",
        desc: "Cut development time and maintenance overhead in half by targeting both iOS and Android simultaneously.",
      },
      {
        title: "Direct Customer Re-engagement",
        desc: "Reach clients instantly with personalized push notifications and promotions.",
      },
      {
        title: "Guaranteed Store Approval",
        desc: "We ensure compliance with Apple App Store and Google Play Developer guidelines.",
      },
    ],
    workflow: [
      { step: "User Flow & UX Wireframes", desc: "Designing intuitive mobile touch journeys and micro-interactions." },
      { step: "App UI & Prototyping", desc: "Interactive clickable prototypes for tactile user validation." },
      { step: "App & API Integration", desc: "Building the mobile front-end connected to secure cloud backends." },
      { step: "Testing & Store Submission", desc: "Testing across multiple device sizes and guiding store review approval." },
    ],
    faqs: [
      {
        question: "Should I build a native app or a cross-platform app?",
        answer:
          "For 95% of business applications (booking, e-commerce, customer portals), cross-platform with React Native or Flutter is faster to market, costs significantly less, and delivers native performance.",
      },
      {
        question: "Do you help with Apple App Store and Google Play publishing?",
        answer:
          "Yes. We manage the entire build submission, metadata preparation, privacy declaration, and app review resolution process until your app is live.",
      },
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "mobile",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions & Automation",
    seoTitle: "AI Automation & Chatbot Development Company in India | CWD Technologies",
    metaDescription: "Automate your business workflows with practical AI solutions. Grounded RAG knowledge assistants, WhatsApp AI chatbots, and document OCR data extraction.",
    targetKeywords: [
      "AI automation company in India",
      "AI chatbot development",
      "WhatsApp AI bot development",
      "RAG AI solutions India",
      "Document OCR automation",
      "AI development company Uttarakhand"
    ],
    badge: "Applied Artificial Intelligence",
    headline: "Automate Repetitive Workflows and Enhance Customer Support With Practical Business AI.",
    icon: Bot,
    description:
      "We implement grounded, reliable AI solutions: custom customer support chatbots, Retrieval-Augmented Generation (RAG) assistants trained on your company data, and workflow automations.",
    businessProblem:
      "Companies drown in repetitive customer questions, manual data entry, PDF invoice processing, and routine administrative bottlenecks. At the same time, generic AI tools hallucinate or leak sensitive company data.",
    ourSolution:
      "We engineer targeted AI integrations grounded strictly in your proprietary documentation and databases. Our solutions automate customer support, extract data with high accuracy, and connect into your existing software stack.",
    features: [
      "Custom AI Chatbots for Website & WhatsApp Support",
      "RAG-Based Knowledge Base Assistants (Grounded Answers)",
      "Intelligent Document Processing & OCR Data Extraction",
      "Workflow Automation via Webhooks & API Orchestration",
      "CRM & ERP Automation (Lead Scoring, Auto Follow-ups)",
      "LLM Integration (Gemini, Claude, OpenAI) with Rate Limiting",
      "Strict Data Privacy & Safe Guardrail Implementation",
    ],
    subServices: [
      "Website & WhatsApp AI Customer Support Bots",
      "Internal Company Knowledge Search (RAG)",
      "Invoice, Receipt & Document Data Extraction (OCR)",
      "Email & Lead Classification Automation",
      "AI-Powered Content & Social Post Assistants",
      "Automated Data Entry & System Synchronization",
      "Custom LLM API Integration into Legacy Software",
    ],
    benefits: [
      {
        title: "24/7 Instant Responses",
        desc: "Answer customer inquiries instantly at 2 AM without hiring round-the-clock support staff.",
      },
      {
        title: "Zero Hallucination Grounding",
        desc: "AI responses are restricted to your verified company catalog, policies, and pricing.",
      },
      {
        title: "Eliminate Busywork",
        desc: "Automate repetitive data copy-pasting between emails, spreadsheets, and databases.",
      },
    ],
    workflow: [
      { step: "Bottleneck Audit", desc: "Identifying the highest-ROI operational tasks ready for AI automation." },
      { step: "Knowledge Preparation", desc: "Formatting and embedding your company documents and FAQs." },
      { step: "Model & Guardrail Setup", desc: "Configuring the AI model, safety filters, and response parameters." },
      { step: "Integration & Monitoring", desc: "Connecting the AI to your site or CRM, with logging and fallback routing." },
    ],
    faqs: [
      {
        question: "Will the AI chatbot say wrong or embarrassing things to clients?",
        answer:
          "No. We use Retrieval-Augmented Generation (RAG) with strict system guardrails. The AI is instructed to only answer based on your uploaded documentation and gracefully escalate to a human when uncertain.",
      },
      {
        question: "How are monthly AI API costs handled?",
        answer:
          "API usage fees (e.g. Gemini, OpenAI) are billed directly by the provider according to your actual consumption, keeping ongoing running costs transparent and low (often just a few dollars per month for moderate traffic).",
      },
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "ai",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & SEO",
    seoTitle: "Digital Marketing Agency & SEO Services in Haridwar, Uttarakhand",
    metaDescription: "Dominate local Google search with #1 SEO rankings and high-converting Google & Meta Ad campaigns. Leading digital marketing agency in Haridwar & Uttarakhand.",
    targetKeywords: [
      "Digital marketing agency in Haridwar",
      "SEO services in Haridwar",
      "Local SEO Uttarakhand",
      "Google Ads management Haridwar",
      "Lead generation agency Uttarakhand",
      "Google Business Profile optimization Haridwar"
    ],
    badge: "Performance & Visibility",
    headline: "Targeted Search Optimization and Paid Advertising Engineered for Real Revenue.",
    icon: Megaphone,
    description:
      "We provide data-driven SEO, Google Business Profile optimization, and high-converting Meta & Google Ad campaigns tailored for businesses in Haridwar, Uttarakhand, across India, and globally.",
    businessProblem:
      "Most businesses waste thousands on vanity metrics (impressions, likes) from agencies that never track whether ad spend actually turns into qualified phone calls, walk-ins, or paying customers.",
    ourSolution:
      "We construct transparent, conversion-focused growth funnels. Every campaign connects high-intent search keywords and targeted social audiences directly to fast, optimized landing pages with verified lead tracking.",
    features: [
      "Technical, On-Page & Local Search Engine Optimization (SEO)",
      "Google Business Profile (GMB) Local Map Pack Ranking",
      "High-Intent Google Search Ads (PPC) Management",
      "Meta Ads (Facebook & Instagram) Targeted Lead Funnels",
      "Conversion Rate Optimization (CRO) & A/B Landing Page Testing",
      "Google Analytics 4 (GA4) & Meta Pixel Event Tracking",
      "Transparent Weekly & Monthly ROI Performance Reporting",
    ],
    subServices: [
      "Local SEO for Haridwar, Dehradun & Uttarakhand",
      "National & International E-Commerce SEO",
      "Google Search & Performance Max Ad Campaigns",
      "Meta Lead Generation Campaigns (FB & IG)",
      "Google Business Profile Setup & Optimization",
      "Landing Page Copywriting & Conversion Tuning",
      "Website Analytics & Conversion Tracking Setup",
    ],
    benefits: [
      {
        title: "High-Intent Local Customers",
        desc: "Dominate local searches when prospective buyers look for your exact services in your city.",
      },
      {
        title: "Transparent Ad Spend",
        desc: "You pay your ad budget directly to Google/Meta with zero hidden agency markups.",
      },
      {
        title: "Measurable Lead Tracking",
        desc: "Know exactly how many calls, WhatsApp chats, and form submissions your budget generated.",
      },
    ],
    workflow: [
      { step: "Keyword & Competitor Audit", desc: "Analyzing search volume, competitor ad strategies, and cost-per-click." },
      { step: "Funnel & Creative Setup", desc: "Designing ad copy, high-converting creative graphics, and dedicated landing pages." },
      { step: "Campaign Launch & Tracking", desc: "Configuring conversion pixels, launching campaigns, and establishing baseline metrics." },
      { step: "Weekly Optimization", desc: "Pruning negative keywords, testing ad variations, and lowering cost per acquisition." },
    ],
    faqs: [
      {
        question: "Is your ad budget included in the management fee?",
        answer:
          "No. Your advertising budget is paid directly to Google or Meta from your own ad account. Our fee covers strategy, creative development, campaign setup, continuous optimization, and reporting.",
      },
      {
        question: "How long does SEO take to produce results?",
        answer:
          "Local SEO improvements (Google Business Profile, local citations) often show measurable progress within 4 to 8 weeks. Competitive organic rankings generally take 3 to 6 months of consistent technical and content optimization.",
      },
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "marketing",
  },
  {
    id: "social-media",
    title: "Social Media Management",
    seoTitle: "Social Media Marketing & Brand Management Agency | CWD Technologies",
    metaDescription: "Transform your social media presence on Instagram, Facebook & LinkedIn. Strategic content calendars, branded creatives, Reels editing, and community growth.",
    targetKeywords: [
      "Social media agency in Haridwar",
      "Instagram marketing Uttarakhand",
      "Social media management India",
      "Creative branding agency",
      "Reels video editing for business"
    ],
    badge: "Brand & Engagement",
    headline: "Professional Social Media Presence That Builds Trust and Commands Market Authority.",
    icon: Share2,
    description:
      "Strategic content calendars, branded graphic design, engaging short-form video reels, and community interaction across Instagram, Facebook, and LinkedIn.",
    businessProblem:
      "Business owners are too busy running daily operations to maintain consistent social channels. Abandoned profiles with low-resolution graphics or zero updates make potential customers wonder if the business is still active.",
    ourSolution:
      "We take complete ownership of your brand's social identity. From strategic monthly content calendars to polished design assets and short-form video editing, we keep your business consistently top-of-mind.",
    features: [
      "Monthly Strategic Content Calendar & Theme Planning",
      "Branded High-Resolution Graphic Post Design",
      "Short-Form Video (Reels / Shorts) Editing & Captioning",
      "Hashtag Strategy & Algorithmic Optimization",
      "Active Direct Message (DM) & Comment Monitoring",
      "LinkedIn Company Page Positioning for B2B Authority",
      "Monthly Growth, Reach & Engagement Analytics",
    ],
    subServices: [
      "Instagram Page Management & Aesthetic Curation",
      "Facebook Business Page Growth & Community Engagement",
      "LinkedIn Corporate Branding & Executive Thought Leadership",
      "Reels & Short-Form Video Production Editing",
      "Custom Graphic Design for Announcements & Festivals",
      "Bio Optimization & Link-in-Bio Funnel Setup",
      "Reputation Management & Review Engagement",
    ],
    benefits: [
      {
        title: "Consistent Professionalism",
        desc: "Ensure anyone who visits your social channels sees a thriving, modern, trustworthy enterprise.",
      },
      {
        title: "Hands-Off Content Flow",
        desc: "Save hours each week while our creative team handles planning, creation, and scheduling.",
      },
      {
        title: "Audience Trust & Warmth",
        desc: "Turn passive social followers into warm leads primed to inquire about your services.",
      },
    ],
    workflow: [
      { step: "Brand Aesthetic Alignment", desc: "Establishing typography, brand colors, voice tone, and visual guidelines." },
      { step: "Monthly Calendar Draft", desc: "Planning 30 days of posts, reels, and stories for your review and approval." },
      { step: "Production & Asset Creation", desc: "Designing visual graphics, compiling captions, and formatting reels." },
      { step: "Scheduling & Analytics", desc: "Publishing at peak engagement hours and reviewing monthly reach performance." },
    ],
    faqs: [
      {
        question: "Do I have to provide photos and videos?",
        answer:
          "You can share raw smartphone photos or footage of your work, team, or premises, which our editors refine into polished branded assets. We also utilize high-end commercial graphics where appropriate.",
      },
      {
        question: "Do I get to review posts before they go live?",
        answer:
          "Absolutely. We share the complete content calendar for the upcoming month in advance so your team can review and approve every post.",
      },
    ],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "socialMedia",
  },
  {
    id: "e-commerce",
    title: "E-Commerce Solutions",
    seoTitle: "E-Commerce Website Development Company | Online Store & UPI Checkout India",
    metaDescription: "Launch a high-converting online store with seamless UPI & card checkout, automated inventory sync, and Shiprocket courier integration. Top e-commerce developers in India.",
    targetKeywords: [
      "E-commerce website development company",
      "Online store development India",
      "D2C ecommerce developer",
      "Razorpay integration developer",
      "Next.js ecommerce store",
      "Shopify store developer Uttarakhand"
    ],
    badge: "Digital Retail & D2C",
    headline: "Fast, Secure E-Commerce Stores Designed for High Order Conversions and Painless Inventory Management.",
    icon: Store,
    description:
      "We build conversion-focused online stores with frictionless checkout flows, secure payment gateways (Razorpay, UPI, Stripe), automated shipping integration, and real-time inventory management.",
    businessProblem:
      "Slow loading times, complicated multi-step checkouts, and lack of trusted Indian payment options (UPI / QR / NetBanking) cause over 70% of e-commerce shoppers to abandon their carts without purchasing.",
    ourSolution:
      "We build high-performance e-commerce experiences engineered for speed and conversion. With one-page checkouts, instant UPI payments, automated shipping notifications, and clean product catalogues, we help you sell with ease.",
    features: [
      "Custom Storefronts & Headless Next.js Commerce",
      "Seamless Razorpay, UPI, PhonePe & Stripe Payment Integration",
      "Real-Time Inventory, Order & Customer Management",
      "One-Page Frictionless Mobile Checkout Flows",
      "Automated WhatsApp & Email Order Confirmation Notifications",
      "Discount Engines, Coupon Codes & Abandoned Cart Recovery",
      "Logistics & Courier Integration (Shiprocket / Delhivery)",
    ],
    subServices: [
      "D2C Brand E-Commerce Stores",
      "Custom Shopify & WooCommerce Store Development",
      "Wholesale / B2B Ordering Portals",
      "Digital Product & Subscription Selling Systems",
      "Multi-Category Product Catalogs with Advanced Filtering",
      "Payment Gateway Integration & UPI Optimization",
      "E-Commerce SEO & Structured Product Schema",
    ],
    benefits: [
      {
        title: "Frictionless UPI & Card Checkout",
        desc: "Maximize completed orders with seamless mobile payment flows.",
      },
      {
        title: "Automated Fulfillment Logistics",
        desc: "Orders sync directly with courier services for instant shipping label generation.",
      },
      {
        title: "Sub-Second Product Page Speed",
        desc: "Instant loading times keep impulse buyers engaged and buying.",
      },
    ],
    workflow: [
      { step: "Catalog & Payment Architecture", desc: "Structuring categories, SKU rules, shipping zones, and payment accounts." },
      { step: "Conversion-Centric UI Design", desc: "Designing high-converting product pages, trust badges, and quick-buy buttons." },
      { step: "Store Development & Gateways", desc: "Coding the store, testing gateway webhooks, and syncing inventory logic." },
      { step: "End-to-End Test Transactions", desc: "Live transaction testing, courier label verification, and security lockdown." },
    ],
    faqs: [
      {
        question: "Can I manage products and prices easily without coding?",
        answer:
          "Yes. You receive an intuitive administrative dashboard where you can add products, update prices, manage stock, and track orders with a few clicks.",
      },
      {
        question: "Which payment gateways do you support?",
        answer:
          "We support Razorpay, Cashfree, PhonePe, Paytm, Stripe, PayPal, and offline Cash on Delivery (COD) with OTP verification.",
      },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "ecommerce",
  },
  {
    id: "cloud-deployment",
    title: "Cloud & Deployment",
    seoTitle: "Cloud Deployment, Hostinger DNS & DevOps Services | CWD Technologies",
    metaDescription: "Reliable cloud infrastructure setup, Vercel edge deployment, Hostinger DNS configuration, and automated CI/CD pipelines by CWD Technologies.",
    targetKeywords: [
      "Cloud deployment services India",
      "Hostinger DNS setup expert",
      "Vercel Next.js deployment support",
      "DevOps consulting Haridwar",
      "Domain and SSL setup service",
      "Cloud server migration Uttarakhand"
    ],
    badge: "Infrastructure & DevOps",
    headline: "Fast, Resilient Cloud Infrastructure, Automated Backups, and Reliable Zero-Downtime Deployments.",
    icon: Server,
    description:
      "We handle domain DNS management, Hostinger and Vercel cloud deployments, AWS/GCP architecture, SSL certificate provisioning, and automated CI/CD deployment pipelines.",
    businessProblem:
      "Businesses often struggle with broken DNS configurations, downtime during traffic spikes, missing SSL certificates triggering security warnings, or accidental data loss due to lack of automated backups.",
    ourSolution:
      "We configure clean, enterprise-grade cloud environments on modern platforms like Vercel, Hostinger, AWS, and Cloudflare. We set up automated continuous deployment pipelines and robust daily backup procedures.",
    features: [
      "Hostinger & Custom Domain DNS Configuration",
      "Vercel Edge Network Deployment with Global CDN",
      "Automated Free SSL / TLS HTTPS Provisioning",
      "PostgreSQL, MySQL & MongoDB Cloud Database Setup",
      "CI/CD Pipelines Connected Directly to GitHub",
      "Cloudflare CDN, DDoS Protection & Web Application Firewall",
      "Automated Daily Database Backups & Health Monitoring",
    ],
    subServices: [
      "Custom Domain & DNS Setup (Hostinger, GoDaddy, Cloudflare)",
      "Vercel Production Deployment & Environment Management",
      "Hostinger Cloud & VPS Server Configuration",
      "AWS / Google Cloud Architecture Provisioning",
      "Website & Database Migration with Zero Data Loss",
      "Security Audits, SSL Certificates & HTTP/3 Setup",
      "Ongoing Server Health Monitoring & Maintenance",
    ],
    benefits: [
      {
        title: "99.9% Uptime & Global Speed",
        desc: "Edge networks deliver your website from the server closest to each visitor worldwide.",
      },
      {
        title: "Zero-Downtime Updates",
        desc: "Push code updates seamlessly without ever taking your live website offline.",
      },
      {
        title: "Peace of Mind Security",
        desc: "Automated SSL, DDoS shielding, and daily backups ensure your digital assets are safe.",
      },
    ],
    workflow: [
      { step: "Infrastructure Assessment", desc: "Evaluating application workload, traffic expectations, and redundancy needs." },
      { step: "DNS & Environment Provisioning", desc: "Configuring nameservers, records (A, CNAME, TXT), and secure environment variables." },
      { step: "CI/CD & Cloud Pipeline", desc: "Connecting GitHub repositories for automated production and preview deployments." },
      { step: "Security Lockdown & Verification", desc: "Enforcing HTTPS, testing CDN propagation, and setting automated alerts." },
    ],
    faqs: [
      {
        question: "Can I connect my Hostinger-registered domain to my Vercel project?",
        answer:
          "Yes. We configure the exact A and CNAME DNS records in your Hostinger control panel pointing to Vercel's global edge network, with full SSL verification and automatic www redirects.",
      },
      {
        question: "Will configuring DNS disrupt my existing business email?",
        answer:
          "No. We leave your existing MX and SPF email records completely intact so your corporate email continues functioning without interruption.",
      },
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "cloud",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    seoTitle: "UI/UX Design Agency | Figma Mobile App & Web Design | CWD Technologies",
    metaDescription: "Modern UI/UX design agency creating clickable Figma prototypes, web design, and SaaS product design systems inspired by Linear, Vercel & Stripe aesthetics.",
    targetKeywords: [
      "UI UX design agency India",
      "Figma website designer Haridwar",
      "Mobile app UI UX designer Uttarakhand",
      "SaaS product designer",
      "Web design agency Uttarakhand",
      "Design systems and prototyping"
    ],
    badge: "Design Systems & Product Design",
    headline: "Clean, Intentional User Interfaces That Enhance Usability and Drive Business Conversions.",
    icon: Brush,
    description:
      "We design modern, accessible user interfaces, interactive Figma prototypes, and comprehensive design systems inspired by the clean aesthetics of Linear, Vercel, and Stripe.",
    businessProblem:
      "Cluttered interfaces, poor mobile ergonomics, inconsistent typography, and confusing visual hierarchies frustrate users and cause them to bounce before completing their goals.",
    ourSolution:
      "We apply human-centered design principles to build sleek, accessible UI/UX workflows. From wireframes to clickable high-fidelity prototypes and complete design systems, our work bridges business objectives with effortless user experiences.",
    features: [
      "Full Product UI/UX Design for Web, Desktop & Mobile",
      "Clean Information Architecture & Frictionless User Journeys",
      "Interactive, Clickable Prototypes in Figma",
      "Comprehensive Component Design Systems & Style Guides",
      "Complex Dashboard & Analytics Data Interface Design",
      "WCAG Accessibility Compliance & High Contrast Readability",
      "Developer-Ready Handoff with Spacing & Token Specifications",
    ],
    subServices: [
      "Website & Landing Page UI/UX",
      "Mobile App UI/UX (iOS & Android)",
      "SaaS Platform & Web App Interface Design",
      "Administrative Dashboard & Data Viz Design",
      "Figma Wireframing & Clickable Prototypes",
      "Design System & Component Token Creation",
      "UI/UX Usability Audits & Heuristic Evaluation",
    ],
    benefits: [
      {
        title: "Intuitive Simplicity",
        desc: "Users immediately understand where to click, how to navigate, and how to take action.",
      },
      {
        title: "Developer Efficiency",
        desc: "Engineers receive pixel-perfect components with exact tokens, drastically reducing build time.",
      },
      {
        title: "Premium Brand Equity",
        desc: "Distinguish your company from competitors with an unmistakable visual polish.",
      },
    ],
    workflow: [
      { step: "User & Competitor Discovery", desc: "Understanding customer tasks, expectations, and competitive aesthetic benchmarks." },
      { step: "Low-Fidelity Wireframes", desc: "Mapping layout structure, content prioritization, and core user pathways." },
      { step: "High-Fidelity Visual Design", desc: "Applying color harmony, typographic hierarchy, and custom component tokens." },
      { step: "Interactive Prototype & Handoff", desc: "Building clickable flows and packaging tokens for seamless frontend engineering." },
    ],
    faqs: [
      {
        question: "Which tools do you use for design?",
        answer:
          "We use Figma as our primary design tool, providing you with interactive prototypes and live inspectable assets.",
      },
      {
        question: "Can you redesign an existing live website or application?",
        answer:
          "Yes. We conduct a thorough UI/UX audit of your existing platform, identify friction points and drop-offs, and engineer a modern, high-converting redesign.",
      },
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "uiux",
  },
];
