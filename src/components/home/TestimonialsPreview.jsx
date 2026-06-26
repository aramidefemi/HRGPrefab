import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import AnimatedHeading from "@/components/shared/AnimatedHeading";

const testimonials = [
  {
    text: "HRG had our ADU framed and on-site faster than our neighbor's kitchen remodel took. The whole process was organized from day one.",
    name: "Marissa T.",
    project: "Backyard ADU",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    text: "We needed space for my mother-in-law without a years-long renovation. HRG handled permitting and the install in under two months.",
    name: "Daniel R.",
    project: "In-Law Suite",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    text: "The build quality is genuinely better than I expected from a prefab unit. Finishes look custom, not cookie-cutter.",
    name: "Priya K.",
    project: "Rental ADU",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export default function TestimonialsPreview() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>What Clients Say</SectionLabel>
          <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-balance">
            Trusted by homeowners <em className="italic font-serif font-light">across the region</em>
          </AnimatedHeading>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card rounded-lg p-8 border border-border shadow-sm"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-foreground/70 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-foreground/50">{t.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}