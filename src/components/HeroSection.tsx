'use client'

import { HeroSectionProps } from '@/types';
import '@/styles/hero-animations.css';

export default function HeroSection({ scrolled, mousePosition }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-8 md:pt-24 md:pb-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20 md:opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 0.05}% ${mousePosition.y * 0.05}%, #EB9522, #ECA220, #EDB11B, #EEBD19, transparent 70%)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-80" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#EB9522] rounded-full opacity-40 md:opacity-60 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>


      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-white mb-6 sm:mb-8 md:mb-10 leading-tight sm:leading-none">
          <span className="inline-block bg-gradient-to-r from-[#EB9522] via-[#ECA220] to-[#EEBD19] bg-clip-text text-transparent">
            Every Frame,
          </span>
          <br />
          <span className="text-white">A Masterpiece.</span>
        </h1>
        
        <p className="font-body text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto px-2 sm:px-4">
          Wedding Shoots • Event Coverage • Portfolio Creation
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 justify-center items-center px-3 sm:px-4">
          <button className="group w-full sm:w-auto bg-gradient-to-r from-[#EB9522] to-[#EEBD19] text-black font-body px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg hover:shadow-xl hover:shadow-[#EB9522]/40 transition-all transform hover:scale-105 hover:-translate-y-1">
            <span className="flex items-center justify-center">
              Join the Collective
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <button className="group w-full sm:w-auto border-2 border-[#EB9522] text-[#EB9522] font-body px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg hover:bg-[#EB9522] hover:text-black transition-all transform hover:scale-105 hover:-translate-y-1">
            <span className="flex items-center justify-center">
              See Our Work
              <svg className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
