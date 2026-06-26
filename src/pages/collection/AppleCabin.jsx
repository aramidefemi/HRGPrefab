import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import SectionLabel from "@/components/shared/SectionLabel";
import AnimatedHeading from "@/components/shared/AnimatedHeading";
import ImageCarousel from "@/components/shared/ImageCarousel";

const catalogueImages = [
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/e33e9c9f1_HRGDeck-AppleHomeContainerKitchen.png", label: "Collection Overview" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/2e6eea16d_HRGDeck-AppleHomeContainerKitchen2.png", label: "Exterior Options" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/439080960_HRGDeck-AppleHomeContainerKitchen3.png", label: "Model Gallery" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/a8824fb13_HRGDeck-AppleHomeContainerKitchen4.png", label: "Interior Showcase" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/1c0349332_HRGDeck-AppleHomeContainerKitchen5.png", label: "Structural Specifications" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/a7290eb1f_HRGDeck-AppleHomeContainerKitchen6.png", label: "Interior Configurations" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/a71bbf87d_HRGDeck-AppleHomeContainerKitchen7.png", label: "Model Lineup & Pricing" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/52b27d8f6_HRGDeck-AppleHomeContainerKitchen8.png", label: "Pergola Models & Pricing" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/d3c3fe759_HRGDeck-AppleHomeContainerKitchen9.png", label: "Optional Upgrades" },
  { src: "https://media.base44.com/images/public/6a3d99160f311f943d2b9488/056bdffa2_HRGDeck-AppleHomeContainerKitchen10.png", label: "Add-Ons & Upgrades" },
];

const models = [
  { model: "20 ft", dim: "19'0\" × 7'3\" × 8'0\"", area: "138 sq ft", layout: "1 Bedroom | 1 Bathroom | 1 Kitchen", price: "$21,600" },
  { model: "30 ft", dim: "27'11\" × 7'3\" × 8'0\"", area: "201 sq ft", layout: "1 Bedroom | 1 Bathroom | 1 Kitchen | 1 Living Room", price: "$27,000" },
  { model: "40 ft", dim: "37'9\" × 7'3\" × 8'0\"", area: "272 sq ft", layout: "2 Bedrooms | 1 Bathroom | 1 Kitchen | 1 Living Room", price: "$32,400" },
  { model: "20 ft Dbl Floor", dim: "Fl1: 19'0\"×7'3\"×8'0\" Fl2: 19'0\"×7'3\"×8'0\"", area: "631 sq ft total", layout: "1 Bedroom | 1 Bathroom | 1 Kitchen | 1 Living Room", price: "$44,550" },
  { model: "40 ft Dbl Floor", dim: "Fl1: 37'9\"×14'5\"×8'0\" Fl2: 37'9\"×13'9\"×8'0\"", area: "1,396 sq ft total", layout: "2 Bedrooms | 2 Bathrooms | 1 Kitchen | 2 Living Rooms | Pergola | Terrace", price: "$86,400" },
];

const modelsPergola = [
  { model: "20 ft w/ Pergola", dim: "19'0\" × 13'9\" × 8'0\"", area: "263 sq ft total", layout: "1 Bedroom | 1 Bathroom | 1 Kitchen | Pergola", price: "$30,600" },
  { model: "30 ft w/ Pergola", dim: "27'11\" × 13'9\" × 8'0\"", area: "384 sq ft total", layout: "1 Bedroom | 1 Bathroom | 1 Kitchen | 1 Living Room | Pergola", price: "$39,150" },
  { model: "40 ft w/ Pergola", dim: "37'9\" × 13'9\" × 8'0\"", area: "520 sq ft total", layout: "2 Bedrooms | 1 Bathroom | 1 Kitchen | 1 Living Room | Pergola", price: "$44,100" },
];

const specs = [
  { cat: "Main Framework", comp: "Primary Frame", spec: "Galvanized square steel tubing, 120×60×2.0mm" },
  { cat: "", comp: "Capping/Roof", spec: "0.45mm galvanized color steel plate, fully welded, A-class fireproof" },
  { cat: "Floor System", comp: "Subfloor", spec: "18mm high-density cement pressure board — A-class non-combustible, waterproof" },
  { cat: "", comp: "Finish Floor (Std)", spec: "1.6mm PVC multi-layer composite: UV anti-fouling, wear-resistant, fiberglass" },
  { cat: "Wall System", comp: "Exterior Cladding", spec: "16mm metal embossed panel — aluminized zinc, rigid polyurethane foam insulation" },
  { cat: "", comp: "Interior Panel", spec: "6mm stone-plastic composite panel — formaldehyde-free, waterproof, mold-resistant" },
  { cat: "Electrical", comp: "Protection", spec: "Earth leakage circuit breaker (ELCB) with master disconnect switch" },
  { cat: "Plumbing", comp: "System", spec: "Complete indoor supply and drain system with hot and cold supply lines" },
  { cat: "Lighting", comp: "Fixtures", spec: "LED ceiling fixtures standard. Recessed spotlights and linear track lights available as add-ons" },
];

