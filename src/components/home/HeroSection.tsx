import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Play, Award, Users, BookOpen, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    id: 1,
    image: heroSlide1,
    title: 'Nurturing Future Leaders',
    subtitle: 'Where academic excellence meets holistic development',
    badge: 'CBSE Affiliated | Excellence Since 2002',
  },
  {
    id: 2,
    image: heroSlide2,
    title: 'Smart Learning Environment',
    subtitle: 'Modern classrooms designed for 21st-century education',
    badge: 'Digital Learning | Interactive Classes',
  },
  {
    id: 3,
    image: heroSlide3,
    title: 'Sports Excellence',
    subtitle: 'Building champions through world-class sports facilities',
    badge: 'State & National Champions',
  },
  {
    id: 4,
    image: heroSlide4,
    title: 'Cultural Heritage',
    subtitle: 'Celebrating diversity through art, music, and dance',
    badge: 'Holistic Development',
  },
];

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!heroRef.current || !textRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current.querySelectorAll('.hero-text-animate'),
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-1 md:pt-1">
      {/* Background Image Slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <img
            src={currentSlideData.image}
            alt={currentSlideData.title}
            className="w-full h-full object-cover scale-105"
          />
          {/* Dark overlay for text visibility */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-secondary/20 blur-xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full bg-dps-teal/20 blur-xl"
        animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div ref={textRef} className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="hero-text-animate inline-flex items-center gap-2 bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-gold">
                <Award className="w-4 h-4" />
                {currentSlideData.badge}
              </div>

              {/* Main Heading */}
              <h1 className="hero-text-animate display-1 text-primary-foreground mb-6">
                {currentSlideData.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-gradient-gold">
                  {currentSlideData.title.split(' ').slice(-1)}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="hero-text-animate body-lg text-primary-foreground/90 mb-8 max-w-2xl">
                {currentSlideData.subtitle}. Join us in shaping tomorrow's innovators, thinkers, and leaders at APEX - The School of Excellence.
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <div className="hero-text-animate flex flex-wrap gap-4">
            <Button variant="gold" size="xl" asChild>
              <Link to="/admission-process">
                Admissions 2026-27
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/infrastructure/our-campus">
                <Play className="w-5 h-5 mr-2" />
                Explore Campus
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          {/* <motion.div
            className="hero-text-animate grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-primary-foreground/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { icon: Users, value: '5000+', label: 'Students' },
              { icon: BookOpen, value: '250+', label: 'Faculty' },
              { icon: Award, value: '23+', label: 'Years of Excellence' },
              { icon: Calendar, value: '15', label: 'Acre Campus' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/20 mb-2">
                  <stat.icon className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </motion.div> */}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-secondary'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-primary-foreground/60 text-sm">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-secondary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div> */}
    </section>
  );
};
