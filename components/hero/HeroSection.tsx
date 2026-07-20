"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, FileText, UserPlus, Download, Layers, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { CountdownTimer } from "@/components/hero/CountdownTimer";
import { HeroStats } from "@/components/hero/HeroStats";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Image from "next/image";
import floatImg1 from "@/download (12).jfif";
import floatImg2 from "@/images.png";

import { ErrorBoundary } from "@/components/ErrorBoundary";

// Lazy load heavy 3D components
const ParticleField = dynamic(
  () => import("@/components/hero/ParticleField"),
  { ssr: false }
);

const GlobeVisualization = dynamic(
  () => import("@/components/hero/GlobeVisualization"),
  { ssr: false }
);

export function HeroSection() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      {/* Background Layers */}
      <MeshGradient variant="hero" />

      {/* Particle Network */}
      <ErrorBoundary fallback={<div className="absolute inset-0 bg-primary/20" />}>
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </ErrorBoundary>

      {/* Grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise pointer-events-none" aria-hidden="true" />

      {/* Floating Image 1 (Springer) */}
      <motion.div
        className="absolute top-[12%] right-[5%] lg:right-[15%] z-20 hidden md:block pointer-events-none drop-shadow-2xl"
        animate={{ y: [0, -15, 0], rotate: [0, 4, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-36 h-36 md:w-44 md:h-44">
          <Image src={floatImg1} alt="Springer Logo" fill className="object-contain" />
        </div>
      </motion.div>

      {/* Floating Image 2 (BGU) */}
      <motion.div
        className="absolute top-[25%] right-[2%] lg:right-[5%] z-30 hidden md:block pointer-events-none drop-shadow-2xl"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <Image src={floatImg2} alt="BGU Logo" fill className="object-contain" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column — Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Conference Badge */}
            <motion.div variants={staggerItem} className="mb-6">
              <Badge variant="glass" className="px-4 py-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse mr-2 inline-block" />
                Registration Open — March 12–13, 2027
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={staggerItem}
              className="font-heading font-bold text-heading-1 sm:text-display lg:text-display-xl leading-[1.05] tracking-tight"
            >
              <span className="text-white">Smart Systems</span>
              <br />
              <span className="text-white">&amp; Sustainable</span>
              <br />
              <span className="gradient-text-aurora">
                Governance
              </span>
              <br />
              <span className="text-white/80 text-heading-2 sm:text-heading-1 lg:text-heading-1">
                Powered by AI
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={staggerItem}
              className="mt-6 text-body-lg text-white/50 max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty"
            >
              An international confluence of researchers, academics, and industry leaders 
              advancing the frontiers of AI-driven governance, smart systems, and sustainable 
              innovation.
            </motion.p>

            {/* Conference Details */}
            <motion.div
              variants={staggerItem}
              className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-white/40"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent-blue" />
                <span>March 12–13, 2027</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-cyan" />
                <span>Birla Global University, Bhubaneswar</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Button
                variant="gradient"
                size="lg"
                onClick={() => handleNavClick("#paper-submission")}
              >
                <FileText className="w-4 h-4" />
                Submit Paper
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleNavClick("#registration")}
              >
                <UserPlus className="w-4 h-4" />
                Register Now
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => handleNavClick("#downloads")}
              >
                <Download className="w-4 h-4" />
                Brochure
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => handleNavClick("#tracks")}
              >
                <Layers className="w-4 h-4" />
                Explore Tracks
              </Button>
            </motion.div>

            {/* Countdown */}
            <motion.div
              variants={staggerItem}
              className="mt-10 flex justify-center lg:justify-start"
            >
              <CountdownTimer targetDate="2027-03-12T09:00:00+05:30" />
            </motion.div>
          </motion.div>

          {/* Right Column — 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative h-[500px] xl:h-[600px]"
          >
            <ErrorBoundary>
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-accent-blue/5 animate-pulse" />
                  </div>
                }
              >
                <GlobeVisualization />
              </Suspense>
            </ErrorBoundary>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 lg:mt-20">
          <HeroStats />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
    </section>
  );
}
