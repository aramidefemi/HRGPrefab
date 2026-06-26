import React from "react";
import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-brand-dark text-white/80 text-xs tracking-wide hidden md:block">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <p className="font-body">
          Prefab additions &amp; ADUs, engineered off-site and installed fast.
        </p>
        <div className="flex items-center gap-6">
          <a href="tel:+12132164416" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3 h-3" /> (213) 216-4416
          </a>
          <a href="tel:+19175595056" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3 h-3" /> (917) 559-5056
          </a>
        </div>
      </div>
    </div>
  );
}