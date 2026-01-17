import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GraduationCap, Heart, Shield, Building2, CheckCircle } from 'lucide-react';

export const WhyChooseUsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  const reasons = [
    {
      icon: GraduationCap,
      title: 'Academic Excellence & Future Readiness',
      description: 'We provide a rigorous 21st-century education that goes beyond textbooks to prepare students for global success.',
      features: [
        'Integrated Curriculum: A blend of academic rigor with a focus on critical thinking, problem-solving, and creativity.',
        'Global Benchmarking: Certified Cambridge Exams and dedicated coaching for Competitive Exams.',
        'Expert Faculty: Learning led by experienced, dedicated educators in state-of-the-art classrooms.',
        'Personalized Growth: Small class sizes and individualized learning support to ensure no child is left behind.',
      ],
      color: 'primary',
    },
    {
      icon: Heart,
      title: 'Holistic Development & Values',
      description: 'At APEX, we believe in educating the heart as much as the mind. We focus on well-rounded growth through:',
      features: [
        'Extensive Extra-Curricular: Vibrant clubs, STEM workshops, debates, and arts.',
        'Faith & Character: A strong emphasis on moral values, character building, and social responsibility.',
        'Leadership: Real-world opportunities for community service and leadership roles.',
        'Cultural Vibrancy: Regular celebrations and programs that honor our diverse traditions.',
      ],
      color: 'secondary',
    },
    {
      icon: Shield,
      title: 'A Safe & Nurturing Environment',
      description: "Your child's safety and well-being are our highest priorities. We provide a space where students feel secure to explore and learn.",
      features: [
        'Caring Atmosphere: A supportive environment guided by dedicated counsellors and professional staff.',
        'Modern Security: A secure campus equipped with advanced surveillance and safety measures.',
        'Discipline & Respect: A culture rooted in mutual respect and positive behaviour.',
      ],
      color: 'primary',
    },
    {
      icon: Building2,
      title: 'World-Class Infrastructure',
      description: 'Our campus is designed to inspire curiosity and provide students with the best tools for modern learning.',
      features: [
        'Smart Learning Spaces: Well-ventilated, digital-ready classrooms and a modern Auditorium.',
        'Advanced Labs: High-tech STEM and computer labs, plus portable science laboratories for hands-on experimentation.',
        'Knowledge Hub: A well-stocked library with a vast collection of resources to foster a love for reading.',
        'Elite Sports Facilities: Dedicated grounds and equipment to promote physical fitness and teamwork.',
      ],
      color: 'secondary',
    },
  ];

  return (
    <section className=" bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient-gold">APEX?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nurturing Minds, Building Character, Inspiring Excellence.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="bg-card rounded-3xl border border-border p-8 hover:shadow-elegant transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`w-16 h-16 rounded-2xl bg-${reason.color}/10 flex items-center justify-center mb-6`}>
                <reason.icon className={`w-8 h-8 text-${reason.color}`} />
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {reason.description}
              </p>
              <ul className="space-y-3">
                {reason.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
