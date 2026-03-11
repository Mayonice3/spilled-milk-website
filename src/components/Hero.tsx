
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, TrendingUp, Eye } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const verifyIconRef = useRef<HTMLImageElement>(null);
  const commentIconRef = useRef<HTMLImageElement>(null);
  const followIconRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const animations: gsap.core.Tween[] = [];

    if (imageRef.current) {
      const t = gsap.to(imageRef.current, {
        y: isMobile ? -50 : -100, // Balanced parallax for mobile
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      animations.push(t);
    }

    const icons = [
      { ref: verifyIconRef, y: isMobile ? -125 : -250 },
      { ref: commentIconRef, y: isMobile ? -200 : -400 },
      { ref: followIconRef, y: isMobile ? -150 : -300 },
    ];

    icons.forEach((icon) => {
      if (icon.ref.current) {
        const t = gsap.to(icon.ref.current, {
          y: icon.y,
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
        animations.push(t);
      }
    });

    return () => {
      animations.forEach((t) => t.scrollTrigger?.kill());
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-visible"
      data-aos="fade-in"
      data-aos-duration="500"
    >

      <div className="container mx-auto px-4 sm:px-6 relative z-20 pt-32 pb-16 sm:pt-40 sm:pb-20 lg:py-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-center max-w-7xl mx-auto">

          {/* ── TEXT COLUMN ─────────────────────────────────────────── */}
          <div className="animate-fade-in text-center lg:text-left w-full lg:order-1">
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Grow Your
              <span className="text-white/90"> Social Media </span>
              Presence
            </h1>
            <p className="subheading text-lg sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Stop guessing on social media. We deploy data-driven methods to build your reach, engagement, and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-[#1a3a8f] hover:bg-white/90 px-6 sm:px-8 py-3 text-base sm:text-lg border-0 font-bold"
                data-aos="fade-up"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" strokeWidth={5} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-black hover:bg-white/10 px-6 sm:px-8 py-3 text-base sm:text-lg"
                data-aos="fade-up"
                onClick={() =>
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Our Work
              </Button>
            </div>
            <div className="hidden lg:flex flex-row flex-wrap items-center gap-4 sm:gap-6 text-white/70 text-sm sm:text-base justify-center lg:justify-start">
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

          {/* ── PHONE COLUMN ─────────────────────────────────────────── */}
          <div className="relative w-full lg:order-2 flex justify-center">
            {/* Moving 30% left relative to current position using absolute translate value */}
            <div className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] mx-auto lg:translate-y-12 -translate-x-[30%]">

              {/* Main Phone Image — eager load, high priority */}
              <img
                ref={imageRef}
                data-aos="fade-left"
                data-aos-duration="400"
                src="/Phone Mockup.png"
                alt="Social media growth on a smartphone"
                loading="eager"
                fetchPriority="high"
                className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
              />

              {/* Floating: Verified Icon */}
              <img
                ref={verifyIconRef}
                src="/verify-icon.png"
                alt="Account Verified"
                loading="lazy"
                className="absolute w-10 sm:w-16 lg:w-28 bottom-4 left-1/2 -translate-x-1/2 z-20 drop-shadow-xl pointer-events-none"
              />

              {/* Floating: Follower Icon — Moved 10% right relative to original position */}
              <img
                ref={followIconRef}
                src="/follow-icon.png"
                alt="New Follower"
                loading="lazy"
                className="absolute w-14 sm:w-24 lg:w-36 bottom-16 sm:bottom-28 lg:bottom-48 -left-6 sm:-left-8 lg:-left-12 z-20 drop-shadow-xl pointer-events-none translate-x-[10%]"
              />

              {/* Floating: Comment Icon */}
              <img
                ref={commentIconRef}
                src="/comment-icon.png"
                alt="New Comment"
                loading="lazy"
                className="absolute w-16 sm:w-28 lg:w-44 top-1/2 -right-4 sm:-right-8 lg:-right-14 z-20 drop-shadow-xl pointer-events-none -translate-y-1/2"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
