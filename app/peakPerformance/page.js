"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Carousel} from 'react-bootstrap';

export default function SportsApparelProject() {
  
  const carouselRef = useRef(null);
  return (
    <div className="min-h-screen mt-16 bg-[#F7F3EC]">
      
      <section className="space-y-6 max-w-5xl mx-auto text-center bg-[#F7F3EC]">
        <div className="relative w-full h-auto bg-[#F7f3ec]">
          <Image
            src="/Proj1-Img/mockup.png"
            alt="PeakPerformance Sports Apparel Mockup"
            width={1200}
            height={800}
            className="w-full h-auto mx-auto"
            priority
          />
        </div>

         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="https://marky115.github.io/Sports-Apparel-Website/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#163E6D] border-3 border-[#163E6D] px-6 py-4 rounded-lg font-semibold text-2xl hover:bg-[#163E6D] hover:text-white transition-colors duration-300"
            >
              View Website
            </a>

            <a 
              href="https://github.com/marky115/Sports-Apparel-Website" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#163E6D] border-3 border-[#163E6D] px-6 py-4 rounded-lg font-semibold text-2xl hover:bg-[#163E6D] hover:text-white transition-colors duration-300"
            >
              View Code
            </a>
          </div>
      </section>

      {/* Project Details */}
      <section className="text-left px-4 mb-10 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mt-10 mb-5">
          PeakPerformance Sports Apparel
        </h1>
        <p className="text-xl text-gray-600 max-w-5xl">
          This academic project, PeakPerformance, is a modern e-commerce UI prototype for purchasing sports jerseys. Built with React and vanilla JavaScript, it showcases a clean flow optimized for desktop and tablet breakpoints. This is purely a responsive static website to showcase an e-commerce website flow.
        </p>
        
        <div className="mt-10 text-xl space-y-2">
          <p className="text-gray-900 max-w-4xl">
            <span className="font-bold">Team: </span>Peak Nanop
          </p>
          <p className="text-gray-900 max-w-4xl">
            <span className="font-bold">Duration: </span>6 Weeks with weekly check-ins
          </p>
        </div>

        <h2 className="text-4xl font-bold text-gray-900 mt-10 mb-5">Features</h2>
        
        <div className="space-y-4">
          <p className="text-xl text-gray-900 max-w-4xl">
            <span className="font-bold">📱 Responsive Layout: </span>
            Fully responsive design that works seamlessly across desktop, tablet devices
          </p>
          <p className="text-xl text-gray-900 max-w-4xl">
            <span className="font-bold">✅ Form Validation: </span>
            Built-in form validation for secure checkout process
          </p>
          <p className="text-xl text-gray-900 max-w-4xl">
            <span className="font-bold">⚙️ Real-time Calculations: </span>
            Automatic subtotal calculations based on quantity changes
          </p>
        </div>

      </section>

  
      <section id="carousel" className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-left mt-16">
          Final Design Page Features
        </h2>
        <div className="relative w-full max-w-5xl mx-auto mb-12 mt-10">
          <Carousel ref={carouselRef} controls={false} indicators={true} className="rounded-xl overflow-hidden shadow-lg bg-black p-10">
            <Carousel.Item>
              <img src="/Proj1-Img/checkout.webp" alt="checkout page" className ="w-full h-full"/>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/Proj1-Img/confirmation.webp" alt="checkout page" className ="w-full h-full"/>
            </Carousel.Item>
              <Carousel.Item>
              <img src="/Proj1-Img/shop.webp" alt="checkout page" className ="w-full h-full"/>
            </Carousel.Item>
              <Carousel.Item>
              <img src="/Proj1-Img/contact.webp" alt="checkout page" className ="w-full h-full"/>
            </Carousel.Item>
          </Carousel>

          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 text-white hover:scale-110 transition flex items-center justify-center w-5 h-5"
            onClick={() => carouselRef.current?.prev()}
            aria-label="Previous slide"
          >
            <span className="text-2xl">❮</span>
          </button>

          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 text-white hover:scale-110 transition flex items-center justify-center w-5 h-5"
            onClick={() => carouselRef.current?.next()}
            aria-label="Next slide"
          >
            <span className="text-2xl">❯</span>
          </button>
        </div>
      </section>
      
      {/* Tools Section */}
      <section className="space-y-6 max-w-5xl mx-auto text-center mt-12 mb-12 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mt-20 mb-10">Tools Used</h2>
        <div className="tools-container flex flex-wrap gap-6 justify-center">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Github'].map((tool) => (
            <span
              key={tool}
              className="text-white bg-[#163E6D] px-4 py-2 rounded-lg text-xl"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

     
    </div>
  );
}