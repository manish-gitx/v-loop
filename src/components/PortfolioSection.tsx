'use client'

import { useEffect, useRef, useState } from 'react'
import portfolioData from '@/data/portfolio.json'
import { PortfolioProject, PortfolioSectionProps } from '@/types'

export default function PortfolioSection({ mousePosition }: PortfolioSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [projects] = useState<PortfolioProject[]>(portfolioData.projects)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let isScrolling = false
    let startX = 0
    let scrollLeft = 0

    const handleTouchStart = (e: TouchEvent) => {
      isScrolling = true
      startX = e.touches[0].pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
      container.style.scrollBehavior = 'auto'
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isScrolling) return
      e.preventDefault()
      const x = e.touches[0].pageX - container.offsetLeft
      const walk = (x - startX) * 2
      container.scrollLeft = scrollLeft - walk
    }

    const handleTouchEnd = () => {
      isScrolling = false
      container.style.scrollBehavior = 'smooth'
      
      // Snap to nearest item
      const itemWidth = 320 + 16 // item width + gap
      const scrollPosition = container.scrollLeft
      const targetIndex = Math.round(scrollPosition / itemWidth)
      const targetPosition = targetIndex * itemWidth
      
      container.scrollTo({
        left: targetPosition,
        behavior: 'smooth'
      })
    }

    container.addEventListener('touchstart', handleTouchStart, { passive: false })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })
    container.addEventListener('touchend', handleTouchEnd)

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
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

        {/* Professional Swipeable Portfolio Grid */}
        <div className="relative">
          {/* Mobile Professional Swipe View */}
          <div className="block sm:hidden">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-6" 
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth'
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative flex-shrink-0 w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden cursor-pointer snap-center transform transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2"
                  style={{
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(235, 149, 34, 0.1)'
                  }}
                  onClick={() => setSelectedVideo(project.videoUrl)}
                >
                  {/* Video Background (when available) */}
                  {project.thumbnailUrl && (
                    <div className="absolute inset-0">
                      <img 
                        src={project.thumbnailUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                        onError={(e) => {
                          // Fallback to gradient background if image fails to load
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                  )}
                  
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#EB9522]/0 via-[#ECA220]/0 to-[#EEBD19]/0 group-hover:from-[#EB9522]/20 group-hover:via-[#ECA220]/15 group-hover:to-[#EEBD19]/20 transition-all duration-700" />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 group-hover:animate-shimmer"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#EB9522] to-[#EEBD19] rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                      {project.category.toLowerCase().includes('wedding') ? (
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                      ) : project.category.toLowerCase().includes('event') ? (
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      ) : project.category.toLowerCase().includes('portrait') ? (
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-[#EB9522]/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Border Glow Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#EB9522] transition-all duration-500 rounded-3xl group-hover:shadow-2xl group-hover:shadow-[#EB9522]/30" />
                  
                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                    <h3 className="font-body text-white text-lg font-semibold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300 mb-1">
                      {project.category}
                    </p>
                    <p className="text-gray-500 text-xs opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                      {project.description}
                    </p>
                    
                    {/* Progress Indicator */}
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#EB9522] to-[#EEBD19] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Number Badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 border border-[#EB9522]/30">
                    <span className="text-white text-xs font-medium">#{project.id}</span>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-[#EB9522]/90 backdrop-blur-sm rounded-full px-2 py-1 border border-[#EEBD19]/50">
                      <span className="text-black text-xs font-medium">Featured</span>
                    </div>
                  )}
                  
                  {/* Floating Action Button */}
                  <div className="absolute bottom-20 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button className="w-10 h-10 bg-[#EB9522]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#EB9522]/50 hover:bg-[#EB9522]/40 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Enhanced Mobile Scroll Hint */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center text-gray-400 text-sm bg-gray-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="flex space-x-1 mr-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className={`w-1.5 h-1.5 bg-[#EB9522] rounded-full animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
                <span>Swipe to explore</span>
                <svg className="ml-2 w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Tablet Professional Swipe View */}
          <div className="hidden sm:block lg:hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'smooth' }}>
              {projects.slice(0, 6).map((project) => (
                <div
                  key={project.id}
                  className="group relative flex-shrink-0 w-72 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden cursor-pointer snap-center transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-1"
                  style={{
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(235, 149, 34, 0.1)'
                  }}
                  onClick={() => setSelectedVideo(project.videoUrl)}
                >
                  {/* Video Background (when available) */}
                  {project.thumbnailUrl && (
                    <div className="absolute inset-0">
                      <img 
                        src={project.thumbnailUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                  )}
                  
                  {/* Enhanced Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#EB9522]/0 via-[#ECA220]/0 to-[#EEBD19]/0 group-hover:from-[#EB9522]/20 group-hover:via-[#ECA220]/15 group-hover:to-[#EEBD19]/20 transition-all duration-700" />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 group-hover:animate-shimmer"></div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#EB9522] to-[#EEBD19] rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-all duration-500 transform group-hover:scale-110">
                      {project.category.toLowerCase().includes('wedding') ? (
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                      ) : project.category.toLowerCase().includes('event') ? (
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      ) : project.category.toLowerCase().includes('portrait') ? (
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#EB9522] group-hover:shadow-2xl group-hover:shadow-[#EB9522]/30 transition-all duration-500 rounded-3xl" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                    <h3 className="font-body text-white text-lg font-semibold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {project.category}
                    </p>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 border border-[#EB9522]/30">
                    <span className="text-white text-xs font-medium">#{project.id}</span>
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-[#EB9522]/90 backdrop-blur-sm rounded-full px-2 py-1 border border-[#EEBD19]/50">
                      <span className="text-black text-xs font-medium">Featured</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Professional Grid View */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project) => (
              <div
                key={project.id}
                className="group relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-3"
                style={{
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(235, 149, 34, 0.1)'
                }}
                onClick={() => setSelectedVideo(project.videoUrl)}
              >
                {/* Video Background (when available) */}
                {project.thumbnailUrl && (
                  <div className="absolute inset-0">
                    <img 
                      src={project.thumbnailUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                )}
                
                {/* Advanced Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#EB9522]/0 via-[#ECA220]/0 to-[#EEBD19]/0 group-hover:from-[#EB9522]/25 group-hover:via-[#ECA220]/20 group-hover:to-[#EEBD19]/25 transition-all duration-700" />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 group-hover:animate-shimmer"></div>
                </div>
                
                {/* Floating Particles Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(8)].map((_, idx) => (
                    <div
                      key={idx}
                      className="absolute w-1 h-1 bg-[#EB9522] rounded-full animate-ping"
                      style={{
                        left: `${20 + (idx * 10)}%`,
                        top: `${30 + (idx * 5)}%`,
                        animationDelay: `${idx * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#EB9522] to-[#EEBD19] rounded-full flex items-center justify-center opacity-20 group-hover:opacity-50 transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-6">
                    {project.category.toLowerCase().includes('wedding') ? (
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    ) : project.category.toLowerCase().includes('event') ? (
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    ) : project.category.toLowerCase().includes('portrait') ? (
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-[#EB9522]/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#EB9522] group-hover:shadow-2xl group-hover:shadow-[#EB9522]/40 transition-all duration-700 rounded-3xl" />
                
                {/* Enhanced Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-body text-white text-xl font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200 mb-1">
                    {project.category}
                  </p>
                  <p className="text-gray-400 text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-250">
                    {project.description}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-300">
                    <button className="px-4 py-2 bg-[#EB9522]/20 backdrop-blur-sm rounded-full text-white text-xs border border-[#EB9522]/50 hover:bg-[#EB9522]/40 transition-colors">
                      View Details
                    </button>
                    <button 
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs border border-white/30 hover:bg-white/20 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedVideo(project.videoUrl)
                      }}
                    >
                      Play Video
                    </button>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 border border-[#EB9522]/30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-xs font-medium">#{project.id}</span>
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-6 left-6 bg-[#EB9522]/90 backdrop-blur-sm rounded-full px-3 py-1 border border-[#EEBD19]/50 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-black text-xs font-medium">Featured</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-16">
          <button className="group relative bg-gradient-to-r from-[#EB9522] to-[#EEBD19] text-black font-body px-10 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-[#EB9522]/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden">
            {/* Button Shimmer Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 group-hover:animate-shimmer"></div>
            </div>
            
            <span className="relative flex items-center justify-center">
              View All Projects ({projects.length})
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              onClick={() => setSelectedVideo(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video Player */}
            <video 
              src={selectedVideo} 
              controls 
              autoPlay
              className="w-full h-auto max-h-[80vh]"
              onError={() => setSelectedVideo(null)}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(12deg);
          }
          100% {
            transform: translateX(200%) skewX(12deg);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out;
        }
        
        /* Custom smooth scrolling for touch devices */
        @media (max-width: 640px) {
          .scrollbar-hide {
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  )
}
