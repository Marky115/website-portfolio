"use client";

import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '../../utils/imagePath';

export default function PeakPerformanceDesignProject() {
  return (
    <div className="min-h-screen mt-14 bg-white">

      {/* Hero */}
      <section className="space-y-6 max-w-5xl mx-auto text-center mt-4">
        <div className="text-left">
          <h1 className="text-4xl font-bold text-black mt-10 mb-3">
            PeakPerformance
          </h1>
          <p className="text-xl text-gray-800 max-w-4xl mb-15">
            A frontend e-commerce site built from scratch for a basketball apparel brand, designed to turn product browsing into a seamless path to checkout.
          </p>
        </div>

        <div className="relative w-full h-auto">
          <Image
            src={getImagePath("/Proj1-Img/mac-book-mockup.webp")}
            alt="PeakPerformance Design Mockup"
            width={1200}
            height={800}
            className="w-full h-auto mx-auto"
            priority
          />
        </div>

        {/* Live Site Link */}
        <div className="max-w-4xl mx-auto text-center mt-10 mb-15 flex flex-row justify-center items-center">
          <a
            href="https://peak-performance-apparel.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 text-black font-semibold text-3xl whitespace-nowrap after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:bg-[#296AE6] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
          >
          
            LIVE
          </a>
        </div>

        {/* Overview */}
        <div className="text-left mb-10">
          <h1 className="text-4xl font-bold text-black mt-10 mb-3">Overview</h1>
          <p className="text-xl text-gray-800 max-w-5xl">
            PeakPerformance is a modern e-commerce UI prototype for purchasing sports apparel. Built with React and vanilla JavaScript, it showcases a clean flow optimized for desktop. This is purely a responsive static website to showcase an e-commerce website flow. Our team was tasked with creating an e-commerce site. My team and I were really into the sports wear/basketball sector, so we gravitated toward creating a platform for that. Since we were working with a sports site, we prioritized seamless navigation, straightforward content, and a minimalistic look.
          </p>

          <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl">
            <div className="flex items-start gap-3 border-l-2 border-black pl-4">
              <p className="text-lg text-gray-800">
                <span className="font-semibold text-black block text-sm uppercase tracking-wide mb-1">Role</span>
                Designer &amp; Developer, Team of 2
              </p>
            </div>

            <div className="flex items-start gap-3 border-l-2 border-black pl-4">
              <p className="text-lg text-gray-800">
                <span className="font-semibold text-black block text-sm uppercase tracking-wide mb-1">Skills Gained</span>
                React, JavaScript, Tailwind CSS
              </p>
            </div>

            <div className="flex items-start gap-3 border-l-2 border-black pl-4">
              <p className="text-lg text-gray-800">
                <span className="font-semibold text-black block text-sm uppercase tracking-wide mb-1">Team</span>
                Peak Nanop
              </p>
            </div>

            <div className="flex items-start gap-3 border-l-2 border-black pl-4">
              <p className="text-lg text-gray-800">
                <span className="font-semibold text-black block text-sm uppercase tracking-wide mb-1">Duration</span>
                7 Weeks with weekly check-ins
              </p>
            </div>
          </div>
        </div>
      </section>

  
      {/* Typography & Color */}
      <section className="space-y-6 max-w-5xl mx-auto text-left mt-12">

        {/* Reflection */}
        <div className="text-left mt-20 mb-10">
          <h1 className="text-4xl font-bold text-black mb-3">Reflection</h1>
          <p className="text-xl text-gray-900 max-w-5xl mb-6">
            Designing and building a custom React site from Figma taught me that real code quickly challenges visual layouts. Learning how responsiveness actually works in the browser changed my approach I now plan for flexible layouts and clear breakpoints from the start, rather than trying to fix broken screens after the fact.
          </p>
          <p className="text-xl text-gray-900 max-w-5xl">
            Building this alongside another developer forced us to negotiate real technical constraints. We had decide what was practical to code within our timeline, and balance design intent with maintainable code and also taught us good coding practices when collaborting by using GIT.
          </p>
        </div>
      </section>

      {/* Next Project */}
      <section className="mx-auto mt-30 mb-20 max-w-4xl px-4">
        <p className="text-sm font-medium tracking-widest uppercase text-black mb-4">Next Project</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Link href="/projects/leze" className="group flex flex-col justify-center gap-1 w-fit">
            <span className="font-medium text-gray-900 text-2xl transition-colors duration-200 group-hover:text-[#296AE6]">
              LEZÉ THE LABEL
            </span>
            <span className="text-base tracking-widest uppercase text-gray-400 font-medium transition-colors duration-200 group-hover:text-[#296AE6]">
              View project →
            </span>
          </Link>
        </div>
      </section>

    </div>
  );
}