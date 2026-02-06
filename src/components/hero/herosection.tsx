import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import background from '../../../public/img/bg.png';

gsap.registerPlugin(SplitText);

const Herosection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
 
    const ctx = gsap.context(() => {
      SplitText.create(".split", {
        type: "chars, words",
        autoSplit: true,
        onSplit: (self) => {
          return gsap.from(self.chars, {
            y: 50,
            opacity: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "power2.out",
          });
        },
      });
    }, heroRef);

    const bgEl = bgRef.current;
    if (bgEl) {
         const spinTween = gsap.to(bgEl, {
        rotation: 360,
        duration: 60,       
        repeat: -1,       
        ease: "linear",    
      });

        const handleMove = (e: MouseEvent) => {
        const rect = bgEl.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        gsap.to(bgEl, {
          rotationY: deltaX * 30, 
          rotationX: -deltaY * 30,
          transformPerspective: 1800,
          transformOrigin: "center",
          ease: "power2.out",
          duration: 0.2,
        });
      };

      const handleLeave = () => {
        gsap.to(bgEl, {
          rotationX: 0,
          rotationY: 0,
          ease: "power2.out",
          duration: 0.5,
        });
      };

      bgEl.addEventListener("mousemove", handleMove);
      bgEl.addEventListener("mouseleave", handleLeave);

      return () => {
        ctx.revert();
        bgEl.removeEventListener("mousemove", handleMove);
        bgEl.removeEventListener("mouseleave", handleLeave);
        spinTween.kill(); // stop continuous rotation
      };
    }

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero w-screen text-center justify-center  h-screen md:justify-around flex flex-col md:flex-row items-center md:px-10 md:pt-10"
    >
      <div className="w-full md:max-w-lg space-y-6">
        <h1 className="split text-5xl md:text-7xl text-amber-50 font-bold tracking-tight">
          Hi, I'm Mohsen
        </h1>

        <h2 className="split text-xl md:text-3xl text-gray-300">
          Frontend Developer
        </h2>

        <p className="split text-gray-400 md:text-2xl leading-relaxed">
          I build fast, modern web interfaces focused on clarity, performance,
          and real user experience.
        </p>
      </div>

      <div className="md:mt-10    ">
        <img
          ref={bgRef}
          src={background}
          alt="background"
          className="md:h-[50vh] md:w-auto origin-center rounded-lg "
        />
      </div>
      <div className="scroll-down absolute bottom-10 left-1/2 transform -translate-x-1/2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="md:h-8 md:w-8 w-5 text-amber-50 animate-bounce"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</div>

    </section>
  );
};

export default Herosection;
