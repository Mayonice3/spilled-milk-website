
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Hero />
      <Statistics />
      <Services />
      <Contact />
      
      {/* Address Section */}
      <section className="py-8 bg-gradient-to-r from-pink-50 to-purple-50 border-t border-pink-200">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base font-medium">
              Based in Bengaluru, Karnataka
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
