'use client'
import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SpecialsSection from "@/components/SpecialsSection";


import Image from "next/image";

export default function Home() {

  
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <HeroSection/>
        <SpecialsSection/>
        <About/>
        <Footer/>
    </main>
    
  );
}
