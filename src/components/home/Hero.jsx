import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80";

export default function Hero() {
  return (
    <section className="relative bg-brand-dark text-white overflow-hidden min-h-[88vh] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Modern prefab home" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-brand-dark/10" />
      </div>

      {/* Roofline overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
        <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <polygon points="600,60 150,560 1050,560" fill="none" stroke="white" strokeWidth="1.5" />
          <polygon points="600,120 250,560 950,560" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5"
          >
            Prefab Additions &amp; ADUs
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-balance"
          >
            More space,<br />
            built off-site,<br />
            <em className="italic font-serif font-light">Ready faster</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl"
          >
            Factory-built ADUs and home additions, set on your lot in a fraction of the time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/get-a-quote"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold tracking-wide uppercase text-sm hover:bg-primary/90 transition-colors"
            >
              Get a Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-md font-semibold tracking-wide uppercase text-sm hover:bg-white/10 transition-colors"
            >
              See Our Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}