import { siteConfig } from '@/config/site.config';

export const metadata = {
  title: 'Privacy Policy | CWD Technologies',
  description:
    'Privacy Policy for CWD Technologies. Learn how we collect, protect, and handle client project information and communication data.',
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
  openGraph: {
    title: 'Privacy Policy | CWD Technologies',
    description:
      'Privacy Policy for CWD Technologies. Learn how we collect, protect, and handle client data.',
    url: `${siteConfig.url}/privacy`,
    siteName: siteConfig.companyName,
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none text-foreground/80 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including when you fill out a form, request a quote, or communicate with us. The types of information we may collect include your name, email address, phone number, company name, and project details.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to process your requests and transactions, and to communicate with you about products, services, and offers that may be of interest to you.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us & Privacy Support</h2>
          <p>
            If you have any questions regarding this Privacy Policy or wish to exercise your data rights, please contact our team: <br />
            Support: <a href={`mailto:${siteConfig.contact.emails?.support || siteConfig.contact.email}`} className="text-primary underline">{siteConfig.contact.emails?.support || siteConfig.contact.email}</a> <br />
            General Inquiries: <a href={`mailto:${siteConfig.contact.emails?.info || siteConfig.contact.email}`} className="text-primary underline">{siteConfig.contact.emails?.info || siteConfig.contact.email}</a> <br />
            Phone: {siteConfig.contact.phone}
          </p>
        </div>
      </div>
    </div>
  );
}
