'use client'

import { Zap, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleSectionNavigation = (sectionId: string) => {
    // Close mobile menu
    setIsMenuOpen(false)
    
    // If we're on the home page, scroll to section
    if (pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to home page with section hash
      router.push(`/#${sectionId}`)
    }
  }

  // Handle scroll to section after navigation
  useEffect(() => {
    const hash = window.location.hash
    if (hash && pathname === '/') {
      const sectionId = hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100) // Small delay to ensure page is loaded
    }
  }, [pathname])

  return (
    <>
      {/* Modern Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-gradient-to-r from-slate-50/95 to-blue-50/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo/Brand */}
            <Link className="flex items-center space-x-3 group" href="/">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Zap className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse shadow-sm"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  BreakFree
                </span>
                <span className="text-xs lg:text-sm text-gray-600 font-medium tracking-wide">Digital</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              <button 
                className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 group py-2 px-3" 
                onClick={() => handleSectionNavigation('services')}
              >
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </button>
              <button 
                className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 group py-2 px-3" 
                onClick={() => handleSectionNavigation('plans')}
              >
                <span className="relative z-10">Plans</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </button>
              <Link 
                className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 group py-2 px-3" 
                href="/about"
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <button 
                className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 group py-2 px-3" 
                onClick={() => handleSectionNavigation('contact')}
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg bg-white/90 hover:bg-white backdrop-blur-sm border border-gray-200/50 transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-700" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <nav className="py-6 space-y-1 border-t border-gray-200/50 bg-white/98 backdrop-blur-md rounded-b-lg">
              <button 
                className="block w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 py-3 px-4 rounded-lg mx-2" 
                onClick={() => handleSectionNavigation('services')}
              >
                Services
              </button>
              <button 
                className="block w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 py-3 px-4 rounded-lg mx-2" 
                onClick={() => handleSectionNavigation('plans')}
              >
                Plans
              </button>
              <Link 
                className="block text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 py-3 px-4 rounded-lg mx-2" 
                href="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <button 
                className="block w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 py-3 px-4 rounded-lg mx-2" 
                onClick={() => handleSectionNavigation('contact')}
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20"></div>
    </>
  )
} 