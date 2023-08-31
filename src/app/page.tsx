"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const monts = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={cn("w-full bg-[#f3f4f6] ", monts.className)}>
      <Hero />
      <Footer />
    </div>
  );
}
