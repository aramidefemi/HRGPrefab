import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import AnimatedHeading from "@/components/shared/AnimatedHeading";

const steps = [
  { num: "01", title: "Consult & Design", desc: "We walk your lot, talk through goals and budget, and design a unit that fits." },
  { num: "02", title: "Permit & Engineer", desc: "We finalize engineering and handle permitting with your city or county." },
  { num: "03", title: "Build Off-Site", desc: "Your unit is built in our facility while your site is prepped in parallel." },
  { num: "04", title: "Deliver & Set", desc: "We deliver, set, and connect the unit, then walk you through final inspection." },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>How It Works</SectionLabel>
          <AnimatedHeading className="font-heading text-3xl md:text-4xl font-bold text-balance">
            From first call to <em className="italic font-serif font-light">move-in</em>
          </AnimatedHeading>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-heading text-5xl font-bold text-primary/20">{s.num}</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}