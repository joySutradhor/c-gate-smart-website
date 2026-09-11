"use client";

import Image from "next/image";
import { useState } from "react";

const images = {
  hero: "/location/tring/hero.jfif",
  driveway: "/location/tring/BespokeDrivewayGates.jfif",
  metal: "/location/tring/BespokeMetalElectricGates.jfif",
  wood: "/location/tring/AutomatedHardwoodDrivewayGates.jfif",
  aluminium: "/location/tring/ModernAluminiumElectricGates.jfif",
  swing: "/location/tring/ModernSwingGates.jfif",
  sliding: "/location/tring/ModernSlidingGates.jfif",
  automation: "/location/tring/ElectricGateAutomationAndAccessControl.jfif",
  servicing: "/location/tring/ElectricGateServicingAndRepairs.jfif",
};

const faqs = [
  {
    question: "Do you install sliding as well as swing gates in Tring?",
    answer:
      "Yes. The best arrangement depends on the available space, driveway gradient, opening width and ground conditions, which we assess during a site survey.",
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

function SectionLabel({ children }) {
  return (
    <span className="mb-4 inline-flex rounded-full border border-[#E4E9EE] bg-[#F8FAFC] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
      {children}
    </span>
  );
}

function MaterialCard({ image, title, children, alt }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#E4E9EE] bg-white">
      <div className="relative h-64">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-6 md:p-7">
        <h3 className="text-xl font-semibold text-[#182433]">{title}</h3>
        <p className="mt-3 text-[15px] leading-7 text-[#667085]">{children}</p>
      </div>
    </article>
  );
}

function GateTypeCard({ image, title, children, alt }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#E4E9EE] bg-white">
      <div className="relative h-72">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-xl font-semibold text-[#182433]">{title}</h3>
        <p className="mt-3 text-[15px] leading-7 text-[#667085]">{children}</p>
      </div>
    </article>
  );
}

export default function TringElectricGatesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-white text-[#1F2937]">
      {/* HERO */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 lg:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-[#E4E9EE] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
              Gate Smart · Tring
            </div>

            <h1 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#182433] md:text-[56px] lg:text-[64px]">
              Electric Gates
              <span className="block text-[#415A77]">Tring</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#667085] md:text-lg">
              Bespoke electric gates, automation and access control for homes,
              developments and commercial properties across Tring and the
              surrounding Hertfordshire villages.
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
              ["Local", "Tring Specialist"],
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
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl">
            <Image
              src={images.driveway}
              alt="Bespoke driveway gates in Tring"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <SectionLabel>Electric Gates in Tring</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight text-[#182433] md:text-4xl">
              Bespoke automated entrances designed around your property
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[#667085]">
              <p>
                Looking for professionally designed electric gates in Tring?
                Gate Smart creates bespoke automated entrances for homes,
                developments and commercial properties. With more than 25 years
                of experience, we provide practical advice, quality workmanship
                and a personal service from the initial survey through to
                installation and ongoing maintenance.
              </p>

              <p>
                Whether the entrance serves a family home, private drive or
                business premises, a gate system in Tring must be designed for
                its opening, traffic level and surroundings. Gate Smart supplies
                bespoke gates, automation and ongoing support. We consider the
                whole entrance, including access control and safe vehicle and
                pedestrian movement.
              </p>

              <p>
                We serve customers throughout Tring and nearby areas including
                Aldbury, Wigginton, Berkhamsted and nearby Hertfordshire
                villages. Contact us to arrange a site visit and discuss the
                most suitable solution for your entrance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BESPOKE DRIVEWAY */}
      <section className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <SectionLabel>Bespoke Driveway Gates</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight text-[#182433] md:text-4xl">
              Bespoke driveway gates in Tring
            </h2>

            <p className="mt-6 text-base leading-8 text-[#667085]">
              No two entrances are exactly the same. The width of the opening,
              driveway gradient, available side room, gate weight, wind exposure
              and number of daily operations can all affect the design. We
              therefore start by understanding the site and what you want the
              entrance to achieve.
            </p>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              Choose an open design that preserves views, a close-boarded style
              for increased privacy, or something between the two. Gates can be
              designed to complement existing brickwork, fencing and railings,
              with manual pedestrian access and matching sections considered as
              part of the wider entrance.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                "Made to measure",
                "Privacy options",
                "Matching railings",
                "Pedestrian access",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#E4E9EE] bg-white px-4 py-3 text-sm font-medium text-[#415A77]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-3xl">
            <Image
              src={images.driveway}
              alt="Bespoke electric driveway gates installed near Tring"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Gate Materials</SectionLabel>

            <h2 className="text-3xl font-semibold text-[#182433] md:text-4xl">
              Metal, wooden and aluminium gate options
            </h2>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              Choose a material and finish that suits the character of your
              property, your preferred appearance and the level of maintenance
              you want.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <MaterialCard
              image={images.metal}
              title="Metal gates"
              alt="Automated metal gates in Tring"
            >
              Strong and versatile, with options ranging from simple modern
              lines to more decorative designs. Suitable finishes help protect
              the gate and provide a colour that complements the property.
            </MaterialCard>

            <MaterialCard
              image={images.wood}
              title="Wooden gates"
              alt="Automated wooden driveway gates near Tring"
            >
              A natural choice for traditional, rural and character properties.
              Timber needs ongoing maintenance, but the right construction and
              protective treatment can create a warm, attractive entrance.
            </MaterialCard>

            <MaterialCard
              image={images.aluminium}
              title="Aluminium gates"
              alt="Modern aluminium electric gates in Tring"
            >
              Lightweight, strong and low maintenance. Aluminium is particularly
              useful for contemporary designs and privacy styles, with a wide
              choice of colours and finishes.
            </MaterialCard>
          </div>
        </div>
      </section>

      {/* SWING / SLIDING */}
      <section className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Gate Types</SectionLabel>

            <h2 className="text-3xl font-semibold text-[#182433] md:text-4xl">
              Swing gates or sliding gates?
            </h2>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              The right gate arrangement depends on your entrance, available
              space and ground conditions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <GateTypeCard
              image={images.swing}
              title="Swing gates"
              alt="Modern automated swing gates in Tring"
            >
              Swing gates are a popular option where there is enough clear space
              for the leaves to open safely.
            </GateTypeCard>

            <GateTypeCard
              image={images.sliding}
              title="Sliding gates"
              alt="Modern electric sliding gates in Tring"
            >
              Sliding gates move sideways along the entrance and can suit wider
              openings or sites where a swing arc would be impractical.
              Cantilever and tracked arrangements have different ground and
              space requirements. We recommend the layout only after assessing
              the site.
            </GateTypeCard>
          </div>
        </div>
      </section>

      {/* AUTOMATION */}
      <section className="bg-[#182433] py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <span className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
              Automation & Access
            </span>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Gate automation and access control in Tring
            </h2>

            <p className="mt-6 text-base leading-8 text-white/70">
              Automation can make an entrance more convenient while allowing
              access to be controlled. Depending on the site, operation may be
              provided by underground or above-ground equipment. Access options
              can include remote controls, keypads, intercoms and GSM-based
              systems. The correct choice depends on whether the entrance serves
              one home, several properties, staff, deliveries or regular
              visitors.
            </p>

            <p className="mt-5 text-base leading-8 text-white/70">
              Safety is part of the design, not an optional extra. The system
              must consider people and vehicles around the moving gate,
              potential impact and trapping areas, appropriate safety devices,
              manual release and the forces generated during operation.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Remote controls", "Keypads", "Intercoms", "GSM systems"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-3xl">
            <Image
              src={images.automation}
              alt="Electric gate automation and access control in Tring"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* SERVICING */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="relative min-h-[430px] overflow-hidden rounded-3xl">
            <Image
              src={images.servicing}
              alt="Gate Smart engineer servicing electric gates in Tring"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <SectionLabel>Servicing & Repairs</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight text-[#182433] md:text-4xl">
              Electric gate servicing and repairs in Tring
            </h2>

            <p className="mt-6 text-base leading-8 text-[#667085]">
              Regular servicing helps identify wear, movement and developing
              faults before they lead to avoidable breakdowns. A service can
              include visual and operational checks of the gate, hinges or
              rollers, automation, photocells, safety devices, control equipment
              and manual release, with lubrication and adjustments where
              appropriate.
            </p>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              The right service interval depends on how often the gate operates,
              the environment and the type of system. A lightly used domestic
              gate may need less frequent attention than a shared or commercial
              entrance operating many times each day. We can advise after
              assessing the system and its use.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Why Gate Smart?</SectionLabel>

            <h2 className="text-3xl font-semibold text-[#182433] md:text-4xl">
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
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF0F5] text-sm font-semibold text-[#415A77]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="mt-5 text-[15px] font-medium leading-7 text-[#1F2937]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <SectionLabel>Local Coverage</SectionLabel>

          <h2 className="text-3xl font-semibold text-[#182433] md:text-4xl">
            Electric gates across Tring and nearby areas
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#667085]">
            Gate Smart serves customers throughout Tring and nearby
            Hertfordshire villages, including Aldbury, Wigginton and
            Berkhamsted. If your property is nearby, contact us to discuss your
            entrance and arrange a site visit.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Tring", "Aldbury", "Wigginton", "Berkhamsted"].map((area) => (
              <span
                key={area}
                className="rounded-full border border-[#E4E9EE] bg-[#F8FAFC] px-5 py-2.5 text-sm text-[#415A77]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <SectionLabel>FAQs</SectionLabel>

            <h2 className="text-3xl font-semibold text-[#182433] md:text-4xl">
              Frequently asked questions about electric gates in Tring
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-3xl border border-[#E4E9EE] bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-semibold leading-6 text-[#182433] md:text-base">
                      {faq.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF0F5] text-lg text-[#415A77]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 md:px-6">
                      <p className="text-[15px] leading-7 text-[#667085]">
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
      <section className="bg-[#182433] py-16 md:py-20 border-b border-white/10">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <span className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
            Gate Smart · Tring
          </span>

          <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
            Request a survey for electric gates in Tring
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
            Planning a new automated entrance, looking to upgrade existing gates
            or need help with a fault? Speak to Gate Smart about electric gates
            in Tring.
          </p>

          <p className="mt-5 text-base font-medium text-white">
            Call 01494 578656 or email info@gatesmart.co.uk.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:01494578656"
              className="inline-flex items-center justify-center rounded-3xl bg-white px-6 py-3.5 text-sm font-semibold text-[#182433] transition hover:bg-[#F8FAFC]"
            >
              Call Gate Smart
            </a>

            <a
              href="mailto:info@gatesmart.co.uk"
              className="inline-flex items-center justify-center rounded-3xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
