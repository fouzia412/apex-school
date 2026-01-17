import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PageHero } from '@/components/common/PageHero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Eye, Lightbulb, Palette, Star, CheckCircle } from 'lucide-react';

const PrePrimary = () => {
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
        title="Curriculum"
        subtitle="Holistic Learning & Global Exposure"
        breadcrumbs={[{ label: 'Academics', href: '#' }, { label: 'Curriculum' }]}
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="pre-primary" className="max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-3 w-full max-w-lg mx-auto mb-12">
              <TabsTrigger value="pre-primary">Pre-Primary & Primary</TabsTrigger>
              <TabsTrigger value="primary-assessment">Primary (3-5)</TabsTrigger>
              <TabsTrigger value="middle-secondary">Middle & Secondary</TabsTrigger>
            </TabsList>

            {/* Pre-Primary & Primary (K-2) */}
            <TabsContent value="pre-primary">
              <div data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">
                  Pre-Primary & Primary: Holistic Learning & Global Exposure
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-4">Classes K–2</p>
                <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-12">
                  At Apex, pre-primary learning is a joyful journey of discovery. We believe in continuous growth rather than high-stakes testing, focusing on nurturing curiosity and global citizenship.
                </p>

                {/* How We Assess */}
                <div className="bg-card p-8 rounded-3xl border border-border mb-8" data-aos="fade-up" data-aos-delay="100">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                    <Eye className="w-6 h-6 text-primary" />
                    How We Assess Progress
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We move beyond grades to look at the "whole child" through:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: 'Daily Engagement', desc: 'Active participation and social interactions.' },
                      { title: 'Curiosity & Awareness', desc: 'General knowledge and the drive to ask "why."' },
                      { title: 'Creative Execution', desc: 'The quality, effort, and creativity in daily work.' },
                      { title: 'Concept Mastery', desc: 'Moving from rote memorization to real-world application.' },
                    ].map((item, idx) => (
                      <div key={item.title} className="flex items-start gap-3" data-aos="fade-up" data-aos-delay={150 + idx * 50}>
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-foreground">{item.title}:</span>{' '}
                          <span className="text-muted-foreground">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reporting & Recognition */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 rounded-3xl border border-secondary/20" data-aos="fade-right">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
                      <Star className="w-6 h-6 text-secondary" />
                      Reporting & Recognition
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong>Progress Profiles:</strong> Comprehensive reports shared with parents annually.</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span><strong>Certificates of Excellence:</strong> Awarded to celebrate outstanding achievements and milestones.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-3xl border border-primary/20" data-aos="fade-left">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
                      <Lightbulb className="w-6 h-6 text-primary" />
                      Global Connections
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>International Standards:</strong> A curriculum integrated with global best practices.</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Exchange Programs:</strong> National and international workshops and cultural exchanges.</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Diverse Exposure:</strong> Immersing students in international languages, arts, and traditions.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Primary School (3-5) */}
            <TabsContent value="primary-assessment">
              <div data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">
                  Primary School: Comprehensive Evaluation
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-4">Classes 3–5</p>
                <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-12">
                  We adopt a Continuous Assessment approach to track progress and foster a growth mindset without overwhelming young learners.
                </p>

                <div className="bg-card p-8 rounded-3xl border border-border" data-aos="fade-up" data-aos-delay="100">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Assessment Type and Focus Area</h3>
                  <div className="space-y-4">
                    {[
                      { type: 'Regular Written Tests', focus: 'Evaluating core understanding and application of concepts.' },
                      { type: 'Internal Assessments', focus: 'Assessing class participation, creative projects, and assignments.' },
                      { type: 'Term-End Assessments', focus: 'A holistic summary of academic performance twice a year.' },
                    ].map((item, idx) => (
                      <div 
                        key={item.type} 
                        className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl"
                        data-aos="fade-up"
                        data-aos-delay={150 + idx * 50}
                      >
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-foreground">{item.type}</h4>
                          <p className="text-muted-foreground">{item.focus}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Middle & Secondary */}
            <TabsContent value="middle-secondary">
              <div data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">
                  Middle & Secondary School: Holistic Development
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-4">Classes VI–IX</p>
                <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-12">
                  Our curriculum for older students aligns strictly with CBSE Guidelines, ensuring academic rigor while maintaining a focus on 21st-century skills.
                </p>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  {/* Scholastic Areas */}
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-3xl border border-primary/20" data-aos="fade-right">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-primary" />
                      Scholastic Areas (Academic Core)
                    </h3>
                    <p className="text-muted-foreground mb-4">Students engage in a robust academic program including:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        'Languages: English, Hindi, and Telugu.',
                        'Core Sciences: Mathematics, Physics, Chemistry, and Biology.',
                        'Humanities: History, Geography, Civics, and Economics.',
                        'Technology & Future Skills: STEM, Coding, Robotics, Arduino, and AI.',
                        'Vocational Electives: Financial Literacy, Fashion Designing, and Home Science.',
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Co-Scholastic Areas */}
                  <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 rounded-3xl border border-secondary/20" data-aos="fade-left">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
                      <Palette className="w-6 h-6 text-secondary" />
                      Co-Scholastic Areas (Life & Skill Development)
                    </h3>
                    <p className="text-muted-foreground mb-4">We believe education happens both inside and outside the classroom:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        'Life Skills: Developing critical thinking, social intelligence, and emotional resilience.',
                        'Values & Ethics: Cultivating respect for peers, teachers, and the environment.',
                        'Health & Wellness: Sports, Yoga, and NCC (National Cadet Corps).',
                        'The Arts: Creative expression through Music, Dance, Drama, and Visual Arts.',
                        'Work Experience: Hands-on practical skills and community-based projects.',
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Evaluation Methodology */}
                <div className="bg-card p-8 rounded-3xl border border-border" data-aos="fade-up">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-6">Evaluation Methodology</h3>
                  <p className="text-muted-foreground mb-4">For Classes VI–IX, we utilize a balanced mix of formal and informal evaluations:</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { title: 'Periodic Tests', desc: 'Frequent check-ins to ensure students stay on track.' },
                      { title: 'Portfolio & Lab Work', desc: 'Evaluation of practical application and project files.' },
                      { title: 'Formal Examinations', desc: 'Structured term-end exams to prepare students for board-level rigor.' },
                    ].map((item, idx) => (
                      <div key={item.title} className="bg-muted/50 p-4 rounded-xl text-center" data-aos="zoom-in" data-aos-delay={idx * 100}>
                        <h4 className="font-heading font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default PrePrimary;
