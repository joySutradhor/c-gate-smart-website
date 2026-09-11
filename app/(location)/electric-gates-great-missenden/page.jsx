"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Which gate material works well for a village or rural home?",
    answer:
      "That depends on the look and maintenance level you want. Timber offers natural character, metal allows detailed bespoke designs, and aluminium is lightweight and low maintenance.",
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

const coverageAreas = [
  "Great Missenden",
  "Prestwood",
  "South Heath",
  "Hyde Heath",
  "Chiltern Villages",
];

function MaterialCard({ image, title, children }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#E4E9EE] bg-white">
      <div className="relative h-[260px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 md:p-7">
        <h3 className="text-xl font-semibold text-[#182433]">{title}</h3>

        <p className="mt-3 text-[15px] leading-7 text-[#667085]">
          {children}
        </p>
      </div>
    </article>
  );
}

function GateTypeCard({ image, title, children }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white">
      <div className="relative h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="rounded-b-3xl border border-t-0 border-[#E4E9EE] p-6 md:p-7">
        <h3 className="text-xl font-semibold text-[#182433]">{title}</h3>

        <p className="mt-3 text-[15px] leading-7 text-[#667085]">
          {children}
        </p>
      </div>
    </article>
  );
}

export default function GreatMissendenElectricGatesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="overflow-hidden bg-white text-[#1F2937]">
      {/* HERO */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 lg:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-[#E4E9EE] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
              Gate Smart · Great Missenden
            </div>

            <h1 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#182433] md:text-[56px] lg:text-[64px]">
              Electric Gates
              <span className="block text-[#415A77]">Great Missenden</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#667085] md:text-lg">
              Bespoke electric gates, automation and access control for homes,
              developments and commercial properties across Great Missenden and
              the surrounding Chiltern villages.
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
                className="rounded-full border border-[#D8DEE5] bg-white px-7 py-3.5 text-sm font-semibold text-[#182433] transition hover:bg-[#F8FAFC]"
              >
                Request a Survey
              </a>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["25+", "Years of Experience"],
              ["Bespoke", "Gate & Automation Design"],
              ["Local", "Great Missenden Specialist"],
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
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/location/great-missenden/hero.jfif"
              alt="Bespoke electric driveway gates installed near Great Missenden"
              className="h-[420px] w-full object-cover md:h-[520px]"
            />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Electric Gates in Great Missenden
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#182433] md:text-4xl">
              Designed around your property
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-[#667085]">
              <p>
                Looking for professionally designed electric gates in Great
                Missenden? Gate Smart creates bespoke automated entrances for
                homes, developments and commercial properties. With more than
                25 years of experience, we provide practical advice, quality
                workmanship and a personal service from the initial survey
                through to installation and ongoing maintenance.
              </p>

              <p>
                Rural and village properties around Great Missenden often need
                an entrance that provides privacy and security without looking
                out of place. We create bespoke gates and automation systems to
                suit the opening, surroundings and way the entrance will be
                used. Materials, proportions and finishes are selected to work
                naturally with the property.
              </p>

              <p>
                We serve customers throughout Great Missenden and nearby areas
                including Prestwood, South Heath, Hyde Heath and the surrounding
                Chiltern villages. Contact us to arrange a site visit and
                discuss the most suitable solution for your entrance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BESPOKE DRIVEWAY GATES */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Bespoke Design
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
              Bespoke driveway gates in Great Missenden
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#667085]">
              No two entrances are exactly the same. The width of the opening,
              driveway gradient, available side room, gate weight, wind
              exposure and number of daily operations can all affect the
              design. We therefore start by understanding the site and what
              you want the entrance to achieve.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/location/great-missenden/BespokeDrivewayGates.jfif"
                alt="Bespoke electric driveway gates installed near Great Missenden"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="rounded-3xl border border-[#E4E9EE] bg-white p-7 md:p-9">
              <h3 className="text-2xl font-semibold text-[#182433]">
                Designed to complement your entrance
              </h3>

              <p className="mt-5 text-[15px] leading-7 text-[#667085]">
                Choose an open design that preserves views, a close-boarded
                style for increased privacy, or something between the two.
                Gates can be designed to complement existing brickwork, fencing
                and railings, with manual pedestrian access and matching
                sections considered as part of the wider entrance.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Site-specific design",
                  "Privacy options",
                  "Matching fencing",
                  "Pedestrian access",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-[#415A77]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Gate Materials
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
              Metal, wooden and aluminium gate options
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#667085]">
              Choose a gate material based on the character of your property,
              desired appearance, maintenance requirements and practical needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <MaterialCard
              image="/location/great-missenden/BespokeMetalElectricGates.jfif"
              title="Metal Gates"
            >
              Strong and versatile, with options ranging from simple modern
              lines to more decorative designs. Suitable finishes help protect
              the gate and provide a colour that complements the property.
            </MaterialCard>

            <MaterialCard
              image="/location/great-missenden/AutomatedHardwoodDrivewayGates.jfif"
              title="Wooden Gates"
            >
              A natural choice for traditional, rural and character properties.
              Timber needs ongoing maintenance, but the right construction and
              protective treatment can create a warm, attractive entrance.
            </MaterialCard>

            <MaterialCard
              image="/location/great-missenden/ModernAluminiumElectricGates.jfif"
              title="Aluminium Gates"
            >
              Lightweight, strong and low maintenance. Aluminium is particularly
              useful for contemporary designs and privacy styles, with a wide
              choice of colours and finishes.
            </MaterialCard>
          </div>
        </div>
      </section>

      {/* SWING / SLIDING */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Gate Configuration
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-[#182433] md:text-4xl">
              Swing gates or sliding gates?
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#667085]">
              Swing gates are a popular option where there is enough clear space
              for the leaves to open safely. Sliding gates move sideways along
              the entrance and can suit wider openings or sites where a swing
              arc would be impractical. Cantilever and tracked arrangements
              have different ground and space requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <GateTypeCard
              image="/location/great-missenden/ModernSwingGates.jfif"
              title="Swing Gates"
            >
              Swing gates are a popular option where there is enough clear space
              for the leaves to open safely.
            </GateTypeCard>

            <GateTypeCard
              image="/location/great-missenden/ModernSlidingGates.jfif"
              title="Sliding Gates"
            >
              Sliding gates move sideways along the entrance and can suit wider
              openings or sites where a swing arc would be impractical.
              Cantilever and tracked arrangements have different ground and
              space requirements.
            </GateTypeCard>
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-7 text-[#667085]">
            We recommend the layout only after assessing the site.
          </p>
        </div>
      </section>

      {/* AUTOMATION */}
      <section className="bg-[#182433] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B8C7D8]">
              Automation & Access Control
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              Gate automation and access control in Great Missenden
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-[#D5DCE4]">
              <p>
                Automation can make an entrance more convenient while allowing
                access to be controlled. Depending on the site, operation may be
                provided by underground or above-ground equipment. Access
                options can include remote controls, keypads, intercoms and
                GSM-based systems. The correct choice depends on whether the
                entrance serves one home, several properties, staff, deliveries
                or regular visitors.
              </p>

              <p>
                Safety is part of the design, not an optional extra. The system
                must consider people and vehicles around the moving gate,
                potential impact and trapping areas, appropriate safety devices,
                manual release and the forces generated during operation.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Remote controls",
                "Keypads",
                "Intercom systems",
                "GSM access",
                "Safety devices",
                "Manual release",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#E7ECF2]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="/location/great-missenden/ElectricGateAutomationAndAccessControl.jfif"
              alt="Electric gate automation and access control in Great Missenden"
              className="h-[460px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICING */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-3xl lg:order-1">
            <img
              src="/location/great-missenden/ElectricGateServicingAndRepairs.jfif"
              alt="Gate Smart engineer servicing electric gates in Great Missenden"
              className="h-[440px] w-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Servicing & Repairs
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
              Electric gate servicing and repairs in Great Missenden
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-[#667085]">
              <p>
                Regular servicing helps identify wear, movement and developing
                faults before they lead to avoidable breakdowns. A service can
                include visual and operational checks of the gate, hinges or
                rollers, automation, photocells, safety devices, control
                equipment and manual release, with lubrication and adjustments
                where appropriate.
              </p>

              <p>
                The right service interval depends on how often the gate
                operates, the environment and the type of system. A lightly
                used domestic gate may need less frequent attention than a
                shared or commercial entrance operating many times each day. We
                can advise after assessing the system and its use.
              </p>
            </div>

            <a
              href="tel:01494578656"
              className="mt-8 inline-flex rounded-full bg-[#415A77] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#344B65]"
            >
              Discuss Servicing
            </a>
          </div>
        </div>
      </section>

      {/* WHY GATE SMART */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Why Gate Smart
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-[#182433] md:text-4xl">
              Why choose Gate Smart?
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#667085]">
              From initial advice and site surveying to installation,
              automation and ongoing servicing, we provide a personal service
              built around your property.
            </p>
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
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF0F5] text-sm font-semibold text-[#415A77]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="mt-5 text-[15px] font-medium leading-6 text-[#182433]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                Local Coverage
              </span>

              <h2 className="mt-4 text-3xl font-semibold text-[#182433] md:text-4xl">
                Serving Great Missenden and surrounding areas
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-[#667085]">
                Gate Smart works with homeowners, developments and businesses
                across Great Missenden and nearby Chiltern villages.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {coverageAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-[#E4E9EE] bg-[#F8FAFC] px-5 py-4 text-sm font-medium text-[#182433]"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-24">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              FAQs
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-[#182433] md:text-4xl">
              Frequently asked questions about electric gates in Great Missenden
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-[#E4E9EE] bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                  >
                    <span className="text-[15px] font-semibold text-[#182433]">
                      {faq.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF0F5] text-lg text-[#415A77]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#E4E9EE] px-5 pb-5 pt-4 text-[15px] leading-7 text-[#667085] md:px-6">
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
      <section className="bg-[#182433] border-b border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center md:px-8 md:py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B8C7D8]">
            Start Your Project
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl lg:text-5xl">
            Request a survey for electric gates in Great Missenden
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#D5DCE4]">
            Planning a new automated entrance, looking to upgrade existing
            gates or need help with a fault? Speak to Gate Smart about electric
            gates in Great Missenden.
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
              info@gatesmart.co.uk
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}