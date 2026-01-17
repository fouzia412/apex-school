import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PageHero } from '@/components/common/PageHero';
import { CheckCircle2, AlertCircle, Wallet, Calendar, BookOpen } from 'lucide-react';

const FeeStructure = () => {
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
        title="Fee Structure"
        subtitle="Transparent policies for your child's future."
        breadcrumbs={[{ label: 'Admissions', href: '#' }, { label: "Fee Structure" }]}
      />

      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-20 left-[-10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Academic Session <span className="text-primary">2026-2027</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At APEX, we maintain a transparent fee policy to ensure parents can plan for their child's future with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* One-Time Charges Card */}
            <div 
              className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              data-aos="fade-right"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Wallet size={120} />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <Wallet size={24} />
                </div>
                <h3 className="text-2xl font-bold font-heading">Initial One-Time Charges</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-border pb-4">
                  <span className="text-muted-foreground font-medium">Prospectus & Registration</span>
                  <span className="text-xl font-bold text-foreground">₹1,000 <span className="text-xs font-normal text-muted-foreground block text-right">(Non-Refundable)</span></span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-4">
                  <span className="text-muted-foreground font-medium">Caution Deposit</span>
                  <span className="text-xl font-bold text-foreground">₹5,000 <span className="text-xs font-normal text-muted-foreground block text-right">(Refundable)</span></span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-muted-foreground font-medium">Admission Fee</span>
                  <span className="text-xl font-bold text-muted-foreground italic">Contact School</span>
                </div>
              </div>
            </div>

            {/* Annual Tuition Card */}
            <div 
              className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              data-aos="fade-left"
            >
               <div className="absolute top-0 right-0 p-4 opacity-10">
                <Calendar size={120} />
              </div>
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-white/20 rounded-xl">
                  <Calendar size={24} />
                </div>
                <h3 className="text-2xl font-bold font-heading">Annual Tuition Fees</h3>
              </div>
              
              <p className="mb-6 opacity-90 text-sm">Payable in three convenient instalments.</p>

              <div className="space-y-5">
                <div className="bg-white/10 p-4 rounded-xl flex justify-between items-center backdrop-blur-sm">
                  <span className="font-medium">Pre-Primary <span className="text-xs opacity-75 block">(Nursery, LKG, UKG)</span></span>
                  <span className="font-bold text-lg">₹ --,---</span>
                </div>
                <div className="bg-white/10 p-4 rounded-xl flex justify-between items-center backdrop-blur-sm">
                  <span className="font-medium">Primary <span className="text-xs opacity-75 block">(Classes I to V)</span></span>
                  <span className="font-bold text-lg">₹ --,---</span>
                </div>
                <div className="bg-white/10 p-4 rounded-xl flex justify-between items-center backdrop-blur-sm">
                  <span className="font-medium">Middle & Secondary <span className="text-xs opacity-75 block">(Classes VI to X)</span></span>
                  <span className="font-bold text-lg">₹ --,---</span>
                </div>
              </div>
            </div>
          </div>

          {/* Important Guidelines */}
          <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
             <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="text-secondary shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-4 text-foreground">Important Notes & Guidelines</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-3">
                        <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                        <span><strong>Exclusions:</strong> Fees mentioned above do not include Books and Uniforms.</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                        <span><strong>Annual Increment:</strong> Fees may be subject to a yearly increase of approximately 10% to account for variations in operational costs.</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                        <span><strong>Payment Schedule:</strong> Detailed instalment deadlines will be provided at the time of admission confirmation.</span>
                      </li>
                    </ul>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default FeeStructure;