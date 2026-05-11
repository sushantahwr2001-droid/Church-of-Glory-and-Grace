"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowUpRightFromSquare, FaCirclePlay } from "react-icons/fa6";
import { Modal } from "@/components/Modal";
import { Reveal } from "@/components/Reveal";
import { videos, type VideoItem } from "@/data/videos";

export function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <section id="videos" className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="section-eyebrow">Watch & Be Blessed</p>
          <h2 className="section-title">Watch prayers and messages.</h2>
        </Reveal>

        <div className="mt-7 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {videos.map((video, index) => (
            <Reveal key={video.youtubeId} delay={index * 0.08}>
              <button
                type="button"
                onClick={() => setSelectedVideo(video)}
                className="group grid w-full grid-cols-[7rem_1fr] overflow-hidden rounded-[8px] border border-white/[0.13] bg-[linear-gradient(180deg,rgba(255,242,223,0.08),rgba(255,242,223,0.04))] text-left shadow-[0_18px_55px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-gold/[0.6] focus:outline-none focus:ring-2 focus:ring-gold sm:block"
              >
                <span className="relative block min-h-[7.2rem] overflow-hidden sm:aspect-video sm:min-h-0">
                  <Image
                    src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={`${video.title} YouTube thumbnail`}
                    fill
                    sizes="(max-width: 639px) 7rem, (min-width: 1024px) 33vw, 50vw"
                    quality={60}
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-[#120d16]/[0.28]" />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-base text-[#201404] shadow-glow transition group-hover:bg-gold-soft sm:h-16 sm:w-16 sm:text-2xl">
                      <FaCirclePlay aria-hidden="true" />
                    </span>
                  </span>
                </span>
                <span className="block p-3 sm:p-6">
                  <span className="text-base font-semibold text-cream sm:text-2xl">
                    {video.title}
                  </span>
                  <span className="mt-1.5 block text-xs leading-5 text-text-muted sm:mt-3 sm:text-sm sm:leading-7">{video.description}</span>
                  <span className="mt-2 block text-[11px] font-semibold text-gold-soft sm:mt-4 sm:text-sm">
                    {video.publishedText}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        isOpen={Boolean(selectedVideo)}
        title={selectedVideo?.title ?? "Video"}
        onClose={() => setSelectedVideo(null)}
      >
        {selectedVideo ? (
          <div className="space-y-5">
            <div className="aspect-video overflow-hidden rounded-[8px] border border-white/[0.12] bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={`${selectedVideo.title} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-gold-soft">{selectedVideo.publishedText}</p>
              <a
                href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gold/[0.45] bg-white/[0.08] px-5 py-3 text-sm font-semibold text-cream transition hover:border-gold hover:bg-gold/[0.10] focus:outline-none focus:ring-2 focus:ring-gold"
              >
                Open on YouTube
                <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
