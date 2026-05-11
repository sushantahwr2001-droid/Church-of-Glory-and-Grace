"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { imageAssets } from "@/data/site";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const previous = () => {
    setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setActiveIndex((index) => (index + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonies"
      className="bg-[linear-gradient(135deg,#fff4df_0%,#f8dfb8_48%,#fff8ec_100%)] px-5 py-16 text-[#23170e] sm:px-8 sm:py-24"
      aria-label="Voices of Faith testimonials"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div>
            <p className="section-eyebrow text-[#946620]">Voices of Faith</p>
            <h2 className="text-[clamp(2.25rem,4vw,4.4rem)] font-semibold leading-[1.08] text-[#20130b]">
              Stories of prayer, comfort, and grace.
            </h2>

            <div className="relative mt-10 min-h-[21rem] overflow-hidden rounded-[8px] border border-[#d9a23a]/[0.34] bg-[#fffaf3] p-7 shadow-[0_24px_80px_rgba(85,47,18,0.16)] sm:p-9">
              <AnimatePresence mode="wait">
                <motion.article
                  key={active.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="mb-7 flex gap-1 text-[#d9a23a]" aria-label={`${active.rating} stars`}>
                    {Array.from({ length: active.rating }).map((_, index) => (
                      <FaStar key={index} aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-2xl font-semibold leading-snug text-[#2b1d13] sm:text-3xl">
                    &quot;{active.quote}&quot;
                  </blockquote>
                  <p className="mt-7 text-base font-semibold text-[#5a3b1e]">
                    {active.name}, {active.location}
                  </p>
                </motion.article>
              </AnimatePresence>

              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={previous}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[#d9a23a]/[0.45] text-[#5a3b1e] transition hover:bg-[#d9a23a] hover:text-[#20130b] focus:outline-none focus:ring-2 focus:ring-[#d9a23a]"
                  aria-label="Show previous testimony"
                  title="Previous testimony"
                >
                  <FaChevronLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[#d9a23a]/[0.45] text-[#5a3b1e] transition hover:bg-[#d9a23a] hover:text-[#20130b] focus:outline-none focus:ring-2 focus:ring-[#d9a23a]"
                  aria-label="Show next testimony"
                  title="Next testimony"
                >
                  <FaChevronRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative min-h-[29rem] overflow-hidden rounded-[8px] border border-[#d9a23a]/[0.22] shadow-[0_24px_80px_rgba(85,47,18,0.16)]">
            <Image
              src={imageAssets.prayer.src}
              alt={imageAssets.prayer.alt}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,244,223,0.03),rgba(35,23,14,0.22))]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
