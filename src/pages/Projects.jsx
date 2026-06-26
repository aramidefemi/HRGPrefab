import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

const projects = [
  { type: "Detached ADU", name: "Maple Ridge Backyard Studio", spec: "Two-bedroom, 640 sq ft", img: "https://images.unsplash.com/photo-1668015642451-a3bb11afb441?w=800&q=80&auto=format&fit=crop" },
  { type: "Attached Addition", name: "Cedar Hollow Family Suite", spec: "One-bedroom addition, 410 sq ft", img: "https://images.unsplash.com/photo-1646327708664-a1a93c2c66de?w=800&q=80&auto=format&fit=crop" },
  { type: "Detached ADU", name: "Willow Park Rental Unit", spec: "Studio, 380 sq ft", img: "https://images.unsplash.com/photo-1698106828998-787ee1cc115c?w=800&q=80&auto=format&fit=crop" },
  { type: "Detached ADU", name: "Birchwood In-Law Suite", spec: "One-bedroom, 520 sq ft", img: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800&q=80&auto=format&fit=crop" },
  { type: "Attached Addition", name: "Hawthorne Second-Story Suite", spec: "Two-room addition, 480 sq ft", img: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/d5b0379f8_modern-garden-furniture-on-the-terrace-of-stylish-2026-03-10-03-58-32-utc.jpg" },
  { type: "Detached ADU", name: "Orchard Lane Guest Cottage", spec: "One-bedroom, 460 sq ft", img: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=800&q=80&auto=format&fit=crop" },
];

export default function Projects() {
  return (
    <>
      <PageHero
        breadcrumb="Projects"
        label="Featured Projects"
        title={<>Find ideas for your <em className="italic font-serif font-light">own addition</em></>}
        subtitle="A look at recent ADUs and additions we've designed, built, and installed."
        image="https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=1600&q=80"
      />

      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
                className="group rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-1 block">
                      {p.type}
                    </span>
                    <h3 className="font-heading text-xl font-bold mb-1">{p.name}</h3>
                    <p className="text-sm text-white/70">{p.spec}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        label="Your Project Next"
        title={<>Have a similar space <em className="italic font-serif font-light">in mind?</em></>}
        buttonText="Get Your Free Estimate"
      />
    </>
  );
}