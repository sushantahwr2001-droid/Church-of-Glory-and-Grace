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
    <section id="work" className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="section-eyebrow">Our Work</p>
          <h2 className="section-title">A gallery of faith in action.</h2>
          <p className="section-copy">
            Every image represents a simple calling: feed with kindness, pray with faith,
            support with patience, and build community with love.
          </p>
        </Reveal>

        <div className="mt-9 grid auto-cols-[78%] grid-flow-col gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mt-12 sm:grid-flow-row sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
          {workItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <button
                type="button"
                onClick={() => setSelectedWork(item)}
                className="group h-full w-full overflow-hidden rounded-[8px] border border-white/[0.13] bg-white/[0.07] text-left shadow-[0_24px_75px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 hover:border-gold/[0.65] focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <span className="relative block aspect-[5/4] overflow-hidden sm:aspect-[4/5]">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 639px) 78vw, (min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,13,22,0.02)_0%,rgba(42,17,25,0.34)_45%,rgba(14,11,19,0.9)_100%)]" />
                  <span className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="block text-xl font-semibold leading-tight text-cream sm:text-2xl">
                      {item.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-text-muted sm:mt-3">
                      {item.summary}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft sm:mt-5">
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
