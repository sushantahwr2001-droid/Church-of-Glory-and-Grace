import Image from "next/image";
import { FaArrowDown, FaHandsPraying } from "react-icons/fa6";
import { imageAssets } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-28 sm:px-10 lg:px-20 lg:pt-24"
    >
      <Image
        src={imageAssets.hero.src}
        alt={imageAssets.hero.alt}
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-center"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(12,9,15,0.96)_0%,rgba(18,13,22,0.9)_25%,rgba(26,20,32,0.44)_55%,rgba(12,9,15,0.04)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_50%,rgba(255,215,138,0.1),transparent_28%),linear-gradient(180deg,rgba(18,13,22,0.3)_0%,rgba(18,13,22,0.04)_42%,rgba(18,13,22,0.68)_100%)]" />

      <div className="mx-auto flex w-full max-w-7xl items-center">
        <Reveal>
          <div className="max-w-[45rem]">
            <p className="mb-6 max-w-[38rem] text-[clamp(2.1rem,4vw,4rem)] font-bold leading-[1.08] text-[#fff8ec] drop-shadow-[0_3px_4px_rgba(0,0,0,0.8)]">
              Church of Glory and Grace
            </p>
            <h1 className="text-[clamp(3rem,5.4vw,5.8rem)] font-semibold leading-[1.02] text-[#fff8ec] drop-shadow-[0_3px_4px_rgba(0,0,0,0.75)]">
              Spreading God&apos;s
              <span className="block">
                Love. <span className="text-gold">Changing Lives.</span>
              </span>
            </h1>
            <p className="mt-8 max-w-[31rem] text-lg font-semibold leading-8 text-[#efe7d9] drop-shadow-[0_2px_3px_rgba(0,0,0,0.82)] sm:text-xl">
              We are on a mission to bring hope, faith, and love to every heart and every home.
            </p>

            <div className="mt-10 grid gap-4 sm:flex">
              <a
                href="#about"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-[7px] bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#241303] shadow-[0_16px_35px_rgba(217,162,58,0.22)] transition hover:bg-gold-soft focus:outline-none focus:ring-2 focus:ring-gold-soft"
              >
                Our Mission
                <FaArrowDown aria-hidden="true" />
              </a>
              <a
                href="#prayer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-[7px] border-2 border-gold/[0.52] bg-[#120d16]/[0.62] px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition hover:border-gold hover:bg-gold/[0.14] focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <FaHandsPraying aria-hidden="true" />
                Prayer Request
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <p className="absolute bottom-8 left-1/2 w-[min(90vw,56rem)] -translate-x-1/2 text-center text-lg font-semibold italic leading-7 text-[#fff8ec] drop-shadow-[0_3px_4px_rgba(0,0,0,0.85)] sm:bottom-10 sm:text-xl">
        &quot;Let your light shine before others, that they may see your good deeds
        <span className="block">and glorify your Father in heaven.&quot;</span>
      </p>
    </section>
  );
}
