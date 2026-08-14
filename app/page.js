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
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

export default function Home() {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <Hero />
      <TrustIntroduction />
      <GateSolutions />
      <GateAutomation />
      <WhyChooseGateSmart />
      <OurProcess />
      <FeaturedProjects />
      <GateServicing />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
