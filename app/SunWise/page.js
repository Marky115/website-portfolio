"use client";

import Image from "next/image";
import { getImagePath } from "../../utils/imagePath";
import Link from 'next/link';

export default function SunWiseProject() {
  return (
    <section className="px-4 mb-20 max-w-5xl mx-auto leading-relaxed ">
      {/* Title */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mt-20 mb-3">
          SunWise UV App 🌤️
        </h1>
        <p className="text-lg text-black">
          Collaborated with a partner to create a UV index mobile app that tracks UV levels and provides
          personalized sun safety recommendations. It is designed for ios and Android. The app is built using React Native and requires an emulator (iOS/Android) or a physical device for testing. 
        </p>

      </header>

      {/* Meta Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-900 text-base">
        <p>
          <span className="font-semibold">Role:</span> Moble App Developer/Designer
        </p>
        <p>
          <span className="font-semibold">Partner: </span>
          <a 
            href="https://www.wenhanmiao.com/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Wenhan Miao
          </a>
        </p>
      </div>

      {/* Contributions */}
      <section className="mt-12 bg-yellow-50/40 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          My Main Contributions
        </h2>
        <ul className="list-disc list-inside space-y-4 text-black">

          <li className="text-black">
           
            <span>
              <strong>Real-Time API Integration:</strong> Integrated OpenWeather API with 
              Expo Location services to deliver location-based UV forecasts, processing 
              hourly and 8-day weather data with dynamic error handling.
            </span>
          </li>
          <li className="text-black">
            
            <span>
              <strong>Responsive Design System:</strong> Developed custom scaling functions 
              using Dimensions API to ensure consistent UI across all iOS and Android device 
              sizes, from iPhone SE to Pro Max.
            </span>
          </li>

          <li className="text-black">
          
            <span>
              <strong>Firebase Authentication:</strong> Implemented secure user registration 
              and login system with email/password validation, error handling, and persistent 
              sessions using AsyncStorage for seamless mobile experience.
            </span>
          </li>
        </ul>
      </section>
      
      <section className="mt-14">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          <Image
            src={getImagePath("/Proj3-Img/sunwise7.jpg")}
            alt="SunWise Welcome Screen"
            width={400}
            height={800}
            className="rounded-lg shadow-lg"
            priority
          />
          <Image
            src={getImagePath("/Proj3-Img/sunwise6.jpg")}
            alt="SunWise Home with UV Map"
            width={400}
            height={800}
            className="rounded-lg shadow-lg"
            priority
          />
          <Image
            src={getImagePath("/Proj3-Img/sunwise5.jpg")}
            alt="SunWise UV Forecast"
            width={400}
            height={800}
            className="rounded-lg shadow-lg"
          />
          <Image
            src={getImagePath("/Proj3-Img/sunwise3.jpg")}
            alt="SunWise Personalized Results"
            width={400}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </div>
            
      </section>
      <section className="bg-yellow-50/40 rounded-xl p-6 shadow-sm mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-2">
          Features 
        </h2>
        <p className="mb-4 text-black">
          A location-based UV index app with personalized skincare recommendations. 
          Users authenticate via email/password, complete a skin questionnaire for 
          customization, and view real-time UV data on an interactive map.
        </p>
          <ul className="list-disc list-inside space-y-3">
            <li className="text-black">
              <strong>Real-time UV Index Tracking:</strong> Location-based UV data 
              with color-coded safety indicators
            </li>
            <li className="text-black">
              <strong>Personalized Skin Assessment:</strong> Custom questionnaire 
              for tailored recommendations
            </li>
            <li className="text-black">
              <strong>Interactive Map Integration:</strong> Google Maps showing 
              current location and UV levels
            </li>
            <li className="text-black">
              <strong>Smart Recommendations:</strong> Personalized sunscreen, 
              clothing, and activity suggestions
            </li>
            <li className="text-black">
              <strong>Safe Product Guidance:</strong> Recommendations for 
              chemical-free sunscreens (avoiding Oxybenzone, Octinoxate)
            </li>
            <li className="text-black">
              <strong>User Authentication:</strong> Secure account management 
              with personalized data storage
            </li>
          </ul>
      </section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10 text-center">
        <a
        href="https://github.com/Marky115/IAT359SunWise"
        target="_blank" className="text-blue-600 hover:underline">
        View Code
        </a>
        <i className="bi bi-github ml-2 text-2xl"></i>
      </h2>
    </section>
  );
}