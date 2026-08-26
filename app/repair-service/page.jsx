import React from "react";
import GateRepairHero from "../components/repair-service/GateRepairHero";
import RepairServiceBenefits from "../components/repair-service/RepairServiceBenefits";
import CommonGateProblems from "../components/repair-service/CommonGateProblems";
import RepairServiceIncludes from "../components/repair-service/RepairServiceIncludes";
import EmergencyGateRepairs from "../components/repair-service/EmergencyGateRepairs";
import RepairProcess from "../components/repair-service/RepairProcess";
import RepairGateTypes from "../components/repair-service/RepairGateTypes";
import CalloutCoverageAreas from "../components/repair-service/CalloutCoverageAreas";
import RepairVisitInformation from "../components/repair-service/RepairVisitInformation";
import EmergencyRepairCTA from "../components/repair-service/EmergencyRepairCTA";

const Page = () => {
  return (
    <main>
      <GateRepairHero />
      <RepairServiceBenefits />
      <CommonGateProblems />
      <RepairServiceIncludes />
      <EmergencyGateRepairs />  
      <RepairProcess />
      <RepairGateTypes/>
      <CalloutCoverageAreas />
      <RepairVisitInformation />
      <EmergencyRepairCTA />

    </main>
  );
};

export default Page;
