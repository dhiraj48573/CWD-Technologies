import {
  Stethoscope,
  GraduationCap,
  Sparkles,
  Dumbbell,
  Hotel,
  ShoppingBag,
  Building,
  Rocket,
  Briefcase,
  Store,
} from "lucide-react";

export interface IndustryItem {
  id: string;
  name: string;
  shortDesc: string;
  solutions: string[];
  icon: any;
  featuredTech: string[];
}

export const industriesConfig: IndustryItem[] = [
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    shortDesc: "Patient appointment scheduling, digital medical records, and HIPAA-compliant clinic portals.",
    solutions: [
      "Online doctor appointment booking",
      "Digital prescription & patient history",
      "Automated WhatsApp appointment reminders",
      "Telemedicine & consultation interfaces",
    ],
    icon: Stethoscope,
    featuredTech: ["Next.js", "PostgreSQL", "WhatsApp API"],
  },
  {
    id: "education",
    name: "Education & Coaching Institutes",
    shortDesc: "Student admission portals, test series platforms, fee management, and course discovery sites.",
    solutions: [
      "Online course catalogs & admissions",
      "Automated fee collection & receipts",
      "Online quiz & student test portals",
      "Local SEO for regional coaching centers",
    ],
    icon: GraduationCap,
    featuredTech: ["React", "Razorpay", "Node.js"],
  },
  {
    id: "salons-beauty",
    name: "Salons & Beauty Businesses",
    shortDesc: "Stylist booking calendars, service menus, package discounts, and customer loyalty workflows.",
    solutions: [
      "Slot-based appointment booking",
      "Visual rate card & bridal portfolios",
      "Automated SMS/WhatsApp reminders",
      "Instagram aesthetic & marketing funnels",
    ],
    icon: Sparkles,
    featuredTech: ["Mobile-First Web", "Meta Ads", "Calendar Sync"],
  },
  {
    id: "fitness",
    name: "Gyms & Fitness Centers",
    shortDesc: "Membership management, class scheduling, trainer profiles, and renewal payment reminders.",
    solutions: [
      "Monthly membership signups & renewals",
      "Group class & slot reservation",
      "Member workout & diet access portal",
      "Local Google Map pack optimization",
    ],
    icon: Dumbbell,
    featuredTech: ["PWA", "UPI Integration", "Local SEO"],
  },
  {
    id: "hospitality",
    name: "Hotels & Hospitality",
    shortDesc: "Direct room reservation engines, virtual room tours, dining menus, and tourist guides.",
    solutions: [
      "Direct room booking without high OTA commissions",
      "Seasonal package promotions & offers",
      "Bilingual guest information pages",
      "Google Business Profile optimization",
    ],
    icon: Hotel,
    featuredTech: ["Next.js SSR", "Payment Engine", "Maps API"],
  },
  {
    id: "retail-ecommerce",
    name: "Retail & E-Commerce",
    shortDesc: "Digital product catalogs, seamless UPI/card checkout, inventory tracking, and courier integration.",
    solutions: [
      "D2C store development & catalog setup",
      "UPI, Card, & NetBanking checkouts",
      "Shiprocket & courier label sync",
      "Abandoned cart WhatsApp recovery",
    ],
    icon: ShoppingBag,
    featuredTech: ["Headless Commerce", "Razorpay", "Shiprocket"],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    shortDesc: "Property showcase websites, virtual walkthroughs, lead capture funnels, and agent dashboards.",
    solutions: [
      "High-resolution property listing portals",
      "Interactive floor plan & video showcases",
      "Direct inquiry & broker WhatsApp links",
      "Targeted Google & Meta Ad lead generation",
    ],
    icon: Building,
    featuredTech: ["Next.js", "Lead CRM", "Google Ads"],
  },
  {
    id: "startups",
    name: "Startups & Entrepreneurs",
    shortDesc: "Rapid MVP development, scalable SaaS architectures, pitch-ready UI/UX, and cloud deployments.",
    solutions: [
      "4-week rapid MVP engineering",
      "Subscription billing & user dashboards",
      "Scalable cloud architecture on Vercel/AWS",
      "Pitch deck & prototype validation",
    ],
    icon: Rocket,
    featuredTech: ["Full-Stack TypeScript", "Tailwind", "Supabase/PostgreSQL"],
  },
  {
    id: "professional-services",
    name: "Professional Services",
    shortDesc: "Chartered accountants, legal advocates, consultants, and architectural firm platforms.",
    solutions: [
      "Authoritative corporate websites",
      "Client document upload & intake vaults",
      "Consultation scheduling & retainers",
      "LinkedIn positioning & B2B SEO",
    ],
    icon: Briefcase,
    featuredTech: ["Next.js", "Secure Storage", "B2B Funnels"],
  },
  {
    id: "local-smb",
    name: "Local Small & Medium Businesses",
    shortDesc: "Affordable, professional web presence and local search dominance for shops and regional enterprises.",
    solutions: [
      "Cost-effective 5-page business websites",
      "Google Business Profile 1st page ranking",
      "One-click WhatsApp customer contact",
      "Reliable domain, hosting & email setup",
    ],
    icon: Store,
    featuredTech: ["Next.js Static", "Hostinger / Vercel", "GMB"],
  },
];
