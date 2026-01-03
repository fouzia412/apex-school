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
              <h2 className="display-3 text-foreground mb-6">
                Welcome to <span className="text-primary">DPS Hyderabad</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Delhi Public School Hyderabad was established in 2002 under the aegis of the Delhi Public School Society, New Delhi. The school is affiliated to the Central Board of Secondary Education (CBSE), New Delhi.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Spread over 15 acres of lush green campus, DPS Hyderabad provides world-class infrastructure and facilities that foster holistic development of students. Our commitment to excellence in academics, sports, and co-curricular activities has made us one of the premier educational institutions in Telangana.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a team of dedicated educators and state-of-the-art facilities, we nurture young minds to become responsible global citizens who are equipped to face the challenges of the 21st century.
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
