import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/config/navigation';

export const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-hero p-8 md:p-16">
          {/* Background Elements */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 opacity-10"
          >
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-dps-teal blur-3xl" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div data-aos="fade-right">
              <h2 className="display-2 text-primary-foreground mb-6">
                Ready to Join Our{' '}
                <span className="text-secondary">APEX Family?</span>
              </h2>

              <p className="body-lg text-primary-foreground/90 mb-8">
                Give your child the gift of excellence. Admissions for the
                2026–27 academic year are now open. Take the first step towards
                their bright future.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/admission-process">
                    Apply for Admission
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>

                <Button variant="glass" size="xl" asChild>
                  <Link to="/contact-us">Schedule a Visit</Link>
                </Button>
              </div>
            </div>

            {/* RIGHT CONTACT CARDS */}
            <div className="grid sm:grid-cols-2 gap-4" data-aos="fade-left">
              {/* Phone & Email */}
              {[
                {
                  icon: Phone,
                  label: 'Call Us',
                  value: contactInfo.phone,
                  href: `tel:${contactInfo.phone}`,
                },
                {
                  icon: Mail,
                  label: 'Email Us',
                  value: contactInfo.email,
                  href: `mailto:${contactInfo.email}`,
                },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-sm text-primary-foreground/70 mb-1">
                    {item.label}
                  </p>
                  <p className="font-heading font-semibold text-primary-foreground">
                    {item.value}
                  </p>
                </motion.a>
              ))}

              {/* Campus Address Cards */}
              {contactInfo.addresses.map((campus, index) => (
                <motion.div
                  key={index}
                  className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>

                    <div>
                      <p className="text-sm text-primary-foreground/70 mb-1">
                        {campus.label}
                      </p>

                      <a
                        href={campus.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading font-semibold text-primary-foreground leading-relaxed hover:text-secondary transition-colors"
                      >
                        {campus.address}
                      </a>

                      <p className="text-sm text-primary-foreground/60 mt-2">
                        {contactInfo.hours}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
