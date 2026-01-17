import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ArrowRight, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const WelcomeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 lg:py-32">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 animate-spin-slow">
          <Sparkles className="w-8 h-8 text-secondary/20" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Quote */}
        <div className="text-center mb-16" data-aos="zoom-in">
          <div className="inline-block bg-gradient-to-r from-primary/10 via-secondary/20 to-primary/10 px-8 py-6 rounded-2xl border border-secondary/20 shadow-elegant">
            <blockquote className="text-lg md:text-xl lg:text-2xl font-heading italic text-foreground/80">
              "Knowledge brings certainty, certainty brings a bright outlook,
              <br className="hidden md:block" />
              and a bright outlook brings harmony."
            </blockquote>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div
              className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6"
              data-aos="fade-right"
            >
              <Award className="w-4 h-4" />
              Welcome to Our Vibrant Learning Community
            </div>

            <h2
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
              data-aos="fade-right"
            >
              Welcome to <span className="text-gradient-gold">Apex The School</span>
            </h2>

            <div
              className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Hyderabad
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p data-aos="fade-up">
                At Apex The School, we believe that education is not merely the acquisition of facts, but the training of the mind to think, the heart to feel, and the spirit to lead. Located in the heart of Hyderabad, we provide a nurturing environment where curiosity is celebrated and every child is encouraged to reach their personal "Apex".
              </p>
              <p data-aos="fade-up" data-aos-delay="100">
                Our journey began as a humble seed—a vision to provide quality education rooted in values. Today, that seed has grown into a flourishing sanctuary of learning, marking the start of a promising journey for every student who walks through our gates.
              </p>
              <p
                className="font-medium text-foreground"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We don't just teach; we sow the seeds of character, resilience, and wisdom.
              </p>
            </div>

            <div
              className="mt-8 relative z-20"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Button variant="gold" size="lg" asChild>
                <Link to="/our-school">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6 w-full">
            {[
              { value: '🎯', label: 'The Apex Way', subtitle: 'Ignite, Inspire, Achieve' },
              { value: '🌟', label: 'Excellence', subtitle: 'Nurturing Minds' },
              { value: '📚', label: 'Holistic Growth', subtitle: 'Character Building' },
              { value: '🌍', label: 'Global Citizens', subtitle: 'Future Leaders' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white/70 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="text-4xl mb-3">{stat.value}</div>
                <div className="text-lg font-heading font-bold text-primary">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
