import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionLabel from "@/components/shared/SectionLabel";
import AnimatedHeading from "@/components/shared/AnimatedHeading";
import ImageCarousel from "@/components/shared/ImageCarousel";

const advantages = [
  { stat: "15–20 Days", label: "Construction Speed", desc: "On-site assembly time" },
  { stat: "100+ Years", label: "Service Life", desc: "Engineered durability" },
  { stat: "≥ 45 dB", label: "Sound Insulation", desc: "Quiet, comfortable interiors" },
  { stat: "≥ 18°F (10°C)", label: "Thermal Insulation", desc: "Indoor/outdoor differential" },
  { stat: "≥ 4 Hours", label: "Fire Resistance", desc: "High fire-rating assemblies" },
  { stat: "≥ 8.5", label: "Seismic Rating", desc: "Earthquake-resistant frame" },
  { stat: "≥ 93 MPH", label: "Wind Resistance", desc: "(150 km/h) sustained winds" },
];

const finishes = [
  {
    name: "Standard",
    price: "$79",
    desc: "Builder-grade fixtures, LVT flooring, painted drywall, stock cabinetry and countertops.",
    popular: false,
  },
  {
    name: "Premium",
    price: "$99",
    desc: "Engineered hardwood, quartz countertops, designer lighting, upgraded cabinetry and tile.",
    popular: true,
  },
  {
    name: "Luxury",
    price: "$129",
    desc: "Natural stone, custom millwork, high-end appliances, smart-home integration.",
    popular: false,
  },
];

const steps = [
  { num: 1, title: "Confirm Design", desc: "Site plan & architectural drawings reviewed and signed off (with dimensions)" },
  { num: 2, title: "Calculate Materials", desc: "Engineering team computes material schedule for the chosen model" },
  { num: 3, title: "Prepare Quote", desc: "Itemized pricing list generated based on materials and finishes" },
  { num: 4, title: "Confirm Materials", desc: "Client signs off on material specifications and finish selections" },
  { num: 5, title: "Confirm Quote", desc: "Final quotation accepted and contract executed" },
  { num: 6, title: "Production", desc: "Manufacturing begins; construction shop drawings issued" },
  { num: 7, title: "Foundation", desc: "Client builds local foundation per provided foundation drawings" },
  { num: 8, title: "Shipping", desc: "Modules and components are loaded and shipped to the project site" },
  { num: 9, title: "Assembly", desc: "Goods arrive; client installs per installation drawings" },
  { num: 10, title: "Engineering Visit", desc: "Optional: engineers travel to site for assembly support (cost extra)" },
];

const BASE = "https://media.base44.com/images/public/6a3d99160f311f943d2b9488";

