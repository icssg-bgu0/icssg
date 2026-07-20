import React from "react";
import speakersData from "@/data/speakers.json";
import { Plus, Search, MoreVertical, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminSpeakers() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">Speakers</h1>
          <p className="text-white/50">Manage keynote and invited speakers.</p>
        </div>
        <Button variant="gradient">
          <Plus className="w-4 h-4 mr-2" />
          Add Speaker
        </Button>
      </div>

      <div className="bg-surface-raised border border-glass-border rounded-xl overflow-hidden">
        <div className="p-4 border-b border-glass-border flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input 
              type="text" 
              placeholder="Search speakers..." 
              className="w-full bg-white/5 border border-glass-border rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-accent-blue"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-white/50">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Type</th>
                <th className="px-6 py-4 font-medium">Affiliation</th>
                <th className="px-6 py-4 font-medium">Country</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-glass-border">
              {speakersData.map((speaker) => (
                <tr key={speaker.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center text-xs font-bold">
                        {speaker.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-white">{speaker.name}</div>
                        <div className="text-xs text-white/40">{speaker.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-md text-[10px] uppercase font-medium ${
                      speaker.type === "keynote" ? "bg-accent-blue/10 text-accent-blue" : "bg-accent-purple/10 text-accent-purple"
                    }`}>
                      {speaker.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white/70">{speaker.affiliation}</td>
                  <td className="px-6 py-4 text-white/70">{speaker.country}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-white/40 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
