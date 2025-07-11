'use client'

import { ArrowRight, Play, Star, Users, Award, Zap } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const rotatingWords = ["Websites", "Mobile Apps", "CRM Systems", "Digital Solutions"]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-1/5 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-blue-500 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-1/6 right-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-25"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Trust indicators */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-4 py-2">
              <Star className="h-4 w-4 text-yellow-500 mr-2" />
              Manchester's Premier Digital Agency
            </Badge>
          </div>

          {/* Main headline with animated text */}
          <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Break Free from
              </span>
              <br />
              <span className="text-gray-900">Digital Limitations</span>
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 h-12 flex items-center justify-center">
              <span>We create stunning </span>
              <span className="ml-2 relative inline-block min-w-[200px] text-left">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                  {rotatingWords[currentWord]}
                </span>
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="mx-auto max-w-[800px] text-lg md:text-xl text-gray-600 leading-relaxed">
              We transform your ideas into comprehensive digital solutions. From stunning websites and mobile apps to 
              powerful CRM systems and custom platforms, we deliver end-to-end solutions that give you complete control 
              over your business operations.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-6 text-lg font-semibold bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Key Benefits */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-lg font-bold text-gray-900">Fast Delivery</div>
              <div className="text-sm text-gray-600">Quick turnaround times</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-lg font-bold text-gray-900">Quality First</div>
              <div className="text-sm text-gray-600">Premium standards</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-lg font-bold text-gray-900">Dedicated Support</div>
              <div className="text-sm text-gray-600">Always here to help</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Star className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-lg font-bold text-gray-900">Modern Tech</div>
              <div className="text-sm text-gray-600">Latest frameworks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
} 