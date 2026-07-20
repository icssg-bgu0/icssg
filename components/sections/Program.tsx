"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Mic2, FileText, Coffee, Users, Award, Search } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem } from "@/lib/animations";

const typeColors: Record<string, string> = {
  keynote: "#007AFF", // Blue
  paper: "#00C853",   // Emerald Green
  workshop: "#14B8A6", // Teal
  panel: "#FF9800",    // Orange (keep)
  break: "#64748b",    // Slate
  social: "#34d399",   // Light Emerald
  ceremony: "#ef4444", // Red (keep)
};

const typeIcons: Record<string, React.ReactNode> = {
  keynote: <Mic2 className="w-4 h-4" />,
  paper: <FileText className="w-4 h-4" />,
  workshop: <Users className="w-4 h-4" />,
  panel: <Users className="w-4 h-4" />,
  break: <Coffee className="w-4 h-4" />,
  social: <Users className="w-4 h-4" />,
  ceremony: <Award className="w-4 h-4" />,
};

const programData = [
  {
    date: "2027-03-12",
    dayLabel: "Day 1 — March 12",
    sessions: [
      { id: "s1-1", title: "Registration & Welcome Kit", type: "ceremony", startTime: "08:00", endTime: "09:00", room: "Main Lobby" },
      { id: "s1-2", title: "Inaugural Ceremony", type: "ceremony", startTime: "09:00", endTime: "10:00", room: "Auditorium", speakers: ["Prof. Kulbhusan Balooni", "Dr. Bibhudatta Sahoo"] },
      { id: "s1-3", title: "Keynote: The Future of Human-Centric AI", type: "keynote", startTime: "10:00", endTime: "11:00", room: "Auditorium", speakers: ["Prof. Gheorghita (George) Ghinea"] },
      { id: "s1-4", title: "Tea Break & Networking", type: "break", startTime: "11:00", endTime: "11:30" },
      { id: "s1-5", title: "Keynote: AI-Driven Smart Cities", type: "keynote", startTime: "11:30", endTime: "12:30", room: "Auditorium", speakers: ["Prof. Kumar Padmanabh"] },
      { id: "s1-6", title: "Lunch", type: "break", startTime: "12:30", endTime: "14:00" },
      { id: "s1-7", title: "Paper Session: AI & Machine Learning", type: "paper", startTime: "14:00", endTime: "16:00", room: "Hall A", track: "AI & ML" },
      { id: "s1-8", title: "Paper Session: Big Data Analytics", type: "paper", startTime: "14:00", endTime: "16:00", room: "Hall B", track: "Big Data" },
      { id: "s1-9", title: "Tea Break", type: "break", startTime: "16:00", endTime: "16:30" },
      { id: "s1-10", title: "Workshop: Deep Learning with PyTorch", type: "workshop", startTime: "16:30", endTime: "19:00", room: "Lab 1" },
    ],
  },
  {
    date: "2027-03-13",
    dayLabel: "Day 2 — March 13",
    sessions: [
      { id: "s2-1", title: "Keynote: Trustworthy AI for Governance", type: "keynote", startTime: "09:00", endTime: "10:00", room: "Auditorium", speakers: ["Dr. Deepak Tosh"] },
      { id: "s2-2", title: "Keynote: Big Data for Social Good", type: "keynote", startTime: "10:00", endTime: "11:00", room: "Auditorium", speakers: ["Prof. Haesik Kim"] },
      { id: "s2-3", title: "Tea Break", type: "break", startTime: "11:00", endTime: "11:30" },
      { id: "s2-4", title: "Paper Session: Smart Systems & IoT", type: "paper", startTime: "11:30", endTime: "13:00", room: "Hall A", track: "Smart Systems" },
      { id: "s2-5", title: "Paper Session: Governance & Policy", type: "paper", startTime: "11:30", endTime: "13:00", room: "Hall B", track: "Governance" },
      { id: "s2-6", title: "Lunch", type: "break", startTime: "13:00", endTime: "14:00" },
      { id: "s2-7", title: "Panel Discussion: AI Ethics & Regulation", type: "panel", startTime: "14:00", endTime: "15:30", room: "Auditorium" },
      { id: "s2-8", title: "Poster Session & Demo Showcase", type: "paper", startTime: "15:30", endTime: "16:30", room: "Exhibition Hall" },
      { id: "s2-9", title: "Best Paper Awards & Valedictory", type: "ceremony", startTime: "16:30", endTime: "18:00", room: "Auditorium" },
      { id: "s2-10", title: "Networking Dinner", type: "social", startTime: "19:00", endTime: "21:00", room: "Convention Hall" },
    ],
  },
];

export function Program() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section
      id="program-schedule"
      className="relative py-section overflow-hidden"
      aria-labelledby="program-title"
    >
      <MeshGradient variant="subtle" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="2-Day Program"
          subtitle="Schedule"
          title="Conference"
          titleHighlight="Program"
          description="Explore the full two-day schedule with keynotes, paper sessions, workshops, panels, and networking events."
        />

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <Input
            placeholder="Search sessions, speakers, tracks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<Search className="w-4 h-4" />}
          />
        </div>

        {/* Day Tabs */}
        <Tabs defaultValue="day-1" className="w-full">
          <TabsList className="mx-auto flex w-fit mb-8">
            {programData.map((day, i) => (
              <TabsTrigger key={i} value={`day-${i + 1}`}>
                Day {i + 1}
              </TabsTrigger>
            ))}
          </TabsList>

          {programData.map((day, dayIndex) => (
            <TabsContent key={dayIndex} value={`day-${dayIndex + 1}`}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading font-semibold text-heading-4 text-white mb-6 text-center">
                  {day.dayLabel}
                </h3>

                <div className="space-y-3 max-w-4xl mx-auto">
                  {day.sessions
                    .filter((s) => {
                      if (!searchQuery.trim()) return true;
                      const q = searchQuery.toLowerCase();
                      return (
                        s.title.toLowerCase().includes(q) ||
                        s.type.includes(q) ||
                        s.room?.toLowerCase().includes(q) ||
                        s.track?.toLowerCase().includes(q) ||
                        s.speakers?.some((sp) => sp.toLowerCase().includes(q))
                      );
                    })
                    .map((session) => (
                      <motion.div
                        key={session.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass-card p-4 flex items-start gap-4 hover:bg-glass-bg-hover transition-colors"
                      >
                        {/* Time */}
                        <div className="text-right w-20 shrink-0">
                          <div className="text-sm font-heading font-medium text-white">
                            {session.startTime}
                          </div>
                          <div className="text-[10px] text-white/30">
                            {session.endTime}
                          </div>
                        </div>

                        {/* Color indicator */}
                        <div
                          className="w-1 self-stretch rounded-full shrink-0"
                          style={{ backgroundColor: typeColors[session.type] }}
                        />

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              variant="glass"
                              className="text-[10px] gap-1"
                              style={{ color: typeColors[session.type] }}
                            >
                              {typeIcons[session.type]}
                              {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                            </Badge>
                            {session.track && (
                              <Badge variant="outline" className="text-[10px]">
                                {session.track}
                              </Badge>
                            )}
                          </div>
                          <h4 className="font-heading font-medium text-sm text-white">
                            {session.title}
                          </h4>
                          <div className="flex items-center gap-3 mt-1.5 text-[11px] text-white/30">
                            {session.room && (
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {session.room}
                              </span>
                            )}
                            {session.speakers && (
                              <span className="flex items-center gap-1">
                                <Mic2 className="w-3 h-3" />
                                {session.speakers.join(", ")}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
