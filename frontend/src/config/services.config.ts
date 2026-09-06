import {
  Code,
  Smartphone,
  LayoutTemplate,
  Bot,
  Megaphone,
  Share2,
  Brush,
  Server,
  Building2,
  Store
} from "lucide-react";

export const servicesConfig = [
  {
    id: "website-development",
    title: "Website Development",
    icon: LayoutTemplate,
    description: "Business Websites, Corporate Websites, Portfolio Websites, Landing Pages, CMS, and Dynamic Websites.",
    longDescription: "We craft visually stunning, highly functional, and SEO-optimized websites that serve as the digital storefront for your business. Whether you need a simple landing page or a complex dynamic portal with a custom CMS, our development team ensures your website is responsive, fast, and built to convert visitors into loyal customers.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "CMS Websites",
      "Dynamic Websites",
      "Custom Web Applications"
    ],
    workflow: [
      { step: "Discovery & Planning", desc: "Understanding your business goals, target audience, and website requirements." },
      { step: "UI/UX Design", desc: "Creating wireframes and high-fidelity mockups for your approval." },
      { step: "Development", desc: "Writing clean, optimized code to bring the designs to life." },
      { step: "Testing & Launch", desc: "Rigorous QA testing across devices followed by a smooth deployment." }
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "website"
  },
  {
    id: "software-development",
    title: "Custom Software Development",
    icon: Code,
    description: "We build software according to your business workflow instead of forcing your business to adapt to generic software.",
    longDescription: "Off-the-shelf software rarely fits a growing business perfectly. We specialize in building bespoke software solutions including ERPs, CRMs, and custom internal tools that map exactly to your unique workflows. Our secure, scalable architectures ensure your software grows alongside your enterprise.",
    features: [
      "CRM & ERP Systems",
      "HRMS & Management Systems",
      "SaaS Platforms",
      "Enterprise Applications"
    ],
    workflow: [
      { step: "Requirements Gathering", desc: "Deep dive into your operational workflows and pain points." },
      { step: "Architecture Design", desc: "Designing scalable database structures and system architecture." },
      { step: "Agile Development", desc: "Iterative development with regular progress demonstrations." },
      { step: "Deployment & Training", desc: "Secure cloud deployment and onboarding for your team." }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "software"
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Android, iOS, and Cross-Platform Applications for your business, customers, and operations.",
    longDescription: "Engage your customers wherever they are with a powerful mobile presence. We develop both native (iOS and Android) and cross-platform applications (Flutter/React Native) that deliver seamless performance, intuitive user interfaces, and robust backend integrations.",
    features: [
      "Native & Cross-Platform",
      "E-Commerce Apps",
      "Utility & Booking Apps",
      "API Integrations",
      "App Store Deployment"
    ],
    workflow: [
      { step: "Strategy & Prototyping", desc: "Defining the app core features and interactive prototyping." },
      { step: "Design & UX", desc: "Crafting a user-friendly and engaging mobile interface." },
      { step: "Development & APIs", desc: "Building the mobile frontend and robust backend APIs." },
      { step: "App Store Launch", desc: "Publishing and optimizing your app on Google Play and Apple App Store." }
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "mobile"
  },
  {
    id: "ai-solutions",
    title: "AI Solutions & Automation",
    icon: Bot,
    description: "AI Chatbots, Content Generation, Document Processing, OCR, and AI Automation to scale your operations.",
    longDescription: "Leverage the power of Artificial Intelligence to automate repetitive tasks, enhance customer support, and extract valuable insights from your data. From intelligent RAG (Retrieval-Augmented Generation) chatbots trained on your company data to advanced workflow automation, we bring cutting-edge AI to your operations.",
    features: [
      "AI Assistants",
      "Knowledge Base Systems",
      "Generative AI",
      "AI-powered business tools"
    ],
    workflow: [
      { step: "AI Feasibility Analysis", desc: "Identifying bottlenecks where AI can drive maximum ROI." },
      { step: "Data Preparation", desc: "Cleaning and structuring your data to train or ground AI models." },
      { step: "Model Integration", desc: "Integrating LLMs (OpenAI, Anthropic) or custom machine learning models." },
      { step: "Testing & Refinement", desc: "Tuning model outputs for accuracy, safety, and performance." }
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "ai"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    description: "Facebook & Instagram Marketing, Google Ads, Lead Generation, and Performance Marketing.",
    longDescription: "Building a great product is only half the battle. Our data-driven digital marketing strategies ensure your brand reaches the right audience. We manage high-converting ad campaigns across Google and Meta, optimized constantly to maximize your Return on Ad Spend (ROAS).",
    features: [
      "Meta Ads Management",
      "Lead Generation",
      "Conversion Campaigns",
      "SEO",
      "Performance Marketing"
    ],
    workflow: [
      { step: "Market Research", desc: "Analyzing your competitors and defining your target audience." },
      { step: "Campaign Strategy", desc: "Creating targeted ad funnels and selecting the right platforms." },
      { step: "Creative & Execution", desc: "Designing ad creatives and launching the campaigns." },
      { step: "Optimization & Scaling", desc: "Monitoring analytics daily to lower acquisition costs and scale winning ads." }
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "marketing"
  },
  {
    id: "social-media",
    title: "Social Media Management",
    icon: Share2,
    description: "Complete management of Instagram, Facebook, LinkedIn. Content planning, creation, and community engagement.",
    longDescription: "Your social media profile is your modern-day business card. We take complete ownership of your social presence, planning strategic content calendars, designing beautiful graphics, editing engaging Reels, and interacting with your community to build lasting brand loyalty.",
    features: [
      "Content Strategy",
      "Reels & Captions",
      "Graphic Design",
      "Community Engagement",
      "Monthly Reporting"
    ],
    workflow: [
      { step: "Brand Voice Definition", desc: "Establishing the tone and visual guidelines for your brand." },
      { step: "Content Calendar", desc: "Planning a month's worth of strategic content in advance." },
      { step: "Creation & Approval", desc: "Producing graphics, videos, and captions for your review." },
      { step: "Publishing & Engagement", desc: "Scheduling posts and actively managing your community comments." }
    ],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "socialMedia"
  },
  {
    id: "e-commerce",
    title: "E-Commerce Solutions",
    icon: Store,
    description: "Complete E-Commerce Websites, Product Catalogs, Payment Gateways, and Order Management.",
    longDescription: "Start selling online with a robust e-commerce platform. Whether you need a Shopify setup or a fully custom multi-vendor marketplace, we build secure, high-performance stores with integrated payment gateways, shipping logistics, and seamless checkout experiences.",
    features: [
      "Payment Gateway Integration",
      "Shopping Cart",
      "Inventory Management",
      "Coupons & Analytics"
    ],
    workflow: [
      { step: "Platform Selection", desc: "Choosing between Shopify, WooCommerce, or Custom based on needs." },
      { step: "Store Design", desc: "Creating a conversion-optimized storefront layout." },
      { step: "Product & Payment Setup", desc: "Uploading catalogs and integrating secure payment gateways." },
      { step: "Logistics Integration", desc: "Connecting shipping partners and order management systems." }
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "ecommerce"
  },
  {
    id: "cloud-deployment",
    title: "Cloud & Deployment",
    icon: Server,
    description: "Domain Setup, Hosting, Cloud Deployment, SSL, CI/CD, Backup, and Security Configuration.",
    longDescription: "Ensure your digital assets are fast, secure, and always online. We provide professional cloud deployment architecture using AWS, GCP, or Vercel. From basic hosting to complex auto-scaling production environments, we handle the infrastructure so you don't have to.",
    features: [
      "AWS & Google Cloud",
      "Vercel & Cloudflare",
      "Database Deployment",
      "Server Monitoring"
    ],
    workflow: [
      { step: "Architecture Planning", desc: "Designing a robust server architecture based on traffic needs." },
      { step: "Environment Setup", desc: "Provisioning servers, databases, and secure networks." },
      { step: "CI/CD Pipeline", desc: "Setting up automated continuous integration and deployment." },
      { step: "Monitoring & Maintenance", desc: "Ongoing server health checks, backups, and security patches." }
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "cloud"
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    icon: Brush,
    description: "We design experiences that are easy to use, visually strong and conversion-focused.",
    longDescription: "Great design is more than just aesthetics; it's about solving problems and guiding users effortlessly. Our UI/UX design process ensures your product is intuitive, accessible, and aligned with modern design patterns. We deliver comprehensive design systems ready for development handoff.",
    features: [
      "Website & App UI/UX",
      "Dashboard Design",
      "Wireframes & Prototypes",
      "Design Systems"
    ],
    workflow: [
      { step: "User Research", desc: "Understanding user behavior, needs, and competitive landscape." },
      { step: "Wireframing", desc: "Creating structural blueprints for the application layout." },
      { step: "Visual Design", desc: "Applying colors, typography, and aesthetics to high-fidelity mockups." },
      { step: "Prototyping & Handoff", desc: "Building interactive prototypes and exporting assets for developers." }
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
    pricingKey: "uiux"
  }
];
