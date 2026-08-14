"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of gates do you supply and install?",
    answer:
      "We provide a range of bespoke gate solutions including metal, wooden, aluminium and driveway gates. We can help you choose the most suitable option based on your property, style and requirements.",
  },
  {
    question: "Do you install automatic gates?",
    answer:
      "Yes. We provide gate automation solutions designed to make access more convenient while maintaining security and reliability.",
  },
  {
    question: "Can you automate an existing gate?",
    answer:
      "In many cases, existing gates can be automated. We can assess the gate and recommend the most suitable automation solution based on its condition, size and configuration.",
  },
  {
    question: "Do you repair and service existing gates?",
    answer:
      "Yes. We offer gate servicing, maintenance and repair support, including automation adjustments and troubleshooting.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "The easiest way is to speak with our team. Call us on 01494 578656 to discuss your property and requirements.",
  },
  {
    question: "Can you help me choose the right gate?",
    answer:
      "Absolutely. We can discuss your property, preferred style, security requirements and automation needs to help you find a suitable solution.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white">

      <div className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">

        {/* =========================================
            HEADER
        ========================================== */}

        <div className="mx-auto max-w-[700px] text-center">

          {/* Small Label - 12px */}

          <div className="mb-5 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415A77]">
              Frequently Asked Questions
            </span>

            <span className="h-px w-8 bg-[#415A77]" />

          </div>


          {/* Section Heading
              Mobile: 30px
              Desktop: 36px
          */}

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#1F2937] sm:text-[36px]">

            Questions?

            <span className="text-[#415A77]">
              {" "}We've Got Answers.
            </span>

          </h2>


          {/* Normal Description - 16px */}

          <p className="mt-4 text-base leading-7 text-[#667085]">

            Find answers to some of the most common questions about
            our gates, automation, installation and servicing.

          </p>

        </div>


        {/* =========================================
            FAQ ACCORDION
        ========================================== */}

        <div className="mt-10 overflow-hidden rounded-[22px] border border-[#E4E9EE]">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`border-b border-[#E4E9EE] last:border-b-0 ${
                  isOpen ? "bg-[#F8FAFC]" : "bg-white"
                }`}
              >

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                >

                  <div className="flex items-start gap-4">

                    {/* Number */}

                    <span className="hidden pt-0.5 text-xs font-semibold tracking-[0.1em] text-[#415A77] sm:block">
                      0{index + 1}
                    </span>


                    {/* Question - 16px */}

                    <span className="text-base font-semibold leading-6 text-[#1F2937]">
                      {faq.question}
                    </span>

                  </div>


                  {/* Plus / Minus */}

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF0F5] text-[#415A77] cursor-pointer">

                    {isOpen ? (
                      <Minus size={15} />
                    ) : (
                      <Plus size={15} />
                    )}

                  </span>

                </button>


                {/* Answer */}

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-7 sm:pl-[72px]">

                    <p className="max-w-[760px] text-sm leading-6 text-[#667085]">
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
  );
}