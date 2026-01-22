import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PageHero } from '@/components/common/PageHero';
import { ChevronDown, AlertTriangle, FileText, HelpCircle, BookOpen } from 'lucide-react';

// --- Accordion Component ---
const AccordionItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden mb-3 transition-all duration-200">
      <button
        className="w-full flex items-center justify-between p-5 text-left font-medium text-foreground hover:bg-muted/50 transition-colors"
        onClick={onClick}
      >
        <span className="pr-4">{title}</span>
        <ChevronDown 
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-5 pt-0 text-muted-foreground border-t border-border/50 mt-2 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about joining the Apex family."
        breadcrumbs={[{ label: 'Admissions', href: '#' }, { label: "FAQ" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Section 1: Admission Process */}
          <div className="mb-12" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6" /> Admission Process
            </h3>
            
            <AccordionItem title="1. What is the admission schedule?" isOpen={openIndex === 0} onClick={() => handleToggle(0)}>
  <div className="overflow-x-auto">
    <table className="w-full text-sm border-collapse border border-border">
      <thead className="bg-muted">
        <tr>
          <th className="p-2 border border-border">Class</th>
          <th className="p-2 border border-border">Process</th>
          <th className="p-2 border border-border">Month</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Pre-Nursery</td><td className="p-2 border">Random Selection (Draw of lots)</td><td className="p-2 border">November/December</td></tr>
        <tr><td className="p-2 border">Nursery</td><td className="p-2 border">Random Selection (Draw of lots)</td><td className="p-2 border">November/December</td></tr>
        <tr><td className="p-2 border">Prep</td><td className="p-2 border">Random Selection (Draw of lots)</td><td className="p-2 border">November/December</td></tr>
        <tr><td className="p-2 border">Grade 1</td><td className="p-2 border">Random Selection (Draw of lots)</td><td className="p-2 border">November/December</td></tr>
        <tr><td className="p-2 border">Grade 2 to 7</td><td className="p-2 border">Preparedness of Child (Subject to Vacancy)</td><td className="p-2 border">March/April</td></tr>
        <tr><td className="p-2 border">Grade 8 & 9</td><td className="p-2 border">Screening Test (Subject to Vacancy)</td><td className="p-2 border">March/April</td></tr>
      </tbody>
    </table>
  </div>
</AccordionItem>

<AccordionItem title="2. What are the age criteria?" isOpen={openIndex === 1} onClick={() => handleToggle(1)}>
  <ul className="list-disc pl-5 space-y-1">
    <li>Pre-Nur: 3 years by 30th June, 2026</li>
    <li>Nursery / PP1 / LKG: 4 years by 30th June, 2026</li>
    <li>Prep / PP2 / UKG: 5 years by 30th June, 2026</li>
    <li>Grade 1: 6 years by 30th June, 2026</li>
  </ul>
</AccordionItem>

<AccordionItem title="3. What is the teacher-student ratio in Pre-Primary?" isOpen={openIndex === 2} onClick={() => handleToggle(2)}>
  The teacher-student ratio in the Pre-Primary classes is 1:15.
</AccordionItem>

<AccordionItem title="4. What is the class strength?" isOpen={openIndex === 3} onClick={() => handleToggle(3)}>
  30 students per section.
</AccordionItem>

<AccordionItem title="5. Will there be an increase in the fees year on year?" isOpen={openIndex === 4} onClick={() => handleToggle(4)}>
  Yes, approximately 10% year on year.
</AccordionItem>

<AccordionItem title="6. What documents are required at the time of admission?" isOpen={openIndex === 5} onClick={() => handleToggle(5)}>
  Birth Certificate, Student’s Aadhaar Card, Parent’s Aadhaar Card, Student’s Passport Size Photos (4), Certificate of category (if applicable) and previous Report Cards.
</AccordionItem>

<AccordionItem title="7. Can we visit the campus to see the infrastructure?" isOpen={openIndex === 6} onClick={() => handleToggle(6)}>
  During the admission process, parents can visit the campus with prior appointment.
</AccordionItem>
          </div>

          {/* Section 2: Academics & Curriculum */}
          <div className="mb-12" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6" /> Academics & Curriculum
            </h3>
            
            <AccordionItem title="8. Which curriculum is offered in APEX?" isOpen={openIndex === 7} onClick={() => handleToggle(7)}>
  Global Curriculum, State Board Curriculum and CBSE Curriculum.
</AccordionItem>

<AccordionItem title="9. If we have queries about courses & subjects, whom should we contact?" isOpen={openIndex === 8} onClick={() => handleToggle(8)}>
  During the admission process, the counsellor will be available at the school office or can be contacted via email.
</AccordionItem>

<AccordionItem title="10. What are the languages offered?" isOpen={openIndex === 9} onClick={() => handleToggle(9)}>
  <table className="w-full text-sm border border-border">
    <thead className="bg-muted">
      <tr>
        <th className="p-2 border">Grades</th>
        <th className="p-2 border">Language 1</th>
        <th className="p-2 border">Language 2</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="p-2 border">Prep / UKG</td><td className="p-2 border">Hindi / Telugu</td><td className="p-2 border">Hindi / Telugu / Urdu</td></tr>
      <tr><td className="p-2 border">Class 6th</td><td className="p-2 border">Hindi / Telugu</td><td className="p-2 border">Hindi / Telugu / Urdu</td></tr>
    </tbody>
  </table>
</AccordionItem>

          </div>

           {/* Section 3: School Life & Facilities */}
           <div className="mb-12" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6" /> School Life & Facilities
            </h3>
            
            <AccordionItem title="11. What are the sports offered?" isOpen={openIndex === 10} onClick={() => handleToggle(10)}>
  Outdoor: Basketball, Football, Cricket, Tennis.  
  Indoor: Table Tennis, Carrom and Chess.
</AccordionItem>

<AccordionItem title="12. What activities are offered?" isOpen={openIndex === 11} onClick={() => handleToggle(11)}>
  Zumba, Martial Arts and Yoga.
</AccordionItem>

<AccordionItem title="13. What are the school timings?" isOpen={openIndex === 12} onClick={() => handleToggle(12)}>
  <ul className="list-disc pl-5">
    <li>Pre-Nur to Prep: 8:45 am – 12:30 pm</li>
    <li>Class 1 to 12: 8:45 am – 3:30 pm</li>
  </ul>
</AccordionItem>

<AccordionItem title="14. Is APEX Hyderabad residential or day scholar?" isOpen={openIndex === 13} onClick={() => handleToggle(13)}>
  APEX Hyderabad is a Day Scholar school.
</AccordionItem>

<AccordionItem title="15. How many breaks do students have?" isOpen={openIndex === 14} onClick={() => handleToggle(14)}>
  Two breaks: a short 20-minute break in the morning and a 40-minute lunch break.
</AccordionItem>

          </div>

          {/* Section 4: General Policies */}
          <div className="mb-12" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" /> Policies & Payments
            </h3>
            <AccordionItem title="16. What are the modes of fee payment?" isOpen={openIndex === 15} onClick={() => handleToggle(15)}>
  Credit/Debit Card, UPI, Net Banking or Cheque/Demand Draft at the school accounts office.
</AccordionItem>

<AccordionItem title="17. What medical facilities are available?" isOpen={openIndex === 16} onClick={() => handleToggle(16)}>
  The school has a well-equipped First Aid room with a paramedic. Parents are informed immediately. In severe cases, students are taken to the tie-up hospital with parental consent.
</AccordionItem>

<AccordionItem title="18. How does the school communicate with parents?" isOpen={openIndex === 17} onClick={() => handleToggle(17)}>
  Communication is done via Website, School Magazine, SMS, Mobile App notifications and written notes. PTMs are conducted four times a year.
</AccordionItem>

<AccordionItem title="19. Are educational trips organized?" isOpen={openIndex === 18} onClick={() => handleToggle(18)}>
  Yes, both national and international educational trips are organized based on age appropriateness.
</AccordionItem>

<AccordionItem title="20. Issues with filling the registration form?" isOpen={openIndex === 19} onClick={() => handleToggle(19)}>
  The online form can be filled anytime. If issues persist, please email Info@apextheschool.in after reviewing the guidelines on the website.
</AccordionItem>

<AccordionItem title="21. Payment issues after submitting the form?" isOpen={openIndex === 20} onClick={() => handleToggle(20)}>
  No. The form is valid only after online payment of the Registration & Processing Fee.
</AccordionItem>

<AccordionItem title="22. How to communicate during admissions?" isOpen={openIndex === 21} onClick={() => handleToggle(21)}>
  Please write to <strong>Info@apextheschool.in</strong> mentioning Application Number, Candidate Name, Parent Name and Class Applied For. No queries are entertained in person or via phone.
</AccordionItem>

          </div>

          {/* IMPORTANT NOTICE CARD */}
          <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/50 rounded-2xl p-8" data-aos="zoom-in">
             <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full text-red-600 dark:text-red-400">
                  <AlertTriangle size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-700 dark:text-red-400 mb-3">
                    CRITICAL: Consistency in Student Name
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    As per Government norms, a <strong>Permanent Education Number (PEN)</strong> and <strong>APAAR ID</strong> are mandatory for every student. Future educational records will be tracked via these IDs.
                  </p>
                  <div className="bg-background p-4 rounded-lg border border-border">
                    <p className="font-semibold text-foreground mb-2">Parents must ensure the child's name is IDENTICAL in:</p>
                    <ul className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Birth Certificate</li>
                      <li>Aadhaar Card</li>
                      <li>School Records (Registration Form)</li>
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

export default FaqPage;