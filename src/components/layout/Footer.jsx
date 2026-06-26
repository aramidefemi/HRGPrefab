import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const LOGO_URL = "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/32e2e3b30_HRGPREFABLogo-02.png";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={LOGO_URL} alt="HRG Prefab" className="h-28 w-auto object-contain mb-6" />
          <p className="text-sm leading-relaxed max-w-md">
            HRG Prefab designs and manufactures accessory dwelling units and home additions
            in a controlled factory setting, then installs them on your lot in a fraction of
            the time a traditional build takes.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Explore</h4>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <p className="text-white font-medium">Jason A. Scott</p>
              <a href="tel:+12132164416" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5" /> (213) 216-4416
              </a>
              <a href="mailto:Jason@HRGPrefab.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5" /> Jason@HRGPrefab.com
              </a>
            </li>
            <li>
              <p className="text-white font-medium">Michael Tsveitel</p>
              <a href="tel:+19175595056" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5" /> (917) 559-5056
              </a>
              <a href="mailto:Michael@HRGPrefab.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5" /> Michael@HRGPrefab.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} HRG Prefab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}