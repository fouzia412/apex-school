import { HeroSection } from '@/components/home/HeroSection';
import { WelcomeSection } from '@/components/home/WelcomeSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { StatsSection } from '@/components/home/StatsSection';
import { CampusLifeSection } from '@/components/home/CampusLifeSection';
import { CampusSlider } from '@/components/home/CampusSlider';
import { PrincipalMessageSection } from '@/components/home/PrincipalMessageSection';
import { NewsSection } from '@/components/home/NewsSection';
import { AchievementsSection } from '@/components/home/AchievementsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <WhyChooseUsSection />
      {/* <StatsSection /> */}
      <CampusLifeSection />
      <CampusSlider />
      <PrincipalMessageSection />
      {/* <NewsSection /> */}
      <AchievementsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Index;
