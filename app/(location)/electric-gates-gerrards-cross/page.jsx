"use client";

import { useState } from "react";
import Link from "next/link";

const images = {
  hero: "/location/gerrards-cross/hero.jfif",
  bespoke: "/location/gerrards-cross/BespokeDrivewayGates.jfif",
  metal: "/location/gerrards-cross/BespokeMetalElectricGates.jfif",
  wooden: "/location/gerrards-cross/AutomatedHardwoodDrivewayGates.jfif",
  aluminium: "/location/gerrards-cross/ModernAluminiumElectricGates.jfif",
  swing: "/location/gerrards-cross/ModernSwingGates.jfif",
  sliding: "/location/gerrards-cross/ModernSlidingGates.jfif",
  automation:
    "/location/gerrards-cross/ElectricGateAutomationAndAccessControl.jfif",
  servicing: "/location/gerrards-cross/ElectricGateServicingAndRepairs.jfif",
};

const faqs = [
  {
    question: "Can you automate existing gates in Gerrards Cross?",
    answer:
      "Often, yes. We first inspect the gate leaves, hinges or track, posts, geometry and available power supply to establish whether safe, reliable automation is practical.",
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

export default function GerrardsCrossPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-white text-[#1F2937]">
      {/* HERO */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-16 lg:px-10 lg:py-20">
        
          {/* Hero Content */}
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-[#E4E9EE] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
              Gate Smart · Gerrards Cross
            </div>

            <h1 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#182433] md:text-[56px] lg:text-[64px]">
              Electric Gates
              <span className="block text-[#415A77]">Gerrards Cross</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#667085] md:text-lg">
              Looking for professionally designed electric gates in Gerrards
              Cross? Gate Smart creates bespoke automated entrances for homes,
              developments and commercial properties.
            </p>

            {/* CTA */}
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

          {/* Stats */}
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["25+", "Years Experience"],
              ["Bespoke", "Gate Design"],
              ["Local", "Specialist Service"],
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

      {/* INTRO */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
              Bespoke Entrance Solutions
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#182433] md:text-4xl">
              Electric Gates Designed Around Your Property
            </h2>

            <p className="mt-6 leading-7 text-[#667085]">
              Driveways around Gerrards Cross range from compact residential
              entrances to wide, high-use access points. Gate Smart can plan the
              gate, automation and access control as one complete system.
            </p>

            <p className="mt-4 leading-7 text-[#667085]">
              The result is an entrance that is secure, convenient to use and
              appropriate for the property.
            </p>

            <p className="mt-4 leading-7 text-[#667085]">
              We serve customers throughout Gerrards Cross and nearby areas
              including Chalfont St Peter, Denham, Fulmer and Hedgerley.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src={images.bespoke}
              alt="Bespoke electric driveway gates near Gerrards Cross"
              className="h-[460px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* BESPOKE GATES */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
              Bespoke Design
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#182433] md:text-4xl">
              Bespoke driveway gates in Gerrards Cross
            </h2>

            <p className="mt-5 leading-7 text-[#667085]">
              No two entrances are exactly the same. The width of the opening,
              driveway gradient, available side room, gate weight, wind exposure
              and number of daily operations can all affect the design.
            </p>

            <p className="mt-4 leading-7 text-[#667085]">
              We therefore start by understanding the site and what you want the
              entrance to achieve.
            </p>

            <p className="mt-4 leading-7 text-[#667085]">
              Choose an open design that preserves views, a close-boarded style
              for increased privacy, or something between the two. Gates can be
              designed to complement existing brickwork, fencing and railings,
              with manual pedestrian access and matching sections considered as
              part of the wider entrance.
            </p>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
              Gate Materials
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#182433] md:text-4xl">
              Metal, wooden and aluminium gate options
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <MaterialCard
              image={images.metal}
              title="Metal gates"
              text="Strong and versatile, with options ranging from simple modern lines to more decorative designs. Suitable finishes help protect the gate and provide a colour that complements the property."
            />

            <MaterialCard
              image={images.wooden}
              title="Wooden gates"
              text="A natural choice for traditional, rural and character properties. Timber needs ongoing maintenance, but the right construction and protective treatment can create a warm, attractive entrance."
            />

            <MaterialCard
              image={images.aluminium}
              title="Aluminium gates"
              text="Lightweight, strong and low maintenance. Aluminium is particularly useful for contemporary designs and privacy styles, with a wide choice of colours and finishes."
            />
          </div>
        </div>
      </section>

      {/* SWING VS SLIDING */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
              Gate Configuration
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#182433] md:text-4xl">
              Swing gates or sliding gates?
            </h2>

            <p className="mt-5 leading-7 text-[#667085]">
              The right gate configuration depends on the available space,
              entrance width and site layout. We recommend the layout only after
              assessing the site.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <GateTypeCard
              image={images.swing}
              title="Swing Gates"
              text="Swing gates are a popular option where there is enough clear space for the leaves to open safely."
            />

            <GateTypeCard
              image={images.sliding}
              title="Sliding Gates"
              text="Sliding gates move sideways along the entrance and can suit wider openings or sites where a swing arc would be impractical."
            />
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-[#667085]">
            Cantilever and tracked arrangements have different ground and space
            requirements. We assess the site before recommending the most
            suitable option.
          </p>
        </div>
      </section>

      {/* AUTOMATION */}
      <section className="bg-[#182433] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC0D2]">
                Automation & Access
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Gate automation and access control in Gerrards Cross
              </h2>

              <p className="mt-6 leading-7 text-[#CBD5E1]">
                Automation can make an entrance more convenient while allowing
                access to be controlled. Depending on the site, operation may be
                provided by underground or above-ground equipment.
              </p>

              <p className="mt-4 leading-7 text-[#CBD5E1]">
                Access options can include remote controls, keypads, intercoms
                and GSM-based systems. The correct choice depends on whether the
                entrance serves one home, several properties, staff, deliveries
                or regular visitors.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Remote controls",
                  "Keypad entry",
                  "Intercom systems",
                  "GSM access",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={images.automation}
                alt="Electric gate automation and access control in Gerrards Cross"
                className="h-[480px] w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-7">
            <h3 className="text-xl font-semibold">
              Safety is part of the design
            </h3>

            <p className="mt-3 max-w-4xl leading-7 text-[#CBD5E1]">
              The system must consider people and vehicles around the moving
              gate, potential impact and trapping areas, appropriate safety
              devices, manual release and the forces generated during operation.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICING */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={images.servicing}
              alt="Gate Smart engineer servicing electric gates in Gerrards Cross"
              className="h-[480px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
              Maintenance & Repairs
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#182433] md:text-4xl">
              Electric gate servicing and repairs in Gerrards Cross
            </h2>

            <p className="mt-6 leading-7 text-[#667085]">
              Regular servicing helps identify wear, movement and developing
              faults before they lead to avoidable breakdowns.
            </p>

            <p className="mt-4 leading-7 text-[#667085]">
              A service can include visual and operational checks of the gate,
              hinges or rollers, automation, photocells, safety devices, control
              equipment and manual release, with lubrication and adjustments
              where appropriate.
            </p>

            <p className="mt-4 leading-7 text-[#667085]">
              The right service interval depends on how often the gate operates,
              the environment and the type of system.
            </p>
          </div>
        </div>
      </section>

      {/* WHY GATE SMART */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
              Why Gate Smart
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#182433] md:text-4xl">
              Why choose Gate Smart?
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "More than 25 years of gate and automation experience",
              "Bespoke metal, wooden and aluminium gate designs",
              "Swing and sliding automation options",
              "Access control, intercom and remote-control solutions",
              "Servicing, fault finding and repairs",
              "Friendly, personal service from a local specialist",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-3xl border border-[#E4E9EE] bg-white p-6"
              >
                <span className="text-sm font-semibold text-[#415A77]">
                  0{index + 1}
                </span>

                <p className="mt-4 font-medium leading-6 text-[#182433]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL COVERAGE */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-[#EAF0F5] p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
              Local Coverage
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#182433]">
              Serving Gerrards Cross and surrounding areas
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Gerrards Cross",
                "Chalfont St Peter",
                "Denham",
                "Fulmer",
                "Hedgerley",
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white px-5 py-3 text-sm text-[#415A77]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
              FAQs
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#182433] md:text-4xl">
              Frequently asked questions about electric gates in Gerrards Cross
            </h2>
          </div>

          <div className="mt-10 divide-y divide-[#E4E9EE] rounded-3xl border border-[#E4E9EE] bg-white">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.question} className="px-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-semibold text-[#182433]">
                      {faq.question}
                    </span>

                    <span className="text-2xl font-light text-[#415A77]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6 pr-10 text-sm leading-7 text-[#667085]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#182433] py-20 text-white border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC0D2]">
            Request a Survey
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Request a survey for electric gates in Gerrards Cross
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#CBD5E1]">
            Planning a new automated entrance, looking to upgrade existing gates
            or need help with a fault? Speak to Gate Smart about electric gates
            in Gerrards Cross.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:01494578656"
              className="rounded-full bg-white px-7 py-3 text-sm font-medium text-[#182433] transition hover:bg-[#EAF0F5]"
            >
              Call 01494 578656
            </a>

            <a
              href="mailto:info@gatesmart.co.uk"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              info@gatesmart.co.uk
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* MATERIAL CARD */

function MaterialCard({ image, title, text }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#E4E9EE] bg-white">
      <img src={image} alt={title} className="h-72 w-full object-cover" />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#182433]">{title}</h3>

        <p className="mt-3 text-sm leading-7 text-[#667085]">{text}</p>
      </div>
    </article>
  );
}

/* SWING / SLIDING CARD */

function GateTypeCard({ image, title, text }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#E4E9EE] bg-white">
      <img src={image} alt={title} className="h-[380px] w-full object-cover" />

      <div className="p-7">
        <h3 className="text-2xl font-semibold text-[#182433]">{title}</h3>

        <p className="mt-3 leading-7 text-[#667085]">{text}</p>
      </div>
    </article>
  );
}
