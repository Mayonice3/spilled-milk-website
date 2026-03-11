import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const WorkCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })]
  );

  // Blank cards as requested - simpler and cleaner
  const slides = [1, 2, 3, 4, 5, 6];

  return (
    <section id="portfolio" className="bg-black py-24 sm:py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 mb-16 text-center">
        <h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-6"
          data-aos="fade-up"
        >
          Selected <span className="text-pink-500">Case Studies</span>
        </h2>
        <p 
          className="subheading text-white/60 text-lg sm:text-xl max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          A look at the content engines we've built for high-performance brands.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-4 sm:gap-6 px-4">
            {slides.map((_, index) => (
              <div 
                key={index} 
                className="embla__slide flex-[0_0_260px] sm:flex-[0_0_300px] lg:flex-[0_0_340px] min-w-0 pointer-events-none"
              >
                <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm shadow-2xl transition-transform duration-500">
                  {/* Minimalist Blank Card Design */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Subtle Grain/Glass Effect */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCarousel;
