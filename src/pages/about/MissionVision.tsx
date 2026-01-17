import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PageHero } from '@/components/common/PageHero';
import { Target, Eye, Compass, Star, Globe, Lightbulb, Heart, Users, Award, TrendingUp, UserCheck, RefreshCw } from 'lucide-react';

const MissionVision = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  const coreValues = [
    { icon: '🔗', title: 'Synergistic Integration', desc: 'Integrating faith and knowledge for profound understanding and holistic perspective.' },
    { icon: '🚀', title: 'Transformative Leadership', desc: 'Empowering students to drive positive change, innovation, and progress in communities and the world.' },
    { icon: '🌱', title: 'Holistic Development', desc: 'Nurturing intellectual, spiritual, and personal growth for students to reach their full potential.' },
    { icon: '🤝', title: 'Purposeful Engagement', desc: 'Fostering community engagement, service, and social responsibility rooted in enduring values.' },
    { icon: '💡', title: 'Excellence and Innovation', desc: 'Encouraging excellence, innovation, and creativity for critical thinking and effective problem-solving.' },
    { icon: '🌍', title: 'Global Citizenship', desc: 'Cultivating global citizenship, responsibility, and stewardship for navigating complexities.' },
    { icon: '⭐', title: 'Exemplary Character', desc: 'Promoting exemplary character, integrity, and role modelling for positive influence.' },
    { icon: '📈', title: 'Continuous Growth', desc: 'Fostering continuous learning, growth, and self-improvement for adaptability and resilience.' },
  ];

  const visionPillars = [
    { number: '1', title: 'Global Leadership with Local Roots', desc: 'We envision our alumni as ethical pioneers across science, technology, the arts, and governance. Whether helming global enterprises or spearheading community initiatives, they will serve as ambassadors of Hyderabad\'s heritage and the excellence of the Apex spirit.' },
    { number: '2', title: 'Architects of Innovation', desc: 'In an era of rapid transformation, our graduates will remain at the vanguard of progress. We nurture individuals who do not merely follow trends but engineer sustainable solutions to the world\'s most pressing challenges.' },
    { number: '3', title: 'Compassionate Global Citizenship', desc: 'Our alumni will stand as pillars of empathy and peace. We define true success by the ability to uplift others, ensuring that the harmony cultivated through an Apex education creates a ripple effect of kindness throughout society.' },
    { number: '4', title: 'An Enduring Network of Excellence', desc: 'By 2050, the Apex Alumni Network will thrive as a global powerhouse of mentorship. This cycle of success ensures that our seasoned graduates return to nourish the potential of new students, securing a perpetual legacy of growth.' },
    { number: '5', title: 'A Living Legacy of Values', desc: 'We see our students becoming transformative leaders who carry their faith and moral convictions into every endeavour. Over the next 25 years, they will serve as exemplary role models, inspiring future generations through their integrity and character.' },
  ];

  return (
    <>
      <PageHero
        title="Mission & Vision"
        subtitle="Guiding principles that drive our educational excellence"
        breadcrumbs={[{ label: 'About Us', href: '#' }, { label: 'Mission & Vision' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Motto */}
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block bg-gradient-to-r from-primary/10 via-secondary/20 to-primary/10 px-8 py-6 rounded-2xl border border-secondary/20 shadow-elegant">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">Our Motto</h2>
              <p className="text-xl md:text-2xl font-heading italic text-primary">
                Ignite, Inspire, Achieve: "The Apex Way"
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Mission */}
            <div
              className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12 rounded-3xl border border-primary/20"
              data-aos="fade-right"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Providing transformative education integrating faith and knowledge for holistic growth, visionary leadership, and purposeful community engagement.
              </p>
            </div>

            {/* Vision */}
            <div
              className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 md:p-12 rounded-3xl border border-secondary/20"
              data-aos="fade-left"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Empowering students to become transformative leaders, global citizens, and role models driving positive change and sustainable development worldwide.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The pillars that guide our educational philosophy and shape the character of our students
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-card p-6 rounded-2xl border border-border text-center hover:shadow-elegant transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision 2050 */}
          <div className="bg-gradient-to-br from-muted/50 to-background rounded-3xl p-8 md:p-12 border border-border">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Our Vision: The Legacy of <span className="text-primary">2050</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Beyond examinations, we prepare our students for the journey of life. As we look toward the next quarter-century, we envision the "Apex Legacy" manifesting through five strategic pillars:
              </p>
            </div>

            <div className="space-y-6">
              {visionPillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="flex gap-6 items-start bg-card p-6 rounded-2xl border border-border"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    {pillar.number}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{pillar.title}</h3>
                    <p className="text-muted-foreground">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVision;
