import React from "react";
import GatesHero from "../components/gates/GatesHero";
import GateTypes from "../components/gates/GateTypes";
import WhichGateIsRight from "../components/gates/WhichGateIsRight";
import GateAutomationLink from "../components/gates/GateAutomationLink";

const Page = () => {
  return (
    <main>
      <GatesHero />
      <GateTypes />
      {/* <GateAutomationLink />
      <WhichGateIsRight /> */}
    </main>
  );
};

export default Page;
