import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // close menu on scroll-away
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Main bar */}
      <div className="">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center">

          {/* Mobile: hamburger left-aligned */}
          <button
            className="md:hidden p-2 text-white mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo — centered on mobile, left-aligned on desktop */}
          <a
            href="#"
            className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex-shrink-0 cursor-pointer"
          >
            <img
              src="/spilled-milk-logo.png"
              alt="Spilled Milk Logo"
              loading="eager"
              // @ts-ignore
              fetchpriority="high"
              className="h-8 sm:h-10 w-auto"
            />
          </a>

          {/* Desktop menu — pushed to right */}
          <div className="hidden md:flex ml-auto gap-6 text-sm font-medium text-white">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:-translate-y-0.5 transition-transform"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile dropdown — smooth slide */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-lg border-t border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#1a3a8f] font-semibold py-3 border-b border-gray-100 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
