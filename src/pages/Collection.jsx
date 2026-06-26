import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ImageCarousel from "@/components/shared/ImageCarousel";
import SectionLabel from "@/components/shared/SectionLabel";
import AnimatedHeading from "@/components/shared/AnimatedHeading";

const appleCabinImages = [
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/e33e9c9f1_HRGDeck-AppleHomeContainerKitchen.png", label: "Collection Overview" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/2e6eea16d_HRGDeck-AppleHomeContainerKitchen2.png", label: "Exterior Options" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/439080960_HRGDeck-AppleHomeContainerKitchen3.png", label: "Model Gallery" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/a8824fb13_HRGDeck-AppleHomeContainerKitchen4.png", label: "Interior Showcase" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/1c0349332_HRGDeck-AppleHomeContainerKitchen5.png", label: "Structural Specs" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/a7290eb1f_HRGDeck-AppleHomeContainerKitchen6.png", label: "Interior Configurations" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/a71bbf87d_HRGDeck-AppleHomeContainerKitchen7.png", label: "Model Lineup & Pricing" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/52b27d8f6_HRGDeck-AppleHomeContainerKitchen8.png", label: "Pergola Models" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/d3c3fe759_HRGDeck-AppleHomeContainerKitchen9.png", label: "Optional Upgrades" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/056bdffa2_HRGDeck-AppleHomeContainerKitchen10.png", label: "Add-Ons & Upgrades" },
];

const OK_BASE = "https://media.base44.com/images/public/6a3d99160f311f943d2b9488";
const outdoorKitchenImages = [
  { src: `${OK_BASE}/f9ccc05f9_HRGDeck-AppleHomeContainerKitchen59.png`, label: "Model 1 — 4.1 m" },
  { src: `${OK_BASE}/25022f92a_HRGDeck-AppleHomeContainerKitchen60.png`, label: "Model 2 — 3.8 m" },
  { src: `${OK_BASE}/3100dc3a5_HRGDeck-AppleHomeContainerKitchen61.png`, label: "Model 3 — 3.4 m" },
  { src: `${OK_BASE}/3ecd9bfe1_HRGDeck-AppleHomeContainerKitchen62.png`, label: "Model 4 — 2.4 m" },
  { src: `${OK_BASE}/3766539ec_HRGDeck-AppleHomeContainerKitchen63.png`, label: "Model 5 — 3.0 m" },
  { src: `${OK_BASE}/856b3a3c5_HRGDeck-AppleHomeContainerKitchen64.png`, label: "Model 6 — 3.8 m" },
  { src: `${OK_BASE}/6585580d9_HRGDeck-AppleHomeContainerKitchen65.png`, label: "Model 7 — 3.885 m" },
  { src: `${OK_BASE}/96e0f8aba_HRGDeck-AppleHomeContainerKitchen66.png`, label: "Model 8 — L-shape" },
  { src: `${OK_BASE}/c8b05f375_HRGDeck-AppleHomeContainerKitchen67.png`, label: "Model 9 — L-shape" },
  { src: `${OK_BASE}/867f55548_HRGDeck-AppleHomeContainerKitchen68.png`, label: "Model 10 — 3.2 m" },
  { src: `${OK_BASE}/412aa6aac_HRGDeck-AppleHomeContainerKitchen69.png`, label: "Model 11 — L-shape" },
  { src: `${OK_BASE}/00b5d8826_HRGDeck-AppleHomeContainerKitchen70.png`, label: "Model 12 — 2.35 m" },
  { src: `${OK_BASE}/931d71204_HRGDeck-AppleHomeContainerKitchen71.png`, label: "Model 13 — 4.0 m" },
  { src: `${OK_BASE}/789e56c02_HRGDeck-AppleHomeContainerKitchen72.png`, label: "Model 14 — L-shape" },
  { src: `${OK_BASE}/e5066688e_HRGDeck-AppleHomeContainerKitchen73.png`, label: "Model 15 — 5.0 m" },
  { src: `${OK_BASE}/560b7070a_HRGDeck-AppleHomeContainerKitchen74.png`, label: "Cabinet Box Construction" },
  { src: `${OK_BASE}/f0be5f899_HRGDeck-AppleHomeContainerKitchen75.png`, label: "Countertop Options" },
  { src: `${OK_BASE}/5a374df30_HRGDeck-AppleHomeContainerKitchen76.png`, label: "Door Panel Options" },
  { src: `${OK_BASE}/88fef0045_HRGDeck-AppleHomeContainerKitchen77.png`, label: "Appliances — CE Certified" },
  { src: `${OK_BASE}/5e26b9fe6_HRGDeck-AppleHomeContainerKitchen78.png`, label: "Appliances & Color Options" },
];

