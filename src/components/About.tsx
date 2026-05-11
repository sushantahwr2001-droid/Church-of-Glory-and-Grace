import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-5 py-24 sm:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold/[0.35] to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <div>
            <p className="section-eyebrow">Our Mission</p>
            <h2 className="section-title">
              A quiet place for prayer, care, and renewed hope.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="warm-panel space-y-6 rounded-[8px] p-6 text-lg leading-8 text-text-muted sm:p-8">
            <p>
              We exist to stand beside people with compassion, listen to their burdens,
              pray with them in faith, and serve families with dignity.
            </p>
            <p>
              Every visit, every meal, every prayer, and every word of encouragement is offered
              with one simple hope: that people feel seen, loved, and strengthened by God&apos;s grace.
            </p>
            <div className="border-l-2 border-gold bg-[#fff2df]/[0.04] py-2 pl-6 text-cream">
              <p className="text-xl font-semibold leading-8">
                We walk with people in their moments of need, not with noise, but with prayer,
                patience, and love in action.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
