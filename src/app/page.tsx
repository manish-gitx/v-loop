'use client'

import { useState } from 'react'
import { EnvelopeIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
            V-LOOP
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Coming Soon Text */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
            Coming Soon
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We're crafting something extraordinary. Professional video editing services that will transform your vision into stunning reality.
          </p>
        </div>

        {/* Email Signup */}
        <div className="mb-16">
          <p className="text-gray-400 mb-6 text-lg">Be the first to know when we launch</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center group"
            >
              {isSubmitted ? (
                'Thank you!'
              ) : (
                <>
                  Notify Me
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🎥</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Professional Editing</h3>
            <p className="text-gray-400 text-sm">High-quality video editing services</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400 text-sm">Quick turnaround times</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Creative Vision</h3>
            <p className="text-gray-400 text-sm">Bringing your ideas to life</p>
          </div>
        </div>

<div className="flex flex-col items-center justify-center space-y-4">
  {/* Contact Info */}
  <div className="text-center">
    <p className="text-gray-400">Questions? Get in touch</p>
  </div>

  {/* Animated Dots */}
  <div className="flex justify-center space-x-2">
    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
    <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-200"></div>
  </div>

  {/* Footer */}
  <div className="mt-4">
    <p className="text-gray-500 text-sm">© 2024 V-Loop. All rights reserved.</p>
  </div>
</div>


      </div>
    </div>
  )
}
