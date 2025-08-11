'use client'

import { AboutSectionProps } from '@/types';
import '@/styles/about-animations.css';

export default function AboutSection({ mousePosition }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
              We <span className="text-[#EB9522]">Edit.</span><br />
              We <span className="text-[#ECA220]">Create.</span><br />
              We <span className="text-[#EEBD19]">Dominate.</span>
            </h2>
            
            <p className="font-body text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              V-LOOP is more than a creative collective — we&apos;re a community of visionaries pushing the boundaries of visual storytelling. From intimate wedding moments to grand event spectacles, we transform ordinary captures into extraordinary memories.
            </p>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="text-center">
                <div className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#EB9522]">500+</div>
                <div className="font-body text-sm sm:text-base text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#ECA220]">50+</div>
                <div className="font-body text-sm sm:text-base text-gray-400">Creators</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#EEBD19]">5★</div>
                <div className="font-body text-sm sm:text-base text-gray-400">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Geometric Animation */}
          <div className="relative order-first lg:order-last">
            {/* Main Animation Container */}
            <div className="relative w-full h-96 flex items-center justify-center">
              
              {/* Hexagonal Grid Background */}
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <pattern id="hexPattern" x="0" y="0" width="40" height="35" patternUnits="userSpaceOnUse">
                      <polygon 
                        points="20,2 36,12 36,28 20,38 4,28 4,12" 
                        fill="none" 
                        stroke="#EB9522" 
                        strokeWidth="0.5"
                        className="animate-pulse"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hexPattern)" />
                </svg>
              </div>

              {/* Orbital Elements */}
              <div className="relative w-80 h-80">
                {/* Outer Orbit Ring */}
                <div className="absolute inset-0 border border-[#EB9522]/20 rounded-full animate-spin-slow"></div>
                
                {/* Middle Orbit Ring */}
                <div className="absolute inset-8 border border-[#ECA220]/30 rounded-full animate-spin-reverse"></div>
                
                {/* Inner Orbit Ring */}
                <div className="absolute inset-16 border border-[#EEBD19]/40 rounded-full animate-spin-slow"></div>

                {/* Orbiting Professional Icons */}
                {/* Camera Lens Icon */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 animate-orbit-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#EB9522] to-[#ECA220] rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Film Reel Icon */}
                <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2 animate-orbit-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#ECA220] to-[#EEBD19] rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  </div>
                </div>

                {/* Edit Tool Icon */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 animate-orbit-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#EEBD19] to-[#EB9522] rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </div>
                </div>

                {/* Portfolio Icon */}
                <div className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2 animate-orbit-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#EB9522] to-[#EEBD19] rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 016 11.5V5a2 2 0 012 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Central V-LOOP Logo with Modern Design */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Outer Glow Ring */}
                  <div className="w-32 h-32 bg-gradient-to-r from-[#EB9522]/20 to-[#EEBD19]/20 rounded-full animate-pulse blur-sm"></div>
                  
                  {/* Main Logo Container */}
                  <div className="absolute inset-4 bg-gradient-to-br from-[#EB9522] via-[#ECA220] to-[#EEBD19] rounded-full flex items-center justify-center shadow-2xl">
                    <div className="w-20 h-20 bg-black/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="font-heading text-white text-2xl font-bold tracking-wider">VL</span>
                    </div>
                  </div>
                  
                  {/* Geometric Corner Accents */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-[#EB9522] transform rotate-45 animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#ECA220] rounded-full animate-bounce-slow"></div>
                  <div className="absolute top-2 left-2 w-2 h-2 bg-[#EEBD19] transform rotate-45"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 bg-[#EB9522] rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Floating Geometric Shapes */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-[#EB9522]/60 transform rotate-45 animate-float"></div>
              <div className="absolute top-12 right-12 w-3 h-3 bg-[#ECA220]/60 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-16 left-16 w-2 h-8 bg-[#EEBD19]/60 animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-8 right-8 w-6 h-2 bg-[#EB9522]/60 animate-float" style={{ animationDelay: '0.5s' }}></div>

              {/* Professional Keywords */}
              <div className="absolute top-4 left-1/3 text-[#EB9522] text-xs font-medium opacity-40 animate-fade-in-out">
                PROFESSIONAL
              </div>
              <div className="absolute top-1/3 right-4 text-[#ECA220] text-xs font-medium opacity-40 animate-fade-in-out" style={{ animationDelay: '2s' }}>
                CREATIVE
              </div>
              <div className="absolute bottom-4 left-1/4 text-[#EEBD19] text-xs font-medium opacity-40 animate-fade-in-out" style={{ animationDelay: '4s' }}>
                INNOVATIVE
              </div>
              <div className="absolute bottom-1/3 right-1/3 text-[#EB9522] text-xs font-medium opacity-40 animate-fade-in-out" style={{ animationDelay: '1s' }}>
                PREMIUM
              </div>

              {/* Interactive Hover Effects */}
              <div 
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x * 0.01}% ${mousePosition.y * 0.01}%, rgba(235, 149, 34, 0.1), transparent 50%)`
                }}
              />
            </div>

            {/* Professional Stats Cards */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="group text-center p-6 bg-gradient-to-br from-[#EB9522]/10 via-[#ECA220]/5 to-transparent rounded-2xl backdrop-blur-sm border border-[#EB9522]/20 hover:border-[#EB9522]/40 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#EB9522] to-[#ECA220] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="font-heading text-lg text-[#EB9522] group-hover:text-[#ECA220] transition-colors duration-300">Premium</div>
                <div className="font-body text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Quality</div>
              </div>
              <div className="group text-center p-6 bg-gradient-to-br from-[#ECA220]/10 via-[#EEBD19]/5 to-transparent rounded-2xl backdrop-blur-sm border border-[#ECA220]/20 hover:border-[#ECA220]/40 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#ECA220] to-[#EEBD19] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="font-heading text-lg text-[#ECA220] group-hover:text-[#EEBD19] transition-colors duration-300">Fast</div>
                <div className="font-body text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
