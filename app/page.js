'use client';

import Image from "next/image";
import Link from "next/link"
import { motion } from 'framer-motion';
import { getImagePath } from '../utils/imagePath'; 

export default function Home() {
  

  return (
  
  <main className=" bg-[#F7F3EC]">
    <div className="max-w-4xl mx-auto px-4">
      <div className="min-h-screen flex items-center justify-center">
         <motion.div
            className="text-start max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-2xl font-medium mb-3 text-[#102E2A]">
              Howdy, I'm Mark Soh 👋
            </p>
            <p className="text-4xl font-semibold mb-3 text-[#102E2A] leading-12">
              I'm a frontend developer. I like to craft solid scalable frontend products with great user experiences.
            </p>
          </motion.div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-start text-[#102E2A] mb-10 border-t pt-2">My Stack</h2>

        
       <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
          {[
            { src: "/homepage-Img/html.webp", alt: "HTML" },
            { src: "/homepage-Img/css.webp", alt: "CSS" },
            { src: "/homepage-Img/js.webp", alt: "JavaScript" },
            { src: "/homepage-Img/react.webp", alt: "React" },
            { src: "/homepage-Img/git.webp", alt: "Git" },
            { src: "/homepage-Img/github.webp", alt: "GitHub" },
          ].map((tech, i) => (
            <div key={i} className="group relative flex flex-col items-center justify-center">
              <Image
                src={getImagePath(tech.src)}
                alt={tech.alt}
                width={64}
                height={64}
                className="transition-transform duration-200 transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* My Projects Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-start text-[#102E2A] mb-10 ">My Projects</h2>
      </div>
      
      {/* Project 1 */}
      <div className="w-full max-w-5xl rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white mb-12">
        {/* Full Image (not cropped) */}
        <div className="bg-white">
           <Image
            src={getImagePath("/Proj2-Img/mockup.webp")}
            alt="Project Screenshot"
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Always-visible Content */}
        <div className="p-8">
          <span className="inline-block mb-3 mr-3 text-xs font-semibold uppercase tracking-wider bg-black text-white px-3 py-1 rounded">
            Github
          </span>

          <span className="inline-block mb-3 mr-3 text-xs font-semibold uppercase tracking-wider bg-black text-white px-3 py-1 rounded">
            JavaScript
          </span>

          <span className="inline-block mb-3 mr-3 text-xs font-semibold uppercase tracking-wider bg-black text-white px-3 py-1 rounded">
            PHP
          </span>

          <span className="inline-block mb-3 mr-3 text-xs font-semibold uppercase tracking-wider bg-black text-white px-3 py-1 rounded">
            MySql
          </span>

          <h3 className="text-2xl font-bold text-[#102E2A] mb-3">
            Health and Wellness website about herbs
          </h3>

          <Link href="/herbVita" className="text-base font-medium text-blue-600 hover:underline flex items-center gap-1">
            View Project <span>↗</span>
          </Link>
        </div>
      </div>

      {/* Project 2 */}
      <div className="w-full max-w-5xl rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white mb-12">
        {/* Full Image (not cropped) */}
        <div className="bg-white">
          <Image
            src={getImagePath("/Proj1-Img/peakPerformance.png")}
            alt="Project Screenshot"
            width={1100}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <div className="p-8">
          <span className="inline-block mb-3 mr-3 text-xs font-semibold uppercase tracking-wider bg-black text-white px-3 py-1 rounded">
            Github
          </span>

          <span className="inline-block mb-3 mr-3 text-xs font-semibold uppercase tracking-wider bg-black text-white px-3 py-1 rounded">
            JavaScript
          </span>

          <span className="inline-block mb-3 mr-3 text-xs font-semibold uppercase tracking-wider bg-black text-white px-3 py-1 rounded">
            React
          </span>

          <span className="inline-block mb-3 mr-3 text-xs font-semibold uppercase tracking-wider bg-black text-white px-3 py-1 rounded">
            CSS
          </span>

          <h3 className="text-2xl font-bold text-[#102E2A] mb-3">
            PeakPerformance Sports Apparel Website
          </h3>

          <Link href="/peakPerformance" className="text-base font-medium text-blue-600 hover:underline flex items-center gap-1">
            View Project <span>↗</span>
          </Link>
        </div>
      </div>

     
    </div>
    
     <div id="about" className="bg-[#102E2A] w-full p-10">
        <div className='max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-5 mt-30 mb-30'>
          <div className='md:w-1/2 text-white space-y-6 text-lg'>
            <p className='text-start'>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
            <p className='text-start'>In my free time, I enjoy watching the NBA, UFC, and football. I love skiing and still enjoy building LEGO sets, a hobby I’ve had since childhood.</p>
            <p className="text-start mt-6">
              Contact: <a href="mailto:mark.soh115@gmail.com" className="underline">marksoh115@gmail.com</a> 
              <span> // </span> 
              <a href="https://www.linkedin.com/in/mark-soh115" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline">
              LinkedIn
              </a>
            </p>

          </div>
          
          <div className='md:w-1/2'> 
            <Image src={getImagePath("/homepage-Img/me.webp")} alt="about me" width={300} height={346} className='rounded-xl w-full h-full'/>
          </div>
        </div>
      </div>
  </main>
  );
}

