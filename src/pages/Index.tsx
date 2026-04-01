import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import WorkCarousel from "@/components/WorkCarousel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1b1b1b]">
      <Navbar />
      <div className="relative bg-[#1b1b1b] overflow-hidden">
        {/* Continuous Animated grid pattern overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute animate-grid-scroll w-[200%] h-[200%] -top-[50%] -left-[50%] bg-[size:30px_30px] md:bg-[size:60px_60px]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
              `
            }}
          ></div>
        </div>
        <Hero />
        <Statistics />
      </div>
      <Services />
      <WorkCarousel />
      <Footer />
    </div>
  );
};

export default Index;
