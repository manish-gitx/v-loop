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

      {/* 3D Camera Placeholder */}
      <div 
        className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 opacity-15 md:opacity-25 pointer-events-none z-0"
        style={{
          transform: `translate(-50%, -50%) translateY(${scrolled ? 0 : 20}px)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div 
          className="w-full h-full bg-gradient-to-br from-[#EB9522]/40 to-[#EEBD19]/40 rounded-3xl backdrop-blur-lg border border-[#EB9522]/30 shadow-2xl transition-all duration-500 ease-out animate-camera-pulse"
          style={{
            transform: `perspective(1200px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`,
            boxShadow: `0 25px 50px -12px rgba(235, 149, 34, 0.25)`
          }}
        >
          <div className="w-full h-full flex items-center justify-center relative">
            {/* Professional Camera Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-gradient-to-br from-[#EB9522] to-[#EEBD19] rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-[#EB9522] rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-[#EEBD19] rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-4 w-1 h-1 bg-white rounded-full animate-ping delay-700"></div>
            
            {/* Lens Reflection Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-3xl animate-lens-reflection"></div>
          </div>
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
