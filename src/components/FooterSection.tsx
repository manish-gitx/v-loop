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
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-[#EB9522]">📸</div>
                <a
                  href="https://www.instagram.com/v.loop_official?igsh=MXgxYjk5dDY3ODNidg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-gray-400 hover:text-[#EB9522] transition-colors text-sm"
                >
                  Instagram
                </a>
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
