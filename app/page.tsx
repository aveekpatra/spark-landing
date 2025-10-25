import HeroSection from "@/components/hero-section";
import ContentSection from "@/components/content-1";
import Features from "@/components/services";
import ServicesSection from "@/components/features-four";
import TestimonialsSection from "@/components/testimonials";
import FAQsTwo from "@/components/faqs-2";
import ContactSection from "@/components/contact";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <main>
      <section id="domov">
        <HeroSection />
      </section>
      <section id="o-nas">
        <ContentSection />
      </section>
      <section id="storitve">
        <Features />
        <ServicesSection />
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
