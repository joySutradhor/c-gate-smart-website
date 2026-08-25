import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Phone,
  ShieldCheck,
} from "lucide-react";

const termsSections = [
  {
    number: "01",
    title: "System Failures & Intercom Issues",
    subtitle: "Intercom & Other System Failures After Work Carried Out",
    points: [
      "We will not be held liable for any intercom, keypad, or access-control faults that arise during or after servicing unless the fault is directly caused by our engineer’s negligence.",
      "If the customer claims the intercom was working before our visit, we will require evidence. Without evidence, the repair will be treated as a chargeable call-out.",
      "We cannot verify every component if the gates are not operational upon arrival.",
    ],
  },
  {
    number: "02",
    title: "Underground Services & External Risks",
    subtitle: "Buried Cables, Water Pipes & Gas Pipes",
    points: [
      "We accept no responsibility for damage to buried electrical, data, intercom cables, water pipes, or gas pipes unless written plans, depths, and routes were provided before work.",
      "If services are not mapped, marked, or protected, any damage is deemed unavoidable and will be chargeable.",
    ],
  },
  {
    number: "03",
    title: "Service Visits vs. Fault-Finding",
    subtitle: "Service Visits That Become Diagnostic Calls",
    points: [
      "If a service visit is booked but the gate system is not functioning upon arrival, the visit becomes a chargeable diagnostic call-out.",
      "A service can only be completed once the gate system is working correctly.",
    ],
  },
  {
    number: "04",
    title: "Manufacturer Guidance & Technical Advice",
    subtitle: "Manufacturer Advice & Technical Guidance",
    points: [
      "We follow manufacturer recommendations. If manufacturer guidance is later found to be incorrect, we cannot be held liable for faults, delays, or extra labour.",
      "Any corrective work required as a result will be chargeable.",
    ],
  },
  {
    number: "05",
    title: "Fault Finding & Intermittent Issues",
    subtitle: "Diagnostics & Intermittent Faults",
    points: [
      "Intermittent faults may not be identifiable during a single visit.",
      "Additional visits, labour, or parts required will be chargeable.",
    ],
  },
  {
    number: "06",
    title: "Legal Servicing Requirements",
    subtitle: "Legal Requirement for Gate Servicing",
    points: [
      "Automated gates must be serviced regularly to comply with UK legal requirements.",
      "We may request to see service records.",
    ],
  },
  {
    number: "07",
    title: "Payment Terms & Incorrect Payments",
    subtitle: "Payment Terms",
    points: [
      "Payment terms: 50% deposit, 25% due on booking, balance due upon completion unless otherwise stated.",
      "If payments are made into an account not stated on the invoice, we cannot be held responsible for delays or non-allocation of funds.",
    ],
  },
];

const generalTerms = [
  "All prices are subject to VAT and any applicable taxes.",
  "Quotations include removal of our own rubbish only.",
  "Estimates are valid for 30 days unless otherwise stated.",
  "No allowance is made for protection of surrounding works unless agreed.",
  "Lead times may vary depending on production schedules and weather conditions.",
  "Works are assumed to take place between 8am–5pm, Monday–Friday. Work outside these times will incur additional costs.",
  "We reserve the right to review the contract sum if no programme is issued and delays occur.",
  "It is the client’s responsibility to check quotations for accuracy.",
  "We provide a 90-day labour guarantee and a 3-year warranty on most products, provided servicing is kept up to date.",
  "Access equipment required after survey will be chargeable.",
  "Distance selling regulations do not apply to our services.",
  "Responsibility for gates and equipment transfers to the client after delivery.",
  "We do not take responsibility for site security overnight.",
  "The client is responsible for all ongoing Health & Safety requirements and planning compliance.",
  "Liability is limited to repair or replacement of defective parts. A 50% restocking fee applies to parts found fault-free.",
  "Material prices may vary according to manufacturer price lists at delivery date.",
  "A full technical survey is recommended. If incorrect information is supplied by the client, additional work will be chargeable.",
  "We reserve the right to charge for delays outside our control.",
  "A 50% handling charge applies to cancellations before dispatch. After dispatch, orders are chargeable in full.",
  "Additional works identified during installation will be chargeable.",
  "Title to goods passes upon full payment. Risk passes upon delivery.",
  "Completion dates are approximate and not contractually binding.",
  "Any shortcomings must be reported in writing within 7 days of completion.",
  "We are not liable for consequential or incidental damages.",
  "Timber is a natural material and may twist, split, crack or discolour. This is not considered a defect.",
];

