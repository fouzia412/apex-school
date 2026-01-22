import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PageHero } from '@/components/common/PageHero';
import { Quote } from 'lucide-react'; // Assuming you have lucide-react, or I can replace with SVG

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
        subtitle="A Legacy of Learning. A Future of Leadership."
        breadcrumbs={[{ label: 'About Us', href: '#' }, { label: "Chairman's Message" }]}
      />
      
      <section className="py-20 bg-background overflow-hidden relative">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 z-0 hidden lg:block" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Image & Credentials (Sticky on Desktop) */}
            <div 
              className="lg:col-span-4 lg:sticky lg:top-24"
              data-aos="fade-right"
            >
              <div className="bg-card border border-border rounded-3xl p-6 shadow-lg">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-6 bg-muted">
                  {/* Replace src with actual image path */}
                  <img 
                    src="/apex-chairman.png" 
                    alt="Dr. Khaja Abdul Mutalib - Chairman" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold font-heading text-foreground">
                    Dr. Khaja Abdul Mutalib
                  </h3>
                  <p className="text-secondary font-medium mb-4">
                    Educationist | Entrepreneur | Philanthropist
                  </p>
                  
                  <div className="border-t border-border pt-4 mt-4 text-left space-y-3">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Credentials
                    </p>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        Doctorate in Business Management
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        MBA in Marketing & Finance
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        PG Diploma in Planning & Project Management
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Message Content */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Header Section */}
              <div data-aos="fade-up" data-aos-delay="100">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                  From the Chairman’s Desk
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-6">
                  Creating a Sanctuary for <span className="text-secondary">Future Leaders</span>
                </h2>
              </div>

              {/* Featured Quote */}
              <div 
                className="bg-secondary/10 border-l-4 border-secondary p-6 md:p-8 rounded-r-xl"
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                <div className="flex gap-4">
                  <div className="text-secondary opacity-50">
                    {/* SVG Quote Icon if Lucide not installed */}
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                    </svg>
                  </div>
                  <p className="text-lg md:text-xl font-medium text-foreground italic">
                    “Leadership is not about position—it is about purpose, precision, and progress.”
                  </p>
                </div>
              </div>

              {/* Main Text Content */}
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p data-aos="fade-up" data-aos-delay="300">
                  My life’s work has always been guided by one strong belief — <strong className="text-foreground">“EDUCATION CHANGES LIVES”</strong>. Whether it is supporting children, empowering youth, uplifting women, or building stronger communities, I have seen again and again that the only true and lasting source of development is knowledge.
                </p>

                <div data-aos="fade-up" data-aos-delay="400">
                  <h4 className="text-xl font-bold text-foreground mb-3">Welcome to “Apex The School”</h4>
                  <p>
                    Through my experiences in global business and community leadership, I have learned that the greatest investment any society can make is in its young people. <span className="text-foreground font-medium">Apex The School</span> was created with a simple but powerful vision — to build a place where students grow not only academically, but also morally, emotionally, and socially.
                  </p>
                </div>

                <p data-aos="fade-up" data-aos-delay="500">
                  We started small, but with strong values and big dreams. Today, Apex stands as a school committed to shaping confident learners, responsible citizens, and future leaders. Here, we don’t just teach subjects — we teach character, discipline, faith, and purpose.
                </p>

                <p data-aos="fade-up" data-aos-delay="600">
                  I strongly believe that entrepreneurship is the future, and that young people can only become successful entrepreneurs when they are grounded in strong education. Our goal is to give students the knowledge, skills, and mindset to create opportunities.
                </p>

                <p data-aos="fade-up" data-aos-delay="700">
                  Education is the foundation of all progress. At Apex, we work to ensure every child develops the confidence to think independently, the courage to lead, and the humility to serve others. With the dedicated leadership of our Director and teachers, we continue to create a nurturing environment where learning leads to leadership and faith inspires excellence.
                </p>

                <div 
                  className="bg-primary text-primary-foreground p-8 rounded-2xl mt-8 text-center"
                  data-aos="zoom-in" 
                  data-aos-delay="800"
                >
                  <p className="mb-2 opacity-90">I warmly invite you to be part of the Apex family as we prepare the next generation of leaders, innovators, and role models.</p>
                  <h5 className="text-2xl font-bold font-heading mt-4">“Step in to Learn — Step out to Lead.”</h5>
                </div>
              </div>

              {/* Signature */}
              <div className="pt-8 mt-8 border-t border-border flex justify-end" data-aos="fade-up">
                <div className="text-right">
                   {/* Optional: Add a signature image here if available 

[Image of signature]
 */}
                  <h4 className="text-xl font-bold font-heading">Dr. Khaja Abdul Mutalib</h4>
                  <p className="text-muted-foreground">Chairman, The Apex Educational Society</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChairmanMessage;