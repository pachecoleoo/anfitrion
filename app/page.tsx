"use client";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import ContactSection from "@/components/ContactSection";
import Servicios from "@/components/Services";
import Beneficios from "@/components/BenefitsSection";
import BrandStory from "@/components/BrandStorySection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandStory />
      <Beneficios />
      <Servicios />
      <ContactSection />
      <Footer />
    </>
  );
}