const poolImages = [
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/22a765bcd_Poolcatalg-40.png", label: "Pool & Aquarium Overview" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/ac47a667d_Poolcatalg-04.png", label: "Acrylic Side Panel" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/5c25c3827_Poolcatalg-05.png", label: "Acrylic Floor Panel" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/79d03aa2a_Poolcatalg-06.png", label: "Acrylic Wall Panel" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/d5c96ab22_Poolcatalg-07.png", label: "Acrylic Sky Window" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/b0b0ceaa1_Poolcatalg-08.png", label: "Acrylic Tunnel" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/72b10db59_Poolcatalg-10.png", label: "Acrylic Cylinder" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/338c4d1ad_Poolcatalg-11.png", label: "Custom Aquarium" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/dff5de67b_Poolcatalg-32.png", label: "Installation Showcase" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/ca553009f_Poolcatalg-03.png", label: "Balcony Pool, Dubai" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/f273e641c_Poolcatalg-15.png", label: "VAI Resort, USA" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/8ba75066f_Poolcatalg-22.png", label: "Sky Roof Pool, Copenhagen" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/fea2c950b_Poolcatalg-27.png", label: "Maldives Resort Villas" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/086c53073_Poolcatalg-29.png", label: "Gujarat Science City" },
];

const cards = [
  {
    slug: "prefab-design-build",
    title: "Prefab Design & Build",
    subtitle: "24 standard models, fully customizable, US-spec construction.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    slug: "apple-cabin",
    title: "Apple Cabin Collection",
    subtitle: "Factory-direct prefabricated modular structures for any setting.",
    image: "https://images.unsplash.com/photo-1709418440553-289bf9f1ef80?w=800&q=80",
  },
  {
    slug: "expandable-container",
    title: "Expandable Container Home",
    subtitle: "Flexible, modern living designed to maximize space and value.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
  {
    slug: "outdoor-kitchen",
    title: "Outdoor Kitchen Cabinets",
    subtitle: "Premium outdoor kitchen cabinet systems with sintered stone and stainless steel.",
    image: "https://images.unsplash.com/photo-1762117360868-d4e757073d45?w=800&q=80",
  },
  {
    slug: "pool",
    title: "Acrylic Pool & Aquarium",
    subtitle: "Grandview acrylic panels for swimming pools and aquariums worldwide.",
    image: "https://images.unsplash.com/photo-1603085429201-64dadaec4061?w=800&q=80",
  },
];

export default function Collection() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        breadcrumb="Collection"
        label="Our Offerings"
        title={<>Our <em className="font-serif font-light not-italic">Product</em> Collection</>}
        subtitle="Explore our full range of modular structures, outdoor living solutions, and premium pool systems."
        image="https://images.unsplash.com/photo-1448630360428-65456885c650?w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="p-8 flex-1">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                  HRG Collection
                </span>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-3 leading-tight">
                  {card.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {card.subtitle}
                </p>
                <Link
                  to={`/collection/${card.slug}`}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wide hover:bg-primary/90 transition-colors"
                >
                  See More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Apple Cabin Gallery */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel>Apple Cabin Collection</SectionLabel>
            <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Model <em className="font-serif font-light">Gallery</em>
            </AnimatedHeading>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Swipe through the Apple Cabin catalogue. Click any image to view it full screen.</p>
          </div>
          <ImageCarousel images={appleCabinImages} />
          <div className="text-center mt-8">
            <Link to="/collection/apple-cabin" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wide hover:bg-primary/90 transition-colors">
              View Full Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Outdoor Kitchen Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel>Outdoor Kitchen Cabinets</SectionLabel>
            <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Model <em className="font-serif font-light">Gallery</em>
            </AnimatedHeading>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Swipe through our outdoor kitchen models. Click any image to view it full screen.</p>
          </div>
          <ImageCarousel images={outdoorKitchenImages} />
          <div className="text-center mt-8">
            <Link to="/collection/outdoor-kitchen" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wide hover:bg-primary/90 transition-colors">
              View Full Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pool & Aquarium Gallery */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel>Pool & Aquarium Collection</SectionLabel>
            <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Project <em className="font-serif font-light">Gallery</em>
            </AnimatedHeading>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Swipe through our acrylic pool and aquarium projects. Click any image to view it full screen.</p>
          </div>
          <ImageCarousel images={poolImages} />
          <div className="text-center mt-8">
            <Link to="/collection/pool" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wide hover:bg-primary/90 transition-colors">
              View Full Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}