function TermsSection({ section }) {
  return (
    <article
      id={`terms-${section.number}`}
      className="scroll-mt-28 rounded-3xl border border-[#E4E9EE] bg-white p-6 sm:p-8 lg:p-9"
    >
      <div className="flex gap-5">

        {/* Number */}

        <div className="hidden shrink-0 sm:block">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF0F5] text-sm font-bold text-[#415A77]">
            {section.number}
          </div>
        </div>

        {/* Content */}

        <div className="min-w-0 flex-1">

          <div className="flex items-start gap-3 sm:hidden">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-xs font-bold text-[#415A77]">
              {section.number}
            </div>

            <h2 className="text-xl font-bold leading-tight text-[#182433]">
              {section.title}
            </h2>
          </div>

          <h2 className="hidden text-[25px] font-bold tracking-[-0.5px] text-[#182433] sm:block">
            {section.title}
          </h2>

          <div className="mt-4 flex items-center gap-2">
            <span className="h-px w-6 bg-[#415A77]" />

            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#415A77]">
              {section.subtitle}
            </p>
          </div>

          <div className="mt-6 space-y-4">

            {section.points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={17}
                  className="mt-1 shrink-0 text-[#415A77]"
                />

                <p className="text-sm leading-7 text-[#667085] sm:text-[15px]">
                  {point}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </article>
  );
}

export default function TermsConditions() {
  return (
    <main className="bg-[#F8FAFC]">

      {/* =========================================
          HERO
      ========================================== */}

      <section className="relative overflow-hidden bg-white">

        <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[360px] w-[360px] rounded-full bg-[#EAF0F5]/70 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[-100px] left-[-100px] h-[280px] w-[280px] rounded-full bg-[#F8FAFC] blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

          <div className="max-w-[850px]">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                Legal Information
              </span>
            </div>

            <h1 className="text-[42px] font-bold leading-[1.05] tracking-[-1.5px] text-[#182433] sm:text-[54px] lg:text-[62px]">
              Terms &
              <span className="text-[#415A77]">
                {" "}Conditions
              </span>
            </h1>

            <p className="mt-6 max-w-[720px] text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
              Please read our terms and conditions carefully. These terms
              explain the responsibilities, payment arrangements, warranties
              and conditions that apply to work carried out by Gate Smart.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="inline-flex items-center gap-2 rounded-full border border-[#E4E9EE] bg-[#F8FAFC] px-4 py-2.5 text-sm font-medium text-[#667085]">
                <ShieldCheck size={16} className="text-[#415A77]" />
                Clear & transparent terms
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#E4E9EE] bg-[#F8FAFC] px-4 py-2.5 text-sm font-medium text-[#667085]">
                <FileText size={16} className="text-[#415A77]" />
                Gate Smart
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================
          CONTENT
      ========================================== */}

      <section>
        <div className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">

          <div className="space-y-5">

            {termsSections.map((section) => (
              <TermsSection
                key={section.number}
                section={section}
              />
            ))}


            {/* =====================================
                GENERAL TERMS
            ====================================== */}

            <article
              id="general-terms"
              className="scroll-mt-28 rounded-3xl border border-[#E4E9EE] bg-white p-6 sm:p-8 lg:p-9"
            >

              <div className="flex gap-5">

                <div className="hidden shrink-0 sm:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF0F5] text-sm font-bold text-[#415A77]">
                    08
                  </div>
                </div>

                <div className="flex-1">

                  <div className="flex items-center gap-3 sm:hidden">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF0F5] text-xs font-bold text-[#415A77]">
                      08
                    </div>

                    <h2 className="text-xl font-bold text-[#182433]">
                      General Terms & Conditions
                    </h2>
                  </div>

                  <h2 className="hidden text-[25px] font-bold tracking-[-0.5px] text-[#182433] sm:block">
                    General Terms & Conditions
                  </h2>

                  <div className="mt-6 grid gap-x-8 gap-y-4 md:grid-cols-2">

                    {generalTerms.map((term, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                      >

                        <CheckCircle2
                          size={16}
                          className="mt-1 shrink-0 text-[#415A77]"
                        />

                        <p className="text-sm leading-6 text-[#667085]">
                          {term}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </article>

          </div>

        </div>
      </section>


      {/* =========================================
          CTA
      ========================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

          <div className="relative overflow-hidden rounded-[32px] bg-[#182433] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">

            <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[300px] w-[300px] rounded-full bg-[#415A77]/30 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-[700px]">

                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#AFC0D2]">
                  Need clarification?
                </p>

                <h2 className="mt-3 text-[30px] font-bold tracking-[-0.8px] text-white sm:text-[38px]">
                  Get in touch to discuss
                  <span className="text-[#AFC0D2]">
                    {" "}your requirements
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-6 text-white sm:text-base">
                  If you have any questions about our terms, services or
                  quotation, our team will be happy to help.
                </p>

              </div>


              <Link
                href="tel:01494578656"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#182433] transition hover:bg-[#EAF0F5]"
              >
                <Phone size={16} />
                Call 01494 578656
                <ArrowUpRight size={16} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}