import React from "react";
import RepairsCalloutsHero from "../components/calloutGateRepairs/RepairsCalloutsHero";
import CalloutCoverageMap from "../components/calloutGateRepairs/CalloutCoverageMap";
import RepairsServiceIntro from "../components/calloutGateRepairs/RepairsServiceIntro";
import CalloutPricing from "../components/calloutGateRepairs/CalloutPricing";
import ServiceAreaDetails from "../components/calloutGateRepairs/ServiceAreaDetails";
import GateNotInstalled from "../components/calloutGateRepairs/GateNotInstalled";

const Page = () => {
  return (
    <div>
      <RepairsCalloutsHero />
      <CalloutCoverageMap />
      <CalloutPricing />
      <RepairsServiceIntro />
      {/* <ServiceAreaDetails />
      <GateNotInstalled /> */}
    </div>
  );
};

export default Page;
