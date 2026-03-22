'use client'

import Image from 'next/image';
import { FooterSectionProps } from '@/types';

export default function FooterSection({ mousePosition }: FooterSectionProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black py-16 border-t border-gray-800 relative overflow-hidden">
      {/* Very subtle mouse-based lighting */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 0.03}% ${mousePosition.y * 0.03}%, #EEBD19, transparent 80%)`
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/V-Loop White.png"
                alt="V-Loop Photography"
                width={96}
                height={96}
                className="w-16 sm:w-20 lg:w-24 h-auto object-contain"
              />
              <div>
              </div>
            </div>
            <p className="font-body text-gray-400 text-sm sm:text-base mb-6 max-w-md">
              Capturing life&apos;s most precious moments through our lens. We specialize in events, and portrait photography that tells your unique story.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/v.loop_official?igsh=MXgxYjk5dDY3ODNidg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-[#EB9522] transition-colors group"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg  text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[{ label: 'Home', href: '#hero' }, { label: 'About', href: '#about' }, { label: 'Portfolio', href: '#portfolio' }].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-body text-gray-400 hover:text-[#EB9522] transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/917330722605?text=Hi%2C%20I%27m%20interested%20in%20working%20with%20V-Loop!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-gray-400 hover:text-[#EB9522] transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-[#EB9522] mt-0.5">📍</div>
                <p className="font-body text-gray-400 text-sm">
                  Madhapur<br />
                  Hyderabad, 500001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-[#EB9522]">📞</div>
                <p className="font-body text-gray-400 text-sm">+91 7330722605</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="font-body text-gray-500 text-sm mb-4 sm:mb-0">
            © 2024 V-Loop Photography. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="font-body text-gray-500 hover:text-[#EB9522] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-gray-500 hover:text-[#EB9522] transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