const catalogueImages = [
  { src: `${BASE}/a0e4d214f_HRGPREFABLab-01.png`, label: "True Prefab Design and Build — Overview" },
  { src: `${BASE}/7c1408cea_HRGPREFABLab-02.png`, label: "HRG Advantages & Finish Levels" },
  { src: `${BASE}/973bed88f_HRGPREFABLab-03.png`, label: "Your Home, From Concept to Keys" },
  { src: `${BASE}/2d1d9dc3d_HRGPREFABLab-04.png`, label: "HRG-101 — Studio Cabin — 258 ft²" },
  { src: `${BASE}/fd865dcd4_HRGPREFABLab-05.png`, label: "HRG-102 — Single-Bedroom Suite — 452 ft²" },
  { src: `${BASE}/8a0a7c4f2_HRGPREFABLab-06.png`, label: "HRG-103 — Linear Two-Bedroom — 646 ft²" },
  { src: `${BASE}/c7f1a7aff_HRGPREFABLab-07.png`, label: "HRG-104 — Compact Two-Bedroom — 592 ft²" },
  { src: `${BASE}/e59984e29_HRGPREFABLab-08.png`, label: "HRG-106 — Modern Two-Bedroom — 829 ft²" },
  { src: `${BASE}/5767f99d9_HRGPREFABLab-09.png`, label: "HRG-107 — Two-Bedroom + Dining — 1,076 ft²" },
  { src: `${BASE}/8f1ba1b5b_HRGPREFABLab-10.png`, label: "HRG-108 — Three-Bedroom + Carport — 1,130 ft²" },
  { src: `${BASE}/8b9869bef_HRGPREFABLab-11.png`, label: "HRG-109 — Hip-Roof Three-Bedroom — 1,292 ft²" },
  { src: `${BASE}/92d806ae1_HRGPREFABLab-12.png`, label: "HRG-110 — Four-Bedroom Family — 1,378 ft²" },
  { src: `${BASE}/3dc32ac97_HRGPREFABLab-13.png`, label: "HRG-111 — Three-Bedroom + Pool — 1,432 ft²" },
  { src: `${BASE}/de1a22739_HRGPREFABLab-14.png`, label: "HRG-112 — Modern Pool Villa — 1,475 ft²" },
  { src: `${BASE}/cdffdcf6a_HRGPREFABLab-15.png`, label: "HRG-113 — Four-Bedroom Linear Villa — 2,007 ft²" },
  { src: `${BASE}/9d19bf47f_HRGPREFABLab-16.png`, label: "HRG-114 — Stone-Clad Three-Bedroom — 2,422 ft²" },
  { src: `${BASE}/362b49e77_HRGPREFABLab-17.png`, label: "HRG-115 — Three-Bedroom Estate — 2,885 ft²" },
  { src: `${BASE}/d12b6ba2d_HRGPREFABLab-18.png`, label: "HRG-201 — Two-Story Three-Bedroom — 915 ft²" },
  { src: `${BASE}/f3d2deaa3_HRGPREFABLab-19.png`, label: "HRG-202 — Cubic Three-Bedroom — 1,399 ft²" },
  { src: `${BASE}/c3a999e3a_HRGPREFABLab-20.png`, label: "HRG-203 — Loft Four-Bedroom — 1,507 ft²" },
  { src: `${BASE}/90b2f2d39_HRGPREFABLab-21.png`, label: "HRG-204 — Cantilever Four-Bedroom — 1,701 ft²" },
  { src: `${BASE}/e99317683_HRGPREFABLab-22.png`, label: "HRG-205 — Modern Two-Story — 1,755 ft²" },
  { src: `${BASE}/9c4dd3939_HRGPREFABLab-23.png`, label: "HRG-206 — Cedar Two-Story + Garage — 2,583 ft²" },
  { src: `${BASE}/69c4ccbd5_HRGPREFABLab-24.png`, label: "HRG-207 — Two-Story Modern + Garage — 2,799 ft²" },
  { src: `${BASE}/924073f7e_HRGPREFABLab-25.png`, label: "HRG-208 — Hillside Pool Estate — 3,229 ft²" },
  { src: `${BASE}/b80572518_HRGPREFABLab-26.png`, label: "HRG-209 — Five-Bedroom Estate — 3,832 ft²" },
  { src: `${BASE}/ac865cc24_HRGPREFABLab-27.png`, label: "HRG Prefab — Contact" },
];

