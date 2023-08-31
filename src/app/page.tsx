"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="w-full bg-[#f3f4f6] ">
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
