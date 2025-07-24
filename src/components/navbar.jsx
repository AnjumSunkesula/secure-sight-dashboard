"use client";

import { LayoutDashboard, Cctv, Settings, TriangleAlert, Users, ChevronDown } from "lucide-react";


export default function Navbar() {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-gray-700 text-white">
      <div className="flex items-center gap-4">
        <span className="font-bold text-lg">MANDLACX</span>
      </div>
      <div>
        <nav className="flex gap-6 ml-6 text-sm text-gray-300">
          <a href="#" className="flex items-center gap-2 cursor-not-allowed hover:text-white">
            <LayoutDashboard size={16} className="text-yellow-400"/> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 cursor-not-allowed hover:text-white">
            <Cctv size={16} /> Cameras
          </a>
          <a href="#" className="flex items-center gap-2 cursor-not-allowed hover:text-white">
            <Settings size={16} /> Scenes
          </a>
          <a href="#" className="flex items-center gap-2 text-white font-bold">
            <TriangleAlert size={16} /> Incidents
          </a>
          <a href="#" className="flex items-center gap-2 cursor-not-allowed hover:text-white">
            <Users size={16} /> Users
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <img
            src="/user.jpg"
            alt="User"
            className="w-8 h-8 rounded-full border border-white"
          />
        </div>
        <div>
          <span>Mohammed Ajhas</span>
          <div className="text-xs text-gray-400">ajhas@mandlac.com</div>
        </div>
        <div className="cursor-not-allowed"><ChevronDown /> </div>
      </div>
    </header>
  );
}
