const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cwdtechnologies.com";

export const siteConfig = {
  companyName: "CWD Technologies",
  brandName: "CWD Technologies",
  url: siteUrl,
  ogImage: "/og-image.png",
  fallbackOgImage: "/cwd-techno-logo.jpeg",
  tagline: "Building Digital Experiences. Engineering Business Growth.",
  primaryPositioning: "Your Technology & Digital Growth Partner",
  description:
    "CWD Technologies provides website development, custom software, CRM, ERP, HRMS, AI-powered applications and digital solutions for businesses in Uttarakhand and across India.",
  founder: {
    name: "Dhiraj Kumar Singh",
    designation: "Founder & Lead Architect",
  },
  contact: {
    location: "Haridwar, Uttarakhand, India",
    address: "Haridwar, Uttarakhand 249401, India",
    phone: "+91 9259534648",
    rawPhone: "919259534648",
    whatsapp: "9259534648",
    whatsappDefaultMessage:
      "Hello CWD Technologies, I am interested in your services. I would like to discuss my project requirements.",
    email: "codewithdhiru07@gmail.com",
    website: siteUrl,
    customDomain: "https://cwdtechnologies.com",
  },
  serviceAreas: [
    "Haridwar",
    "Dehradun",
    "Rishikesh",
    "Roorkee",
    "Uttarakhand",
    "India",
  ],
  socials: {
    github: "https://github.com/dhiraj48573/CWD-Technologies",
    linkedin: "",
    instagram: "",
    facebook: "",
  },
  paymentDetails: {
    bankName: "",
    accountName: "",
    accountNumber: "",
    ifscCode: "",
    upiId: "",
  },
  brand: {
    logo: "/cwd-techno-logo.jpeg",
    colors: {
      primaryNavy: "#0B132B",
      deepBlue: "#1C2541",
      electricBlue: "#3A86FF",
      cyanAccent: "#00F5D4",
    },
  },
  seo: {
    title: "CWD Technologies | Website & Software Development Company",
    titleTemplate: "%s | CWD Technologies",
    description:
      "CWD Technologies provides website development, custom software, CRM, ERP, HRMS, AI-powered applications and digital solutions for businesses in Uttarakhand and across India.",
    keywords: [
      "Website development company in Haridwar",
      "Web design agency Haridwar",
      "Software development company in Haridwar",
      "Software company in Uttarakhand",
      "Website developer in Dehradun",
      "CRM software development",
      "ERP software development",
      "HRMS development company",
      "AI application development company in India",
      "Digital marketing agency in Haridwar",
      "SEO services in Haridwar",
      "Mobile app development company Uttarakhand",
      "Next.js web development company India",
      "CWD Technologies",
      "Dhiraj Kumar Singh CWD",
    ],
  },
};
