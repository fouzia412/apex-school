import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import principalImage from '/apex-chairman.png';

export const PrincipalMessageSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements (never block clicks) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 -translate-x-1/2 z-0"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative" data-aos="fade-right">
            {/* Main Image */}
            <motion.div
              className="relative z-10 rounded-3xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={principalImage}
                alt="chairman, APEX – The School of Excellence"
                className="w-full max-h-[520px] object-contain"
              />
              {/* Name Card */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/90 to-transparent">
                <h3 className="font-heading font-bold text-xl text-primary-foreground">
                  Dr. Khaja Abdul Mutalib
                </h3>
                <p className="text-secondary text-sm">
                  Chairman, APEX – The School of Excellence
                </p>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-2xl -z-10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10"
            />
          </div>

          {/* Content Side */}
          <div data-aos="fade-left">
            <span className="eyebrow mb-3 block">From the Chairman’s Desk</span>
            <h2 className="heading-1 mb-6">
              A Legacy of Learning.  <span className="text-gradient">A Future of Leadership.</span>
            </h2>

            {/* Quote */}
            <div className="relative pl-8 mb-8">
              <Quote className="absolute left-0 top-0 w-6 h-6 text-secondary" />
              <blockquote className="quote text-muted-foreground">
                “Leadership is not about position—it is about purpose, precision, and progress.”
              </blockquote>
            </div>

            <p className="body-base text-muted-foreground mb-6">
              My life’s work has always been guided by one strong belief — “EDUCATION CHANGES LIVES”. Whether it is supporting children, empowering youth, uplifting women, or building stronger communities,
               I have seen again and again that the only true and lasting source of development is knowledge.
            </p>

            {/* <p className="body-base text-muted-foreground mb-8">
              Welcome to APEX – The School of Excellence, where tradition meets
              innovation, and where your child’s success story begins.
            </p> */}

            <Button variant="green" size="lg" asChild>
              <Link to="/chairman-message">
                Read Full Message
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
