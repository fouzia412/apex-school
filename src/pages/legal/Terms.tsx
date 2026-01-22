import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing and using the APEX - The School of Excellence website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    title: 'Use of Website',
    content: `You may use our website for lawful purposes only. You agree not to:
    • Use the website in any way that violates applicable laws
    • Attempt to gain unauthorized access to any part of the website
    • Interfere with the proper functioning of the website
    • Upload or transmit harmful content or malware
    • Collect or harvest information about other users`,
  },
  {
    title: 'Intellectual Property',
    content: `All content on this website, including text, graphics, logos, images, and software, is the property of APEX - The School of Excellence and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.`,
  },
  {
    title: 'Admission and Enrollment',
    content: `Admission to APEX is subject to availability and our admission criteria. We reserve the right to:
    • Accept or reject any admission application
    • Modify admission requirements and procedures
    • Set and revise fee structures
    • Enforce school policies and disciplinary procedures`,
  },
  {
    title: 'Fee Payment',
    content: `Parents and guardians are responsible for timely payment of all fees. Failure to pay fees may result in:
    • Suspension of services
    • Additional late payment charges
    • Withholding of academic records
    • Termination of enrollment`,
  },
  {
    title: 'Student Conduct',
    content: `Students are expected to adhere to the school's code of conduct. The school reserves the right to take disciplinary action, including suspension or expulsion, for violations of school policies.`,
  },
  {
    title: 'Limitation of Liability',
    content: `APEX - The School of Excellence shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or services, to the fullest extent permitted by law.`,
  },
  {
    title: 'Changes to Terms',
    content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.`,
  },
  {
    title: 'Contact Information',
    content: `For questions about these Terms and Conditions, please contact us at:
    Email: Info@apextheschool.in
    Phone: +91 79897 85346
    Address: APEX Campus, Excellence Road, City 500001`,
  },
];

const Terms = () => {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully"
        breadcrumbs={[{ label: 'Legal', href: '#' }, { label: 'Terms & Conditions' }]}
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
                These Terms and Conditions govern your use of the APEX - The School of Excellence website 
                and services. Please read them carefully before using our website or enrolling in our programs.
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

export default Terms;
