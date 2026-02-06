import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navInnerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!navInnerRef.current) return;

    let lastScroll = 0;

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const current = self.scroll();

        gsap.to(navInnerRef.current, {
          y: current > lastScroll && current > 100 ? "-100%" : "0%",
          duration: 0.35,
          ease: "power2.out",
        });

        lastScroll = current;
      },
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-1000 ">
      <nav className="bg-black/80 backdrop-blur-md text-amber-50 px-10">
        {/* Animated */}
        <div ref={navInnerRef} className="will-change-transform">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold bg-blue-200 text-black px-2 rounded">
              M
            </h1>

            {/* desktop  */}
            <ul className="hidden md:flex gap-10 text-lg">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative  group"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
                </li>
              ))}
            </ul>

            {/* Mobile b */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M2 4.75h16v1.5H2zm0 4.5h16v1.5H2zm0 4.5h16v1.5H2z" />
              </svg>
            </button>
          </div>

          {/* mobile m */}
          <ul
            className={`
              md:hidden absolute top-full left-0 w-full
              bg-black/95 backdrop-blur-md
              transition-all duration-300
              ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none"
              }
              p-6 flex flex-col gap-6 text-xl
            `}
          >
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="border-b border-white/10 pb-2 hover:text-amber-400 transition"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
