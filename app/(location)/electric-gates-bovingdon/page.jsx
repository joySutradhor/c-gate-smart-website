"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const images = {
  driveway: "/location/bovingdon/BespokeDrivewayGates.jfif",
  metal: "/location/bovingdon/MetalElectricGates.jfif",
  wooden: "/location/bovingdon/WoodenElectricGates.jfif",
  aluminium: "/location/bovingdon/AluminiumElectricGates.jfif",
  swing: "/location/bovingdon/ModernSwingGates.jfif",
  sliding: "/location/bovingdon/ModernSlidingGates.jfif",
  automation: "/location/bovingdon/GateAutomationAccessControl.jfif",
  servicing: "/location/bovingdon/ElectricGateServicingRepairs.jfif",
};

const SectionLabel = ({ children }) => (
  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
    {children}
  </div>
);

const MaterialCard = ({ image, title, children, alt }) => (
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
      <p className="mt-3 text-sm leading-7 text-[#667085]">{children}</p>
    </div>
  </div>
);

const GateTypeCard = ({ image, title, children, alt }) => (
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
      <p className="mt-3 text-sm leading-7 text-[#667085]">{children}</p>
    </div>
  </div>
);

export default function BovingdonElectricGatesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Can you install gates at a wide or rural entrance near Bovingdon?",
      answer:
        "Yes, subject to survey. We assess opening width, gate support, wind exposure, power, access and safety before recommending the gate construction and automation.",
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

      {/* Hero */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-16 lg:px-10 lg:py-20">

          

          <div className="mx-auto max-w-5xl text-center">

            <div className="mb-6 inline-flex items-center rounded-full border border-[#E4E9EE] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
              Gate Smart · Bovingdon
            </div>

            <h1 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#182433] md:text-[56px] lg:text-[64px]">
              Electric Gates
              <span className="block text-[#415A77]">Bovingdon</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#667085] md:text-lg">
              Bespoke electric gates designed and installed for homes,
              developments and commercial properties throughout Bovingdon and
              the surrounding areas.
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
              ["Local", "Bovingdon Specialist"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-[#E4E9EE] bg-white p-6 text-center"
              >
                <div className="text-2xl font-semibold text-[#182433]">
                  {number}
                </div>
                <div className="mt-1 text-sm text-[#667085]">{label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bespoke Driveway Gates */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <SectionLabel>Made-to-Measure</SectionLabel>

              <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
                Bespoke driveway gates in Bovingdon
              </h2>

              <p className="mt-6 text-base leading-8 text-[#667085]">
                No two entrances are exactly the same. The width of the
                opening, driveway gradient, available side room, gate weight,
                wind exposure and number of daily operations can all affect
                the design.
              </p>

              <p className="mt-4 text-base leading-8 text-[#667085]">
                We therefore start by understanding the site and what you want
                the entrance to achieve.
              </p>

              <p className="mt-4 text-base leading-8 text-[#667085]">
                Choose an open design that preserves views, a close-boarded
                style for increased privacy, or something between the two.
                Gates can be designed to complement existing brickwork,
                fencing and railings.
              </p>

              <p className="mt-4 text-base leading-8 text-[#667085]">
                Manual pedestrian access and matching sections can also be
                considered as part of the wider entrance.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={images.driveway}
                alt="Bespoke electric driveway gates installed near Bovingdon"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Gate Materials</SectionLabel>

            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
              Metal, wooden and aluminium gate options
            </h2>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              Choose a gate material that suits the property, entrance,
              maintenance requirements and overall style.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <MaterialCard
              image={images.metal}
              title="Metal gates"
              alt="Automated metal gates in Bovingdon"
            >
              Strong and versatile, with options ranging from simple modern
              lines to more decorative designs. Suitable finishes help protect
              the gate and provide a colour that complements the property.
            </MaterialCard>

            <MaterialCard
              image={images.wooden}
              title="Wooden gates"
              alt="Bespoke wooden electric gates in Bovingdon"
            >
              A natural choice for traditional, rural and character
              properties. Timber needs ongoing maintenance, but the right
              construction and protective treatment can create a warm,
              attractive entrance.
            </MaterialCard>

            <MaterialCard
              image={images.aluminium}
              title="Aluminium gates"
              alt="Modern aluminium electric gates in Bovingdon"
            >
              Lightweight, strong and low maintenance. Aluminium is
              particularly useful for contemporary designs and privacy styles,
              with a wide choice of colours and finishes.
            </MaterialCard>

          </div>
        </div>
      </section>

      {/* Swing / Sliding */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Gate Configuration</SectionLabel>

            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
              Swing gates or sliding gates?
            </h2>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              The best gate arrangement depends on the available space,
              driveway layout and how the entrance needs to operate.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <GateTypeCard
              image={images.swing}
              title="Swing gates"
              alt="Modern automated swing gates in Bovingdon"
            >
              Swing gates are a popular option where there is enough clear
              space for the leaves to open safely. They can provide a
              traditional or contemporary appearance depending on the gate
              design.
            </GateTypeCard>

            <GateTypeCard
              image={images.sliding}
              title="Sliding gates"
              alt="Modern sliding electric gates in Bovingdon"
            >
              Sliding gates move sideways along the entrance and can suit wider
              openings or sites where a swing arc would be impractical.
              Cantilever and tracked arrangements have different ground and
              space requirements.
            </GateTypeCard>

          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-[#667085]">
            We recommend the layout only after assessing the site.
          </p>

        </div>
      </section>

      {/* Automation */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl lg:order-1">
              <Image
                src={images.automation}
                alt="Electric gate automation and access control in Bovingdon"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 lg:order-2">
              <SectionLabel>Automation & Access</SectionLabel>

              <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
                Gate automation and access control in Bovingdon
              </h2>

              <p className="mt-6 text-base leading-8 text-[#667085]">
                Automation can make an entrance more convenient while allowing
                access to be controlled. Depending on the site, operation may
                be provided by underground or above-ground equipment.
              </p>

              <p className="mt-4 text-base leading-8 text-[#667085]">
                Access options can include remote controls, keypads, intercoms
                and GSM-based systems. The correct choice depends on whether
                the entrance serves one home, several properties, staff,
                deliveries or regular visitors.
              </p>

              <p className="mt-4 text-base leading-8 text-[#667085]">
                Safety is part of the design, not an optional extra. The system
                must consider people and vehicles around the moving gate,
                potential impact and trapping areas, appropriate safety
                devices, manual release and the forces generated during
                operation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Servicing */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <SectionLabel>Servicing & Repairs</SectionLabel>

              <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
                Electric gate servicing and repairs in Bovingdon
              </h2>

              <p className="mt-6 text-base leading-8 text-[#667085]">
                Regular servicing helps identify wear, movement and developing
                faults before they lead to avoidable breakdowns.
              </p>

              <p className="mt-4 text-base leading-8 text-[#667085]">
                A service can include visual and operational checks of the
                gate, hinges or rollers, automation, photocells, safety
                devices, control equipment and manual release, with lubrication
                and adjustments where appropriate.
              </p>

              <p className="mt-4 text-base leading-8 text-[#667085]">
                The right service interval depends on how often the gate
                operates, the environment and the type of system. A lightly
                used domestic gate may need less frequent attention than a
                shared or commercial entrance operating many times each day.
              </p>

              <p className="mt-4 text-base leading-8 text-[#667085]">
                We can advise after assessing the system and its use.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={images.servicing}
                alt="Gate Smart engineer servicing electric gates in Bovingdon"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Why Gate Smart</SectionLabel>

            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
              Why choose Gate Smart?
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">

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
                className="rounded-3xl border border-[#E4E9EE] bg-white p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF0F5] text-sm font-semibold text-[#415A77]">
                    ✓
                  </span>

                  <p className="text-sm leading-7 text-[#667085]">
                    {item}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-20">

          <div className="text-center">
            <SectionLabel>FAQ</SectionLabel>

            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
              Frequently asked questions about electric gates in Bovingdon
            </h2>
          </div>

          <div className="mt-10 space-y-3">

            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-3xl border border-[#E4E9EE] bg-[#F8FAFC]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-[#182433]">
                      {faq.question}
                    </span>

                    <span className="shrink-0 text-xl font-medium text-[#415A77]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#E4E9EE] px-6 py-5">
                      <p className="text-sm leading-7 text-[#667085]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#182433] border-b border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 md:py-20">

          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#AFC0D1]">
            Get Started
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
            Request a survey for electric gates in Bovingdon
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#C5D0DB]">
            Planning a new automated entrance, looking to upgrade existing
            gates or need help with a fault? Speak to Gate Smart about electric
            gates in Bovingdon.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:01494578656"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#182433] transition hover:bg-[#F8FAFC]"
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