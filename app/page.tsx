"use client";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import ContactSection from "@/components/ContactSection";
import Servicios from "@/components/Services";
import Beneficios from "@/components/BenefitsSection";
import BrandStory from "@/components/BrandStorySection";
import Footer from "@/components/footer";
import TrustedBrands from "@/components/TrustedBrands";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandStory />
      <TrustedBrands />
      <Beneficios />
      <Servicios />
      <ContactSection />
      <Footer />
    </>
  );
}
