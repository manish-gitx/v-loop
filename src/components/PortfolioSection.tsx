'use client'

import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from '@use-gesture/react'
import portfolioData from '@/data/portfolio.json'
import { PortfolioProject, PortfolioSectionProps } from '@/types'

export default function PortfolioSection({ }: PortfolioSectionProps) {
  const [projects] = useState<PortfolioProject[]>(portfolioData.projects)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const [{ x }, api] = useSpring(() => ({ x: 0 }))

  const bind = useDrag(({ active, movement: [mx], direction: [xDir], cancel }) => {
    if (active && Math.abs(mx) > 50) {
      cancel()
      const newIndex = currentIndex + (xDir > 0 ? -1 : 1)
      if (newIndex >= 0 && newIndex < projects.length) {
        setCurrentIndex(newIndex)
      }
    }
    api.start({ x: active ? mx : 0, immediate: active })
  })

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

        {/* Mobile - Single Card Instagram Reels Style */}
        <div className="block md:hidden">
          <div className="relative w-full max-w-xs mx-auto">
            <animated.div
              {...bind()}
              style={{
                x,
                touchAction: 'pan-y',
              }}
              className="relative w-full h-[700px] cursor-grab active:cursor-grabbing"
            >
              <div
                className="relative w-full h-full bg-gray-900 rounded-3xl overflow-hidden"
                onClick={() => setSelectedVideo(projects[currentIndex]?.videoUrl)}
              >
                {/* Background Video */}
                {projects[currentIndex]?.videoUrl ? (
                  <video 
                    src={projects[currentIndex].videoUrl} 
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-6xl opacity-30">📸</div>
                  </div>
                )}
                
                {/* Simple Dark Overlay */}
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Bottom Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{projects[currentIndex]?.title}</h3>
                  <p className="text-gray-300 text-sm">{projects[currentIndex]?.description}</p>
                </div>
              </div>
            </animated.div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#EB9522] w-8' : 'bg-gray-600 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tablet & Desktop - Horizontal Scrolling Row */}
        <div className="hidden md:block">
          <div className="relative">
            <div 
              className="flex overflow-x-auto scrollbar-hide gap-4 lg:gap-6 pb-6"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth'
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 relative w-64 lg:w-72 xl:w-80 h-[500px] lg:h-[520px] xl:h-[550px] bg-gray-900 rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedVideo(project.videoUrl)}
                >
                  {project.videoUrl ? (
                    <video 
                      src={project.videoUrl} 
                      className="w-full h-full object-cover"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="text-4xl lg:text-5xl opacity-30">📸</div>
                    </div>
                  )}
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/10" />
                  
                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                    <h3 className="text-white text-lg lg:text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-gray-300 text-sm lg:text-base">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Hint */}
            <div className="flex justify-center mt-4">
              <div className="text-gray-500 text-sm flex items-center">
                <span>Scroll for more</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Simple View All Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-[#EB9522] to-[#EEBD19] text-black font-bold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform">
            View All Projects ({projects.length})
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden">
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white"
              onClick={() => setSelectedVideo(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video 
              src={selectedVideo} 
              controls 
              autoPlay
              className="w-full h-auto"
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
      `}</style>
    </section>
  )
}
