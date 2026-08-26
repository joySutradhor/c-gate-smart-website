import React from "react";
import BespokeGatesHero from "../components/bespoke/BespokeGatesHero";
import DesignedAroundProperty from "../components/bespoke/esignedAroundProperty";
import WhatBespokeMeans from "../components/bespoke/WhatBespokeMeans";
import DesignedAroundYourProperty from "../components/bespoke/DesignedAroundYourProperty";
import GateDesignAndMaterials from "../components/bespoke/GateDesignAndMaterials";
import GateAutomation from "../components/bespoke/GateAutomation";
import BespokeAccessControl from "../components/bespoke/BespokeAccessControl";
import BespokeDesignToInstallation from "../components/bespoke/BespokeDesignToInstallation";
import BespokeGatesCTA from "../components/bespoke/BespokeGatesCTA";

const Page = () => {
  return (
    <main>
      <BespokeGatesHero />
      <DesignedAroundProperty />
      <WhatBespokeMeans />
      <DesignedAroundYourProperty />
      <GateDesignAndMaterials />
      {/* <GateAutomation /> */}
      <BespokeAccessControl />
      {/* <BespokeDesignToInstallation /> */}
      <BespokeGatesCTA />
    </main>
  );
};

export default Page;
