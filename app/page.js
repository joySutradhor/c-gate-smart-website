import FAQSection from "./components/home/FAQSection";
import FeaturedProjects from "./components/home/FeaturedProjects";
import FinalCTA from "./components/home/FinalCTA";
import GateAutomation from "./components/home/GateAutomation";
import GateServicing from "./components/home/GateServicing";
import GateSolutions from "./components/home/GateSolutions";
import Hero from "./components/home/Hero";
import OurProcess from "./components/home/OurProcess";
import Testimonials from "./components/home/Testimonials";
import TrustIntroduction from "./components/home/TrustIntroduction";
import WhyChooseGateSmart from "./components/home/WhyChooseGateSmart";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurProcess />
      <TrustIntroduction />
      <GateSolutions />
      <GateAutomation />
      <WhyChooseGateSmart />
      <FeaturedProjects />
      {/* <GateServicing /> */}
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
