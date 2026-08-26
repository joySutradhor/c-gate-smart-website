export default function BespokeGatesHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[900px] text-center">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#415A77]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#415A77]">
              Bespoke Automated Gates
            </span>

            <span className="h-px w-8 bg-[#415A77]" />
          </div>

          {/* Heading */}
          <h1
            className="   text-[32px]
              font-semibold
              leading-[1.12]
              tracking-[-0.03em]
              text-[#182433]

              sm:text-[42px]

              lg:text-[52px]"
          >
            Automated Gates
            <span className="block text-[#415A77]">
              Designed Around Your Property
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[720px] text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
            Every entrance is different, which is why Gate Smart offers bespoke
            automated gate systems designed specifically around your property,
            entrance and individual requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
