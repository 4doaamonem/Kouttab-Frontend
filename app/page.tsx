import AboutUsSection from "@/components/AboutUsSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
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
      <AboutUsSection />
      <AppDownloadSection />
      <BlogPreviewSection />
      <FAQSection />
      <ContactSection/>
    </div>
  );
}
