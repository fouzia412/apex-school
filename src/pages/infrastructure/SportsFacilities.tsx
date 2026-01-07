import { useEffect } from 'react';
import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Medal, Users, Timer, Target, Dumbbell } from 'lucide-react';
import sportsImage from '@/assets/sports.jpg';
import campusSports from '@/assets/campus-sports.jpg';

gsap.registerPlugin(ScrollTrigger);

const sports = [
  { name: 'Cricket', description: 'Full-size cricket ground with turf wicket and practice nets', achievements: '5 State Championships' },
  { name: 'Football', description: 'FIFA-standard football field with floodlights', achievements: '3 National Titles' },
  { name: 'Basketball', description: 'Indoor and outdoor basketball courts', achievements: '8 Regional Wins' },
  { name: 'Swimming', description: 'Olympic-size swimming pool with trained coaches', achievements: '15 State Records' },
  { name: 'Athletics', description: '400m synthetic track with all field event facilities', achievements: '50+ Medal Winners' },
  { name: 'Badminton', description: 'Indoor badminton courts with professional flooring', achievements: '4 National Players' },
];

const achievements = [
  { icon: Trophy, value: '50+', label: 'Championships Won' },
  { icon: Medal, value: '200+', label: 'Medals Earned' },
  { icon: Users, value: '20+', label: 'State Players' },
  { icon: Target, value: '5', label: 'National Players' },
];

const SportsFacilities = () => {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax-sports');
    
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
        title="Sports Excellence"
        subtitle="Building champions through world-class sports facilities"
        backgroundImage={sportsImage}
        breadcrumbs={[{ label: 'Infrastructure', href: '#' }, { label: 'Sports Facilities' }]}
      />

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 text-secondary" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold mb-2">{item.value}</div>
                <div className="text-sm md:text-base text-primary-foreground/70">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              className="relative h-64 md:h-[500px] rounded-3xl overflow-hidden order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={campusSports}
                alt="Sports Complex"
                className="parallax-sports w-full h-[120%] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="eyebrow text-primary mb-3 block">Sports Excellence</span>
              <h2 className="heading-1 mb-6">Champions Are Made Here</h2>
              <p className="body-lg text-muted-foreground mb-6">
                At APEX, we believe in the holistic development of every student. Our world-class sports 
                facilities, combined with professional coaching, have produced numerous state and national 
                level players across various sports.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Timer, text: 'Professional Coaching' },
                  { icon: Dumbbell, text: 'Modern Gymnasium' },
                  { icon: Target, text: 'Regular Competitions' },
                  { icon: Medal, text: 'Award-Winning Teams' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-muted/50 p-3 md:p-4 rounded-xl">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow text-primary mb-3 block">Our Facilities</span>
            <h2 className="heading-1 mb-4">Sports We Excel In</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sports.map((sport, index) => (
              <motion.div
                key={sport.name}
                className="bg-card p-6 md:p-8 rounded-3xl border border-border hover:shadow-elegant transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="heading-3 mb-3">{sport.name}</h3>
                <p className="text-muted-foreground mb-4">{sport.description}</p>
                <div className="flex items-center gap-2 text-secondary font-semibold">
                  <Trophy className="w-5 h-5" />
                  {sport.achievements}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-16 text-center text-primary-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-1 mb-4">Join Our Sports Program</h2>
            <p className="body-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Whether you're a beginner or an aspiring athlete, our sports program has something for everyone.
            </p>
            <motion.a
              href="/admission-process"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
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

export default SportsFacilities;
