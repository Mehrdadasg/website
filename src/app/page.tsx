import BreastfeedingFeatures from "@/features/main/components/BreastfeedingFeatures";
import CommentSwiper from "@/features/main/components/CommentSwiper";
import DietPlan from "@/features/main/components/DietPlan";
import HeroSection from "@/features/main/components/HeroSection";
import OurFeatures from "@/features/main/components/OurFeatures";
import PeriodFeatures from "@/features/main/components/PeriodFeatures";
import PregnancyFeatures from "@/features/main/components/PregnancyFeatures";
import TherapyClinic from "@/features/main/components/TherapyClinic";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurFeatures />
      <PeriodFeatures />
      <PregnancyFeatures />
      <BreastfeedingFeatures />
      <CommentSwiper />
      <TherapyClinic />
      <DietPlan/>
    </main>
  );
}
