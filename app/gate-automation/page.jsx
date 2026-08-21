import React from "react";
import GateAutomationHero from "../components/gateAutomation/GateAutomationHero";
import Navbar from "../shared/Navbar";
import AutomationOverview from "../components/gateAutomation/AutomationOverview";
import SwingGateAutomation from "../components/gateAutomation/SwingGateAutomation";
import AboveGroundVsUnderground from "../components/gateAutomation/AboveGroundVsUnderground";
import SlidingGateAutomation from "../components/gateAutomation/SlidingGateAutomation";
import WhichAutomationIsRight from "../components/gateAutomation/WhichAutomationIsRight";
import GateAutomationCTA from "../components/gateAutomation/GateAutomationCTA";
import Footer from "../shared/Footer";

const Page = () => {
  return (
    <main>
      <Navbar />
      <GateAutomationHero />
      <AutomationOverview />
      <SwingGateAutomation />
      <AboveGroundVsUnderground />
      <SlidingGateAutomation />
      <WhichAutomationIsRight />
      <GateAutomationCTA />
      <Footer/>
    </main>
  );
};

export default Page;
