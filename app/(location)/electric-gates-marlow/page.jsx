"use client";

import Image from "next/image";

const images = {
  driveway: "/location/marlow/BespokeDrivewayGates.jfif",
  metal: "/location/marlow/MetalElectricGates.jfif",
  wooden: "/location/marlow/WoodenElectricGates.jfif",
  aluminium: "/location/marlow/AluminiumElectricGates.jfif",
  swing: "/location/marlow/ModernSwingGates.jfif",
  sliding: "/location/marlow/ModernSlidingGates.jfif",
  automation: "/location/marlow/GateAutomationAccessControl.jfif",
  servicing: "/location/marlow/ElectricGateServicingRepairs.jfif",
};

function SectionLabel({ children }) {
  return (
    <div className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
      {children}
    </div>
  );
}

function MaterialCard({ title, text, image, alt }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#E4E9EE] bg-white">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-7">
        <h3 className="text-xl font-semibold text-[#182433]">{title}</h3>

        <p className="mt-3 text-base leading-7 text-[#667085]">
          {text}
        </p>
      </div>
    </article>
  );
}

function GateTypeCard({ title, text, image, alt }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#E4E9EE] bg-white">
      <div className="relative h-72 w-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-7">
        <h3 className="text-xl font-semibold text-[#182433]">{title}</h3>

        <p className="mt-3 text-base leading-7 text-[#667085]">
          {text}
        </p>
      </div>
    </article>
  );
}

