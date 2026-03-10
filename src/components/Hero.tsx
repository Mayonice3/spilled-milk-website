
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, TrendingUp, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a3a8f]" data-aos="fade-up" data-aos-duration="2000">
      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 z-0 animate-grid-scroll" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        width: '200%',
        height: '200%',
        top: '-50%',
        left: '-50%'
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Grow Your 
              <span className="text-white/90"> Social Media </span>
               Presence
            </h1>
            <p className="text-lg sm:text-xl text-white/70 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transform your social media strategy with our proven methods. 
              We help businesses and creators achieve authentic growth, 
              engagement, and meaningful connections with their audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-[#1a3a8f] hover:bg-white/90 px-6 sm:px-8 py-3 text-base sm:text-lg border-0 font-bold" data-aos="fade-up"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 text-base sm:text-lg" data-aos="fade-up"
              onClick={() => document.getElementById('ig_screenshots')?.scrollIntoView({ behavior: 'smooth' })}>
                View Our Work
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-white/70 text-sm sm:text-base justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span>Instagram Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span>Profile Views</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span>Analytics</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in mt-8 lg:mt-0">
            <div className="backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border-2 border-white/30 bg-white/10">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div className="text-center p-3 sm:p-4 bg-white rounded-xl border border-white">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a3a8f] mb-1 sm:mb-2">100K+</div>
                  <div className="text-xs sm:text-sm text-black">Profile Views/Month</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white rounded-xl border border-white">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a3a8f] mb-1 sm:mb-2">98%</div>
                  <div className="text-xs sm:text-sm text-black">Client Satisfaction</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white rounded-xl border border-white">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a3a8f] mb-1 sm:mb-2">15+</div>
                  <div className="text-xs sm:text-sm text-black">Happy Clients</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white rounded-xl border border-white">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a3a8f] mb-1 sm:mb-2">300%</div>
                  <div className="text-xs sm:text-sm text-black">Avg. Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;
