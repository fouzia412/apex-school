import { useEffect } from 'react';
import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Microscope, Laptop, Atom, Cpu, FlaskConical, Binary } from 'lucide-react';
import labImage from '@/assets/lab.jpg';
import campusLab from '@/assets/campus-lab.jpg';
import campusComputer from '@/assets/campus-computer.jpg';

gsap.registerPlugin(ScrollTrigger);

const labs = [
  {
    icon: FlaskConical,
    title: 'Physics Lab',
    description: 'Equipped with advanced apparatus for practical experiments in mechanics, optics, electricity, and modern physics.',
    features: ['Optical benches', 'Digital multimeters', 'Oscilloscopes', 'Laser equipment'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Atom,
    title: 'Chemistry Lab',
    description: 'Modern chemistry lab with fume hoods, analytical instruments, and safety equipment.',
    features: ['Fume hoods', 'Spectrophotometer', 'pH meters', 'Safety showers'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Microscope,
    title: 'Biology Lab',
    description: 'Well-equipped biology lab with microscopes, specimens, and biotechnology equipment.',
    features: ['Compound microscopes', 'Preserved specimens', 'Microtome', 'Incubators'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Laptop,
    title: 'Computer Lab',
    description: 'State-of-the-art computer lab with latest hardware and software for digital learning.',
    features: ['High-speed internet', '100+ workstations', 'Latest software', 'Smart boards'],
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Cpu,
    title: 'Robotics Lab',
    description: 'Innovation hub for robotics, AI, and automation with hands-on learning kits.',
    features: ['Arduino kits', '3D printers', 'Drone technology', 'AI/ML workstations'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Binary,
    title: 'Coding Lab',
    description: 'Dedicated space for programming, app development, and computational thinking.',
    features: ['Coding bootcamps', 'Hackathons', 'Project-based learning', 'Industry mentors'],
    color: 'from-red-500 to-pink-500',
  },
];

const InnovationLabs = () => {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax-lab');
    
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
        title="Innovation Labs"
        subtitle="Where curiosity meets cutting-edge technology"
        backgroundImage={labImage}
        breadcrumbs={[{ label: 'Infrastructure', href: '#' }, { label: 'Innovation Labs' }]}
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
              <span className="eyebrow text-primary mb-3 block">State-of-the-Art Facilities</span>
              <h2 className="heading-1 mb-6">Learning Through Discovery</h2>
              <p className="body-lg text-muted-foreground mb-6">
                Our innovation labs are designed to foster scientific temperament and technological proficiency. 
                With industry-standard equipment and experienced faculty, students get hands-on experience 
                that prepares them for future careers in STEM fields.
              </p>
              <ul className="space-y-3">
                {['Hands-on practical learning', 'Industry-standard equipment', 'Expert faculty guidance', 'Research opportunities'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="relative h-64 md:h-96 rounded-3xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={campusLab}
                alt="Innovation Labs"
                className="parallax-lab w-full h-[120%] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Labs Grid */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow text-primary mb-3 block">Our Labs</span>
            <h2 className="heading-1 mb-4">Explore Our Laboratories</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {labs.map((lab, index) => (
              <motion.div
                key={lab.title}
                className="bg-card rounded-3xl overflow-hidden border border-border hover:shadow-elegant transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`h-2 bg-gradient-to-r ${lab.color}`} />
                <div className="p-6 md:p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${lab.color} flex items-center justify-center mb-4`}>
                    <lab.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="heading-3 mb-3">{lab.title}</h3>
                  <p className="text-muted-foreground mb-4">{lab.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {lab.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Computer Lab Showcase */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={campusComputer}
            alt="Computer Lab"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-1 mb-6">Digital-First Learning</h2>
            <p className="body-lg text-muted-foreground mb-8">
              With over 100 high-performance workstations, high-speed internet, and the latest software, 
              our computer labs prepare students for the digital age with hands-on experience in 
              programming, design, and emerging technologies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { value: '100+', label: 'Workstations' },
                { value: '1 Gbps', label: 'Internet Speed' },
                { value: '24/7', label: 'Lab Access' },
                { value: '10+', label: 'Software Suites' },
              ].map((stat) => (
                <div key={stat.label} className="bg-card/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-border">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default InnovationLabs;
