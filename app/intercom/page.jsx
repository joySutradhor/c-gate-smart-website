import React from "react";
import IntercomHero from "../components/intercom/IntercomHero";
import IntercomTypes from "../components/intercom/IntercomTypes";
import IntercomSolution from "../components/intercom/IntercomSolution";
import IntercomComparison from "../components/intercom/IntercomComparison";
import IntercomInstallation from "../components/intercom/IntercomInstallation";
import IntercomCTA from "../components/intercom/IntercomCTA";

const Page = () => {
  return (
    <main>
      <IntercomHero />
      <IntercomTypes />
      <IntercomSolution
        number="01"
        eyebrow="Wireless Intercoms"
        title="Wireless communication without extensive cabling."
        description="A wireless intercom communicates between the entrance and an indoor handset or receiver using a wireless radio frequency. When somebody presses the call button at the gate, the indoor unit rings, allowing you to speak to the visitor and, depending on the system, release the gate remotely."
        image="/intercom/wireless.webp"
        advantages={[
          "Less cabling required between the gate and property",
          "Useful where installing new cables would be difficult",
          "Can be quicker to install",
          "Suitable for many residential properties",
          "No SIM card or mobile contract normally required",
        ]}
        considerations={[
          "Wireless range can be affected by buildings, walls and other obstacles.",
          "Interference can sometimes affect performance.",
          "Manufacturer stated range may be reduced in real-world installations.",
          "Not always suitable for entrances a long distance from the property.",
        ]}
      />

      <IntercomSolution
        number="02"
        eyebrow="Wired Intercoms"
        title="A reliable connection through physical cabling."
        description="A wired intercom uses a physical cable between the entrance panel and the internal handset or monitor. Wired systems can provide voice-only or video communication."
        image="/intercom/wired.jpg"
        reverse
        advantages={[
          "Reliable connection",
          "Excellent voice and video quality",
          "Not dependent on mobile-network coverage",
          "No SIM card or monthly mobile-network charge",
          "Suitable for residential and commercial properties",
          "Can integrate with other access-control equipment",
        ]}
        considerations={[
          "A suitable cable needs to run between the gate and property.",
          "Installing new cabling can be more difficult at existing properties.",
          "Driveways, landscaping and buildings can increase installation complexity.",
        ]}
      />

      <IntercomSolution
        number="03"
        eyebrow="GSM / Mobile Network"
        title="Answer your gate from virtually anywhere."
        description="A GSM intercom uses the mobile network to call one or more programmed telephone numbers. You can answer the call on your mobile phone and, depending on the system, open the gate directly from your phone."
        image="/intercom/mobile-network.jpg"
        advantages={[
          "Answer your gate from virtually anywhere with mobile reception",
          "No cable required between the gate and house for communication",
          "Useful for entrances located a long distance from the property",
          "Can call multiple telephone numbers",
          "Useful for homes, businesses and managed properties",
          "Can provide remote gate access",
        ]}
        considerations={[
          "Requires suitable mobile-network coverage at the gate.",
          "Requires an active SIM card.",
          "Ongoing SIM/network charges apply.",
          "Performance depends on the mobile network.",
          "The correct SIM and tariff need to be selected.",
        ]}
      />

      <IntercomSolution
        number="04"
        eyebrow="GSM Video Intercoms"
        title="See, speak to and control access remotely."
        description="Advanced mobile-connected systems can provide video calling or app-based video communication, allowing you to see who is at the gate as well as speak to visitors and control access remotely."
        image="/intercom/video-gsm.jpg"
        reverse
        advantages={[
          "See and speak to visitors remotely",
          "Control your gates from your smartphone",
          "Useful when you are away from the property",
          "Some systems provide notifications and event history",
          "Multiple users can potentially have access",
        ]}
        considerations={[
          "Requires a reliable internet or mobile-data connection.",
          "Mobile versions require an appropriate data SIM.",
          "Some systems have subscription, SIM or cloud-service costs.",
          "More dependent on network connectivity than traditional wired systems.",
        ]}
      />

      <IntercomSolution
        number="05"
        eyebrow="IP / Wi-Fi Intercoms"
        title="Connected access for modern properties."
        description="IP intercoms use your property's internet network to provide communication between the entrance and your phone, tablet, internal monitor or other connected devices."
        image="/intercom/ip-intercom.jpg"
        advantages={[
          "Voice and video available",
          "Smartphone connectivity",
          "Answer visitors when away from home",
          "Can integrate with smart-home and access-control systems",
          "Multiple users can potentially receive calls",
        ]}
        considerations={[
          "Requires a reliable network connection at the entrance.",
          "Wi-Fi coverage at gates can sometimes be poor.",
          "Additional networking equipment may be required.",
          "Some systems use cloud services or subscriptions.",
        ]}
      />

      <IntercomComparison />
      <IntercomInstallation />
      <IntercomCTA />
    </main>
  );
};

export default Page;
