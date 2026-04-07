import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import ContentSection from "@/components/content-1";
import AboutMe from "@/components/about-me";
import Features from "@/components/services";
import Reveal from "@/components/reveal";

import TestimonialsSection from "@/components/testimonials";
import FAQsTwo from "@/components/faqs-2";
import ContactSection from "@/components/contact";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <section id="domov">
        <HeroSection />
      </section>
      <section id="o-nas">
        <Reveal><ContentSection /></Reveal>
      </section>
      <section id="o-meni">
        <Reveal><AboutMe /></Reveal>
      </section>
      <section id="storitve">
        <Reveal><Features /></Reveal>
      </section>
      <section id="testimonials">
        <Reveal><TestimonialsSection /></Reveal>
      </section>
      <section id="faqs">
        <Reveal><FAQsTwo /></Reveal>
      </section>
      <section id="kontakt">
        <Reveal><ContactSection /></Reveal>
      </section>
      <Reveal><FooterSection /></Reveal>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Pompex — IT rešitve na enem mestu",
  description:
    "Računalniški servis, programiranje, spletne strani in aplikacije. IT rešitve na enem mestu.",
};
