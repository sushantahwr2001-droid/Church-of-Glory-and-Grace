import { FaArrowDown, FaHandsPraying } from "react-icons/fa6";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden px-5 pb-20 pt-24 sm:min-h-screen sm:px-10 sm:pb-24 lg:px-20 lg:pt-24"
    >
      <picture className="absolute inset-0 -z-30">
        <source media="(max-width: 767px)" srcSet="/assets/hero-light-of-hope-mobile.jpg" />
        <source media="(min-width: 768px)" srcSet="/assets/hero-light-of-hope-desktop.jpg" />
        <img
          src="/assets/hero-light-of-hope-desktop.jpg"
          alt="A golden sunrise behind a simple cross, symbolizing hope and prayer"
          className="h-full w-full object-cover object-[58%_center] sm:object-center"
          fetchPriority="high"
        />
      </picture>
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(12,9,15,0.98)_0%,rgba(18,13,22,0.9)_34%,rgba(26,20,32,0.5)_66%,rgba(12,9,15,0.16)_100%)] sm:bg-[linear-gradient(90deg,rgba(12,9,15,0.96)_0%,rgba(18,13,22,0.9)_25%,rgba(26,20,32,0.44)_55%,rgba(12,9,15,0.04)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_38%,rgba(255,215,138,0.12),transparent_30%),linear-gradient(180deg,rgba(18,13,22,0.2)_0%,rgba(18,13,22,0.08)_42%,rgba(18,13,22,0.78)_100%)] sm:bg-[radial-gradient(circle_at_78%_50%,rgba(255,215,138,0.1),transparent_28%),linear-gradient(180deg,rgba(18,13,22,0.3)_0%,rgba(18,13,22,0.04)_42%,rgba(18,13,22,0.68)_100%)]" />

      <div className="mx-auto flex w-full max-w-7xl items-center">
        <Reveal>
          <div className="max-w-[45rem]">
            <p className="mb-4 max-w-[22rem] text-[clamp(1.9rem,9vw,3.2rem)] font-bold leading-[1.08] text-[#fff8ec] drop-shadow-[0_3px_4px_rgba(0,0,0,0.8)] sm:mb-6 sm:max-w-[38rem] sm:text-[clamp(2.1rem,4vw,4rem)]">
              Church of Glory and Grace
            </p>
            <h1 className="text-[clamp(2.45rem,10vw,4rem)] font-semibold leading-[1.03] text-[#fff8ec] drop-shadow-[0_3px_4px_rgba(0,0,0,0.75)] sm:text-[clamp(3rem,5.4vw,5.8rem)]">
              Spreading God&apos;s
              <span className="block">
                Love. <span className="text-gold">Changing Lives.</span>
              </span>
            </h1>
            <p className="mt-5 max-w-[21rem] text-base font-semibold leading-7 text-[#efe7d9] drop-shadow-[0_2px_3px_rgba(0,0,0,0.82)] sm:mt-8 sm:max-w-[31rem] sm:text-xl sm:leading-8">
              We are on a mission to bring hope, faith, and love to every heart and every home.
            </p>

            <div className="mt-7 grid gap-3 sm:mt-10 sm:flex sm:gap-4">
              <a
                href="#about"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[7px] bg-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#241303] shadow-[0_16px_35px_rgba(217,162,58,0.22)] transition hover:bg-gold-soft focus:outline-none focus:ring-2 focus:ring-gold-soft sm:min-h-14 sm:px-8 sm:py-4"
              >
                Our Mission
                <FaArrowDown aria-hidden="true" />
              </a>
              <a
                href="#prayer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[7px] border-2 border-gold/[0.52] bg-[#120d16]/[0.62] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition hover:border-gold hover:bg-gold/[0.14] focus:outline-none focus:ring-2 focus:ring-gold sm:min-h-14 sm:px-8 sm:py-4"
              >
                <FaHandsPraying aria-hidden="true" />
                Prayer Request
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <p className="absolute bottom-6 left-1/2 w-[min(90vw,56rem)] -translate-x-1/2 text-center text-sm font-semibold italic leading-6 text-[#fff8ec] drop-shadow-[0_3px_4px_rgba(0,0,0,0.85)] sm:bottom-10 sm:text-xl sm:leading-7">
        &quot;Let your light shine before others, that they may see your good deeds
        <span className="block">and glorify your Father in heaven.&quot;</span>
      </p>
    </section>
  );
}