export default function MarlowElectricGatesPage() {
  return (
    <main className="bg-white text-[#1F2937]">

      {/* HERO */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-16 lg:px-10 lg:py-20">

          <div className="mx-auto max-w-5xl text-center">

            <div className="mb-6 inline-flex items-center rounded-full border border-[#E4E9EE] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
              Gate Smart · Marlow
            </div>

            <h1 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#182433] md:text-[56px] lg:text-[64px]">
              Electric Gates
              <span className="block text-[#415A77]">
                Marlow
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#667085] md:text-lg">
              Looking for professionally designed electric gates in Marlow?
              Gate Smart creates bespoke automated entrances for homes,
              developments and commercial properties.
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
              ["Local", "Marlow Specialist"],
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





      {/* BESPOKE DRIVEWAY */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <SectionLabel>
                Bespoke Driveway Gates
              </SectionLabel>

              <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
                Bespoke driveway gates in Marlow
              </h2>

              <p className="mt-6 text-base leading-8 text-[#667085]">
                No two entrances are exactly the same. The width of the
                opening, driveway gradient, available side room, gate weight,
                wind exposure and number of daily operations can all affect
                the design. We therefore start by understanding the site and
                what you want the entrance to achieve.
              </p>

              <p className="mt-5 text-base leading-8 text-[#667085]">
                Choose an open design that preserves views, a close-boarded
                style for increased privacy, or something between the two.
                Gates can be designed to complement existing brickwork,
                fencing and railings, with manual pedestrian access and
                matching sections considered as part of the wider entrance.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={images.driveway}
                alt="Bespoke electric driveway gates installed near Marlow"
                width={1200}
                height={850}
                className="h-[420px] w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>


      {/* MATERIALS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="mx-auto max-w-3xl text-center">

            <SectionLabel>
              Gate Materials
            </SectionLabel>

            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
              Metal, wooden and aluminium gate options
            </h2>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              Choose a gate material and finish that complements the property
              while meeting the practical requirements of the entrance.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <MaterialCard
              title="Metal gates"
              image={images.metal}
              alt="Automated metal gates in Marlow"
              text="Strong and versatile, with options ranging from simple modern lines to more decorative designs. Suitable finishes help protect the gate and provide a colour that complements the property."
            />

            <MaterialCard
              title="Wooden gates"
              image={images.wooden}
              alt="Wooden electric driveway gates in Marlow"
              text="A natural choice for traditional, rural and character properties. Timber needs ongoing maintenance, but the right construction and protective treatment can create a warm, attractive entrance."
            />

            <MaterialCard
              title="Aluminium gates"
              image={images.aluminium}
              alt="Modern aluminium electric gates in Marlow"
              text="Lightweight, strong and low maintenance. Aluminium is particularly useful for contemporary designs and privacy styles, with a wide choice of colours and finishes."
            />

          </div>
        </div>
      </section>


      {/* SWING / SLIDING */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="mx-auto max-w-3xl text-center">

            <SectionLabel>
              Gate Opening Options
            </SectionLabel>

            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
              Swing gates or sliding gates?
            </h2>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              The right opening arrangement depends on the available space,
              driveway layout and how the entrance will be used.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <GateTypeCard
              title="Swing gates"
              image={images.swing}
              alt="Modern electric swing gates in Marlow"
              text="Swing gates are a popular option where there is enough clear space for the leaves to open safely. They can provide a traditional or contemporary entrance depending on the gate design."
            />

            <GateTypeCard
              title="Sliding gates"
              image={images.sliding}
              alt="Modern electric sliding gates in Marlow"
              text="Sliding gates move sideways along the entrance and can suit wider openings or sites where a swing arc would be impractical. Cantilever and tracked arrangements have different ground and space requirements."
            />

          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-8 text-[#667085]">
            We recommend the layout only after assessing the site.
          </p>

        </div>
      </section>


      {/* AUTOMATION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div className="relative order-2 overflow-hidden rounded-3xl lg:order-1">
              <Image
                src={images.automation}
                alt="Gate automation and access control system in Marlow"
                width={1200}
                height={850}
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">

              <SectionLabel>
                Automation & Access Control
              </SectionLabel>

              <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
                Gate automation and access control in Marlow
              </h2>

              <p className="mt-6 text-base leading-8 text-[#667085]">
                Automation can make an entrance more convenient while
                allowing access to be controlled. Depending on the site,
                operation may be provided by underground or above-ground
                equipment.
              </p>

              <p className="mt-5 text-base leading-8 text-[#667085]">
                Access options can include remote controls, keypads,
                intercoms and GSM-based systems. The correct choice depends on
                whether the entrance serves one home, several properties,
                staff, deliveries or regular visitors.
              </p>

              <div className="mt-7 rounded-3xl border border-[#E4E9EE] bg-[#F8FAFC] p-6">

                <h3 className="text-lg font-semibold text-[#182433]">
                  Safety is part of the design
                </h3>

                <p className="mt-3 text-base leading-7 text-[#667085]">
                  The system must consider people and vehicles around the
                  moving gate, potential impact and trapping areas,
                  appropriate safety devices, manual release and the forces
                  generated during operation.
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* SERVICING */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <SectionLabel>
                Servicing & Repairs
              </SectionLabel>

              <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
                Electric gate servicing and repairs in Marlow
              </h2>

              <p className="mt-6 text-base leading-8 text-[#667085]">
                Regular servicing helps identify wear, movement and
                developing faults before they lead to avoidable breakdowns.
                A service can include visual and operational checks of the
                gate, hinges or rollers, automation, photocells, safety
                devices, control equipment and manual release, with
                lubrication and adjustments where appropriate.
              </p>

              <p className="mt-5 text-base leading-8 text-[#667085]">
                The right service interval depends on how often the gate
                operates, the environment and the type of system. A lightly
                used domestic gate may need less frequent attention than a
                shared or commercial entrance operating many times each day.
              </p>

              <p className="mt-5 text-base leading-8 text-[#667085]">
                We can advise after assessing the system and its use.
              </p>

            </div>

            <div className="relative overflow-hidden rounded-3xl">

              <Image
                src={images.servicing}
                alt="Gate Smart engineer servicing electric gates in Marlow"
                width={1200}
                height={850}
                className="h-[420px] w-full object-cover"
              />

            </div>

          </div>
        </div>
      </section>


      {/* WHY CHOOSE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="mx-auto max-w-3xl text-center">

            <SectionLabel>
              Why Gate Smart
            </SectionLabel>

            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
              Why choose Gate Smart?
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
                className="rounded-3xl border border-[#E4E9EE] bg-[#F8FAFC] p-6"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF0F5] text-sm font-semibold text-[#415A77]">
                  ✓
                </div>

                <p className="text-base leading-7 text-[#667085]">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">

          <div className="text-center">

            <SectionLabel>
              FAQs
            </SectionLabel>

            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#182433] md:text-4xl">
              Frequently asked questions about electric gates in Marlow
            </h2>

          </div>

          <div className="mt-12 space-y-4">

            <details className="rounded-3xl border border-[#E4E9EE] bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold text-[#182433]">
                Can you provide matching pedestrian gates or railings in Marlow?
              </summary>

              <p className="mt-4 text-base leading-7 text-[#667085]">
                Yes. Where required, we can discuss coordinating driveway
                gates, pedestrian access and railings to create a consistent
                entrance design.
              </p>
            </details>


            <details className="rounded-3xl border border-[#E4E9EE] bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold text-[#182433]">
                How much do electric gates cost?
              </summary>

              <p className="mt-4 text-base leading-7 text-[#667085]">
                The price depends on the opening size, gate material and
                design, automation, groundworks, power supply, access
                controls and safety equipment. A site survey allows us to
                prepare a quotation for the complete project.
              </p>
            </details>


            <details className="rounded-3xl border border-[#E4E9EE] bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold text-[#182433]">
                How long does an electric gate installation take?
              </summary>

              <p className="mt-4 text-base leading-7 text-[#667085]">
                Timescales vary because bespoke gates must be designed and
                manufactured, and some sites need foundations, cabling or
                other preparation. We will explain the expected programme
                when the design and site requirements are known.
              </p>
            </details>


            <details className="rounded-3xl border border-[#E4E9EE] bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold text-[#182433]">
                Can you service a gate installed by another company?
              </summary>

              <p className="mt-4 text-base leading-7 text-[#667085]">
                In many cases, yes. We first inspect the system, identify the
                equipment and assess its overall condition and safety. Any
                limitations or recommended remedial work will be explained.
              </p>
            </details>


            <details className="rounded-3xl border border-[#E4E9EE] bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold text-[#182433]">
                What happens if there is a power cut?
              </summary>

              <p className="mt-4 text-base leading-7 text-[#667085]">
                Automated gates should have a suitable manual-release
                arrangement. Backup options may also be available for some
                systems. We will explain the correct procedure for the
                equipment specified at your property.
              </p>
            </details>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-[#182433] border-b border-white/10 ">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 lg:py-20">

          <div className="mx-auto mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
            Gate Smart · Marlow
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
            Request a survey for electric gates in Marlow
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            Planning a new automated entrance, looking to upgrade existing
            gates or need help with a fault? Speak to Gate Smart about
            electric gates in Marlow.
          </p>

          <p className="mt-6 text-base font-medium text-white">
            Call 01494 578656 or email{" "}
            <a
              href="mailto:info@gatesmart.co.uk"
              className="underline decoration-white/30 underline-offset-4 transition hover:text-[#EAF0F5]"
            >
              info@gatesmart.co.uk
            </a>
            .
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