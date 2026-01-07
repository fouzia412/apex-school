import { useEffect } from 'react';
import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Medal, Star, Award, Users, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const awards = [
  {
    id: 1,
    title: 'Best CBSE School Award',
    category: 'Academic Excellence',
    year: '2025',
    description: 'Recognized as the best CBSE school in the state for outstanding academic performance and holistic education.',
    icon: Trophy,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    id: 2,
    title: 'National Sports Excellence Award',
    category: 'Sports',
    year: '2024',
    description: 'Awarded for producing multiple national-level athletes and maintaining excellent sports infrastructure.',
    icon: Medal,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Green School Certification',
    category: 'Environment',
    year: '2024',
    description: 'Certified as an eco-friendly school for sustainable practices and environmental initiatives.',
    icon: Star,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Digital Innovation Award',
    category: 'Technology',
    year: '2023',
    description: 'Recognized for implementing cutting-edge technology in education and smart classroom initiatives.',
    icon: Award,
    color: 'from-purple-500 to-violet-500',
  },
  {
    id: 5,
    title: 'Community Service Award',
    category: 'Social Impact',
    year: '2023',
    description: 'Honored for outstanding community service and social responsibility programs.',
    icon: Users,
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 6,
    title: 'Safety Excellence Award',
    category: 'Safety',
    year: '2022',
    description: 'Awarded for maintaining the highest standards of student safety and security.',
    icon: Target,
    color: 'from-orange-500 to-red-500',
  },
];

const stats = [
  { value: '50+', label: 'Awards Won' },
  { value: '100+', label: 'Competitions Won' },
  { value: '200+', label: 'State Rankings' },
  { value: '20+', label: 'National Recognitions' },
];

const MediaAwards = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.award-card');
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: index * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <PageHero
        title="Awards & Achievements"
        subtitle="Celebrating excellence across all domains"
        breadcrumbs={[{ label: 'Media', href: '#' }, { label: 'Awards & Achievements' }]}
      />

      {/* Stats */}
      <section className="py-12 md:py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-secondary">{stat.value}</div>
                <div className="text-sm md:text-base text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow text-primary mb-3 block">Recognition</span>
            <h2 className="heading-1 mb-4">Our Achievements</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              These awards reflect our commitment to excellence in education, sports, and community service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {awards.map((award) => (
              <div
                key={award.id}
                className="award-card bg-card rounded-3xl overflow-hidden border border-border hover:shadow-elegant transition-shadow"
              >
                <div className={`h-2 bg-gradient-to-r ${award.color}`} />
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${award.color} flex items-center justify-center`}>
                      <award.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-semibold">{award.year}</span>
                  </div>
                  <span className="text-sm text-primary font-medium">{award.category}</span>
                  <h3 className="heading-3 mt-1 mb-3">{award.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Trophy className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h2 className="heading-1 mb-4">Be Part of Our Success Story</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join APEX and be part of a school that consistently achieves excellence in every field.
            </p>
            <motion.a
              href="/admission-process"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MediaAwards;
