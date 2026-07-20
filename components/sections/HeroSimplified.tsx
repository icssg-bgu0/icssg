"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import bguLogo from "@/bgu-logo.png";
import springerLogo from "@/springer-logo.png";

// Import images from root
import img1 from "@/01.jpg";
import img2 from "@/03.jpg";
import img5 from "@/16.jpg";
import newImg1 from "@/images (12).jfif";
import newImg2 from "@/images (13).jfif";
import newImg3 from "@/bgunight (1).jpg";

const images = [img1, img2, img5, newImg1, newImg2, newImg3];

export function HeroSimplified() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="pt-32 pb-16 bg-gray-50 border-b border-gray-200">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="flex flex-wrap justify-center items-center gap-12 mb-10">
            <div className="relative h-24 w-auto max-w-[200px]">
              <Image src={bguLogo} alt="BGU Logo" height={96} className="object-contain" />
            </div>
            <div className="relative h-24 w-auto max-w-[200px]">
              <Image src={springerLogo} alt="Springer Logo" height={96} className="object-contain" />
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[#337ab7] mb-6 leading-tight">
            International Conference on Smart Systems and Sustainable Governance Powered by AI (ICSSG-AI 2027)
          </h1>
          
          <div className="flex justify-center items-center gap-2 mb-12 text-xl md:text-2xl font-bold text-gray-700">
            <span className="text-[#337ab7]">📅</span> 11th to 13th March 2027
          </div>
          
          {/* Picture Carousel */}
          <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={img}
                  alt={`Conference Image ${idx + 1}`}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
            ))}
            
            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIdx ? "bg-white scale-125 shadow-sm" : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
