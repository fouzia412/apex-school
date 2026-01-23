import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PageHero } from '@/components/common/PageHero';
import { ArrowRight, FileText, CreditCard, Users, CheckCircle, HelpCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdmissionProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  const steps = [
    { 
      step: 1, 
      title: 'Registration & Application', 
      content: [
        { label: 'Inquiry', desc: 'Visit our campus or fill out the online inquiry form to receive our digital prospectus.' },
        { label: 'Form Submission', desc: 'Fill in the Admission Application Form with accurate details. You can do this online through our portal or collect a physical copy from the school office.' },
        { label: 'Documentation', desc: 'Attach clear copies of: Child\'s Birth Certificate, Child Passport Size Photographs (4 no\'s), Aadhaar Cards (Child & Parents), Previous School Report Cards (for Grade 2 and above), Transfer Certificate (TC) from the previous school.' },
      ]
    },
    { 
      step: 2, 
      title: 'Registration Fee Payment', 
      content: [
        { label: '', desc: 'To process the application, a non-refundable Registration Fee must be paid.' },
        { label: 'Payment Modes', desc: 'Payments can be made via Cash or our secure online portal (Credit/Debit Card, UPI, Net Banking) or via Cheque/Demand Draft at the school accounts office.' },
      ]
    },
    { 
      step: 3, 
      title: 'Interaction & Assessment', 
      content: [
        { label: 'Pre-Primary (Nursery – UKG)', desc: 'An informal, friendly interaction with the child and parents to understand the child\'s readiness.' },
        { label: 'Primary & Secondary (Grade 1 – IX)', desc: 'A proficiency assessment in core subjects (English, Math, and Science) to ensure the student is placed in the appropriate grade level.' },
      ]
    },
    { 
      step: 4, 
      title: 'Selection & Results', 
      content: [
        { label: '', desc: 'Admissions are granted based on school norms, assessment performance, and seat availability.' },
        { label: 'Notification', desc: 'The result of the admission process will be communicated to parents via phone call, Email/SMS or can be checked on the student portal within 3–5 working days of the assessment.' },
      ]
    },
    { 
      step: 5, 
      title: 'Fee Payment & Admission Confirmation', 
      content: [
        { label: 'Offer Letter', desc: 'Successful candidates will receive a formal Admission Offer Letter.' },
        { label: 'Final Step', desc: 'To secure the seat, the Admission Fee and first-term fees must be paid within the stipulated deadline mentioned in the offer letter.' },
        { label: 'Confirmation', desc: 'Upon receipt of the fee, you will receive a confirmation kit, including the student ID, book list, and uniform details.' },
      ]
    },
  ];

  return (
    <>
      <PageHero
        title="Admission Process"
        subtitle="Your Journey to APEX"
        breadcrumbs={[{ label: 'Admissions', href: '#' }, { label: 'Admission Process' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Admission Process: Your Journey to APEX
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Joining the APEX family is a simple and transparent process. We follow a structured approach to ensure every student is placed in an environment where they can thrive.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-8 mb-12">
              {steps.map((item, index) => (
                <div
                  key={item.step}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-border -z-10" />
                  )}
                  
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0 shadow-lg">
                      {item.step}
                    </div>
                    <div className="flex-1 bg-card p-6 md:p-8 rounded-2xl border border-border hover:shadow-elegant transition-shadow">
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-4">
                        Step {item.step}: {item.title}
                      </h3>
                      <div className="space-y-3">
                        {item.content.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">
                              {point.label && <span className="font-semibold text-foreground">{point.label}: </span>}
                              {point.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-12" data-aos="fade-up">
              <Button variant="gold" size="lg">
                <Link to="/contact">Apply Online <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
  <a href="tel:+91798978534">
    <Phone className="w-4 h-4 mr-2" />
    Contact Admissions
  </a>
</Button>

            </div>

            {/* Contact Info */}
            <div 
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-3xl border border-border text-center"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Need Help?</h3>
              <p className="text-muted-foreground mb-6">
                Our admissions team is here to assist you with any questions about the admission process.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span> +91 79897 8534</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Info@apextheschool.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdmissionProcess;
