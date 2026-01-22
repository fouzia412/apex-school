import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Information We Collect',
    content: `We collect information you provide directly to us, such as when you fill out admission forms, contact us, or subscribe to our newsletter. This may include:
    • Personal identification information (Name, email address, phone number)
    • Student and parent/guardian details for admission purposes
    • Academic records and documents
    • Communication preferences`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the information we collect to:
    • Process admission applications
    • Communicate with parents and students about school activities
    • Send newsletters and important announcements
    • Improve our educational services
    • Comply with legal obligations`,
  },
  {
    title: 'Information Sharing',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share information only in the following cases:
    • With your consent
    • To comply with legal requirements
    • With service providers who assist in our operations
    • In case of emergency situations involving student safety`,
  },
  {
    title: 'Data Security',
    content: `We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
    • Secure servers and encrypted data transmission
    • Limited access to personal information
    • Regular security assessments
    • Staff training on data protection`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to:
    • Access your personal information
    • Request correction of inaccurate data
    • Request deletion of your data (subject to legal requirements)
    • Opt-out of marketing communications
    • Lodge a complaint with relevant authorities`,
  },
  {
    title: 'Contact Us',
    content: `If you have any questions about this Privacy Policy, please contact us at:
    Email: privacy@apexschool.in
    Phone: +91 79897 85346
    Address: APEX Campus, Excellence Road, City 500001`,
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we protect and handle your information"
        breadcrumbs={[{ label: 'Legal', href: '#' }, { label: 'Privacy Policy' }]}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground mb-8">
                Last updated: January 2026
              </p>
              <p className="text-muted-foreground mb-12">
                APEX - The School of Excellence ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you visit our website or use our services.
              </p>

              <div className="space-y-8 md:space-y-12">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    className="bg-card p-6 md:p-8 rounded-3xl border border-border"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h2 className="heading-3 mb-4 text-foreground">{section.title}</h2>
                    <div className="text-muted-foreground whitespace-pre-line">
                      {section.content}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
