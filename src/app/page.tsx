import BreastfeedingFeatures from "@/features/main/components/BreastfeedingFeatures";
import DietPlan from "@/features/main/components/DietPlan";
import FAQ from "@/features/main/components/FAQ";
import HeroSection from "@/features/main/components/HeroSection";
import LastedArticles from "@/features/main/components/LastedArticles";
import OurFeatures from "@/features/main/components/OurFeatures";
import PeriodFeatures from "@/features/main/components/PeriodFeatures";
import PregnancyFeatures from "@/features/main/components/PregnancyFeatures";
import SeeMore from "@/features/main/components/SeeMore";
import Testimonials from "@/features/main/components/Testimonials";
import TherapyClinic from "@/features/main/components/TherapyClinic";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="w-full max-w-7xl 2xl:max-w-[1366px] mx-auto">
        <OurFeatures />
        <PeriodFeatures />
        <PregnancyFeatures />
        <BreastfeedingFeatures />
        <Testimonials />
        <TherapyClinic />
        <DietPlan />
        <SeeMore />
        <LastedArticles />
      </section>
      <FAQ />
    </main>
  );
}