const models = [
  { id: "HRG-101", name: "Studio Cabin", beds: 1, baths: 1, sqft: "258 ft²", dim: "10'-10\" × 23'-0\"", img: `${BASE}/2d1d9dc3d_HRGPREFABLab-04.png` },
  { id: "HRG-102", name: "Single-Bedroom Suite", beds: 1, baths: 1, sqft: "452 ft²", dim: "18'-4\" × 24'-7\"", img: `${BASE}/fd865dcd4_HRGPREFABLab-05.png` },
  { id: "HRG-103", name: "Linear Two-Bedroom", beds: 2, baths: 1, sqft: "646 ft²", dim: "15'-9\" × 39'-1\"", img: `${BASE}/8a0a7c4f2_HRGPREFABLab-06.png` },
  { id: "HRG-104", name: "Compact Two-Bedroom", beds: 2, baths: 1, sqft: "592 ft²", dim: "—", img: `${BASE}/c7f1a7aff_HRGPREFABLab-07.png` },
  { id: "HRG-106", name: "Modern Two-Bedroom", beds: 2, baths: 1, sqft: "829 ft²", dim: "29'-4\" × 35'-9\"", img: `${BASE}/e59984e29_HRGPREFABLab-08.png` },
  { id: "HRG-107", name: "Two-Bedroom + Dining", beds: 2, baths: 1, sqft: "1,076 ft²", dim: "37'-9\"", img: `${BASE}/5767f99d9_HRGPREFABLab-09.png` },
  { id: "HRG-108", name: "Three-Bedroom + Carport", beds: 3, baths: 1, sqft: "1,130 ft²", dim: "22'-4\"", img: `${BASE}/8f1ba1b5b_HRGPREFABLab-10.png` },
  { id: "HRG-109", name: "Hip-Roof Three-Bedroom", beds: 3, baths: 1, sqft: "1,292 ft²", dim: "30'-10\" × 36'-10\"", img: `${BASE}/8b9869bef_HRGPREFABLab-11.png` },
  { id: "HRG-110", name: "Four-Bedroom Family", beds: 4, baths: 2, sqft: "1,378 ft²", dim: "—", img: `${BASE}/92d806ae1_HRGPREFABLab-12.png` },
  { id: "HRG-111", name: "Three-Bedroom + Pool", beds: 3, baths: 2, sqft: "1,432 ft²", dim: "46'-3\"", img: `${BASE}/3dc32ac97_HRGPREFABLab-13.png` },
  { id: "HRG-112", name: "Modern Pool Villa", beds: 3, baths: 2, sqft: "1,475 ft²", dim: "60'-4\"", img: `${BASE}/de1a22739_HRGPREFABLab-14.png` },
  { id: "HRG-113", name: "Four-Bedroom Linear Villa", beds: 4, baths: 2, sqft: "2,007 ft²", dim: "97'-0\"", img: `${BASE}/cdffdcf6a_HRGPREFABLab-15.png` },
  { id: "HRG-114", name: "Stone-Clad Three-Bedroom", beds: 3, baths: 3, sqft: "2,422 ft²", dim: "43'-2\"", img: `${BASE}/9d19bf47f_HRGPREFABLab-16.png` },
  { id: "HRG-115", name: "Three-Bedroom Estate", beds: 3, baths: 3, sqft: "2,885 ft²", dim: "—", img: `${BASE}/362b49e77_HRGPREFABLab-17.png` },
  { id: "HRG-201", name: "Two-Story Three-Bedroom", beds: 3, baths: 1, sqft: "915 ft²", dim: "37'-5\" × 32'-10\"", img: `${BASE}/d12b6ba2d_HRGPREFABLab-18.png` },
  { id: "HRG-202", name: "Cubic Three-Bedroom", beds: 3, baths: 2, sqft: "1,399 ft²", dim: "—", img: `${BASE}/f3d2deaa3_HRGPREFABLab-19.png` },
  { id: "HRG-203", name: "Loft Four-Bedroom", beds: 4, baths: 2, sqft: "1,507 ft²", dim: "31'-6\"", img: `${BASE}/c3a999e3a_HRGPREFABLab-20.png` },
  { id: "HRG-204", name: "Cantilever Four-Bedroom", beds: 4, baths: 3, sqft: "1,701 ft²", dim: "22'-9\"", img: `${BASE}/90b2f2d39_HRGPREFABLab-21.png` },
  { id: "HRG-205", name: "Modern Two-Story", beds: 3, baths: 3, sqft: "1,755 ft²", dim: "37'-9\"", img: `${BASE}/e99317683_HRGPREFABLab-22.png` },
  { id: "HRG-206", name: "Cedar Two-Story + Garage", beds: 4, baths: 3, sqft: "2,583 ft²", dim: "43'-10\" × 35'-5\"", img: `${BASE}/9c4dd3939_HRGPREFABLab-23.png` },
  { id: "HRG-207", name: "Two-Story Modern + Garage", beds: 3, baths: 3, sqft: "2,799 ft²", dim: "48'-0\" × 24'-8\"", img: `${BASE}/69c4ccbd5_HRGPREFABLab-24.png` },
  { id: "HRG-208", name: "Hillside Pool Estate", beds: 4, baths: 4, sqft: "3,229 ft²", dim: "300 m²", img: `${BASE}/924073f7e_HRGPREFABLab-25.png` },
  { id: "HRG-209", name: "Five-Bedroom Estate", beds: 5, baths: 4, sqft: "3,832 ft²", dim: "73'-7\" × 44'-11\"", img: `${BASE}/b80572518_HRGPREFABLab-26.png` },
];

