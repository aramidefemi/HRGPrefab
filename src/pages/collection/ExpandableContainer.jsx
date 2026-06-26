import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionLabel from "@/components/shared/SectionLabel";
import AnimatedHeading from "@/components/shared/AnimatedHeading";
import ImageCarousel from "@/components/shared/ImageCarousel";

const catalogueImages = [
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/d51854cd4_HRGDeck-AppleHomeContainerKitchen11.png", label: "Expandable Container Home", alt: "Expandable Container Home hero" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/b7afa7ed5_HRGDeck-AppleHomeContainerKitchen12.png", label: "Model Gallery & Certifications", alt: "Gallery of expandable container renders" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/b38e3fa5e_HRGDeck-AppleHomeContainerKitchen13.png", label: "Standard Cabin Model", alt: "Standard cabin model floor plan and exterior" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/1c835d9ec_HRGDeck-AppleHomeContainerKitchen14.png", label: "Deluxe Cabin Model", alt: "Deluxe cabin model floor plan and exterior" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/836c0777d_HRGDeck-AppleHomeContainerKitchen15.png", label: "Container Home Model", alt: "Container home model floor plan and exterior" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/afb4ec00c_HRGDeck-AppleHomeContainerKitchen16.png", label: "Modular Home Unit", alt: "Modular home unit floor plan and exterior" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/51aeaa3ef_HRGDeck-AppleHomeContainerKitchen17.png", label: "Modular Home Design", alt: "Modular home design floor plan and exterior" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/5cefe9c2d_HRGDeck-AppleHomeContainerKitchen18.png", label: "Two-Story Modular Home", alt: "Two-story modular home floor plan and exterior" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/535b9ea56_HRGDeck-AppleHomeContainerKitchen19.png", label: "Two-Story Model House", alt: "Two-story model house floor plan and exterior" },
];

const highlights = [
  { stat: "6 Tons", label: "Structural Load", desc: "Same as a full-grown male elephant" },
  { stat: "15–20 Days", label: "Assembly Time", desc: "Rapid deployment on site" },
  { stat: "Unlimited", label: "Disassembly Cycles", desc: "Welded high-strength hinges at joints" },
  { stat: "100%", label: "Factory Built", desc: "Ships compressed, expands on site" },
];

const configurations = [
  { title: "1 Bedroom Studio", sqft: "~320 sq ft", desc: "Open plan living with full kitchen, bathroom, and bedroom — ideal for ADU or vacation rental.", img: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/b38e3fa5e_HRGDeck-AppleHomeContainerKitchen13.png" },
  { title: "2 Bedroom Family", sqft: "~640 sq ft", desc: "Two bedrooms, shared living/dining, full kitchen and bathroom. Available in single or double-floor.", img: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/1c835d9ec_HRGDeck-AppleHomeContainerKitchen14.png" },
  { title: "3 Bedroom Expanded", sqft: "~960 sq ft", desc: "Full family configuration with three bedrooms, two bathrooms, living and dining areas.", img: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/836c0777d_HRGDeck-AppleHomeContainerKitchen15.png" },
  { title: "Office / Commercial", sqft: "Custom", desc: "Conference room, manager's office, open workspace, toilet. Ideal for job sites and pop-up offices.", img: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/afb4ec00c_HRGDeck-AppleHomeContainerKitchen16.png" },
  { title: "Café / Restaurant", sqft: "Custom", desc: "Operating area, bar counter, bread display, dining area, balcony. Fully finished interior.", img: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/51aeaa3ef_HRGDeck-AppleHomeContainerKitchen17.png" },
];

const realProjects = [
  { location: "Two-Story Modular", type: "2 Bedroom Expandable", color: "White with black frame", img: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/5cefe9c2d_HRGDeck-AppleHomeContainerKitchen18.png" },
  { location: "Two-Story Model", type: "1 Bedroom Expandable", color: "Wood-grain exterior", img: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/535b9ea56_HRGDeck-AppleHomeContainerKitchen19.png" },
  { location: "Multi-Unit Complex", type: "Multi-unit complex", color: "Blue exterior", img: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/b7afa7ed5_HRGDeck-AppleHomeContainerKitchen12.png" },
];

export default function ExpandableContainer() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        breadcrumb="Expandable Container Home"
        label="Container Living"
        title={<>Expandable Container <em className="font-serif font-light">Home</em></>}
        subtitle="A flexible, modern living solution designed to maximize space, efficiency, and long-term value. Ships compressed, deploys in hours."
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80"
      />

      {/* Slideable Catalogue Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <SectionLabel>Factory Direct Modular Structures</SectionLabel>
          <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Model <em className="font-serif font-light">Gallery</em>
          </AnimatedHeading>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Swipe through our catalogue of expandable container models. Click any image to view it full screen.</p>
        </div>
        <ImageCarousel images={catalogueImages} />
      </section>

      {/* Key Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 text-center"
            >
              <div className="text-2xl font-bold text-primary font-heading mb-1">{h.stat}</div>
              <div className="font-semibold text-sm text-foreground uppercase tracking-wide mb-1">{h.label}</div>
              <div className="text-xs text-muted-foreground">{h.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-12">
          <SectionLabel>Configurations</SectionLabel>
          <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Available <em className="font-serif font-light">Configurations</em>
          </AnimatedHeading>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">From single-person studios to full family homes, offices, and commercial spaces — one platform, infinite possibilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {configurations.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <img src={c.img} alt={c.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading font-bold text-foreground">{c.title}</h3>
                  <span className="text-sm font-bold text-primary ml-2 whitespace-nowrap">{c.sqft}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Real Project Photos */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel>Real Projects</SectionLabel>
            <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Deployed <em className="font-serif font-light">Worldwide</em>
            </AnimatedHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realProjects.map((p, i) => (
              <motion.div
                key={p.location}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-lg overflow-hidden"
              >
                <img src={p.img} alt={p.location} className="w-full h-56 object-cover" />
                <div className="bg-card border border-border p-4">
                  <div className="font-semibold text-foreground">{p.location}</div>
                  <div className="text-sm text-muted-foreground">{p.type}</div>
                  <div className="text-xs text-primary mt-1">{p.color}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Expansion Works */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <SectionLabel>Technology</SectionLabel>
        <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
          How <em className="font-serif font-light">Expansion</em> Works
        </AnimatedHeading>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Each unit ships in a compressed container format — roughly the footprint of a standard shipping container. On arrival, the side walls fold out using welded high-strength hinges at the joints, doubling or tripling the interior floor area within hours. No crane needed for smaller units. The structural frame rated at 6 tons ensures the expanded structure is rock-solid and weather-tight.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { step: "1. Deliver", desc: "Unit arrives on site in compressed shipping-container format via standard flatbed truck." },
            { step: "2. Position", desc: "Place on a prepared foundation or leveling jacks. No crane required for single-floor units." },
            { step: "3. Expand", desc: "Pull out the side walls — they fold open on high-strength hinges. Connect utilities and move in." },
          ].map((s, i) => (
            <div key={s.step} className="bg-card border border-border rounded-lg p-6">
              <div className="text-primary font-bold font-heading text-lg mb-2">{s.step}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection label="Get Started" title="Interested in an Expandable Container Home?" buttonText="Request a Free Estimate" />
    </div>
  );
}