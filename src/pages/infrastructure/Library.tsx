import { useEffect } from 'react';
import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Search, Clock, Users, Laptop, Globe } from 'lucide-react';
import libraryImage from '@/assets/library.jpg';
import campusLibrary from '@/assets/campus-library.jpg';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: BookOpen,
    title: '50,000+ Books',
    description: 'Extensive collection covering all subjects, genres, and age groups',
  },
  {
    icon: Laptop,
    title: 'Digital Library',
    description: 'Access to e-books, journals, and online databases',
  },
  {
    icon: Search,
    title: 'Research Corner',
    description: 'Dedicated space for research and reference work',
  },
  {
    icon: Clock,
    title: 'Extended Hours',
    description: 'Open from 7 AM to 7 PM for student convenience',
  },
  {
    icon: Users,
    title: 'Reading Clubs',
    description: 'Active book clubs and literary discussions',
  },
  {
    icon: Globe,
    title: 'Multilingual',
    description: 'Books in English, Hindi, Telugu, and other languages',
  },
];

const sections = [
  { name: 'Fiction Section', books: '15,000+', description: 'Novels, stories, and literary classics' },
  { name: 'Non-Fiction', books: '12,000+', description: 'Biography, history, science, and more' },
  { name: 'Reference Section', books: '8,000+', description: 'Encyclopedias, dictionaries, and atlases' },
  { name: 'Periodicals', count: '200+', description: 'Newspapers, magazines, and journals' },
  { name: "Children's Corner", books: '5,000+', description: 'Age-appropriate books for young readers' },
  { name: 'Digital Zone', resources: '10,000+', description: 'E-books and online resources' },
];

const Library = () => {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax-library');
    
    parallaxElements.forEach((el) => {
      gsap.to(el, {
        yPercent: -15,
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
        title="Knowledge Hub"
        subtitle="A treasure trove of knowledge and inspiration"
        backgroundImage={libraryImage}
        breadcrumbs={[{ label: 'Infrastructure', href: '#' }, { label: 'Library' }]}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="eyebrow text-primary mb-3 block">Our Library</span>
              <h2 className="heading-1 mb-6">Where Knowledge Comes Alive</h2>
              <p className="body-lg text-muted-foreground mb-6">
                Our library is the heart of academic excellence at APEX. With over 50,000 books, 
                digital resources, and a serene reading environment, it provides the perfect space 
                for learning, research, and exploration.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-primary/5 p-4 md:p-6 rounded-2xl text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Books</div>
                </div>
                <div className="bg-secondary/10 p-4 md:p-6 rounded-2xl text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-secondary">200+</div>
                  <div className="text-sm text-muted-foreground">Periodicals</div>
                </div>
                <div className="bg-accent/50 p-4 md:p-6 rounded-2xl text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground">10K+</div>
                  <div className="text-sm text-muted-foreground">E-Resources</div>
                </div>
                <div className="bg-muted p-4 md:p-6 rounded-2xl text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold">300+</div>
                  <div className="text-sm text-muted-foreground">Seating Capacity</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative h-64 md:h-[500px] rounded-3xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={campusLibrary}
                alt="Library Interior"
                className="parallax-library w-full h-[120%] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow text-primary mb-3 block">Facilities</span>
            <h2 className="heading-1 mb-4">Library Features</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
                <h3 className="font-heading font-semibold text-sm md:text-base mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Sections */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow text-primary mb-3 block">Explore</span>
            <h2 className="heading-1 mb-4">Library Sections</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.name}
                className="bg-card p-6 md:p-8 rounded-3xl border border-border hover:shadow-elegant transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="heading-3 mb-2">{section.name}</h3>
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2">
                  {section.books || section.count || section.resources}
                </div>
                <p className="text-muted-foreground text-sm md:text-base">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h2 className="heading-1 mb-4">Discover the Joy of Reading</h2>
            <p className="body-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Our library is open to all students and provides a peaceful environment for learning and growth.
            </p>
            <motion.a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Our Library
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Library;
