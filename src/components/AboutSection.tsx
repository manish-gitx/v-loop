'use client'

import { useAnimatedCounter } from '@/hooks';
import '@/styles/about-animations.css';

export default function AboutSection() {
  // Animated counters for statistics
  const projectsCounter = useAnimatedCounter({ end: 60, duration: 2500, delay: 200 });

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-start lg:items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {/* Main Heading */}
            <h2 className="font-heading text-xl sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white leading-tight">
              We <span className="text-[#EB9522]">Edit.</span><br />
              We <span className="text-[#ECA220]">Create.</span><br />
              We <span className="text-[#EEBD19]">Dominate.</span>
            </h2>
            
            {/* Core Highlights */}
            <div className="space-y-4 sm:space-y-5">
              <h3 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#EB9522] font-bold">
                Core Highlights:
              </h3>
              <ul className="space-y-3 sm:space-y-4 font-body text-sm sm:text-base md:text-lg text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#EB9522] mr-3 sm:mr-4 mt-1 text-sm sm:text-base">•</span>
                  <span className="leading-relaxed">Premium High-Quality Visuals, Captured to Perfection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ECA220] mr-3 sm:mr-4 mt-1 text-sm sm:text-base">•</span>
                  <span className="leading-relaxed">Fast Delivery Without Compromising Creativity</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {/* About Us */}
            <div className="space-y-4 sm:space-y-5">
              <h3 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ECA220] font-bold">
                About Us:
              </h3>
              <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                V-Loop is a creative powerhouse delivering premium edits, innovative storytelling, and industry-leading turnaround times. Whether it&apos;s influencers, events, or brands — we make your vision unforgettable.
              </p>
            </div>
            
            {/* Statistics */}
            <div className="space-y-4 sm:space-y-5">
              <h3 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#EEBD19] font-bold">
                Statistics:
              </h3>
              <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                <div ref={projectsCounter.ref} className="text-center group flex flex-col items-center">
                  <div className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#EB9522] mb-2 sm:mb-3 group-hover:scale-105 transition-all duration-300 font-bold h-12 sm:h-16 md:h-20 flex items-center justify-center">
                    {projectsCounter.count}+
                  </div>
                  <div className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 group-hover:text-[#EB9522] transition-colors duration-300 font-medium">
                    Projects
                  </div>
                </div>
                <div className="text-center group flex flex-col items-center">
                  <div className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#ECA220] mb-2 sm:mb-3 group-hover:scale-105 transition-all duration-300 font-bold h-12 sm:h-16 md:h-20 flex items-center justify-center">
                    ∞
                  </div>
                  <div className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 group-hover:text-[#ECA220] transition-colors duration-300 font-medium">
                    Creations
                  </div>
                </div>
                <div className="text-center group flex flex-col items-center">
                  <div className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#EEBD19] mb-2 sm:mb-3 group-hover:scale-105 transition-all duration-300 font-bold h-12 sm:h-16 md:h-20 flex items-center justify-center gap-0.5 sm:gap-1">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <div className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 group-hover:text-[#EEBD19] transition-colors duration-300 font-medium">
                    Always Rated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}