"use client";

import Image from "next/image";
import { useState } from "react";

const images = {
  driveway: "/location/chalfont-st-peter/BespokeDrivewayGates.webp",
  metal: "/location/chalfont-st-peter/MetalElectricGates.webp",
  wooden: "/location/chalfont-st-peter/WoodenElectricGates.webp",
  aluminium: "/location/chalfont-st-peter/AluminiumElectricGates.webp",
  swing: "/location/chalfont-st-peter/ModernSwingGates.webp",
  sliding: "/location/chalfont-st-peter/ModernSlidingGates.webp",
  automation:
    "/location/chalfont-st-peter/GateAutomationAccessControl.webp",
  servicing:
    "/location/chalfont-st-peter/ElectricGateServicingRepairs.webp",
};

function SectionLabel({ children }) {
  return (
    <div className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
      {children}
    </div>
  );
}

function MaterialCard({ title, image, children, alt }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#E4E9EE] bg-white">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#182433]">{title}</h3>

        <p className="mt-3 text-sm leading-7 text-[#667085]">
          {children}
        </p>
      </div>
    </div>
  );
}

function GateTypeCard({ title, image, children, alt }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#E4E9EE] bg-white">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#182433]">{title}</h3>

        <p className="mt-3 text-sm leading-7 text-[#667085]">
          {children}
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What access controls can be used with electric gates?",
      answer:
        "Options can include remote controls, keypads, intercoms, GSM systems and other access devices. We recommend a solution based on who needs access and how the property is used.",
    },
    {
      question: "How much do electric gates cost?",
      answer:
        "The price depends on the opening size, gate material and design, automation, groundworks, power supply, access controls and safety equipment. A site survey allows us to prepare a quotation for the complete project.",
    },
    {
      question: "How long does an electric gate installation take?",
      answer:
        "Timescales vary because bespoke gates must be designed and manufactured, and some sites need foundations, cabling or other preparation. We will explain the expected programme when the design and site requirements are known.",
    },
    {
      question: "Can you service a gate installed by another company?",
      answer:
        "In many cases, yes. We first inspect the system, identify the equipment and assess its overall condition and safety. Any limitations or recommended remedial work will be explained.",
    },
    {
      question: "What happens if there is a power cut?",
      answer:
        "Automated gates should have a suitable manual-release arrangement. Backup options may also be available for some systems. We will explain the correct procedure for the equipment specified at your property.",
    },
  ];

  return (
    <main className="bg-white text-[#1F2937]">

      {/* HERO */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-16 lg:px-10 lg:py-20">



          <div className="mx-auto max-w-5xl text-center">

            <div className="mb-6 inline-flex items-center rounded-full border border-[#E4E9EE] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
              Gate Smart · Chalfont St Peter
            </div>

            <h1 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#182433] md:text-[56px] lg:text-[64px]">
              Electric Gates
              <span className="block text-[#415A77]">
                Chalfont St Peter
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#667085] md:text-lg">
              Bespoke electric gates designed around your property in
              Chalfont St Peter, from initial survey and design through to
              installation, automation and ongoing servicing.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="tel:01494578656"
                className="rounded-full bg-[#415A77] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#344B65]"
              >
                Call 01494 578656
              </a>

              <a
                href="mailto:info@gatesmart.co.uk"
                className="rounded-full border border-[#D7DEE6] bg-white px-7 py-3.5 text-sm font-semibold text-[#182433] transition hover:border-[#415A77] hover:text-[#415A77]"
              >
                Request a Survey
              </a>
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["25+", "Years Experience"],
              ["Bespoke", "Gate Design"],
              ["Local", "Chalfont St Peter Specialist"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-[#E4E9EE] bg-white p-6 text-center"
              >
                <div className="text-2xl font-semibold text-[#182433]">
                  {number}
                </div>

                <div className="mt-1 text-sm text-[#667085]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BESPOKE DRIVEWAY GATES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <SectionLabel>Bespoke Driveway Gates</SectionLabel>

              <h2 className="text-3xl font-semibold tracking-tight text-[#182433] md:text-4xl">
                Electric gates designed for your Chalfont St Peter property
              </h2>

              <p className="mt-6 text-base leading-8 text-[#667085]">
                No two entrances are exactly the same. The width of the
                opening, driveway gradient, available side room, gate weight,
                wind exposure and number of daily operations can all affect
                the design. We therefore start by understanding the site and
                what you want the entrance to achieve.
              </p>

              <p className="mt-4 text-base leading-8 text-[#667085]">
                Choose an open design that preserves views, a close-boarded
                style for increased privacy, or something between the two.
                Gates can be designed to complement existing brickwork,
                fencing and railings, with manual pedestrian access and
                matching sections considered as part of the wider entrance.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={images.driveway}
                alt="Bespoke electric driveway gates installed near Chalfont St Peter"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Gate Materials</SectionLabel>

            <h2 className="text-3xl font-semibold tracking-tight text-[#182433] md:text-4xl">
              Metal, wooden and aluminium gate options
            </h2>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              Choose a gate material and finish that suits your property,
              entrance and preferred style.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <MaterialCard
              title="Metal Gates"
              image={images.metal}
              alt="Automated metal gates in Chalfont St Peter"
            >
              Strong and versatile, with options ranging from simple modern
              lines to more decorative designs. Suitable finishes help protect
              the gate and provide a colour that complements the property.
            </MaterialCard>

            <MaterialCard
              title="Wooden Gates"
              image={images.wooden}
              alt="Wooden electric driveway gates in Chalfont St Peter"
            >
              A natural choice for traditional, rural and character
              properties. Timber needs ongoing maintenance, but the right
              construction and protective treatment can create a warm,
              attractive entrance.
            </MaterialCard>

            <MaterialCard
              title="Aluminium Gates"
              image={images.aluminium}
              alt="Modern aluminium electric gates in Chalfont St Peter"
            >
              Lightweight, strong and low maintenance. Aluminium is
              particularly useful for contemporary designs and privacy
              styles, with a wide choice of colours and finishes.
            </MaterialCard>

          </div>
        </div>
      </section>

      {/* SWING / SLIDING */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Gate Types</SectionLabel>

            <h2 className="text-3xl font-semibold tracking-tight text-[#182433] md:text-4xl">
              Swing gates or sliding gates?
            </h2>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              The right arrangement depends on the available space, driveway
              layout, ground conditions and how the entrance will be used.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <GateTypeCard
              title="Swing Gates"
              image={images.swing}
              alt="Modern automated swing gates in Chalfont St Peter"
            >
              Swing gates are a popular option where there is enough clear
              space for the leaves to open safely.
            </GateTypeCard>

            <GateTypeCard
              title="Sliding Gates"
              image={images.sliding}
              alt="Modern sliding electric gates in Chalfont St Peter"
            >
              Sliding gates move sideways along the entrance and can suit
              wider openings or sites where a swing arc would be impractical.
              Cantilever and tracked arrangements have different ground and
              space requirements.
            </GateTypeCard>

          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-[#667085]">
            We recommend the layout only after assessing the site.
          </p>
        </div>
      </section>

      {/* AUTOMATION */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={images.automation}
                alt="Electric gate automation and access control in Chalfont St Peter"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <SectionLabel>Automation & Access Control</SectionLabel>

              <h2 className="text-3xl font-semibold tracking-tight text-[#182433] md:text-4xl">
                Gate automation and access control in Chalfont St Peter
              </h2>

              <p className="mt-6 text-base leading-8 text-[#667085]">
                Automation can make an entrance more convenient while
                allowing access to be controlled. Depending on the site,
                operation may be provided by underground or above-ground
                equipment.
              </p>

              <p className="mt-4 text-base leading-8 text-[#667085]">
                Access options can include remote controls, keypads,
                intercoms and GSM-based systems. The correct choice depends on
                whether the entrance serves one home, several properties,
                staff, deliveries or regular visitors.
              </p>

              <p className="mt-4 text-base leading-8 text-[#667085]">
                Safety is part of the design, not an optional extra. The
                system must consider people and vehicles around the moving
                gate, potential impact and trapping areas, appropriate safety
                devices, manual release and the forces generated during
                operation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICING */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <SectionLabel>Servicing & Repairs</SectionLabel>

              <h2 className="text-3xl font-semibold tracking-tight text-[#182433] md:text-4xl">
                Electric gate servicing and repairs in Chalfont St Peter
              </h2>

              <p className="mt-6 text-base leading-8 text-[#667085]">
                Regular servicing helps identify wear, movement and
                developing faults before they lead to avoidable breakdowns.
                A service can include visual and operational checks of the
                gate, hinges or rollers, automation, photocells, safety
                devices, control equipment and manual release, with
                lubrication and adjustments where appropriate.
              </p>

              <p className="mt-4 text-base leading-8 text-[#667085]">
                The right service interval depends on how often the gate
                operates, the environment and the type of system. A lightly
                used domestic gate may need less frequent attention than a
                shared or commercial entrance operating many times each day.
                We can advise after assessing the system and its use.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={images.servicing}
                alt="Gate Smart engineer servicing electric gates in Chalfont St Peter"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Why Choose Gate Smart</SectionLabel>

            <h2 className="text-3xl font-semibold tracking-tight text-[#182433] md:text-4xl">
              A complete gate service from one local specialist
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "More than 25 years of gate and automation experience",
              "Bespoke metal, wooden and aluminium gate designs",
              "Swing and sliding automation options",
              "Access control, intercom and remote-control solutions",
              "Servicing, fault finding and repairs",
              "Friendly, personal service from a local specialist",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#E4E9EE] bg-white p-6"
              >
                <div className="mb-4 h-2 w-10 rounded-full bg-[#415A77]" />

                <p className="text-sm leading-7 text-[#667085]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-20">

          <div className="text-center">
            <SectionLabel>FAQs</SectionLabel>

            <h2 className="text-3xl font-semibold tracking-tight text-[#182433] md:text-4xl">
              Frequently asked questions about electric gates in Chalfont St Peter
            </h2>
          </div>

          <div className="mt-10 divide-y divide-[#E4E9EE] border-y border-[#E4E9EE]">

            {faqs.map((faq, index) => (
              <div key={faq.question}>

                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base font-semibold text-[#182433]">
                    {faq.question}
                  </span>

                  <span className="shrink-0 text-2xl font-light text-[#415A77]">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="pb-6 pr-10 text-sm leading-7 text-[#667085]">
                    {faq.answer}
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#182433] border-b border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 md:py-20">

          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#AFC0D1]">
            Gate Smart · Chalfont St Peter
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Request a survey for electric gates in Chalfont St Peter
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#CBD5E1]">
            Planning a new automated entrance, looking to upgrade existing
            gates or need help with a fault? Speak to Gate Smart about
            electric gates in Chalfont St Peter.
          </p>

          <p className="mt-4 text-base font-medium text-white">
            Call 01494 578656 or email info@gatesmart.co.uk.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:01494578656"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#182433] transition hover:bg-[#EAF0F5]"
            >
              Call 01494 578656
            </a>

            <a
              href="mailto:info@gatesmart.co.uk"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Email Gate Smart
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}