export default function PrefabDesignBuild() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        breadcrumb="Prefab Design & Build"
        label="True Prefab"
        title={<>Modern Modular Homes <em className="font-serif font-light">Built</em> to Last</>}
        subtitle="24 standard models, fully customizable, engineered to US specifications for speed, durability, and architectural quality."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
      />

      {/* Advantages */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <SectionLabel>Why HRG Prefab</SectionLabel>
          <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Home Remodel Group <em className="font-serif font-light">Advantages</em>
          </AnimatedHeading>
          <p className="text-muted-foreground max-w-2xl mx-auto">Built to North American standards. Engineered for durability, efficiency, and rapid assembly.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {advantages.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-card border border-border rounded-lg p-6 text-center"
            >
              <div className="text-2xl font-bold text-primary font-heading mb-1">{a.stat}</div>
              <div className="font-semibold text-sm text-foreground uppercase tracking-wide mb-1">{a.label}</div>
              <div className="text-xs text-muted-foreground">{a.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Finish Levels */}
      <section className="bg-secondary/40 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel>Pricing</SectionLabel>
            <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Finish <em className="font-serif font-light">Levels</em>
            </AnimatedHeading>
            <p className="text-muted-foreground mt-3">Three finish packages, pricing per square foot of conditioned floor area.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {finishes.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-lg p-8 text-center relative ${f.popular ? "bg-primary text-primary-foreground shadow-xl scale-105" : "bg-card border border-border"}`}
              >
                {f.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className={`font-heading font-bold uppercase tracking-widest text-sm mb-3 ${f.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{f.name}</div>
                <div className={`text-5xl font-bold font-heading mb-1 ${f.popular ? "text-primary-foreground" : "text-primary"}`}>{f.price}</div>
                <div className={`text-sm mb-4 ${f.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>per ft²</div>
                <p className={`text-sm leading-relaxed font-semibold ${f.popular ? "text-primary-foreground" : "text-foreground"}`}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">Pricing illustrative. Excludes site preparation, foundation, utility connections, permits, and applicable taxes.</p>
        </div>
      </section>

      {/* 10-Step Process */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <SectionLabel>How It Works</SectionLabel>
          <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Your Home, From <em className="font-serif font-light">Concept to Keys</em>
          </AnimatedHeading>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">A streamlined 10-step process from initial design to delivered, on-site assembly.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {steps.slice(0, 5).map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-secondary/60 rounded-lg p-5"
            >
              <div className="w-8 h-8 rounded-full bg-muted text-foreground font-bold text-sm flex items-center justify-center mb-3">{s.num}</div>
              <div className="font-semibold text-sm text-foreground mb-1">{s.title}</div>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
          {steps.slice(5).map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-primary text-primary-foreground rounded-lg p-5"
            >
              <div className="w-8 h-8 rounded-full bg-primary-foreground/20 text-primary-foreground font-bold text-sm flex items-center justify-center mb-3">{s.num}</div>
              <div className="font-semibold text-sm mb-1">{s.title}</div>
              <p className="text-xs text-primary-foreground/80 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Slideable Model Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <SectionLabel>Factory Direct Modular Homes</SectionLabel>
          <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Model <em className="font-serif font-light">Gallery</em>
          </AnimatedHeading>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Swipe through our catalogue of standard home models. Click any image to view it full screen.</p>
        </div>
        <ImageCarousel images={catalogueImages} />
      </section>

      {/* Model Catalog */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel>24 Standard Models</SectionLabel>
            <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Model <em className="font-serif font-light">Catalog</em>
            </AnimatedHeading>
            <p className="text-muted-foreground mt-3">From compact studio cabins to multi-bedroom estate villas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="text-xs font-bold text-primary uppercase tracking-widest mb-0.5">{m.id}</div>
                      <div className="font-heading font-bold text-foreground">{m.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary font-heading">{m.sqft}</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {m.beds} Bed · {m.baths} Bath · {m.dim}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        label="Get Started"
        title="Ready to build your dream home?"
        buttonText="Request a Free Estimate"
      />
    </div>
  );
}