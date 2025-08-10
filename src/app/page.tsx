'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import PortfolioSection from '@/components/PortfolioSection'
import FooterSection from '@/components/FooterSection'
import { useMousePosition } from '@/hooks/useMousePosition'
import { useScrollPosition } from '@/hooks/useScrollPosition'

export default function Home() {
  const mousePosition = useMousePosition()
  const scrolled = useScrollPosition()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navigation 
        isMenuOpen={isMobileMenuOpen}
        setIsMenuOpen={setIsMobileMenuOpen}
        scrolled={scrolled}
        mousePosition={mousePosition}
      />
      
      <HeroSection 
        scrolled={scrolled}
        mousePosition={mousePosition}
      />
      
      <AboutSection 
        mousePosition={mousePosition}
      />
      
      <PortfolioSection 
        mousePosition={mousePosition}
      />
      
      <FooterSection 
        mousePosition={mousePosition}
      />
    </div>
  )
}
