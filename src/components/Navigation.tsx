'use client'

import { NavigationProps } from '@/types';

export default function Navigation({ isMenuOpen, setIsMenuOpen, scrolled }: NavigationProps) {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md border-b border-[#EB9522]/20' : 'bg-black/30 backdrop-blur-md border-b border-[#EB9522]/10'}`}>
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
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
  )
}
