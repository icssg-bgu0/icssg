"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Calendar, 
  Settings, 
  LogOut,
  Menu,
  X,
  CreditCard,
  MessageSquare
} from "lucide-react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

const adminLinks = [
  { href: "/admin", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { href: "/admin/speakers", label: "Speakers", icon: <Users className="w-5 h-5" /> },
  { href: "/admin/papers", label: "Submissions", icon: <FileText className="w-5 h-5" /> },
  { href: "/admin/schedule", label: "Schedule", icon: <Calendar className="w-5 h-5" /> },
  { href: "/admin/registrations", label: "Registrations", icon: <CreditCard className="w-5 h-5" /> },
  { href: "/admin/messages", label: "Messages", icon: <MessageSquare className="w-5 h-5" /> },
  { href: "/admin/settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-glass-border bg-surface-raised z-20">
        <Link href="/admin" className="font-heading font-bold text-lg text-white">
          ICSSG-AI Admin
        </Link>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 text-white/70">
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-10 w-64 h-screen bg-surface-raised border-r border-glass-border flex flex-col transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6 hidden md:block">
          <Link href="/admin" className="font-heading font-bold text-xl text-white">
            <span className="text-accent-blue">ICSSG</span>-AI Admin
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {adminLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-accent-blue/10 text-accent-blue font-medium"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-glass-border">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-white/50">Theme</span>
            <ThemeToggle />
          </div>
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 overflow-x-hidden min-h-screen">
        {children}
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-0 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
