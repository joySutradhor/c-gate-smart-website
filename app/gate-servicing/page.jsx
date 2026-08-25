import React from "react";
import GateServicingHero from "../components/gateServicing/GateServicingHero";
import WhyGateServicing from "../components/gateServicing/WhyGateServicing";
import ServicingFrequency from "../components/gateServicing/ServicingFrequency";
import GateServiceProcess from "../components/gateServicing/GateServiceProcess";
import GateServicingRisks from "../components/gateServicing/GateServicingRisks";
import WarrantyAndHelp from "../components/gateServicing/WarrantyAndHelp";

const Page = () => {
  return (
    <main>
      <GateServicingHero />
      <WhyGateServicing />
      <ServicingFrequency />
      <GateServiceProcess />
      <GateServicingRisks />
      <WarrantyAndHelp />
    </main>
  );
};

export default Page;
