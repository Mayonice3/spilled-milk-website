import React, { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const videos = [
  '/videos/work-1.mp4',
  '/videos/work-2.mp4',
  '/videos/work-3.mp4',
  '/videos/work-4.mp4',
  '/videos/work-5.mp4',
  '/videos/work-6.mp4',
];

const WorkCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })]
  );

  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Play/pause all videos based on section visibility
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          videoRefs.current.forEach((video) => {
            if (!video) return;
            if (entry.isIntersecting) {
              video.play().catch(() => {
                // Autoplay blocked — silently ignore
              });
            } else {
              video.pause();
            }
          });
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="bg-black py-24 sm:py-32 overflow-hidden border-t border-white/5"
    >
      <div className="container mx-auto px-4 sm:px-6 mb-16 text-center">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-6"
          data-aos="fade-up"
        >
          Selected <span className="text-[#f0e8dd]">Case Studies</span>
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
            {videos.map((src, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_260px] sm:flex-[0_0_300px] lg:flex-[0_0_340px] min-w-0"
              >
                <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 bg-black shadow-2xl">
                  <video
                    ref={(el) => { videoRefs.current[index] = el; }}
                    src={src}
                    loop
                    muted
                    playsInline
                    // Only preload the first video; defer the rest
                    preload={index === 0 ? 'metadata' : 'none'}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
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
