"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  organization: z.string().min(2, "Organization is required"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactDetails = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "icssg-ai@bgu.ac.in",
    href: "mailto:icssg-ai@bgu.ac.in",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Alternate Email",
    value: "conference@bgu.ac.in",
    href: "mailto:conference@bgu.ac.in",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91 674 272 5724",
    href: "tel:+916742725724",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Address",
    value: "Birla Global University, IDCO Plot No.2, Gothapatna, Bhubaneswar, Odisha 751029",
    href: null,
  },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // In production, this would send to Supabase or an API
    console.log("Contact form submitted:", data);
    alert("Thank you! Your message has been sent.");
    reset();
  };

  return (
    <section
      id="contact"
      className="relative py-section overflow-hidden"
      aria-labelledby="contact-title"
    >
      <MeshGradient variant="default" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Get in Touch"
          badgeVariant="cyan"
          subtitle="Contact"
          title="Contact"
          titleHighlight="Us"
          description="Have questions? Reach out to the organizing committee and we'll get back to you promptly."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {contactDetails.map((detail, index) => (
              <motion.div key={detail.label} variants={staggerItem}>
                <GlassCard padding="md" hover={false} animated={false}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-xs text-white/40 font-heading uppercase tracking-wider mb-1">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-sm text-white/70 hover:text-accent-blue transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm text-white/70">{detail.value}</p>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            {/* Emergency Contact */}
            <motion.div variants={staggerItem}>
              <GlassCard padding="md" hover={false} animated={false}>
                <div className="flex items-center gap-3 mb-2">
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                  <h4 className="font-heading font-semibold text-sm text-white">
                    Emergency Contact
                  </h4>
                </div>
                <p className="text-xs text-white/40">
                  For urgent queries during the conference, contact Dr. Amit Das
                  at{" "}
                  <a
                    href="tel:+919876543210"
                    className="text-accent-blue hover:underline"
                  >
                    +91 98765 43210
                  </a>
                </p>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <GlassCard padding="lg" hover={false} animated={false}>
              <h3 className="font-heading font-semibold text-lg text-white mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      {...register("name")}
                      className={errors.name ? "border-red-500/50" : ""}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      {...register("email")}
                      className={errors.email ? "border-red-500/50" : ""}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Input
                    placeholder="Organization / University"
                    {...register("organization")}
                    className={errors.organization ? "border-red-500/50" : ""}
                  />
                  {errors.organization && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.organization.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    placeholder="Subject"
                    {...register("subject")}
                    className={errors.subject ? "border-red-500/50" : ""}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <Textarea
                    placeholder="Your message..."
                    rows={5}
                    {...register("message")}
                    className={errors.message ? "border-red-500/50" : ""}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
