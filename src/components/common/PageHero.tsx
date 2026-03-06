import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export const PageHero = ({ title, subtitle, backgroundImage, breadcrumbs = [] }: PageHeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !imageRef.current) return;

    gsap.to(imageRef.current, {
      y: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
      {/* Background */}
      <div ref={imageRef} className="absolute inset-0 z-0">
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-[120%] object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#0E304C]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-dps-green-dark/95 via-dps-green/80 to-dps-green-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-dps-green-dark/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-secondary/10 blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-dps-teal/10 blur-2xl"
        animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        {/* Breadcrumbs */}
        <motion.nav
          className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/"
            className="hover:text-secondary transition-colors flex items-center gap-1"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          {breadcrumbs.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              {item.href ? (
                <Link to={item.href} className="hover:text-secondary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-secondary">{item.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        {/* Title */}
        <motion.h1
          className="display-1 text-primary-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            className="body-lg text-primary-foreground/80 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative Line */}
        <motion.div
          className="mt-8 h-1 w-24 bg-gradient-gold rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        />
      </div>
    </section>
  );
};
