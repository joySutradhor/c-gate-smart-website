import AboutCTA from "../components/about/AboutCTA";
import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import ExperienceSection from "../components/about/ExperienceSection";
import OurApproach from "../components/about/OurApproach";
import ServiceArea from "../components/about/ServiceArea";
import WhatWeDo from "../components/about/WhatWeDo";
import WhyGateSmart from "../components/about/WhyGateSmart";

export const metadata = {
  title: "About GateSmart | Bespoke Gates & Gate Automation",
  description:
    "Learn more about GateSmart, our experience, bespoke gate solutions and personal approach to gates, automation and metalwork.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />

      <AboutIntro />

      <WhyGateSmart />

      <ExperienceSection />

      <WhatWeDo />

      <OurApproach />

      <ServiceArea />

      <AboutCTA />
    </main>
  );
}
