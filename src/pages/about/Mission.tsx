import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PageHero } from "@/components/common/PageHero";
import { Target, Sparkles, Users, Lightbulb, Globe } from "lucide-react";

const Mission = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  const missionValues = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Transformative Education",
      desc: "Delivering an educational experience that blends academic excellence with personal development."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Impact",
      desc: "Encouraging students to actively engage with society and create meaningful change."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation & Creativity",
      desc: "Promoting curiosity, creativity, and innovative thinking to solve real-world challenges."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Perspective",
      desc: "Preparing students with a global mindset while respecting cultural diversity."
    },
  ];
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

  return (
    <>
      <PageHero
        title="Our Mission"
        subtitle="The purpose that drives our commitment to excellence"
        breadcrumbs={[{ label: "About Us", href: "#" }, { label: "Mission" }]}
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

          {/* Main Mission Card */}
          <div
            className="max-w-3xl mx-auto bg-[#042431] p-10 rounded-3xl border border-border shadow-lg text-center"
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#042431]">
                <Target className="w-8 h-8" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-white/90 text-lg leading-relaxed">
              Providing transformative education integrating faith and knowledge for holistic growth, visionary leadership, and purposeful community engagement.
            </p>
          </div>

                    {/* Core Values */}
          <div className="mb-20 mt-20">
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

          {/* Mission Highlights */}
          {/* <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionValues.map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-card border border-border p-6 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Mission;