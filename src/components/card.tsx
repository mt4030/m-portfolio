import { projects } from '../data/portfolioData';
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  useEffect(() => {
    gsap.utils.toArray(".card").forEach((el, index) => {
    
      const fromX = index % 2 === 0 ? -200 : 200; 

      gsap.fromTo(
        el as HTMLElement,
        { x: fromX, opacity: 0 },  
        { 
          x: 0,
          opacity: 1,
          duration: 0.1,
          ease: "back.out",
          scrollTrigger: {
            trigger: el as HTMLElement,
            start: "top 90%",
            toggleActions: "play pause resume reset", 
          },
        }
      );
    });
  }, []);

  return (
    <div className='cards  grid grid-cols-1 md:grid-cols-2 md:px-80 mb-30 gap-15 md:gap-30 m-5'>
      {projects.map((pro ) => (
        <div
          key={pro.id}
          className='relative card group   rounded-t-3xl rounded transform a hover:shadow-[0_25px_60px_rgba(0,0,0,0.8)] transition-all duration-300 shadow bg-gray-900 text-amber-50'
        >
          <div className='relative group rounded-t-xl overflow-hidden '>
            <img
              src={pro.coverImage}
              alt="image"
              className='w-full h-full  object-cover transition-all border-b-2 duration-300'
            />
          </div>

          <div className='p-5'>
            <h1 className='text-2xl font-semibold mb-3 group-hover:text-amber-400'>{pro.title}</h1>
            <p className='text-gray-500 mb-3'>{pro.shortDescription}</p>

            <div className="flex flex-wrap gap-2 mt-2">
              {pro.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-800 text-amber-50 px-3 py-1 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

         <div className='flex gap-5 p-5'>
            <a
              href={pro.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className='bg-amber-400 text-gray-900 px-3 py-1 rounded hover:bg-amber-500 transition'
            >
              Live
            </a>
            <a
              href={pro.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className='border border-amber-400 px-3 py-1 rounded hover:bg-amber-400 hover:text-gray-900 transition'
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
