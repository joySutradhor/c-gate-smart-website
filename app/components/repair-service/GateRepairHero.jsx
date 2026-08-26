export default function GateRepairHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[860px] text-center">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E4E9EE] bg-[#F8FAFC] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#415A77]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#415A77]">
              Gate Repair Service
            </span>
          </div>

          {/* Heading */}
          <h1
            className="  
              text-[32px]
              font-semibold
              leading-[1.12]
              tracking-[-0.03em]
              text-[#182433]

              sm:text-[42px]

              lg:text-[52px]"
          >
            Fast, Reliable Gate
            <span className="block text-[#415A77]">Repair & Support.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[700px] text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
            Automated gates work hard every day. When wear, faults or unexpected
            problems occur, our experienced engineers can diagnose the issue and
            help get your gate working safely and reliably again.
          </p>
        </div>
      </div>
    </section>
  );
}
