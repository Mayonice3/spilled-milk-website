import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Zap, Target, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Statistics = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLImageElement>(null);
  const arrow1Ref = useRef<HTMLImageElement>(null);
  const arrow2Ref = useRef<HTMLImageElement>(null);
  const arrow3Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const animations: gsap.core.Tween[] = [];

    if (phoneRef.current && sectionRef.current) {
      const t = gsap.to(phoneRef.current, {
        y: isMobile ? -60 : -120,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      animations.push(t);
    }

    const arrows = [
      { ref: arrow1Ref, y: isMobile ? -125 : -250 },
      { ref: arrow2Ref, y: isMobile ? -250 : -500 },
      { ref: arrow3Ref, y: isMobile ? -100 : -200 },
    ];

    arrows.forEach((arrow) => {
      if (arrow.ref.current && sectionRef.current) {
        const t = gsap.to(arrow.ref.current, {
          y: arrow.y,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
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
      ref={sectionRef}
      className="pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center max-w-7xl mx-auto">
          {/* Left Side: Mockup Image */}
          <div className="relative mt-8 lg:mt-0 z-30 order-2 lg:order-1 flex justify-center items-center w-full">
            <div className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px]">
              {/* Phone Mockup - Removed AOS to prevent property conflicts with GSAP ScrollTrigger */}
              <img
                ref={phoneRef}
                src="/statistics-phone.png"
                alt="Statistics Mockup on a smartphone"
                loading="lazy"
                className="w-full h-auto object-contain drop-shadow-2xl relative z-30 mx-auto"
              />

              {/* Arrow 1: Front */}
              <img
                ref={arrow1Ref}
                src="/green-arrow.png"
                alt=""
                loading="lazy"
                className="absolute w-12 sm:w-20 lg:w-24 top-10 -left-10 z-40 drop-shadow-lg -rotate-12"
              />

              {/* Arrow 2: Front (Larger) - Moved 33% left relative to current position to prevent off-screen overflow */}
              <img
                ref={arrow2Ref}
                src="/green-arrow.png"
                alt=""
                loading="lazy"
                className="absolute w-24 sm:w-40 lg:w-48 bottom-10 -right-12 z-40 drop-shadow-lg rotate-12 -translate-x-[33%]"
              />

              {/* Arrow 3: Behind (Bottom Left) */}
              <img
                ref={arrow3Ref}
                src="/green-arrow.png"
                alt=""
                loading="lazy"
                className="absolute w-12 sm:w-20 lg:w-24 -bottom-12 -left-8 z-20 opacity-40 blur-[2px]"
              />
            </div>
          </div>

          {/* Right Side: Content & Cards */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              Engineered for
              <span className="text-pink-500 block sm:inline"> PERFORMANCE</span>
            </h2>
            <p
              className="subheading text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="0"
            >
              We treat social media like a high-precision product. It requires a
              balance of aesthetic "hooks" and backend data to function at peak
              efficiency.
            </p>

            <div className="flex flex-col gap-4 sm:gap-6">
              <Card
                className="bg-white border-2 border-[#1a3a8f]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-left"
                data-aos-duration="300"
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-bold text-black uppercase tracking-wider">
                    The Hook & Hold Method
                  </CardTitle>
                  <Zap className="h-5 w-5 text-[#1a3a8f]" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#1a3a8f]/80 leading-relaxed">
                    We use cinematic-grade editing and motion graphics to lower
                    "cost-per-view" while increasing brand recall.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-white border-2 border-[#1a3a8f]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-left"
                data-aos-duration="300"
                data-aos-delay="50"
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-bold text-black uppercase tracking-wider">
                    Data-Driven Iteration
                  </CardTitle>
                  <Target className="h-5 w-5 text-[#1a3a8f]" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#1a3a8f]/80 leading-relaxed">
                    Every campaign is a prototype. We split-test creative assets
                    in real-time, doubling down on the "performance winners" to
                    ensure your budget only fuels what works.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-white border-2 border-[#1a3a8f]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-left"
                data-aos-duration="300"
                data-aos-delay="100"
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-bold text-black uppercase tracking-wider">
                    Measurable Authority
                  </CardTitle>
                  <ShieldCheck className="h-5 w-5 text-[#1a3a8f]" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#1a3a8f]/80 leading-relaxed">
                    We don't just grow numbers; we grow your share of voice. Our
                    strategy ensures that your brand isn't just seen—it's
                    recognized as a category leader.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
