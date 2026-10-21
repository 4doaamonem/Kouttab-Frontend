import AboutUsSection from "@/components/AboutUsSection";
import GettingStartedSection from "@/components/GettingStartedSection";
import Hero from "@/components/Hero";
import LearningJourney from "@/components/LearningJourney";
import LearningPathSection from "@/components/LearningPathSection";
import TajweedSection from "@/components/TajweedSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <LearningJourney />
      <TajweedSection />
      <LearningPathSection />
      <GettingStartedSection />
      <AboutUsSection/>
    </div>
  );
}
