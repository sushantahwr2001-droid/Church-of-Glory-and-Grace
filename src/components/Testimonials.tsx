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
      className="bg-[linear-gradient(135deg,#fff4df_0%,#f8dfb8_48%,#fff8ec_100%)] px-5 py-14 text-[#23170e] sm:px-8 sm:py-20"
      aria-label="Voices of Faith testimonials"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div>
            <p className="section-eyebrow text-[#946620]">Voices of Faith</p>
            <h2 className="text-[clamp(1.85rem,3.2vw,3.35rem)] font-semibold leading-[1.12] text-[#20130b]">
              Lives touched by prayer.
            </h2>

            <div className="relative mt-6 min-h-[15.5rem] overflow-hidden rounded-[8px] border border-[#d9a23a]/[0.34] bg-[#fffaf3] p-5 shadow-[0_20px_65px_rgba(85,47,18,0.14)] sm:mt-10 sm:min-h-[20rem] sm:p-8">
              <AnimatePresence mode="wait">
                <motion.article
                  key={active.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="mb-5 flex gap-1 text-[#d9a23a] sm:mb-7" aria-label={`${active.rating} stars`}>
                    {Array.from({ length: active.rating }).map((_, index) => (
                      <FaStar key={index} aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-lg font-semibold leading-7 text-[#2b1d13] sm:text-2xl sm:leading-snug">
                    &quot;{active.quote}&quot;
                  </blockquote>
                  <p className="mt-5 text-sm font-semibold text-[#5a3b1e] sm:mt-7 sm:text-base">
                    {active.name}, {active.location}
                  </p>
                </motion.article>
              </AnimatePresence>

              <div className="mt-6 flex items-center gap-3 sm:mt-8">
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
          <div className="relative min-h-[18rem] overflow-hidden rounded-[8px] border border-[#d9a23a]/[0.22] shadow-[0_24px_80px_rgba(85,47,18,0.16)] sm:min-h-[29rem]">
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
