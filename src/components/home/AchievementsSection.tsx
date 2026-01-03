import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Award, Medal, Trophy, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    id: 1,
    title: 'National Science Olympiad',
    description: 'Multiple Gold Medals in NSO 2025',
    icon: Medal,
    color: 'bg-dps-gold',
  },
  {
    id: 2,
    title: 'CBSE Board Toppers',
    description: '15 Students in Top 1% Nationwide',
    icon: Trophy,
    color: 'bg-primary',
  },
  {
    id: 3,
    title: 'Sports Excellence',
    description: 'State Champions in Athletics',
    icon: Award,
    color: 'bg-dps-orange',
  },
  {
    id: 4,
    title: 'Cultural Awards',
    description: 'Best School in National Youth Fest',
    icon: Star,
    color: 'bg-dps-blue',
  },
];

export const AchievementsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (!cardsRef.current || !sectionRef.current) return;

  const cards = cardsRef.current.children;

  gsap.from(cards, {
    y: 60,
    scale: 0.95,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });

  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}, []);


  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow mb-3 block" data-aos="fade-up">Our Pride</span>
          <h2 className="heading-1 mb-4" data-aos="fade-up" data-aos-delay="100">
            Celebrating <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="body-lg text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
            Our students consistently achieve remarkable success in academics, sports, and extracurricular activities, making us proud year after year.
          </p>
        </div>

        {/* Achievement Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 opacity-100">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="group relative bg-card rounded-2xl p-6 border border-border overflow-hidden card-hover"
              whileHover={{ y: -8 }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 ${achievement.color} rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                <achievement.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="font-heading font-semibold text-lg mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground text-sm">{achievement.description}</p>

              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12" data-aos="fade-up">
          <Button variant="gold" size="lg" asChild>
            <Link to="/media-awards">
              View All Achievements
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
