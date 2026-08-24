import React from "react";
import GateAutomationHero from "../components/gateAutomation/GateAutomationHero";
import AutomationOverview from "../components/gateAutomation/AutomationOverview";
import SwingGateAutomation from "../components/gateAutomation/SwingGateAutomation";
import AboveGroundVsUnderground from "../components/gateAutomation/AboveGroundVsUnderground";
import SlidingGateAutomation from "../components/gateAutomation/SlidingGateAutomation";
import WhichAutomationIsRight from "../components/gateAutomation/WhichAutomationIsRight";
import GateAutomationCTA from "../components/gateAutomation/GateAutomationCTA";

const Page = () => {
  return (
    <main>
      <GateAutomationHero />
      {/* <AutomationOverview /> */}
      <SwingGateAutomation />
      <AboveGroundVsUnderground />
      <SlidingGateAutomation />
      <WhichAutomationIsRight />
      <GateAutomationCTA />
    </main>
  );
};

export default Page;