const upgrades = [
  { num: 1, name: "Exterior Wall", desc: "Aviation-grade aluminum cladding (walls & roof)", p20: "$8,100", p30: "$10,800", p40: "$13,950" },
  { num: 2, name: "Interior Wall", desc: "Carbon crystal wall panel upgrade", p20: "$1,260", p30: "$1,665", p40: "$2,340" },
  { num: 3, name: "Wall Insulation", desc: "50mm polyurethane foam insulation upgrade", p20: "$2,025", p30: "$2,565", p40: "$3,240" },
  { num: 4, name: "Floor — SPC", desc: "4mm SPC rigid-core flooring", p20: "$720", p30: "$1,080", p40: "$1,440" },
  { num: 5, name: "Floor — Premium", desc: "Engineered wood + graphene electric radiant heating", p20: "$2,340", p30: "$3,150", p40: "$4,230" },
  { num: 6, name: "Smart Home", desc: "Whole-house AI voice control integration", p20: "$2,340/set", p30: "—", p40: "—" },
  { num: 7, name: "Air Conditioning", desc: "1.7 HP mini-split system", p20: "$1,710/set", p30: "—", p40: "—" },
  { num: 8, name: "Smart Door Lock", desc: "Fingerprint + passcode entry lock", p20: "$450/set", p30: "—", p40: "—" },
  { num: 9, name: "Water Heater", desc: "60L storage-type electric water heater", p20: "$810/set", p30: "—", p40: "—" },
];

export default function AppleCabin() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        breadcrumb="Apple Cabin"
        label="Apple Cabin Collection"
        title={<>Factory-Direct <em className="font-serif font-light">Modular</em> Structures</>}
        subtitle="Premium prefabricated modular structures engineered for durability, energy efficiency, and rapid deployment. Ships fully assembled for plug-and-play on-site installation."
        image="https://images.unsplash.com/photo-1709418440553-289bf9f1ef80?w=1600&q=80"
      />

      {/* Catalogue Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <SectionLabel>Factory Direct Modular Structures</SectionLabel>
          <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Apple Cabin <em className="font-serif font-light">Catalogue</em>
          </AnimatedHeading>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Premium prefabricated modular structures engineered for durability, energy efficiency, and rapid deployment. Each unit ships fully assembled and features A-class fire-rated materials, galvanized structural steel framework, rock wool insulation, and a complete hydropower system.
          </p>
        </div>
        <ImageCarousel images={catalogueImages} />
      </section>

      {/* Model Lineup */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel>Factory Direct Pricing</SectionLabel>
            <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Model Lineup & <em className="font-serif font-light">Pricing</em>
            </AnimatedHeading>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="text-left p-4 font-semibold">Model</th>
                  <th className="text-left p-4 font-semibold">Dimensions (L×W×H)</th>
                  <th className="text-left p-4 font-semibold">Floor Area</th>
                  <th className="text-left p-4 font-semibold">Layout</th>
                  <th className="text-left p-4 font-semibold text-primary">Price</th>
                </tr>
              </thead>
              <tbody>
                {[...models, ...modelsPergola].map((m, i) => (
                  <tr key={m.model} className={i % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                    <td className="p-4 font-semibold text-foreground">{m.model}</td>
                    <td className="p-4 text-muted-foreground">{m.dim}</td>
                    <td className="p-4 text-muted-foreground">{m.area}</td>
                    <td className="p-4 text-muted-foreground">{m.layout}</td>
                    <td className="p-4 font-bold text-primary">{m.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">All prices are factory direct. Excludes shipping, foundation, permitting, and installation.</p>
        </div>
      </section>

      {/* Structural Specs */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <SectionLabel>Engineering</SectionLabel>
          <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Structural <em className="font-serif font-light">Specifications</em>
          </AnimatedHeading>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-dark text-white">
                <th className="text-left p-4 font-semibold">Category</th>
                <th className="text-left p-4 font-semibold">Component</th>
                <th className="text-left p-4 font-semibold">Specification</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((s, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                  <td className="p-4 font-semibold text-primary">{s.cat}</td>
                  <td className="p-4 font-semibold text-foreground">{s.comp}</td>
                  <td className="p-4 text-muted-foreground">{s.spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Upgrades */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel>Customize Your Unit</SectionLabel>
            <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Optional Upgrades & <em className="font-serif font-light">Add-Ons</em>
            </AnimatedHeading>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="text-left p-4 font-semibold">#</th>
                  <th className="text-left p-4 font-semibold">Upgrade</th>
                  <th className="text-left p-4 font-semibold">Description</th>
                  <th className="text-left p-4 font-semibold">20 ft</th>
                  <th className="text-left p-4 font-semibold">30 ft</th>
                  <th className="text-left p-4 font-semibold">40 ft</th>
                </tr>
              </thead>
              <tbody>
                {upgrades.map((u, i) => (
                  <tr key={u.num} className={i % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                    <td className="p-4 text-muted-foreground">{u.num}</td>
                    <td className="p-4 font-semibold text-foreground">{u.name}</td>
                    <td className="p-4 text-muted-foreground">{u.desc}</td>
                    <td className="p-4 font-bold text-primary">{u.p20}</td>
                    <td className="p-4 font-bold text-primary">{u.p30}</td>
                    <td className="p-4 font-bold text-primary">{u.p40}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection label="Get Started" title="Ready to order your Apple Cabin?" buttonText="Request a Free Estimate" />
    </div>
  );
}