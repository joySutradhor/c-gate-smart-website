import Image from "next/image";
import { Check, EyeOff, Settings2, ShieldCheck, Wrench } from "lucide-react";

const automationOptions = [
  {
    title: "Above-Ground Automation",
    description:
      "Motors are fitted to the gate and pillars and are fully visible. Different types of operators can be used, including articulated-arm and linear-arm automation.",
    image: "/p-gate-automation/Aphrodite-Aluminium-Gate.jpg",
    benefits: [
      {
        icon: Wrench,
        text: "Straightforward installation",
      },
      {
        icon: Settings2,
        text: "Motors are easily accessible",
      },
      {
        icon: ShieldCheck,
        text: "Suitable for many existing gates",
      },
      {
        icon: Check,
        text: "Cost-effective solution",
      },
    ],
  },
  {
    title: "Underground Automation",
    description:
      "Motors are installed in foundation boxes beneath the gate, normally at the hinge points, keeping the system discreet. Most of the automation equipment is hidden from view.",
    image: "/p-gate-automation/Underground-gate-automation.jpg",
    benefits: [
      {
        icon: EyeOff,
        text: "Very discreet appearance",
      },
      {
        icon: Settings2,
        text: "Keeps gate design clean",
      },
      {
        icon: Check,
        text: "Ideal for decorative, traditional & premium gates",
      },
      {
        icon: ShieldCheck,
        text: "Suitable for single or double gates",
      },
    ],
  },
];

function AutomationOption({ option }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#E4E9EE] bg-white">

      {/* =====================================
          HEADER / DESCRIPTION
      ====================================== */}

      <div className="p-6 sm:p-7">

        <div className="flex items-center gap-3">

          <span className="h-8 w-1 rounded-full bg-[#415A77]" />

          <h3 className="text-[22px] font-bold tracking-[-0.5px] text-[#1F2937] sm:text-[24px]">
            {option.title}
          </h3>

        </div>


        <p className="mt-4 text-sm leading-6 text-[#667085]">
          {option.description}
        </p>

      </div>


      {/* =====================================
          IMAGE
      ====================================== */}

      <div className="relative mx-5 h-[230px] overflow-hidden rounded-2xl sm:h-[280px]">

        <Image
          src={option.image}
          alt={option.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-700 hover:scale-105"
        />

      </div>


      {/* =====================================
          BENEFITS
      ====================================== */}

      <div className="grid grid-cols-2 gap-x-4 gap-y-5 p-6 sm:p-7">

        {option.benefits.map((benefit) => {

          const Icon = benefit.icon;

          return (
            <div
              key={benefit.text}
              className="flex items-start gap-3"
            >

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">
                <Icon size={16} />
              </div>


              <p className="pt-0.5 text-xs font-medium leading-5 text-[#667085]">
                {benefit.text}
              </p>

            </div>
          );

        })}

      </div>

    </article>
  );
}


export default function AboveGroundVsUnderground() {
  return (
    <section className="bg-white">

      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

        {/* =====================================
            SECTION HEADER
        ====================================== */}

        <div className="max-w-[720px]">

          <div className="mb-4 flex items-center gap-3">

            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Automation Options
            </span>

          </div>


          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#1F2937] sm:text-[36px]">

            Choose the Right

            <span className="text-[#415A77]">
              {" "}Automation System
            </span>

          </h2>


          <p className="mt-4 max-w-[650px] text-base leading-7 text-[#667085]">

            Gate automation can be installed above ground or
            underground. Each approach has different benefits
            depending on the gate, property and desired appearance.

          </p>

        </div>


        {/* =====================================
            OPTIONS
        ====================================== */}

        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          {automationOptions.map((option) => (
            <AutomationOption
              key={option.title}
              option={option}
            />
          ))}

        </div>

      </div>

    </section>
  );
}