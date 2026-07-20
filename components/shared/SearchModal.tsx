"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchResult {
  title: string;
  section: string;
  href: string;
}

const searchableItems: SearchResult[] = [
  { title: "About the Conference", section: "About", href: "#about-conference" },
  { title: "About Birla Global University", section: "About", href: "#about-university" },
  { title: "Conference Themes", section: "Program", href: "#themes" },
  { title: "Conference Tracks", section: "Program", href: "#tracks" },
  { title: "Keynote Speakers", section: "Speakers", href: "#keynote-speakers" },
  { title: "Invited Speakers", section: "Speakers", href: "#invited-speakers" },
  { title: "Committee Members", section: "Committee", href: "#committee" },
  { title: "Call for Papers", section: "Submission", href: "#call-for-papers" },
  { title: "Paper Submission Guidelines", section: "Submission", href: "#paper-submission" },
  { title: "Publication & Indexing", section: "Publication", href: "#publication" },
  { title: "Important Dates", section: "Dates", href: "#important-dates" },
  { title: "Registration & Pricing", section: "Registration", href: "#registration" },
  { title: "Conference Program", section: "Program", href: "#program-schedule" },
  { title: "Workshops & Tutorials", section: "Program", href: "#workshops" },
  { title: "Sponsors & Partners", section: "Sponsors", href: "#sponsors" },
  { title: "Venue & Directions", section: "Venue", href: "#venue" },
  { title: "Accommodation", section: "Travel", href: "#accommodation" },
  { title: "Local Attractions", section: "Travel", href: "#attractions" },
  { title: "FAQ", section: "Help", href: "#faq" },
  { title: "News & Announcements", section: "News", href: "#news" },
  { title: "Photo Gallery", section: "Media", href: "#gallery" },
  { title: "Downloads", section: "Resources", href: "#downloads" },
  { title: "Contact Us", section: "Contact", href: "#contact" },
];

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  // Filter results
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    const filtered = searchableItems.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.section.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  // Keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = (href: string) => {
    setIsOpen(false);
    setQuery("");
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Search Panel */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl mx-4 rounded-2xl border border-glass-border bg-surface-raised/98 backdrop-blur-xl shadow-elevated overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 border-b border-glass-border">
              <Search className="w-5 h-5 text-white/30 shrink-0" />
              <input
                type="text"
                placeholder="Search the conference..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 py-4 bg-transparent text-white placeholder:text-white/30 outline-none text-base"
                autoFocus
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 text-[10px] text-white/30 border border-glass-border font-mono">
                ESC
              </kbd>
            </div>

            {/* Results */}
            {results.length > 0 && (
              <div className="max-h-64 overflow-y-auto p-2">
                {results.map((result, index) => (
                  <button
                    key={result.href}
                    onClick={() => handleSelect(result.href)}
                    className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-left hover:bg-white/5 transition-colors group"
                  >
                    <div>
                      <div className="text-sm text-white font-medium">
                        {result.title}
                      </div>
                      <div className="text-xs text-white/40 mt-0.5">
                        {result.section}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-accent-blue transition-colors" />
                  </button>
                ))}
              </div>
            )}

            {/* Empty State */}
            {query && results.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-sm text-white/40">
                  No results found for &quot;{query}&quot;
                </p>
              </div>
            )}

            {/* Hint */}
            {!query && (
              <div className="p-6 text-center">
                <p className="text-sm text-white/30">
                  Start typing to search across all sections
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
