import React from "react";
import { Users, FileText, CreditCard, Eye, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Registrations", value: "342", trend: "+12%", icon: <CreditCard className="w-6 h-6 text-accent-blue" /> },
    { label: "Paper Submissions", value: "156", trend: "+5%", icon: <FileText className="w-6 h-6 text-accent-emerald" /> },
    { label: "Confirmed Speakers", value: "48", trend: "0%", icon: <Users className="w-6 h-6 text-accent-purple" /> },
    { label: "Website Visits", value: "12.4k", trend: "+24%", icon: <Eye className="w-6 h-6 text-accent-cyan" /> },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">Dashboard</h1>
          <p className="text-white/50">Welcome back! Here's what's happening today.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-surface-raised border border-glass-border rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                {stat.icon}
              </div>
              <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                stat.trend.startsWith("+") ? "bg-accent-emerald/10 text-accent-emerald" : "bg-white/10 text-white/50"
              }`}>
                {stat.trend}
              </div>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-sm text-white/50">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface-raised border border-glass-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-heading font-semibold text-white">Recent Registrations</h2>
            <button className="text-sm text-accent-blue hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
                    <span className="text-sm font-medium text-white">US</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Participant {i}</p>
                    <p className="text-xs text-white/50">Academic / Researcher</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">₹5,500</p>
                  <p className="text-xs text-accent-emerald">Paid</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-raised border border-glass-border rounded-xl p-6">
          <h2 className="text-lg font-heading font-semibold text-white mb-6">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left group">
              <div>
                <p className="text-sm font-medium text-white group-hover:text-accent-blue transition-colors">Announce News</p>
                <p className="text-xs text-white/50">Post a new update</p>
              </div>
              <TrendingUp className="w-4 h-4 text-white/30 group-hover:text-accent-blue" />
            </button>
            <button className="w-full flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left group">
              <div>
                <p className="text-sm font-medium text-white group-hover:text-accent-purple transition-colors">Add Speaker</p>
                <p className="text-xs text-white/50">Register new keynote/invited</p>
              </div>
              <Users className="w-4 h-4 text-white/30 group-hover:text-accent-purple" />
            </button>
            <button className="w-full flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left group">
              <div>
                <p className="text-sm font-medium text-white group-hover:text-accent-emerald transition-colors">Review Papers</p>
                <p className="text-xs text-white/50">32 pending reviews</p>
              </div>
              <FileText className="w-4 h-4 text-white/30 group-hover:text-accent-emerald" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
