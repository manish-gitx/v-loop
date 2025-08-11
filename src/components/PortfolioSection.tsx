'use client'

import { useEffect, useRef, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from '@use-gesture/react'
import portfolioData from '@/data/portfolio.json'
import { PortfolioProject, PortfolioSectionProps } from '@/types'

export default function PortfolioSection({ }: PortfolioSectionProps) {
  const [projects] = useState<PortfolioProject[]>(portfolioData.projects)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMutedMobile, setIsMutedMobile] = useState(true)
  const [activeAudioCard, setActiveAudioCard] = useState<number | null>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const carouselRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const detectTouch = () => {
      if (typeof window === 'undefined') return false
      const isCoarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches
      const hasTouch = 'ontouchstart' in window || (navigator as Navigator & { maxTouchPoints?: number }).maxTouchPoints > 0
      return isCoarse || hasTouch
    }
    setIsTouchDevice(detectTouch())
  }, [])

  const updateScrollAffordances = () => {
    const container = carouselRef.current
    if (!container) return
    const { scrollLeft, scrollWidth, clientWidth } = container
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1)
  }

  useEffect(() => {
    updateScrollAffordances()
    const handleResize = () => updateScrollAffordances()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollByOneCard = (direction: -1 | 1) => {
    const container = carouselRef.current
    if (!container) return

    const children = Array.from(container.children) as HTMLElement[]
    const firstChild = children[0]
    const secondChild = children[1]

    const cardWidth = firstChild?.getBoundingClientRect().width ?? 320
    let gap = 24 // default to between gap-4 (16px) and gap-6 (24px)

    try {
      const computed = window.getComputedStyle(container)
      const gapValue = parseFloat(computed.columnGap || computed.gap || '0')
      if (!Number.isNaN(gapValue) && gapValue > 0) {
        gap = gapValue
      } else if (firstChild && secondChild) {
        gap = Math.max(0, secondChild.offsetLeft - firstChild.offsetLeft - firstChild.offsetWidth)
      }
    } catch {
      // noop: fallback defaults are fine SSR/older browsers
    }

    const delta = direction * (cardWidth + gap)
    container.scrollBy({ left: delta, behavior: 'smooth' })
    // Defer update to after scroll settles; optimistic update
    setTimeout(updateScrollAffordances, 300)
  }

  const toggleMobileAudio = () => {
    setIsMutedMobile(!isMutedMobile)
  }

  const toggleDesktopAudio = (projectId: number) => {
    // If clicking the same card that's already playing audio, mute it
    if (activeAudioCard === projectId) {
      setActiveAudioCard(null)
    } else {
      // Otherwise, set this card as the only one with audio
      setActiveAudioCard(projectId)
    }
  }

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
          <div className="relative w-full px-4">
            <animated.div
              {...bind()}
              style={{
                x,
                touchAction: 'pan-y',
              }}
              className="relative w-full max-w-sm mx-auto h-[75vh] min-h-[500px] max-h-[700px] cursor-grab active:cursor-grabbing"
            >
              <div
                className="relative w-full h-full bg-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden"
                onClick={toggleMobileAudio}
              >
                {/* Background Video */}
                {projects[currentIndex]?.videoUrl ? (
                  <video 
                    src={projects[currentIndex].videoUrl} 
                    className="w-full h-full object-cover"
                    muted={isMutedMobile}
                    loop
                    autoPlay
                    playsInline
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-4xl sm:text-6xl opacity-30">📸</div>
                  </div>
                )}
                
                {/* Simple Dark Overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Audio Button */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center">
                    {isMutedMobile ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    )}
                  </div>
                </div>
                
                {/* Bottom Text */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">{projects[currentIndex]?.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">{projects[currentIndex]?.description}</p>
                </div>
              </div>
            </animated.div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#EB9522] w-6 sm:w-8' : 'bg-gray-600 w-1.5 sm:w-2'
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
              ref={carouselRef}
              onScroll={updateScrollAffordances}
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
                  onClick={() => toggleDesktopAudio(project.id)}
                >
                  {project.videoUrl ? (
                    <video 
                      src={project.videoUrl} 
                      className="w-full h-full object-cover"
                      muted={activeAudioCard !== project.id} // Only unmuted if this is the active audio card
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

                  {/* Audio Button */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center">
                      {activeAudioCard !== project.id ? (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  
                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                    <h3 className="text-white text-lg lg:text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-gray-300 text-sm lg:text-base">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrow Controls (non-touch devices only) */}
            {!isTouchDevice && (
              <>
                {canScrollLeft && (
                  <button
                    aria-label="Scroll left"
                    onClick={() => scrollByOneCard(-1)}
                    className="hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 items-center justify-center rounded-full bg-black/60 hover:bg-black/75 text-white shadow-lg backdrop-blur-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 lg:w-6 lg:h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                {canScrollRight && (
                  <button
                    aria-label="Scroll right"
                    onClick={() => scrollByOneCard(1)}
                    className="hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 items-center justify-center rounded-full bg-black/60 hover:bg-black/75 text-white shadow-lg backdrop-blur-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 lg:w-6 lg:h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </>
            )}

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
