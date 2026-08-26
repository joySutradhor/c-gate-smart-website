import {
  ArrowUpRight,
  Smartphone,
  Video,
  KeyRound,
  Radio,
  BellRing,
  LogIn,
} from "lucide-react";

const accessOptions = [
  {
    icon: Video,
    title: "Intercom Systems",
    description:
      "Allow visitors to communicate with you before giving them access to the property.",
  },
  {
    icon: BellRing,
    title: "Video Intercoms",
    description:
      "See who is requesting access while communicating with visitors from the entrance.",
  },
  {
    icon: KeyRound,
    title: "Keypads",
    description:
      "Provide controlled entry using a secure access code.",
  },
  {
    icon: Radio,
    title: "Remote Controls",
    description:
      "Convenient gate operation from inside your vehicle or property.",
  },
  {
    icon: LogIn,
    title: "Fobs & Proximity Readers",
    description:
      "Useful for controlled access where multiple authorised users need entry.",
  },
  {
    icon: Smartphone,
    title: "GSM / Mobile Access",
    description:
      "Control access using mobile phones without needing a traditional remote.",
  },
];

export default function BespokeAccessControl() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#415A77]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
                Access Control
              </span>
            </div>

            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[38px]">
              Access That Works
              <span className="text-[#415A77]">
                {" "}Around You
              </span>
            </h2>

          </div>

          <p className="max-w-[650px] text-base leading-7 text-[#667085] lg:ml-auto">
            Your automated gates can be combined with a range of access-control
            options. We design the system around how you, your family, staff,
            visitors or delivery drivers need to use the entrance.
          </p>

        </div>


        {/* Access Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {accessOptions.map((option, index) => {

            const Icon = option.icon;

            return (
              <article
                key={option.title}
                className="group relative overflow-hidden rounded-[26px] border border-[#E4E9EE] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(24,36,51,0.07)]"
              >

                {/* Number */}
                <div className="flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77] transition duration-300 group-hover:bg-[#415A77] group-hover:text-white">
                    <Icon size={19} />
                  </div>

                  <span className="text-xs font-semibold text-[#CBD3DB]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                <h3 className="mt-6 text-base font-bold text-[#182433]">
                  {option.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667085]">
                  {option.description}
                </p>

              </article>
            );

          })}

        </div>


        {/* Bottom Feature */}
        <div className="mt-6 rounded-[26px] border border-[#E4E9EE] bg-white p-6 sm:p-7">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">
                <Smartphone size={19} />
              </div>

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#415A77]">
                  Designed Around Your Users
                </p>

                <p className="mt-1 max-w-[720px] text-sm leading-6 text-[#667085]">
                  Whether the entrance is mainly used by your family, staff,
                  visitors or delivery drivers, the access-control system
                  can be configured around the way you actually use the gate.
                </p>

              </div>

            </div>

            <span className="hidden h-10 w-px bg-[#E4E9EE] sm:block" />

            <div className="text-sm font-semibold text-[#415A77]">
              Secure
              <span className="mx-1 text-[#CBD3DB]">•</span>
              Convenient
              <span className="mx-1 text-[#CBD3DB]">•</span>
              Flexible
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}