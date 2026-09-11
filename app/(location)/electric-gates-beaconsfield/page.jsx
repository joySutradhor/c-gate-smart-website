"use client";

import { useState } from "react";
import Link from "next/link";

const images = {
  hero: "/location/beaconsfield/hero.webp",
  bespoke: "/location/beaconsfield/BespokeDrivewayGates.webp",
  metal: "/location/beaconsfield/BespokeMetalElectricGates.webp",
  wooden: "/location/beaconsfield/AutomatedHardwoodDrivewayGates.webp",
  aluminium: "/location/beaconsfield/ModernAluminiumElectricGates.webp",
  automation:
    "/location/beaconsfield/ElectricGateAutomationAndAccessControl.webp",
  servicing: "/location/beaconsfield/ElectricGateServicingAndRepairs.webp",
};

const faqs = [
  {
    question:
      "Can you design gates to suit a traditional Beaconsfield property?",
    answer:
      "Yes. We offer bespoke metal, timber and aluminium designs, so the proportions, finish and level of privacy can be chosen to suit both traditional and contemporary homes.",
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

const materials = [
  {
    title: "Metal Gates",
    text: "Strong and versatile, with options ranging from simple modern lines to more decorative designs.",
    image: images.metal,
  },
  {
    title: "Wooden Gates",
    text: "A natural choice for traditional, rural and character properties, with a warm and timeless appearance.",
    image: images.wooden,
  },
  {
    title: "Aluminium Gates",
    text: "Lightweight, strong and low maintenance, making aluminium ideal for contemporary entrances.",
    image: images.aluminium,
  },
];

export default function BeaconsfieldElectricGates() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white text-[#1F2937]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-16 lg:px-10 lg:py-20">
         
          {/* Hero Content */}
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-[#E4E9EE] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#415A77]">
              Gate Specialists in Beaconsfield
            </div>

            <h1 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#182433] md:text-[56px] lg:text-[64px]">
              Electric Gates
              <span className="block text-[#415A77]">Beaconsfield</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#667085] md:text-lg">
              Bespoke electric gates designed around your property, from initial
              survey and design through to installation, automation and ongoing
              servicing.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="tel:01494578656"
                className="rounded-full bg-[#415A77] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#344B65]"
              >
                Call 01494 578656
              </a>

              <Link
                href="/contact"
                className="rounded-full border border-[#D7DEE6] bg-white px-7 py-3.5 text-sm font-semibold text-[#182433] transition hover:border-[#415A77] hover:text-[#415A77]"
              >
                Request a Survey
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["25+", "Years Experience"],
              ["Bespoke", "Gate Design"],
              ["Domestic", "Commercial"],
              ["Local", "Specialist Service"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-[#E4E9EE] bg-white p-6 text-center"
              >
                <div className="text-xl font-semibold text-[#182433] md:text-2xl">
                  {number}
                </div>

                <div className="mt-1 text-sm text-[#667085]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Electric Gates in Beaconsfield
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#182433] sm:text-4xl">
              A gate designed around your property.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-7 text-[#667085]">
              <p>
                Looking for professionally designed electric gates in
                Beaconsfield? Gate Smart creates bespoke automated entrances for
                homes, developments and commercial properties.
              </p>

              <p>
                With more than 25 years of experience, we provide practical
                advice, quality workmanship and a personal service from the
                initial survey through to installation and ongoing maintenance.
              </p>

              <p>
                Every entrance is different. Width, gradient, available side
                room, gate weight and how frequently the gate is used can all
                influence the right solution.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#415A77] transition hover:text-[#344B65]"
              >
                Learn more about Gate Smart
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-[#F8FAFC]">
            <img
              src={images.bespoke}
              alt="Bespoke electric driveway gate installation near Beaconsfield"
              className="h-[420px] w-full object-cover lg:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          BESPOKE GATES
      ====================================================== */}
      <section className="bg-[#F8FAFC] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Bespoke Driveway Gates
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#182433] sm:text-4xl">
              Choose a gate that works with your home.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#667085]">
              From traditional properties to contemporary homes, we design
              entrances around the architecture, driveway and practical
              requirements of each site.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {materials.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[1.75rem] border border-[#E4E9EE] bg-white"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} in Beaconsfield`}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-semibold text-[#182433]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#667085]">
                    {item.text}
                  </p>

                  <div className="mt-5 h-px bg-[#E4E9EE]" />

                  <p className="mt-5 text-sm leading-6 text-[#667085]">
                    Designed, finished and automated to suit the property.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SWING VS SLIDING
      ====================================================== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                Gate Configuration
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#182433] sm:text-4xl">
                Swing gates or sliding gates?
              </h2>

              <p className="mt-5 text-base leading-7 text-[#667085]">
                The best configuration depends on the space available and how
                the entrance needs to operate. We assess the site before
                recommending the right arrangement.
              </p>

              <div className="mt-8 space-y-5">
                <div className="rounded-2xl border border-[#E4E9EE] p-6">
                  <h3 className="font-semibold text-[#182433]">Swing Gates</h3>
                  <p className="mt-2 text-sm leading-6 text-[#667085]">
                    A popular choice where there is enough clear space for the
                    gate leaves to open safely into the driveway.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E4E9EE] p-6">
                  <h3 className="font-semibold text-[#182433]">
                    Sliding Gates
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#667085]">
                    Sliding gates can work particularly well for wider openings
                    or entrances where a swing arc is impractical.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/location/beaconsfield/swing-gate.jfif"
                alt="Modern swing electric driveway gate"
                className="h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AUTOMATION
      ====================================================== */}
      <section className="bg-[#182433] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={images.automation}
              alt="Electric gate automation and access control"
              className="h-[430px] w-full object-cover"
            />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#AFC0D2]">
              Gate Automation
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Smarter access. Greater control.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#C5CFDA]">
              Automation makes entering and leaving your property simpler while
              giving you greater control over who can access the entrance.
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {[
                ["Remote Controls", "Convenient everyday access."],
                ["Keypads", "Controlled entry without a remote."],
                ["Intercoms", "Speak with visitors before opening."],
                ["GSM Systems", "Convenient access using mobile technology."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#AEBAC7]">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">Safety comes first.</h3>
              <p className="mt-2 text-sm leading-6 text-[#AEBAC7]">
                Every automated system needs to consider people and vehicles
                around the moving gate, safety devices, manual release and the
                forces generated during operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICING
      ====================================================== */}
      <section className="bg-[#F8FAFC] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Servicing & Repairs
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#182433] sm:text-4xl">
              Keep your electric gates working reliably.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#667085]">
              Regular servicing can help identify wear, movement and developing
              faults before they result in avoidable breakdowns.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Gate and automation checks",
                "Hinges, rollers and moving components",
                "Photocells and safety devices",
                "Control equipment and manual release",
                "Lubrication and adjustments where appropriate",
                "Fault finding and repair advice",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF0F5] text-xs font-bold text-[#415A77]">
                    ✓
                  </span>
                  <span className="text-sm leading-6 text-[#667085]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/gate-servicing"
              className="mt-8 inline-flex rounded-full bg-[#415A77] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#344B65]"
            >
              Explore Gate Servicing
            </Link>
          </div>

          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={images.servicing}
              alt="Gate Smart engineer servicing an electric gate"
              className="h-[460px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY GATE SMART
      ====================================================== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Why Gate Smart
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#182433] sm:text-4xl">
              More than just a gate.
              <span className="block text-[#415A77]">
                A complete entrance solution.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "01",
                "25+ Years Experience",
                "Established experience across gates and automation.",
              ],
              [
                "02",
                "Bespoke Design",
                "Every entrance is designed around the property.",
              ],
              [
                "03",
                "Multiple Materials",
                "Metal, wooden and aluminium gate options.",
              ],
              ["04", "Automation", "Swing and sliding automation solutions."],
              [
                "05",
                "Access Control",
                "Remote, keypad, intercom and GSM options.",
              ],
              [
                "06",
                "Aftercare",
                "Servicing, fault finding and repair support.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-[1.5rem] border border-[#E4E9EE] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-xs font-semibold text-[#A0ACB9]">
                  {number}
                </span>

                <h3 className="mt-6 text-lg font-semibold text-[#182433]">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667085]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCAL AREAS
      ====================================================== */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
            Local Coverage
          </span>

          <h2 className="mt-4 text-2xl font-semibold text-[#182433] sm:text-3xl">
            Serving Beaconsfield and nearby areas
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#667085]">
            We serve customers throughout Beaconsfield and surrounding areas,
            including Seer Green, Jordans, Penn and Wooburn Green.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {[
              "Beaconsfield",
              "Seer Green",
              "Jordans",
              "Penn",
              "Wooburn Green",
            ].map((area) => (
              <span
                key={area}
                className="rounded-full border border-[#DDE4EA] bg-white px-4 py-2 text-sm text-[#667085]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Frequently Asked Questions
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#182433] sm:text-4xl">
              Electric gates in Beaconsfield
            </h2>
          </div>

          <div className="mt-12 divide-y divide-[#E4E9EE] rounded-[1.5rem] border border-[#E4E9EE] bg-white">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold leading-6 text-[#182433] sm:text-base">
                      {faq.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8FAFC] text-lg text-[#415A77]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-8">
                      <p className="max-w-3xl text-sm leading-7 text-[#667085]">
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

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#182433]">
          <div className="px-7 py-14 text-center sm:px-12 lg:px-20 lg:py-20">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#AFC0D2]">
              Electric Gates Beaconsfield
            </span>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to improve your entrance?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#B9C4D0] sm:text-base">
              Planning a new automated entrance, upgrading existing gates or
              need help with a fault? Speak to Gate Smart about the right
              solution for your property.
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
        </div>
      </section>
    </main>
  );
}
