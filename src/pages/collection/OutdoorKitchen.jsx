import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionLabel from "@/components/shared/SectionLabel";
import AnimatedHeading from "@/components/shared/AnimatedHeading";
import ImageCarousel from "@/components/shared/ImageCarousel";

const BASE = "https://media.base44.com/images/public/6a3d99160f311f943d2b9488";

const kitchenModels = [
  { num: 1, length: "4.1 meters", countertop: "Sintered stone", doors: "Lacquer glass", highlight: "Ice maker, beverage fridge, flatbed grill, 5-burner BBQ, sink, spice rack", img: `${BASE}/f9ccc05f9_HRGDeck-AppleHomeContainerKitchen59.png` },
  { num: 2, length: "3.8 meters", countertop: "Sintered stone", doors: "Lacquer glass", highlight: "Kamado grill, 5-burner BBQ, flatbed grill, beverage fridge", img: `${BASE}/25022f92a_HRGDeck-AppleHomeContainerKitchen60.png` },
  { num: 3, length: "3.4 meters", countertop: "Sintered stone", doors: "Lacquer glass", highlight: "Beverage fridge, pizza oven, spice rack, 4-burner BBQ, RO water filter", img: `${BASE}/3100dc3a5_HRGDeck-AppleHomeContainerKitchen61.png` },
  { num: 4, length: "2.4 meters", countertop: "Sintered stone", doors: "Lacquer glass", highlight: "4-burner BBQ, beverage fridge, stainless sink, compact layout", img: `${BASE}/3ecd9bfe1_HRGDeck-AppleHomeContainerKitchen62.png` },
  { num: 5, length: "3.0 meters", countertop: "Sintered stone", doors: "Lacquer glass", highlight: "5-burner BBQ, pizza oven, beverage fridge, sink", img: `${BASE}/3766539ec_HRGDeck-AppleHomeContainerKitchen63.png` },
  { num: 6, length: "3.8 meters", countertop: "Sintered stone", doors: "Lacquer glass", highlight: "Kamado grill, 6-burner BBQ, pizza oven, large beverage fridge", img: `${BASE}/856b3a3c5_HRGDeck-AppleHomeContainerKitchen64.png` },
  { num: 7, length: "3.885 meters", countertop: "Sintered stone", doors: "Lacquer glass", highlight: "Glass fridge, pizza oven, 4-burner BBQ, stainless sink", img: `${BASE}/6585580d9_HRGDeck-AppleHomeContainerKitchen65.png` },
  { num: 8, length: "2.2 × 4.6 meters (L-shape)", countertop: "304 stainless steel", doors: "304 stainless steel", highlight: "Kamado, 4-burner BBQ, double-door fridge, sink, RO filter", img: `${BASE}/96e0f8aba_HRGDeck-AppleHomeContainerKitchen66.png` },
  { num: 9, length: "2.2 × 4.6 meters (L-shape)", countertop: "304 stainless steel", doors: "304 stainless steel", highlight: "Wood-finish panels, 4-burner BBQ, sink, Kamado", img: `${BASE}/c8b05f375_HRGDeck-AppleHomeContainerKitchen67.png` },
  { num: 10, length: "3.2 meters", countertop: "Sintered stone", doors: "Lacquer glass", highlight: "Side burner, glass fridge, spice rack, 5-burner BBQ, flatbed grill", img: `${BASE}/867f55548_HRGDeck-AppleHomeContainerKitchen68.png` },
  { num: 11, length: "2.57 × 2.95 meters (L-shape)", countertop: "Sintered stone", doors: "Sintered stone", highlight: "Drawer fridge, under-counter sink, built-in grill, RO filter", img: `${BASE}/412aa6aac_HRGDeck-AppleHomeContainerKitchen69.png` },
  { num: 12, length: "2.35 meters", countertop: "Quartz stone", doors: "Lacquer glass", highlight: "4-burner BBQ, glass fridge, stainless sink", img: `${BASE}/00b5d8826_HRGDeck-AppleHomeContainerKitchen70.png` },
  { num: 13, length: "4.0 meters", countertop: "Quartz stone", doors: "Wood grain laminated 304 stainless steel", highlight: "3-burner BBQ, stainless sink", img: `${BASE}/931d71204_HRGDeck-AppleHomeContainerKitchen71.png` },
  { num: 14, length: "2.5 × 3.5 meters (L-shape)", countertop: "Sintered stone", doors: "Lacquer glass", highlight: "Pizza oven, flatbed griddle, 4-burner BBQ, beverage fridge, sink", img: `${BASE}/789e56c02_HRGDeck-AppleHomeContainerKitchen72.png` },
  { num: 15, length: "5.0 meters (L-shape)", countertop: "Sintered stone", doors: "Lacquer glass", highlight: "Built-in grill, double-door fridge, sink, pull-out trash bins", img: `${BASE}/e5066688e_HRGDeck-AppleHomeContainerKitchen73.png` },
];

