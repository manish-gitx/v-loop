'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-[#EB9522]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="">
                <img 
                  src="/V-Loop White.png" 
                  alt="V-LOOP Logo" 
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 hover:scale-105 transition-all duration-300 ease-in-out filter brightness-100 hover:brightness-110 object-contain" 
                />
              </div>
            </div>
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a href="#home" className="font-body text-white hover:text-[#EB9522] transition-colors">Home</a>
              <a href="#about" className="font-body text-white hover:text-[#EB9522] transition-colors">About</a>
              <a href="#portfolio" className="font-body text-white hover:text-[#EB9522] transition-colors">Portfolio</a>
              <a href="#contact" className="font-body text-white hover:text-[#EB9522] transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-[#EB9522] to-[#EEBD19] text-black font-body px-4 py-2 md:px-6 md:py-3 rounded-full hover:shadow-lg hover:shadow-[#EB9522]/30 transition-all transform hover:scale-105">
                Join the Collective
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="pb-4 space-y-3">
              <a href="#home" className="block font-body text-white hover:text-[#EB9522] transition-colors py-2">Home</a>
              <a href="#about" className="block font-body text-white hover:text-[#EB9522] transition-colors py-2">About</a>
              <a href="#portfolio" className="block font-body text-white hover:text-[#EB9522] transition-colors py-2">Portfolio</a>
              <a href="#contact" className="block font-body text-white hover:text-[#EB9522] transition-colors py-2">Contact</a>
              <button className="w-full bg-gradient-to-r from-[#EB9522] to-[#EEBD19] text-black font-body px-6 py-3 rounded-full hover:shadow-lg hover:shadow-[#EB9522]/30 transition-all mt-4">
                Join the Collective
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
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
                V-LOOP is more than a creative collective — we're a community of visionaries pushing the boundaries of visual storytelling. From intimate wedding moments to grand event spectacles, we transform ordinary captures into extraordinary memories.
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

            {/* Right Content - Image Collage */}
            <div className="relative order-first lg:order-last">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {/* Placeholder Images with 3D Tilt Effect */}
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="group relative h-40 sm:h-48 md:h-56 lg:h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl md:rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer"
                    style={{
                      transform: `perspective(1000px) rotateX(${mousePosition.y * 0.001}deg) rotateY(${mousePosition.x * 0.001}deg)`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EB9522]/20 to-[#EEBD19]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl opacity-30">
                        {i === 1 ? '📷' : i === 2 ? '🎬' : i === 3 ? '✨' : '🎯'}
                      </div>
                    </div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#EB9522] transition-colors duration-300 rounded-xl md:rounded-2xl" />
                  </div>
                ))}
              </div>
              
              {/* Floating Logo */}
              <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-[#EB9522] to-[#EEBD19] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <span className="font-heading text-black text-lg md:text-xl lg:text-2xl">VL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-16 md:py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 md:mb-6">
              Our <span className="text-[#EB9522]">Masterpieces</span>
            </h2>
            <p className="font-body text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Every project tells a story. Here are some of our favorites.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="flex flex-wrap gap-2 md:gap-4 bg-gray-900/50 rounded-full p-2">
              {['All', 'Weddings', 'Events', 'Portfolios'].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 md:px-6 md:py-3 rounded-full font-body text-sm md:text-base text-white hover:bg-[#EB9522] hover:text-black transition-all"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="group relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#EB9522]/0 to-[#EEBD19]/0 group-hover:from-[#EB9522]/20 group-hover:to-[#EEBD19]/20 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl opacity-20 group-hover:opacity-40 transition-opacity">
                    {i % 3 === 0 ? '💒' : i % 2 === 0 ? '🎉' : '📸'}
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#EB9522] group-hover:shadow-lg group-hover:shadow-[#EB9522]/30 transition-all duration-300 rounded-xl md:rounded-2xl group-hover:scale-105" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-body text-white text-base md:text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    Project {i}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#EB9522]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#EEBD19]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 md:mb-8">
            Your Lens Deserves <br />
            <span className="text-[#EB9522]">the Spotlight</span>
          </h2>
          
          <p className="font-body text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
            Join a community where creativity meets opportunity. Let's create something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <button className="w-full sm:w-auto bg-gradient-to-r from-[#EB9522] to-[#EEBD19] text-black font-body px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg hover:shadow-xl hover:shadow-[#EB9522]/40 transition-all transform hover:scale-105">
              Join V-LOOP Today
            </button>
            
            <button className="w-full sm:w-auto border-2 border-[#EB9522] text-[#EB9522] font-body px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg hover:bg-[#EB9522] hover:text-black transition-all flex items-center justify-center">
              <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-[#EB9522]/10 to-black py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="sm:col-span-2 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#EB9522] to-[#EEBD19] rounded-lg flex items-center justify-center">
                  <span className="text-black font-heading text-lg md:text-xl">VL</span>
                </div>
                <span className="font-heading text-white text-2xl md:text-3xl">V-LOOP</span>
              </div>
              <p className="font-body text-sm md:text-base text-gray-400 max-w-md">
                Empowering a community of photographers & videographers to create powerful visuals for weddings, events, and portfolios.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading text-white text-base md:text-lg mb-3 md:mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['About', 'Portfolio', 'Services', 'Contact'].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="block font-body text-sm md:text-base text-gray-400 hover:text-[#EB9522] transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-heading text-white text-base md:text-lg mb-3 md:mb-4">Connect</h3>
              <div className="flex space-x-3 md:space-x-4">
                {['📧', '📱', '📷'].map((icon, i) => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 hover:bg-[#EB9522] rounded-full flex items-center justify-center cursor-pointer transition-colors">
                    <span className="text-sm md:text-lg">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
            <p className="font-body text-sm md:text-base text-gray-400">
              © 2024 V-LOOP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
