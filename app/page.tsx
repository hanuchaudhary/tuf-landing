import { BrandsSection } from "@/components/Brands";
import { CompareSection } from "@/components/CompareSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { PricingPlans } from "@/components/PricingPlans";
import { TabsSection } from "@/components/TabsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { VideoSection } from "@/components/VideoSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BrandsSection/>
      <TabsSection />
      <VideoSection/>
      <PricingPlans/>
      <TestimonialsSection/>
      <CompareSection/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}
