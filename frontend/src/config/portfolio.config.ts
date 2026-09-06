export interface PortfolioProject {
  id: string;
  title: string;
  clientName: string;
  category: string; // Used for filtering (e.g., 'Web', 'Software', 'AI', 'Mobile', 'Marketing')
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: { metric: string; description: string }[];
  technology: string[];
  image: string;
}

export const portfolioConfig: PortfolioProject[] = [
  {
    id: "luxe-ecommerce",
    title: "Luxe Fashion E-Commerce Platform",
    clientName: "Luxe Apparel",
    category: "Web",
    industry: "Retail & Fashion",
    description: "A high-performance e-commerce platform with complex inventory syncing, custom payment gateways, and lightning-fast page loads.",
    challenge: "The client was experiencing a 40% cart abandonment rate due to slow loading times on their legacy WordPress site and poor mobile experience.",
    solution: "We engineered a Headless E-commerce solution using Next.js and Shopify Plus. We implemented server-side rendering for instant page loads and built a highly optimized mobile-first checkout flow.",
    results: [
      { metric: "65%", description: "Increase in Mobile Conversions" },
      { metric: "< 1.2s", description: "Average Page Load Time" },
      { metric: "300%", description: "Increase in Organic Traffic" }
    ],
    technology: ["Next.js", "React", "Shopify Storefront API", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "health-erp",
    title: "Centralized Hospital Management System",
    clientName: "MedCare Hospitals",
    category: "Software",
    industry: "Healthcare",
    description: "A comprehensive ERP system for a multi-specialty hospital to manage patient records, appointments, and billing.",
    challenge: "MedCare was using decentralized, paper-based systems and fragmented software, leading to lost patient history, billing errors, and long waiting times.",
    solution: "We built a centralized, HIPAA-compliant web application. It features role-based dashboards for doctors, receptionists, and patients, integrating real-time appointment scheduling and automated billing.",
    results: [
      { metric: "40%", description: "Reduction in Patient Wait Times" },
      { metric: "Zero", description: "Data Loss Incidents" },
      { metric: "2x", description: "Faster Billing Process" }
    ],
    technology: ["React", "Node.js", "PostgreSQL", "Express", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "support-ai",
    title: "AI-Powered Customer Support Agent",
    clientName: "TechFlow SaaS",
    category: "AI",
    industry: "SaaS",
    description: "An intelligent chatbot that processes customer queries and automates level-1 support using Generative AI.",
    challenge: "The support team was overwhelmed with repetitive queries, resulting in a 24-hour average response time and frustrated customers.",
    solution: "We deployed a custom LLM fine-tuned on their internal knowledge base. The AI agent seamlessly integrates into their website, resolving level-1 queries instantly and escalating complex issues to human agents with summarized context.",
    results: [
      { metric: "75%", description: "Queries Resolved Automatically" },
      { metric: "< 5s", description: "Average Response Time" },
      { metric: "30%", description: "Reduction in Support Costs" }
    ],
    technology: ["Python", "FastAPI", "OpenAI API", "Pinecone", "React"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "fitness-app",
    title: "FitTrack Mobile Application",
    clientName: "FitLife Global",
    category: "Mobile",
    industry: "Health & Fitness",
    description: "A cross-platform mobile application providing personalized workout plans, diet tracking, and live coaching.",
    challenge: "FitLife needed a unified mobile experience to replace two separate, poorly performing iOS and Android apps that had low user retention.",
    solution: "We re-architected the app from the ground up using React Native, ensuring feature parity across platforms. We integrated HealthKit/Google Fit APIs and implemented a gamified achievement system.",
    results: [
      { metric: "4.8★", description: "App Store Rating" },
      { metric: "200k+", description: "Active Monthly Users" },
      { metric: "3x", description: "Increase in User Retention" }
    ],
    technology: ["React Native", "TypeScript", "Firebase", "Node.js"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "fintech-dashboard",
    title: "Investment Analytics Dashboard",
    clientName: "Alpha Capital",
    category: "Software",
    industry: "FinTech",
    description: "A secure, real-time analytics dashboard for wealth managers to track client portfolios and market trends.",
    challenge: "Wealth managers were spending hours manually compiling reports from various legacy data sources using Excel.",
    solution: "We built a highly secure, real-time dashboard that aggregates data from 5 different financial APIs. We implemented interactive D3.js charts and automated PDF report generation.",
    results: [
      { metric: "15hrs", description: "Saved Per Week Per Manager" },
      { metric: "100%", description: "Data Accuracy" },
      { metric: "Real-time", description: "Data Synchronization" }
    ],
    technology: ["Next.js", "D3.js", "Go", "Redis", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "realestate-marketing",
    title: "Lead Generation for Luxury Real Estate",
    clientName: "Skyline Properties",
    category: "Marketing",
    industry: "Real Estate",
    description: "A high-performing Meta Ads and Google Ads campaign targeted at high-net-worth individuals for luxury properties.",
    challenge: "Skyline was spending thousands on traditional marketing with an extremely high Cost Per Acquisition (CPA) and low lead quality.",
    solution: "We designed a highly targeted omnichannel digital marketing strategy. We created interactive landing pages and ran hyper-local Meta and Google search campaigns optimized for lead quality rather than volume.",
    results: [
      { metric: "60%", description: "Reduction in CPA" },
      { metric: "4x", description: "Increase in Lead Quality Score" },
      { metric: "$12M+", description: "In Property Sales Driven" }
    ],
    technology: ["Meta Ads", "Google Ads", "Webflow", "HubSpot CRM"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
  }
];
