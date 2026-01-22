import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Microscope, Trophy, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import labImage from '@/assets/lab.jpg';
import sportsImage from '@/assets/sports.jpg';
import libraryImage from '@/assets/library.jpg';

const campusAreas = [
  {
    title: 'Innovation Labs',
    description:
      'State-of-the-art science and technology labs fostering innovation and practical learning.',
    image: labImage,
    icon: Microscope,
    link: '/infrastructure/innovation-labs',
    color: 'from-dps-blue/80 to-dps-teal/80',
  },
  {
    title: 'Sports Excellence',
    description:
      'World-class sports facilities for developing athletic skills and team spirit.',
    image: sportsImage,
    icon: Trophy,
    link: '/infrastructure/sports-facilities',
    color: 'from-dps-orange/80 to-dps-gold/80',
  },
  {
    title: 'Knowledge Hub',
    description:
      'Modern library with vast resources to inspire curiosity and lifelong learning.',
    image: libraryImage,
    icon: BookOpen,
    link: '/infrastructure/library',
    color: 'from-primary/80 to-dps-green-light/80',
  },
];

export const CampusLifeSection = () => {
  return (
    <section className="section-padding bg-muted/50 relative overflow-hidden">
      {/* Background Decoration (never block clicks) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl z-0"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow mb-3 block" data-aos="fade-up">
            Explore Our Campus
          </span>
          <h2 className="heading-1 mb-4" data-aos="fade-up" data-aos-delay="100">
            Where Learning Comes <span className="text-gradient">Alive</span>
          </h2>
          <p
            className="body-lg text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our sprawling 15-acre campus is designed to nurture every aspect of
            a student's growth with world-class facilities.
          </p>
        </div>

        {/* Campus Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {campusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="group relative rounded-3xl overflow-hidden h-[400px] card-hover"
              data-aos="zoom-in-custom"
              data-aos-delay={index * 150}
              whileHover={{ y: -8 }}
            >
              {/* Background Image */}
              <img
                src={area.image}
                alt={area.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0"
              />

              {/* Gradient Overlay (must not capture clicks) */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 z-0 bg-gradient-to-t ${area.color} opacity-80`}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent"
              />

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-primary-foreground">
                <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <area.icon className="w-7 h-7" />
                </div>
                <h3 className="heading-3 mb-2">{area.title}</h3>
                <p className="body-sm text-primary-foreground/90 mb-4">
                  {area.description}
                </p>
                {/* <Link
                  to={area.link}
                  className="inline-flex items-center text-sm font-semibold text-secondary hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-12" data-aos="fade-up">
          <Button variant="green" size="lg" asChild>
            <Link to="/infrastructure/our-campus">
              <Users className="w-5 h-5 mr-2" />
              Take a Virtual Tour
            </Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
};
