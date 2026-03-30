import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import WorkCarousel from "@/components/WorkCarousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[1b1b1b]">
      <Navbar />
      <div className="relative bg-[#a6a195] overflow-hidden">
        {/* Continuous Animated grid pattern overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 animate-grid-scroll"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              width: "200%",
              height: "200%",
              top: "-50%",
              left: "-50%",
            }}
          ></div>
        </div>
        <Hero />
        <Statistics />
      </div>
      <Services />
      <WorkCarousel />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
