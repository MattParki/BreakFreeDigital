'use client'

import { ArrowRight, CheckCircle, Zap, Users, Award, MapPin, Clock, Heart, Target, Shield, Star, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  const [activeValue, setActiveValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      icon: Heart,
      title: "Client-First Approach",
      description: "Every decision we make is guided by what's best for our clients. Your success is our success.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We don't just build beautiful products—we build products that drive real business results.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Quality & Security",
      description: "We maintain the highest standards in code quality, security, and performance optimization.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, not just another vendor. Communication is key.",
      color: "from-purple-500 to-indigo-500"
    }
  ]



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-20"></div>
          <div className="absolute top-1/5 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-30"></div>
          <div className="absolute top-1/6 right-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-25"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-4 py-2 mb-6">
                <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                Manchester, UK
              </Badge>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  About BreakFree Digital
                </span>
              </h1>
            </div>
            
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                We're a team of passionate developers and designers who believe in the power of great digital products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className={`grid md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-sm text-gray-600">Skilled developers and designers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Efficient project management</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-sm text-gray-600">Rigorous testing and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From a simple idea to a growing digital agency, here's how we've evolved to serve businesses better.
              </p>
            </div>

            <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="space-y-6">
                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    With years of experience in web development and mobile app creation, we've helped businesses of all
                    sizes transform their ideas into successful digital products. Our approach combines cutting-edge
                    technology with user-centered design to deliver solutions that not only look great but perform
                    exceptionally.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Every project is unique, which is why we take the time to understand your specific needs,
                    challenges, and goals before proposing a solution. This personalized approach ensures that you get
                    exactly what you need, when you need it.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 shadow-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-600 mb-6">
                    Let's discuss your project and see how we can help transform your digital presence.
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <Link href="#contact">
                      Get In Touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Our Values
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core principles guide everything we do and every decision we make.
              </p>
            </div>

            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <Card 
                    key={index}
                    className="group relative overflow-hidden border-2 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                    onMouseEnter={() => setActiveValue(index)}
                    onMouseLeave={() => setActiveValue(-1)}
                  >
                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color.replace('500', '50')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <CardHeader className="text-center pb-4">
                        {/* Icon container */}
                        <div className="relative mx-auto mb-4">
                          <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                          <div className={`relative bg-gradient-to-r ${value.color} p-3 rounded-2xl`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                          {value.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <p className="text-gray-600 text-center leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-1700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Why Choose BreakFree Digital?
                </span>
              </h2>
            </div>

            <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-1900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Manchester Based</h3>
                    <p className="text-gray-600">
                      We're proud to be based in Manchester, supporting local businesses and understanding the unique needs of North West companies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Service Solutions</h3>
                    <p className="text-gray-600">
                      From websites to CRM systems, we provide end-to-end digital solutions so you don't need multiple vendors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Approach</h3>
                    <p className="text-gray-600">
                      Every business is unique. We take time to understand your specific needs and create tailored solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                    <p className="text-gray-600">
                      Our clients see real improvements in efficiency, sales, and customer satisfaction after working with us.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pl-8">
                <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Ready to Get Started?</CardTitle>
                    <CardDescription className="text-gray-600">
                      Let's discuss your project and see how we can help your business break free from digital limitations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">hello@breakfreedigital.co.uk</span>
                    </div>
                    <div className="pt-4">
                                              <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105"
                          asChild
                        >
                          <Link href="#contact">
                            Get In Touch
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 