"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/logos.png";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Committee", href: "#committee" },
  { label: "Call for Papers", href: "#call-for-papers" },
  { label: "Registration", href: "#registration" },
  { label: "Important Dates", href: "#dates" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <nav
          className="container-custom flex items-center justify-between h-16 lg:h-20"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="ICSSG-AI 2027 Home"
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <Image src={logoImg} alt="ICSSG-AI Logo" fill className="object-contain drop-shadow-sm" />
            </div>
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-[#337ab7] text-sm leading-tight">
                ICSSG-AI
              </div>
              <div className="text-[10px] text-gray-500 font-heading tracking-wider uppercase">
                2027 Conference
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#337ab7] hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="text-gray-700 hover:text-[#337ab7] hover:bg-gray-50"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white border-l border-gray-200 shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="font-heading font-bold text-[#337ab7]">Menu</div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-500" />
              </Button>
            </div>

            <div className="p-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-[#337ab7] hover:bg-gray-50 font-medium rounded-lg transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
