import React from "react";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import Stats from "@/components/home/Stats";
import ServicesPreview from "@/components/home/ServicesPreview";
import Process from "@/components/home/Process";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import CollectionCTA from "@/components/home/CollectionCTA";
import CTASection from "@/components/shared/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Stats />
      <ServicesPreview />
      <Process />
      <TestimonialsPreview />
      <CollectionCTA />
      <CTASection
        label="Let's Talk Space"
        title={<>Ready to add the space <em className="italic font-serif font-light">your home needs?</em></>}
        buttonText="Get Your Free Estimate"
      />
    </>
  );
}