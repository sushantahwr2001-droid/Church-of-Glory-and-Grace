"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Modal } from "@/components/Modal";
import { Reveal } from "@/components/Reveal";
import { workItems, type WorkItem } from "@/data/work";

export function WorkSection() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  return (
    <section id="work" className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="section-eyebrow">Our Work</p>
          <h2 className="section-title">How we serve.</h2>
          <p className="section-copy">
            Food, prayer, family support, and community care.
          </p>
        </Reveal>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {workItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <button
                type="button"
                onClick={() => setSelectedWork(item)}
                className="group h-full w-full overflow-hidden rounded-[8px] border border-white/[0.13] bg-white/[0.07] text-left shadow-[0_18px_50px_rgba(0,0,0,0.20)] transition hover:-translate-y-1 hover:border-gold/[0.65] focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <span className="relative block aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 639px) 46vw, (min-width: 1024px) 25vw, 50vw"
                    quality={70}
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,13,22,0.02)_0%,rgba(42,17,25,0.34)_45%,rgba(14,11,19,0.9)_100%)]" />
                  <span className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                    <span className="block text-[15px] font-semibold leading-tight text-cream sm:text-2xl">
                      {item.title}
                    </span>
                    <span className="mt-1.5 block text-[11px] leading-4 text-text-muted sm:mt-3 sm:text-sm sm:leading-6">
                      {item.summary}
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-gold-soft sm:mt-5 sm:gap-2 sm:text-sm">
                      View gallery
                      <FaArrowRight
                        className="transition group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        isOpen={Boolean(selectedWork)}
        title={selectedWork?.title ?? "Our Work"}
        onClose={() => setSelectedWork(null)}
      >
        {selectedWork ? (
          <div className="space-y-6">
            <div className="relative aspect-video overflow-hidden rounded-[8px]">
              <Image
                src={selectedWork.image.src}
                alt={selectedWork.image.alt}
                fill
                sizes="(min-width: 768px) 42rem, 100vw"
                className="object-cover"
              />
            </div>
            <p className="text-lg leading-8 text-text-muted">{selectedWork.details}</p>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
