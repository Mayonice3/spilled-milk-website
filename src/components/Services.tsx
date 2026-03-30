import React from 'react';
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      isIntro: true,
      title: "Our Services",
      subtitle: "Scalable Solutions for Dominating the Digital Feed",
      description: "We've replaced generic social management with high-precision engineering. Choose your leverage point and let's scale.",
      benefits: [
        "Infrastructure for scale",
        "Algorithm-first approach",
        "Performance-driven creative",
        "Proprietary growth frameworks"
      ],
      bg: "bg-[#f0e8dd]",
      text: "text-[#1b1b1b]"
    },
    {
      title: "The Viral Engine",
      subtitle: "Instagram Growth & Reels Strategy",
      description: "We don't just 'post'—we engineer attention. Our proprietary Reels framework is designed to trigger platform algorithms, turning cold viewers into loyal followers.",
      benefits: ["Algorithm-native content planning", "High-retention editing style", "Strategic hashtag & SEO clusters", "Daily engagement & community seeding"],
      bg: "bg-[#1b1b1b]",
      text: "text-[#f0e8dd]"
    },
    {
      title: "Content Alchemy",
      subtitle: "High-Performance Content Creation",
      description: "Visuals that demand a second look. We combine high-end production with data-backed creative direction to produce assets that convert.",
      benefits: ["Commercial-grade visual design", "Direct-response copywriting", "Short-form video mastery", "Brand identity scaling"],
      bg: "bg-[#f0e8dd]",
      text: "text-[#1b1b1b]"
    },
    {
      title: "Intel & Growth",
      subtitle: "Analytics & ROI Tracking",
      description: "Stop guessing. We provide a transparent window into your growth using advanced attribution models and competitor intelligence.",
      benefits: ["Real-time performance dashboards", "Competitor vulnerability analysis", "Audience sentiment tracking", "Bi-weekly strategy pivots"],
      bg: "bg-black",
      text: "text-[#f0e8dd]"
    }
  ];

  return (
    <section className="relative bg-[#1a3a8f]/5">
      {/* Background Text Overlay */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none z-0">
        <div className="text-[18vw] font-black text-[#1a3a8f]/5 uppercase leading-none select-none tracking-tighter whitespace-nowrap">
          Engineering Growth Engineering Growth
        </div>
      </div>

      <div className="relative">
        {services.map((service, index) => (
          <div
            key={index}
            className="sticky top-0 h-screen w-full"
            style={{ zIndex: index + 1 }}
          >
            <div
              className={`w-full h-full ${service.bg} ${service.text} p-6 sm:p-14 lg:p-24 flex flex-col justify-center overflow-hidden relative border-b border-black/5`}
            >
              {/* Decorative Gradient */}
              <div className={`absolute -right-20 -top-20 w-64 h-64 sm:w-96 sm:h-96 opacity-10 blur-3xl rounded-full ${service.text === 'text-white' ? 'bg-white' : 'bg-[#1a3a8f]'}`}></div>

              <div className="relative z-10 w-full flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-2 sm:mb-8">
                  <div className="max-w-4xl">
                    <span className="text-[clamp(0.6rem,1.5vw,0.85rem)] font-bold uppercase tracking-[0.3em] opacity-50 mb-1 block">
                      {service.isIntro ? "The Vision" : `Service 0${index}`}
                    </span>
                    <h4 className="text-[clamp(1.8rem,5vw,5rem)] font-black leading-[0.9] mb-2 sm:mb-4 uppercase tracking-tighter">
                      {service.title}
                    </h4>
                    <p className="subheading text-[clamp(0.9rem,1.8vw,1.8rem)] font-medium opacity-80 max-w-3xl leading-tight">
                      {service.subtitle}
                    </p>
                  </div>
                  {!service.isIntro && (
                    <div className={`p-4 sm:p-5 rounded-full border-2 ${service.text === 'text-white' ? 'border-white/20' : 'border-[#1a3a8f]/20'} hidden md:block mt-4`}>
                      <ArrowUpRight className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                  )}
                </div>

                <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-start mt-2">
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-[clamp(0.8rem,1.5vw,1.1rem)] leading-relaxed opacity-90 font-medium max-w-xl">
                      {service.description}
                    </p>
                    <button className={`py-2.5 sm:py-3 px-6 sm:px-8 rounded-full border-2 font-bold text-sm sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg ${service.text === 'text-white'
                      ? 'border-white text-white hover:bg-white hover:text-[#a6a195]'
                      : 'border-[#a6a195] text-[#a6a195] hover:bg-[#a6a195] hover:text-white'
                      }`}>
                      Discuss Project
                    </button>
                  </div>

                  <div className="bg-black/5 rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-10 backdrop-blur-md border border-black/5">
                    <h5 className="text-[clamp(0.6rem,1.2vw,0.8rem)] font-bold uppercase tracking-widest opacity-60 mb-3 sm:mb-6">Capabilities</h5>
                    <ul className="grid gap-2 sm:gap-4">
                      {service.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-start gap-3 sm:gap-4 text-[clamp(0.75rem,1.3vw,1rem)] font-semibold">
                          <div className={`mt-1.5 w-2 w-2 rounded-full flex-shrink-0 ${service.text === 'text-white' ? 'bg-white' : 'bg-[#1a3a8f]'}`}></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between items-end relative z-10 border-t border-black/5 pt-4">
                <div className="flex gap-4 sm:gap-8 opacity-30 hidden sm:flex">
                  <span className="text-[0.6rem] font-bold uppercase tracking-widest">Growth</span>
                  <span className="text-[0.6rem] font-bold uppercase tracking-widest">Retention</span>
                  <span className="text-[0.6rem] font-bold uppercase tracking-widest">Scale</span>
                </div>
                <div className="text-[clamp(2rem,6vw,6rem)] font-black opacity-5 select-none leading-none tracking-tighter">
                  {service.isIntro ? "MLK" : `0${index}`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
