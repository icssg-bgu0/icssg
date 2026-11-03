"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import entrance from "@/PHOTOS/imageintro1111.jpg";
import campus from "@/PHOTOS/image4444.jpg";
import building from "@/PHOTOS/image222222.jpg";
import atrium from "@/PHOTOS/image2222.jpg";
import night from "@/PHOTOS/imagenbight333.jpg";
import students from "@/PHOTOS/image5555.jpg";

const photos = [
  { src: entrance, alt: "Main entrance of Birla Global University" },
  { src: campus, alt: "Aerial view of a Birla Global University campus building" },
  { src: building, alt: "Birla Global University building beneath a blue sky" },
  { src: atrium, alt: "Interior atrium of a Birla Global University building" },
  { src: night, alt: "Birla Global University building illuminated at night" },
  { src: students, alt: "Students forming the letters BGU on campus" },
];

export function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsPaused(true);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % photos.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  function showPhoto(index: number) {
    setCurrentIndex((index + photos.length) % photos.length);
    setIsPaused(true);
  }

  return (
    <section aria-label="Birla Global University photo carousel" className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
      <div className="relative aspect-[4/3] bg-slate-900 sm:aspect-[3/2]">
        {photos.map((photo, index) => (
          <div
            key={photo.alt}
            aria-hidden={index !== currentIndex}
            className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
              className="object-contain"
              priority={index === 0}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => showPhoto(currentIndex - 1)}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronLeft aria-hidden="true" className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={() => showPhoto(currentIndex + 1)}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronRight aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm text-gray-600">
        <span aria-live={isPaused ? "polite" : "off"}>{currentIndex + 1} of {photos.length}: {photos[currentIndex].alt}</span>
        <div className="flex items-center gap-3">
          <div className="flex gap-2" aria-label="Choose a photo">
            {photos.map((photo, index) => (
              <button
                key={photo.alt}
                type="button"
                onClick={() => showPhoto(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-current={index === currentIndex ? "true" : undefined}
                className={`h-2.5 w-2.5 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#337ab7] ${index === currentIndex ? "bg-[#337ab7]" : "bg-gray-300 hover:bg-gray-400"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={isPaused ? "Play photo carousel" : "Pause photo carousel"}
            className="rounded p-1 text-[#337ab7] hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#337ab7]"
          >
            {isPaused ? <Play aria-hidden="true" className="h-4 w-4" /> : <Pause aria-hidden="true" className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </section>
  );
}
