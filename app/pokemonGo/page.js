"use client";

import Image from "next/image";
import { getImagePath } from "../../utils/imagePath";

export default function PokemonGoProject() {
  return (
    <section className="px-4 mb-20 max-w-5xl mx-auto leading-relaxed">
      {/* Title */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mt-20 mb-3">
          Pokémon Type Calculator
        </h1>
        <p className="text-lg text-black">
          Improved an existing open‑source Pokémon Type Calculator by enhancing
          usability, accessibility, and visual appeal by replacing colors with icons while preserving full
          functionality
        </p>

      </header>

      {/* Meta Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-900 text-base">
        <p>
          <span className="font-semibold">Role:</span> Open Source Contributor
        </p>
        <p>
          <span className="font-semibold">Project Type:</span> UI/UX Enhancement
        </p>
      </div>

      {/* Contributions */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          My Contributions
        </h2>
        <ul className="space-y-4 text-gray-800">
          <li className="flex items-start">
            <span className="mr-2 text-2xl">♿</span>
            <span>
              <strong>Accessibility Upgrade:</strong> Swapped type color coding
              for intuitive icons, ensuring usability for individuals with color
              vision deficiencies.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-2xl">🖱️</span>
            <span>
              <strong>Interactive Navigation:</strong> Added hover effects for
              smoother, more engaging interactions.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-2xl">🎨</span>
            <span>
              <strong>Visual Refinement:</strong> Enhanced the design aesthetic
              while keeping the original functionality and layout intact.
            </span>
          </li>
        </ul>
      </section>

        {/* Project Previews */}
        <section className="mt-14">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Before & After
            </h3>
            <div className>
                <figure>
                <figcaption className="mt-3 text-sm text-gray-500 text-start mb-2">
                    Before
                </figcaption>
                <Image
                    src={getImagePath("/Proj3-Img/PokemonBefore.png")}
                    alt="Before - Pokémon Type Calculator"
                    className="rounded-lg shadow-lg"
                    width={800}   
                    height={500}  
                />
                
                </figure>
                <figure>
                <figcaption className="mt-3 text-sm text-gray-500 text-start mb-2">
                    After
                </figcaption>
                <Image
                    src={getImagePath("/Proj3-Img/PokemonAfter.png")}
                    alt="After - Pokémon Type Calculator"
                    className="rounded-lg shadow-lg"
                    width={800}  
                    height={500}  
                />
                
                </figure>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 mt-5">
                 <a
                    href="https://github.com/wavebeem/pkmn.help"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    >
                    🔗 View Original Project on GitHub
                </a>

            </h3>
        </section>
    </section>
  );
}