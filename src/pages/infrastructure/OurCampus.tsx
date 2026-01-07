import { useEffect, useRef } from 'react';
import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Users, Leaf, Shield, Wifi, Clock } from 'lucide-react';
import campusMain from '@/assets/campus-main.jpg';
import campusLibrary from '@/assets/campus-library.jpg';
import campusLab from '@/assets/campus-lab.jpg';
import campusSports from '@/assets/campus-sports.jpg';
import campusAuditorium from '@/assets/campus-auditorium.jpg';
import campusCafeteria from '@/assets/campus-cafeteria.jpg';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: MapPin, title: '15 Acre Campus', description: 'Sprawling green campus with modern infrastructure' },
  { icon: Users, title: '5000+ Students', description: 'Vibrant community of learners from diverse backgrounds' },
  { icon: Leaf, title: 'Eco-Friendly', description: 'Solar powered with rainwater harvesting systems' },
  { icon: Shield, title: 'Safe & Secure', description: '24/7 CCTV surveillance and trained security' },
  { icon: Wifi, title: 'Smart Campus', description: 'Wi-Fi enabled with digital learning infrastructure' },
  { icon: Clock, title: 'Extended Hours', description: 'Before and after school programs available' },
];

const campusAreas = [
  { title: 'Main Building', image: campusMain, description: 'State-of-the-art administrative and academic block' },
  { title: 'Library', image: campusLibrary, description: 'Modern library with 50,000+ books and digital resources' },
  { title: 'Science Labs', image: campusLab, description: 'Well-equipped physics, chemistry, and biology labs' },
  { title: 'Sports Complex', image: campusSports, description: 'Multi-sport facilities with professional coaching' },
  { title: 'Auditorium', image: campusAuditorium, description: '1500-seat auditorium for events and performances' },
  { title: 'Cafeteria', image: campusCafeteria, description: 'Hygienic cafeteria serving nutritious meals' },
];

const OurCampus = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax-image');
    
    parallaxElements.forEach((el) => {
      gsap.to(el, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <PageHero
        title="Our Campus"
        subtitle="A world-class learning environment designed for excellence"
        backgroundImage={campusMain}
        breadcrumbs={[{ label: 'Infrastructure', href: '#' }, { label: 'Our Campus' }]}
      />

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow text-primary mb-3 block">Campus Highlights</span>
            <h2 className="heading-1 mb-4">Experience Excellence</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Our campus is designed to inspire learning, creativity, and growth in every student.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-card p-4 md:p-6 rounded-2xl border border-border text-center hover:shadow-elegant transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-sm md:text-base mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm hidden md:block">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Campus Areas */}
      <section ref={parallaxRef} className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow text-primary mb-3 block">Explore Our Facilities</span>
            <h2 className="heading-1 mb-4">Campus Facilities</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {campusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="group relative rounded-3xl overflow-hidden h-64 md:h-80"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="parallax-image w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <h3 className="heading-3 mb-2">{area.title}</h3>
                  <p className="text-sm md:text-base text-white/80">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-1 mb-4">Experience Our Campus</h2>
            <p className="body-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Schedule a visit to explore our world-class facilities and see why APEX is the right choice for your child.
            </p>
            <motion.a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Visit
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurCampus;
