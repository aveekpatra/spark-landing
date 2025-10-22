import HeroSection from "@/components/hero-section";
import ContentSection from "@/components/content-1";
import Features from "@/components/features-12";
import ServicesSection from "@/components/services";
import TestimonialsSection from "@/components/testimonials";
import FAQsTwo from "@/components/faqs-2";
import ContactSection from "@/components/contact";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ContentSection />
      <Features />
      <ServicesSection />
      <TestimonialsSection />
      <FAQsTwo />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
