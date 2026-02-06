
import {skills} from '../data/portfolioData'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);



function Tools() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tools"
      className="py-24 bg-gray-900 text-amber-50 px-5"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12">Tools I Use</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((tool) => (
            <div
              key={tool.name}
              ref={addToRefs}
              className="group relative p-5 bg-gray-800 rounded-xl shadow-lg opacity-0 hover:shadow-4xl hover:scale-50 transition "
            >
                      <div className="flex items-center gap-4">
                {tool.icon}
                <h3 className="text-lg font-semibold">{tool.name}</h3>
              </div>

              {/*overlay */}
              <div
                className="absolute inset-0 rounded-xl bg-black/80 
                           flex items-center justify-center
                           opacity-0 group-hover:opacity-100 transition"
              >
                <div className="w-4/5 text-left">
                  <p className="text-sm mb-2 text-amber-300 font-semibold">
                    Mastery: {tool.level}%
                  </p>

                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 transition-all duration-300"
                      style={{ width: `${tool.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;
