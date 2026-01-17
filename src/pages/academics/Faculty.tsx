import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PageHero } from '@/components/common/PageHero';
import { Users, Award, TrendingUp, Heart, CheckCircle } from 'lucide-react';

const Faculty = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <PageHero
        title="Our Faculty"
        subtitle="The Pillars of APEX"
        breadcrumbs={[{ label: 'Academics', href: '#' }, { label: 'Faculty' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Intro */}
            <div className="text-center mb-16" data-aos="fade-up">
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                At APEX, our educators are more than teachers—they are mentors, innovators, and the heartbeat of our community.
              </p>
            </div>

            {/* Faculty Pillars */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Expertise */}
              <div 
                className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-3xl border border-primary/20"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">Expertise Meets Passion</h3>
                <p className="text-muted-foreground">
                  Our qualified team blends years of academic experience with modern pedagogy. By moving beyond textbooks, they transform lessons into invigorating experiences that spark lifelong curiosity.
                </p>
              </div>

              {/* Continuous Growth */}
              <div 
                className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 rounded-3xl border border-secondary/20"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">Commitment to Continuous Growth</h3>
                <p className="text-muted-foreground mb-4">
                  Our staff stays ahead of global trends through Continuous Professional Development:
                </p>
                <ul className="space-y-2">
                  {[
                    'Upskilling: National and international workshops on the latest EdTech.',
                    'Modern Methods: Adopting 21st-century teaching standards.',
                    'Collaboration: Sharing best practices to ensure student success.',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nurturing Environment */}
              <div 
                className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-3xl border border-primary/20"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">A Nurturing Environment</h3>
                <p className="text-muted-foreground mb-4">
                  We create a "home away from home" where every student is:
                </p>
                <ul className="space-y-2">
                  {[
                    'Seen: Through personalized emotional and academic support.',
                    'Safe: In a secure, respectful, and disciplined setting.',
                    'Empowered: To take intellectual risks and reach their full potential.',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div 
              className="bg-card p-8 md:p-12 rounded-3xl border border-border text-center"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-heading font-bold text-foreground mb-8">APEX Faculty by the Numbers</h3>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: '100+', label: 'Experienced Educators' },
                  { value: '100%', label: 'Commitment to Student Well-being' },
                  { value: '∞', label: 'Ongoing Training & Workshops' },
                ].map((stat, idx) => (
                  <div key={stat.label} data-aos="zoom-in" data-aos-delay={idx * 100}>
                    <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="mt-12 text-center" data-aos="fade-up">
              <blockquote className="text-xl md:text-2xl font-heading italic text-primary max-w-3xl mx-auto">
                "We don't just teach subjects; we teach children. We build foundations of character and intellect for a lifetime."
              </blockquote>
              <p className="text-muted-foreground mt-4">— The APEX Academic Team</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faculty;
