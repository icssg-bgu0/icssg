"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, HelpCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { fadeUp } from "@/lib/animations";
import faqData from "@/data/faq.json";

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(faqData.map((f) => f.category))],
    []
  );

  const filtered = useMemo(() => {
    let items = faqData;
    if (activeCategory !== "All") {
      items = items.filter((f) => f.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q)
      );
    }
    return items;
  }, [searchQuery, activeCategory]);

  return (
    <section
      id="faq"
      className="relative py-section overflow-hidden"
      aria-labelledby="faq-title"
    >
      <MeshGradient variant="subtle" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Help Center"
          subtitle="FAQ"
          title="Frequently Asked"
          titleHighlight="Questions"
          description="Find answers to common questions about submissions, registration, venue, and more."
        />

        {/* Search */}
        <div className="max-w-md mx-auto mb-6">
          <Input
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<Search className="w-4 h-4" />}
          />
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-heading transition-all ${
                activeCategory === cat
                  ? "bg-accent-blue/10 text-accent-blue border border-accent-blue/30"
                  : "text-white/40 hover:text-white border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-6">
            {filtered.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filtered.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-4 h-4 text-accent-blue shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-8">
                <p className="text-white/40">No matching questions found.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
