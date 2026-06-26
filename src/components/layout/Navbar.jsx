import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/a9ecb52a2_HRGPREFABLogo-01.png";

const links = [
  { label: "Home", path: "/" },
  { label: "Collection", path: "/collection" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={LOGO_URL} alt="HRG Prefab" className="h-12 w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide uppercase transition-colors ${
                  isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/get-a-quote"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold tracking-wide uppercase hover:bg-primary/90 transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-brand-cream border-t border-border px-6 py-4 space-y-3">
          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-semibold tracking-wide uppercase ${
                  isActive ? "text-primary" : "text-foreground/70"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/get-a-quote"
            onClick={() => setOpen(false)}
            className="block bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold tracking-wide uppercase text-center"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}