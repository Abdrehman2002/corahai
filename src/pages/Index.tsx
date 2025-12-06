import { Hero } from "@/components/Hero";
import { ProblemSolutionFeatures } from "@/components/ProblemSolutionFeatures";
import { WhoWeServe } from "@/components/WhoWeServe";
import { FeaturedDashboard } from "@/components/FeaturedDashboard";
import PricingSection from "@/components/ui/pricing-section";
import { Products } from "@/components/Products";
import { AboutFounder } from "@/components/AboutFounder";
import { Footer } from "@/components/Footer";
import { InstagramChatButton } from "@/components/InstagramChatButton";

const Index = () => {
  return (
    <main className="bg-background">
      <Hero />
      <FeaturedDashboard />
      <ProblemSolutionFeatures />
      <Products />
      <PricingSection />
      <WhoWeServe />
      <AboutFounder />
      <Footer />
      <InstagramChatButton />
    </main>
  );
};

export default Index;
