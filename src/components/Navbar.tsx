import { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-center">
        <a href="#" className="flex-shrink-0 cursor-pointer">
          <img
            src="/spilled-milk-logo.png"
            alt="Spilled Milk Logo"
            loading="eager"
            // @ts-ignore
            fetchpriority="high"
            className="h-8 sm:h-10 w-auto"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
