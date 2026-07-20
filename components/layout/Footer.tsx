"use client";

import React from "react";
import { Mail, Phone, MapPin, Globe, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-100 border-t border-gray-200 text-gray-700 py-12" role="contentinfo">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Address */}
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-[#337ab7] text-lg">ICSSG-AI 2027</h3>
              <p className="text-sm font-semibold text-gray-600">Birla Global University</p>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              International Conference on Smart Systems and Sustainable Governance Powered by AI.
            </p>
            <div className="space-y-2 text-sm text-gray-600 mt-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#337ab7] mt-0.5 shrink-0" />
                <span>
                  Birla Global University, Gothapatna,<br />
                  Bhubaneswar, Odisha 751029, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-[#337ab7] transition-colors">
                  About Conference
                </a>
              </li>
              <li>
                <a href="#tracks" onClick={(e) => handleNavClick(e, "#tracks")} className="hover:text-[#337ab7] transition-colors">
                  Conference Tracks
                </a>
              </li>
              <li>
                <a href="#committee" onClick={(e) => handleNavClick(e, "#committee")} className="hover:text-[#337ab7] transition-colors">
                  Committee
                </a>
              </li>
              <li>
                <a href="#registration" onClick={(e) => handleNavClick(e, "#registration")} className="hover:text-[#337ab7] transition-colors">
                  Registration
                </a>
              </li>
              <li>
                <a href="#dates" onClick={(e) => handleNavClick(e, "#dates")} className="hover:text-[#337ab7] transition-colors">
                  Important Dates
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <a href="mailto:icssg.ai@bgu.ac.in" className="flex items-center gap-2 hover:text-[#337ab7] transition-colors">
                <Mail className="w-4 h-4 text-[#337ab7]" />
                icssg.ai@bgu.ac.in
              </a>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#337ab7] mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">WhatsApp:</span>
                  <span>+91 63713 21604</span>
                  <span>+91 98612 64464</span>
                  <span>+91 94563 17228</span>
                </div>
              </div>
              <a href="https://bgu.ac.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#337ab7] transition-colors pt-1">
                <Globe className="w-4 h-4 text-[#337ab7]" />
                bgu.ac.in
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div>
            © 2027 ICSSG-AI. Birla Global University. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500" /> in India
          </div>
        </div>
      </div>
    </footer>
  );
}
