"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logoImg from "@/logos.png";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Allow the browser to paint first, then start a timer to remove the preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#050816] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
          >
            <Image
              src={logoImg}
              alt="Loading..."
              fill
              className="object-contain animate-pulse drop-shadow-glow"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 font-heading font-semibold text-white tracking-widest uppercase text-sm"
          >
            Loading...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
