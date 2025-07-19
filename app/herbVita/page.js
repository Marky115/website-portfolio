"use client";
import { useState } from "react";
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiPhp, SiMysql } from 'react-icons/si';
import { getImagePath } from '../utils/imagePath'; 

export default function HerbProjectSection() {
  const tools = [
    { name: 'PHP', icon: <SiPhp className="text-purple-700" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
    ];

  const images = [
    "/Proj2-Img/signup.webp",
    "/Proj2-Img/shop.webp",
    "/Proj2-Img/profile.webp",
    "/Proj2-Img/indexLogin.webp",
    "/Proj2-Img/indexMember.webp",
    "/Proj2-Img/herbDetails.webp",
  ];

  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="max-w-5xl mx-auto text-center mt-12 mb-16">
      {/* Preview Image */}
      <div className="relative w-full h-auto mb-12">
        <Image
          src={getImagePath("/Proj2-Img/home.webp")}
          alt="herb Mockup"
          width={1200}
          height={800}
          className="w-full h-auto mx-auto"
          priority
        />
      </div>

      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <a
          href="https://www.youtube.com/watch?v=_HjBueqWjXU"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0fa599] border-3 border-[#0fa599] px-6 py-4 rounded-lg font-semibold text-2xl hover:bg-[#0fa599] hover:text-white transition-colors duration-300"
        >
          View Video
        </a>
        <a
          href="https://github.com/Marky115/HerbVitalWebsite"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0fa599] border-3 border-[#0fa599] px-6 py-4 rounded-lg font-semibold text-2xl hover:bg-[#0fa599] hover:text-white transition-colors duration-300"
        >
          View Code
        </a>
      </div>

      <div className ="text-start mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mt-10 mb-5">
          Herbal Website
        </h1>
        <p className="text-xl text-gray-600 max-w-5xl mb-3">
          In this academic final project, this is a health/wellness website about herbs where it provides detailed information about each herb including its benefits, possible side effects, and recommended usage. For registered members, the site will allow them to personalize their experience by saving favorites, customizing their homepage and interacting with the community. The goal is to inform users, rather than to sell products.
        </p>
        
        <p className="text-gray-900 max-w-4xl mb-3 text-xl">
            <span className="font-bold">Team: </span><a href="https://github.com/w3nnn" target="_blank" className="underline">Wenhan Miao</a>
          </p>
          <p className="text-gray-900 max-w-4xl text-xl">
            <span className="font-bold">Duration: </span>5 Weeks
          </p>


        <h1 className="text-4xl font-bold text-gray-900 mb-5 mt-10">Features</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">👥 Visitors</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Browse and filter herb content</li>
            <li>View consistent default content and navigation</li>
            <li>Access detailed herb information pages</li>
            <li>Option to register for a member account</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-5 mt-10 ">🌿 Members</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Save favorite herbs to their profile</li>
            <li>Sign up or log in with personalized access</li>
            <li>Customize their homepage experience</li>
            <li>Update registration and profile details</li>
            <li>Post comments to foster community</li>
        </ul>

      </div>

      {/* Image Carousel */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Carousel Container with Fixed Height */}
        <div className="relative w-full aspect-[3/2] overflow-hidden rounded-xl shadow-lg">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={getImagePath(src)}
                alt={`Herb Mockup ${index + 1}`}
                width={1200}
                height={800}
                className="w-full h-full object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-lg z-10 transition-all duration-200"
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-lg z-10 transition-all duration-200"
          aria-label="Next Slide"
        >
          ❯
        </button>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mt-20 mb-10 text-center">Tools Used</h2>
        <ul className="flex flex-wrap justify-center gap-6">
        {tools.map(({ name, icon }) => (
            <li key={name} className="flex items-center gap-3 bg-[#0fa599] px-5 py-3 rounded-lg text-white text-lg cursor-default select-none transition transform hover:scale-105">
            <span className="text-2xl">{icon}</span>
            <span>{name}</span>
            </li>
        ))}
        </ul>

    </div>
  );
}