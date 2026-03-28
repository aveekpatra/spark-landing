import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import ContentSection from "@/components/content-1";
import Features from "@/components/services";

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
        <ContentSection />
      </section>
      <section id="storitve">
        <Features />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="faqs">
        <FAQsTwo />
      </section>
      <section id="kontakt">
        <ContactSection />
      </section>
      <FooterSection />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Pompex — IT rešitve na enem mestu",
  description:
    "Računalniški servis, programiranje, spletne strani in aplikacije. IT rešitve na enem mestu.",
};
