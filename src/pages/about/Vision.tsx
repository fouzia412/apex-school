import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PageHero } from "@/components/common/PageHero";
import { Eye } from "lucide-react";

const Vision = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  const pillars = [
    {
      number: "1",
      title: "Global Leadership with Local Roots",
      desc: "We envision our alumni as ethical pioneers across science, technology, arts, and governance, carrying forward the legacy of excellence while remaining deeply connected to their cultural heritage."
    },
    {
      number: "2",
      title: "Architects of Innovation",
      desc: "Our graduates will remain at the forefront of progress, creating solutions that address the world’s most pressing social, environmental, and technological challenges."
    },
    {
      number: "3",
      title: "Compassionate Global Citizenship",
      desc: "Success is defined not only by achievement but also by empathy, service, and the ability to uplift communities and inspire positive change."
    },
    {
      number: "4",
      title: "Enduring Network of Excellence",
      desc: "By 2050, we envision a powerful global alumni network fostering mentorship, collaboration, and lifelong learning."
    },
    {
      number: "5",
      title: "Living Legacy of Values",
      desc: "Our students will lead with integrity, ethical responsibility, and a commitment to values that inspire future generations."
    }
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
        title="Our Vision"
        subtitle="Shaping the leaders of tomorrow"
        breadcrumbs={[{ label: "About Us", href: "#" }, { label: "Vision" }]}
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

          {/* Vision Main Section */}
          <div
            className="max-w-3xl mx-auto mb-16 bg-gradient-to-br from-secondary/90 to-secondary/100 p-8 md:p-12 rounded-3xl border border-secondary/20 shadow-lg text-center"
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#042431] flex items-center justify-center text-secondary">
                <Eye className="w-8 h-8" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl text-[#042431] font-bold mb-6">
             Our Vision 
            </h2>

            <p className="text-[#042431] text-lg leading-relaxed">
              Empowering students to become transformative leaders, global citizens, and role models driving positive change and sustainable development worldwide.
            </p>
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

export default Vision;