const catalogImages = [
  ...kitchenModels.map((k) => ({ src: k.img, label: `Model ${k.num} — ${k.length}`, alt: `Outdoor Kitchen Model ${k.num}` })),
  { src: `${BASE}/560b7070a_HRGDeck-AppleHomeContainerKitchen74.png`, label: "Cabinet Box — 16mm 304 Double-layer Stainless Steel", alt: "Cabinet box construction" },
  { src: `${BASE}/f0be5f899_HRGDeck-AppleHomeContainerKitchen75.png`, label: "Countertop Options", alt: "Countertop materials" },
  { src: `${BASE}/5a374df30_HRGDeck-AppleHomeContainerKitchen76.png`, label: "Door Panel Options", alt: "Door panel materials" },
  { src: `${BASE}/88fef0045_HRGDeck-AppleHomeContainerKitchen77.png`, label: "Appliances — CE Certified", alt: "CE certified appliances" },
  { src: `${BASE}/5e26b9fe6_HRGDeck-AppleHomeContainerKitchen78.png`, label: "Appliances & Color Options", alt: "Appliances and color options" },
];

const countertops = [
  { name: "15mm Sintered Stone", desc: "Heat-resistant, scratch-proof, UV-stable. The most popular choice for outdoor use." },
  { name: "20mm Quartz Stone", desc: "Non-porous, low maintenance. Elegant appearance with superior hardness." },
  { name: "15mm 304 Stainless Steel", desc: "Maximum durability and hygiene. Industrial aesthetic, completely weatherproof." },
];

const doorPanels = [
  { name: "20mm Lacquer Glass", desc: "Smooth, high-gloss finish available in black, white, blue, and custom colors." },
  { name: "16mm 304 Stainless Steel", desc: "Brushed or polished. Resists corrosion, heat, and impact." },
  { name: "20mm Sintered Stone", desc: "Match the countertop for a seamless monolithic look." },
];

const appliances = [
  "Built-in Gas BBQ Grills (3–6 burners)", "Kamado Ceramic Grill", "Pizza Oven",
  "Flatbed Gas Griddle", "Beverage Refrigerator (single and double-door)",
  "Ice Maker", "Under-counter Drawer Refrigerator", "Stainless Sink with Faucet",
  "Spice Rack", "RO Water Filter", "Electric Motorized Curtains",
];

export default function OutdoorKitchen() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        breadcrumb="Outdoor Kitchen"
        label="Outdoor Kitchen Cabinets"
        title={<>Premium Outdoor Kitchen <em className="font-serif font-light">Catalog</em></>}
        subtitle="Factory-direct outdoor kitchen cabinet systems with sintered stone countertops, lacquer glass or stainless door panels, and CE-certified appliances."
        image="https://images.unsplash.com/photo-1762117360868-d4e757073d45?w=1600&q=80"
      />

      {/* Slideable Model Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <SectionLabel>Factory Direct Outdoor Kitchens</SectionLabel>
          <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Kitchen Model <em className="font-serif font-light">Gallery</em>
          </AnimatedHeading>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Swipe through our 15 standard kitchen models plus materials and appliances. Click any image to view it full screen.</p>
        </div>
        <ImageCarousel images={catalogImages} />
      </section>

      {/* Model Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <SectionLabel>15 Standard Models</SectionLabel>
          <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Kitchen <em className="font-serif font-light">Models</em>
          </AnimatedHeading>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">All models feature 16mm 304 double-layer stainless steel cabinet boxes. Fully customizable length, countertop, door panels, and appliances.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kitchenModels.map((k, i) => (
            <motion.div
              key={k.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <img src={k.img} alt={`Kitchen Model ${k.num}`} className="w-full h-44 object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">{k.num}</div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">Hot Sale</span>
                </div>
                <div className="text-sm text-muted-foreground space-y-1 mb-3">
                  <div><span className="font-semibold text-foreground">Length:</span> {k.length}</div>
                  <div><span className="font-semibold text-foreground">Countertop:</span> {k.countertop}</div>
                  <div><span className="font-semibold text-foreground">Door panels:</span> {k.doors}</div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-3">{k.highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Materials */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionLabel>Materials</SectionLabel>
              <AnimatedHeading className="font-heading text-3xl font-bold text-foreground mb-8">
                Countertop <em className="font-serif font-light">Options</em>
              </AnimatedHeading>
              <div className="space-y-4">
                {countertops.map((c, i) => (
                  <div key={c.name} className="bg-card border border-border rounded-lg p-5">
                    <div className="font-semibold text-foreground mb-1">({i + 1}) {c.name}</div>
                    <p className="text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionLabel>Finishes</SectionLabel>
              <AnimatedHeading className="font-heading text-3xl font-bold text-foreground mb-8">
                Door Panel <em className="font-serif font-light">Options</em>
              </AnimatedHeading>
              <div className="space-y-4">
                {doorPanels.map((d, i) => (
                  <div key={d.name} className="bg-card border border-border rounded-lg p-5">
                    <div className="font-semibold text-foreground mb-1">({i + 1}) {d.name}</div>
                    <p className="text-sm text-muted-foreground">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appliances */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <SectionLabel>CE Certified</SectionLabel>
          <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Available <em className="font-serif font-light">Appliances</em>
          </AnimatedHeading>
          <p className="text-muted-foreground mt-3">All appliances are CE certified and support custom logo branding.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {appliances.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card border border-border rounded-lg p-4 text-center"
            >
              <p className="text-sm font-semibold text-foreground">{a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection label="Get Started" title="Design your perfect outdoor kitchen." buttonText="Request a Free Estimate" />
    </div>
  );
}