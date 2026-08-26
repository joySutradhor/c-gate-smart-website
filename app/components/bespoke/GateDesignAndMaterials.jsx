import Image from "next/image";
import { ArrowUpRight, Check, Layers3, Palette, Ruler } from "lucide-react";

const gateTypes = [
  {
    title: "Swing Gates",
    description:
      "Single or double swing gates designed around the available entrance and the way the gates need to operate.",
  },
  {
    title: "Sliding Gates",
    description:
      "A practical option where driveway space or entrance layout makes sliding operation more suitable.",
  },
  {
    title: "Cantilever Gates",
    description:
      "A track-free sliding solution that can be considered where ground conditions or entrance design require it.",
  },
];

const materials = ["Steel", "Aluminium", "Timber"];

export default function GateDesignAndMaterials() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* Header */}
        <div className="max-w-[760px]">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Gate Design & Materials
            </span>
          </div>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-1px] text-[#182433] sm:text-[38px]">
            The Right Gate Design
            <span className="text-[#415A77]"> For Your Entrance</span>
          </h2>

          <p className="mt-5 max-w-[680px] text-base leading-7 text-[#667085]">
            Your bespoke gate can be designed around the shape of your entrance,
            the available space and the overall character of your property.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT — Image */}
          <div className="relative min-h-[420px] overflow-hidden rounded-[30px]">
            <Image
              src="/Bespoke/gate-design.jpg"
              alt="Bespoke automated driveway gate design"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#182433]/80 via-[#182433]/20 to-transparent p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                Bespoke Design
              </p>

              <p className="mt-2 max-w-[420px] text-xl font-bold leading-tight text-white sm:text-2xl">
                Traditional or contemporary — designed to complement your
                property.
              </p>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="rounded-[30px] border border-[#E4E9EE] bg-white p-6 sm:p-8">
            <div className="grid gap-4">
              {gateTypes.map((gate, index) => (
                <div
                  key={gate.title}
                  className="group rounded-2xl border border-[#E4E9EE] p-5 transition duration-300 hover:border-[#415A77]/30 hover:shadow-[0_10px_30px_rgba(24,36,51,0.05)]"
                >
                  <div className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F5] text-xs font-bold text-[#415A77]">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="text-base font-bold text-[#182433]">
                        {gate.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#667085]">
                        {gate.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Materials */}
            <div className="mt-5 rounded-2xl bg-[#F8FAFC] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#415A77]">
                  <Layers3 size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#415A77]">
                    Materials
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-[#182433]">
                    Selected around your design
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {materials.map((material) => (
                  <span
                    key={material}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E4E9EE] bg-white px-3.5 py-2 text-xs font-medium text-[#4F5D6B]"
                  >
                    <Check size={13} className="text-[#415A77]" />
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
