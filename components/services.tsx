'use client'

import { ArrowRight, CheckCircle, Globe, Smartphone, Database, Zap, Code, Users, BarChart3, Shield } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      icon: Globe,
      title: "Website Design & Development",
      description: "Custom websites that are fast, responsive, and optimized for conversions",
      features: [
        "Responsive Design",
        "SEO Optimization", 
        "Performance Focused",
        "CMS Integration",
        "E-commerce Ready"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform apps that deliver exceptional user experiences",
      features: [
        "iOS & Android",
        "Cross-Platform Solutions",
        "UI/UX Design",
        "App Store Deployment",
        "Push Notifications"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      id: 3,
      icon: Database,
      title: "CRM & Business Systems",
      description: "Powerful CRM systems and custom platforms that give you complete control",
      features: [
        "Custom CRM Development",
        "Data Management",
        "Workflow Automation",
        "User Management",
        "Analytics & Reporting"
      ],
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      id: 4,
      icon: Code,
      title: "Custom Software Solutions",
      description: "Tailored software applications built to solve your specific business challenges",
      features: [
        "API Development",
        "Third-party Integrations",
        "Cloud Solutions",
        "Microservices Architecture",
        "Database Design"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      id: 5,
      icon: BarChart3,
      title: "Digital Strategy & Consulting",
      description: "Strategic guidance to help you make the right technology decisions",
      features: [
        "Technology Consulting",
        "Digital Transformation",
        "Process Optimization",
        "Performance Audits",
        "Scalability Planning"
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50"
    },
    {
      id: 6,
      icon: Shield,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your systems running smoothly",
      features: [
        "24/7 Monitoring",
        "Security Updates",
        "Performance Optimization",
        "Bug Fixes",
        "Feature Enhancements"
      ],
      color: "from-slate-500 to-gray-500",
      bgColor: "from-slate-50 to-gray-50"
    }
  ]

  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-4 py-2">
              <Zap className="h-4 w-4 text-blue-600 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Complete Digital Solutions
              </span>
            </h2>
            <p className="max-w-[800px] text-lg md:text-xl text-gray-600 leading-relaxed">
              From stunning websites to powerful CRM systems, we deliver comprehensive digital solutions 
              that transform your business operations and drive growth.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={service.id}
                className={`group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  hoveredCard === service.id ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <CardHeader className="text-center pb-4">
                    {/* Icon container */}
                    <div className="relative mx-auto mb-4">
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      <div className={`relative bg-gradient-to-r ${service.color} p-4 rounded-2xl`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Features list */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 group-hover:text-gray-800 transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA Button */}
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:border-gray-400 group-hover:bg-white/90 transition-all duration-300"
                      asChild
                    >
                      <Link href="#contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              Need a custom solution that combines multiple services?
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="#contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 