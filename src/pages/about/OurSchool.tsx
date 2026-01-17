import { PageHero } from '@/components/common/PageHero';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Trophy, Target, Heart } from 'lucide-react';
import heroCampus from '@/assets/hero-campus.jpg';

// OurSchool page component
const OurSchool = () => {
  return (
    <>
      <PageHero
        title="Our School"
        subtitle="A legacy of excellence in education since 2002"
        backgroundImage={heroCampus}
        breadcrumbs={[{ label: 'About Us', href: '#' }, { label: 'Our School' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-bold text-foreground mb-4">
    Welcome to <span className="text-primary">Apex The School</span>, Hyderabad
  </h2>

  <p className="text-primary font-medium italic mb-6">
    “Knowledge brings certainty, certainty brings a bright outlook, and a bright outlook brings harmony.”
  </p>

  <p className="text-muted-foreground leading-relaxed mb-4">
    Welcome to our vibrant learning community. At Apex The School, we believe that education is not merely the acquisition of facts, but the training of the mind to think, the heart to feel, and the spirit to lead.
  </p>

  <p className="text-muted-foreground leading-relaxed mb-4">
    Located in the heart of Hyderabad, we provide a nurturing environment where curiosity is celebrated and every child is encouraged to reach their personal <span className="font-medium text-foreground">“Apex.”</span>
  </p>

  <p className="text-muted-foreground leading-relaxed">
    Our journey began as a humble seed — a vision to provide quality education rooted in values. Today, that seed has grown into a flourishing sanctuary of learning. We don’t just teach; we sow the seeds of character, resilience, and wisdom, shaping confident learners ready for the future.
  </p>
</motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={heroCampus}
                alt="DPS Hyderabad Campus"
                className="rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold">23+</div>
                <div className="text-sm opacity-80">Years of Excellence</div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Academic Excellence', desc: 'Consistently achieving 100% board results with numerous merit positions' },
              { icon: Users, title: 'Expert Faculty', desc: '250+ highly qualified and experienced educators dedicated to student success' },
              { icon: Trophy, title: 'Sports Champions', desc: 'State and national level achievements in various sports disciplines' },
              { icon: BookOpen, title: 'Holistic Curriculum', desc: 'CBSE curriculum enhanced with skill development programs' },
              { icon: Target, title: 'Career Guidance', desc: 'Comprehensive counseling for higher education and career planning' },
              { icon: Heart, title: 'Value Education', desc: 'Instilling moral values and social responsibility in students' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-card p-6 rounded-2xl border border-border hover:shadow-elegant transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurSchool;
