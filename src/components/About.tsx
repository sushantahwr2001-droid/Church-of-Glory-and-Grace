import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold/[0.35] to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <div>
            <p className="section-eyebrow">Our Mission</p>
            <h2 className="section-title">
              Prayer, help, and hope for families.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="warm-panel space-y-4 rounded-[8px] p-5 text-base leading-7 text-text-muted sm:p-7 sm:text-lg sm:leading-8">
            <p>
              We stand with people in hard times. We pray with them, listen to them,
              and help families with love and respect.
            </p>
            <p>
              Our work is simple: share food, share faith, and remind every person
              that they are not alone.
            </p>
            <div className="border-l-2 border-gold bg-[#fff2df]/[0.04] py-2 pl-6 text-cream">
              <p className="text-lg font-semibold leading-7 sm:text-xl sm:leading-8">
                We serve quietly, with prayer, patience, and love in action.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
