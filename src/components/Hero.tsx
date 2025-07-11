
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, TrendingUp, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" data-aos="fade-up" data-aos-duration="2000">
      <div className="absolute inset-0 z-0">
              <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/your-video.mp4" type="video/mp4" />
          <source src="/your-video.webm" type="video/webm" />
        </video>
        
        {/* OR for GIF (use one or the other) */}
        {/* <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/your-animation.gif"
          alt="Background animation"
          loading="eager"
        /> */}
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              Grow Your 
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent"> Social Media </span>
               Presence
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transform your social media strategy with our proven methods. 
              We help businesses and creators achieve authentic growth, 
              engagement, and meaningful connections with their audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg border-0" data-aos="fade-up"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-6 sm:px-8 py-3 text-base sm:text-lg" data-aos="fade-up"
              onClick={() => document.getElementById('ig_screenshots').scrollIntoView({ behavior: 'smooth' })}>
                View Our Work
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-gray-600 text-sm sm:text-base justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500" />
                <span>Instagram Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                <span>Profile Views</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />
                <span>Analytics</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in mt-8 lg:mt-0">
            <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-pink-200">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border border-pink-100">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">100K+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Profile Views/Month</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-rose-50 rounded-xl border border-purple-100">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-500 to-rose-500 bg-clip-text text-transparent mb-1 sm:mb-2">98%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-100">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-1 sm:mb-2">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border border-pink-100">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">300%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Avg. Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
