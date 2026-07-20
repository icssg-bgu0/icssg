"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, FlaskConical, BookOpen, Building2, Globe, Check, Star, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { formatCurrency } from "@/lib/utils";
import registrationData from "@/data/registration.json";
import type { RegistrationTier } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  FlaskConical: <FlaskConical className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
};

export function Registration() {
  const tiers = registrationData as RegistrationTier[];

  return (
    <section
      id="registration"
      className="relative py-section overflow-hidden"
      aria-labelledby="registration-title"
    >
      <MeshGradient variant="default" />
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Join Us"
          subtitle="Registration"
          title="Registration"
          titleHighlight="Pricing"
          description="Choose the registration tier that best suits your profile. Early bird discounts available."
        />

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {tiers.map((tier, index) => (
            <motion.div key={tier.id} variants={staggerItem}>
              <div
                className={`glass-card overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 h-full flex flex-col ${
                  tier.popular
                    ? "border-accent-blue/30 shadow-glow relative"
                    : ""
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple" />
                )}

                <div className="p-6 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center">
                      {iconMap[tier.icon]}
                    </div>
                    {tier.popular && (
                      <Badge variant="default">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-lg text-white mb-1">
                    {tier.title}
                  </h3>
                  <p className="text-xs text-white/40 mb-6">{tier.category}</p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading font-bold text-3xl text-white">
                        {formatCurrency(tier.earlyBird.price, tier.earlyBird.currency)}
                      </span>
                    </div>
                    <p className="text-[11px] text-white/30 mt-1">
                      Early Bird • Regular: {formatCurrency(tier.regular.price, tier.regular.currency)}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5 mb-6 flex-1">
                    {tier.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-xs text-white/50"
                      >
                        <Check className="w-3.5 h-3.5 text-accent-emerald shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant={tier.popular ? "gradient" : "outline"}
                    className="w-full"
                    size="sm"
                  >
                    Register
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
