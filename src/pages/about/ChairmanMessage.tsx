import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PageHero } from '@/components/common/PageHero';

const ChairmanMessage = () => {
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
        title="Chairman's Message"
        subtitle="Words of wisdom from our Chairman"
        breadcrumbs={[{ label: 'About Us', href: '#' }, { label: "Chairman's Message" }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="bg-card p-8 md:p-12 rounded-3xl border border-border"
              data-aos="fade-up"
            >
              <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="100">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary to-secondary/60 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-secondary-foreground">C</span>
                </div>
                <h3 className="font-heading font-bold text-xl">From the Chairman's Desk</h3>
                <p className="text-muted-foreground">The Apex Educational Society</p>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p data-aos="fade-up" data-aos-delay="200">Dear Members of the Apex Family,</p>
                <p data-aos="fade-up" data-aos-delay="300">
                  It is with great pride and joy that I address you as the Chairman of Apex The School, Hyderabad. Our institution has been built on the foundation of excellence, integrity, and a commitment to nurturing future leaders.
                </p>
                <p data-aos="fade-up" data-aos-delay="400">
                  At Apex, we believe that education is not merely about academic achievement. It is about developing the whole person - intellectually, emotionally, socially, and morally. Our vision is to create an environment where every child can reach their personal "Apex".
                </p>
                <p data-aos="fade-up" data-aos-delay="500">
                  The journey of Apex The School began with a humble vision to provide quality education rooted in values. Today, we stand proud as a flourishing sanctuary of learning, marking the start of a promising journey for every student who walks through our gates.
                </p>
                <p data-aos="fade-up" data-aos-delay="600">
                  I extend my heartfelt gratitude to our dedicated faculty, supportive parents, and enthusiastic students who have been instrumental in making Apex The School what it is today.
                </p>
                <p 
                  className="font-semibold text-foreground text-right mt-8"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  With warm regards,<br />
                  Chairman<br />
                  The Apex Educational Society
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChairmanMessage;
