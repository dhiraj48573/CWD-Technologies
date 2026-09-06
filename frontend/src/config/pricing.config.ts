export const pricingConfig = {
  paymentStructures: {
    software: [
      { percentage: 40, milestone: 'Advance' },
      { percentage: 30, milestone: 'Development Milestone' },
      { percentage: 20, milestone: 'Testing / UAT' },
      { percentage: 10, milestone: 'Final Deployment' },
    ],
    digitalMarketing: [
      { percentage: 100, milestone: 'Monthly advance payment' },
    ],
    default: [
      { percentage: 50, milestone: 'Advance' },
      { percentage: 30, milestone: 'Milestone / UAT' },
      { percentage: 20, milestone: 'Final Delivery' },
    ],
  },
  advertising: {
    note: "Client's advertising budget is separate and paid directly to platforms."
  },
  services: {
    website: {
      name: "Website Development",
      tiers: [
        { name: "Landing Page", price: 7999, description: "Ads, personal brands" },
        { name: "Starter Website", price: 12999, description: "Small businesses" },
        { name: "Business Website", price: 19999, originalPrice: 29999, isPopular: true, description: "Local businesses" },
        { name: "Professional Website", price: 29999, description: "Growing companies" },
        { name: "Corporate Website", price: 49999, isStartingPrice: true, description: "Established businesses" },
        { name: "Custom Web Application", price: 59999, isStartingPrice: true, description: "Portals/dashboards" },
      ]
    },
    software: {
      name: "Custom Software",
      tiers: [
        { name: "Basic Business Software", price: 49999, isStartingPrice: true, description: "MVP/Small business setup" },
        { name: "Management System", price: 79999, isStartingPrice: true, description: "Core workflow tracking" },
        { name: "CRM / HRMS", price: 99999, isStartingPrice: true, description: "Client/Employee management" },
        { name: "School Management", price: 129999, isStartingPrice: true, description: "Academic & fee management" },
        { name: "Hospital Management", price: 149999, isStartingPrice: true, description: "Patient & staff tracking" },
        { name: "SaaS MVP", price: 149999, isStartingPrice: true, description: "Initial subscription product" },
        { name: "ERP", price: 199999, isStartingPrice: true, description: "Full enterprise resource planning" },
        { name: "Advanced Custom Software", price: 249999, isStartingPrice: true, description: "Complex logic & integrations" },
      ]
    },
    mobile: {
      name: "Mobile App Development",
      tiers: [
        { name: "Basic Android App", price: 49999, isStartingPrice: true, description: "5-7 screens + basic UI + basic API" },
        { name: "Business App", price: 79999, isStartingPrice: true, description: "Internal or utility application" },
        { name: "Flutter / React Native", price: 99999, isStartingPrice: true, description: "Cross-platform development" },
        { name: "Booking App", price: 129999, isStartingPrice: true, description: "Appointments and schedules" },
        { name: "E-commerce App", price: 149999, isStartingPrice: true, description: "Mobile store and cart" },
        { name: "Android + iOS (Native)", price: 149999, isStartingPrice: true, description: "Platform specific native code" },
        { name: "Advanced App", price: 249999, isStartingPrice: true, description: "Complex features and backend" },
      ]
    },
    ai: {
      name: "AI Solutions",
      tiers: [
        { name: "AI API Integration", price: 9999, isStartingPrice: true, description: "Connect existing models" },
        { name: "Website AI Chatbot", price: 19999, isStartingPrice: true, description: "Gemini/OpenAI FAQ bot" },
        { name: "AI FAQ Bot", price: 24999, isStartingPrice: true, description: "Advanced conversational agent" },
        { name: "AI Automation", price: 29999, isStartingPrice: true, description: "Automate repetitive workflows" },
        { name: "Business AI Assistant", price: 39999, isStartingPrice: true, description: "Internal team assistant" },
        { name: "AI OCR", price: 49999, isStartingPrice: true, description: "Data extraction from documents" },
        { name: "AI Knowledge Base / RAG", price: 59999, isStartingPrice: true, description: "Trained on your private data" },
        { name: "Custom AI Solution", price: 79999, isStartingPrice: true, description: "Bespoke intelligent systems" },
      ]
    },
    marketing: {
      name: "Digital Marketing",
      tiers: [
        { name: "Starter", price: 4999, isMonthly: true, description: "Basic social strategy, GMB, basic SEO" },
        { name: "Growth", price: 9999, isMonthly: true, isPopular: true, description: "SEO, Meta Ads management, basic leads" },
        { name: "Professional", price: 19999, isMonthly: true, description: "SEO, Meta & Google Ads, tracking" },
        { name: "Premium", price: 29999, isMonthly: true, isStartingPrice: true, description: "Full performance marketing & funnels" },
      ]
    },
    socialMedia: {
      name: "Social Media Management",
      tiers: [
        { name: "Starter", price: 4999, isMonthly: true, description: "2 platforms, 8 posts, 4 stories" },
        { name: "Growth", price: 7999, isMonthly: true, isPopular: true, description: "FB/IG, 12 posts, 4 reels, graphics" },
        { name: "Professional", price: 14999, isMonthly: true, description: "FB/IG/LI, 16 posts, 8 reels, strategy" },
        { name: "Premium", price: 24999, isMonthly: true, description: "3-4 platforms, 20+ posts, 10+ reels" },
      ]
    },
    ecommerce: {
      name: "E-Commerce",
      tiers: [
        { name: "Basic E-commerce", price: 24999, description: "Up to 25 products, checkout, cart" },
        { name: "Business E-commerce", price: 39999, isPopular: true, description: "Advanced admin, order management" },
        { name: "Professional E-commerce", price: 59999, description: "Complex inventory, multiple gateways" },
        { name: "Custom E-commerce", price: 99999, isStartingPrice: true, description: "Bespoke storefront & logic" },
        { name: "Multi-vendor", price: 149999, isStartingPrice: true, description: "Marketplace capabilities" },
      ]
    },
    cloud: {
      name: "Cloud & Deployment",
      tiers: [
        { name: "Domain & SSL Setup", price: 499, description: "Base domain routing and security" },
        { name: "Hosting Setup", price: 999, description: "Basic server configuration" },
        { name: "Web / Vercel Deployment", price: 1499, description: "Standard frontend deployment" },
        { name: "Cloudflare / Backup Setup", price: 1499, description: "CDN and automated backups" },
        { name: "VPS / Database Deploy", price: 2999, description: "Virtual private server & DB setup" },
        { name: "Migration", price: 3999, isStartingPrice: true, description: "Server or data migration" },
        { name: "AWS / GCP / CI/CD", price: 4999, isStartingPrice: true, description: "Advanced cloud architecture" },
      ]
    },
    uiux: {
      name: "UI/UX Design",
      tiers: [
        { name: "Landing Page UI", price: 4999, description: "High-converting single page" },
        { name: "Business Website UI", price: 9999, description: "Standard corporate site design" },
        { name: "Dashboard / Complete Web UI", price: 14999, isStartingPrice: true, description: "Data-heavy or multi-page sites" },
        { name: "Mobile App UI/UX", price: 19999, isStartingPrice: true, description: "Native or cross-platform app design" },
        { name: "SaaS UI/UX", price: 29999, isStartingPrice: true, description: "Subscription software interface" },
        { name: "Design System", price: 39999, isStartingPrice: true, description: "Complete brand component library" },
      ]
    }
  },
  addons: [
    { name: "Extra website page", price: 1999 },
    { name: "Extra revision round", price: 1499 },
    { name: "Payment gateway integration", price: 4999 },
    { name: "WhatsApp Business API", price: 7999 },
    { name: "SMS gateway integration", price: 4999 },
    { name: "Email integration (transactional)", price: 3999 },
    { name: "Admin panel (add-on to static)", price: 14999 },
    { name: "SEO one-time audit", price: 4999 }
  ]
};
