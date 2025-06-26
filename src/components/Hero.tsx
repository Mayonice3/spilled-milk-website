
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Twitter, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-100 via-stone-50 to-white flex items-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d6d3d1" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-stone-800 mb-6 leading-tight">
              Grow Your Social Media
              <span className="text-amber-600"> Presence</span>
            </h1>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              Transform your social media strategy with our proven methods. 
              We help businesses and creators achieve authentic growth, 
              engagement, and meaningful connections with their audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-stone-300 text-stone-700 hover:bg-stone-100 px-8 py-3 text-lg">
                View Our Work
              </Button>
            </div>
            <div className="flex items-center gap-6 text-stone-600">
              <div className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-amber-600" />
                <span>Instagram Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <Twitter className="h-5 w-5 text-amber-600" />
                <span>Twitter Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-amber-600" />
                <span>Analytics</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-stone-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <div className="text-3xl font-bold text-amber-600 mb-2">500K+</div>
                  <div className="text-stone-600">Followers Gained</div>
                </div>
                <div className="text-center p-4 bg-stone-100 rounded-xl">
                  <div className="text-3xl font-bold text-stone-700 mb-2">98%</div>
                  <div className="text-stone-600">Client Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-stone-100 rounded-xl">
                  <div className="text-3xl font-bold text-stone-700 mb-2">150+</div>
                  <div className="text-stone-600">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <div className="text-3xl font-bold text-amber-600 mb-2">300%</div>
                  <div className="text-stone-600">Avg. Growth</div>
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
