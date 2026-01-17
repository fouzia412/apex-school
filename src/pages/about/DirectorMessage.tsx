import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PageHero } from '@/components/common/PageHero';

const DirectorMessage = () => {
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
        title="Director's Message"
        subtitle="Nurturing Mind, Shaping Futures for a Brighter Tomorrow"
        breadcrumbs={[{ label: 'About Us', href: '#' }, { label: "Director's Message" }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 rounded-3xl border border-border"
              data-aos="fade-up"
            >
              <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="100">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/60 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-foreground">D</span>
                </div>
                <h3 className="font-heading font-bold text-xl">From the Director's Desk</h3>
                <p className="text-muted-foreground">Apex The School, Hyderabad</p>
              </div>

              <blockquote 
                className="text-xl md:text-2xl font-heading italic text-primary mb-8 text-center leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                "Nurturing Mind, Shaping Futures for a Brighter Tomorrow"
              </blockquote>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p data-aos="fade-up" data-aos-delay="300">
                  At Apex The School, we believe education is a lifelong journey of growth, nurtured with love, discipline, and care. Our mission is to empower students with a strong foundation, blending academic excellence with real-world experience, and fortifying their character with resilience, modern skills, and moral values.
                </p>
                <p data-aos="fade-up" data-aos-delay="400">
                  We encourage students to discover their potential and believe in themselves. Our commitment is to shape compassionate individuals who excel academically, think critically, and lead with integrity.
                </p>
                <p data-aos="fade-up" data-aos-delay="500">
                  Together, we're building a legacy of excellence, confidence, and moral clarity.
                </p>
                <p 
                  className="font-semibold text-foreground mt-8 text-right"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  With warm regards,<br />
                  Director<br />
                  Apex The School
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DirectorMessage;
