'use client'

import { CheckCircle, MessageCircle, Zap, Star, Globe, Smartphone, Database, Clock } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Plans() {
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      icon: Globe,
      popular: false,
      features: [
        'Custom website design',
        'Mobile responsive',
        'Basic SEO setup',
        'Contact forms',
        'Social media integration',
        '3 months support',
        'Basic analytics setup'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses',
      icon: Smartphone,
      popular: true,
      features: [
        'Everything in Starter, plus:',
        'Advanced functionality',
        'CMS integration',
        'E-commerce capabilities',
        'Custom mobile app',
        'API integrations',
        '6 months support',
        'Advanced analytics'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large-scale projects and organizations',
      icon: Database,
      popular: false,
      features: [
        'Everything in Professional, plus:',
        'Custom CRM system',
        'Advanced automation',
        'Multi-platform solutions',
        'Dedicated project manager',
        'Priority support',
        '12 months support',
        'Custom integrations'
      ],
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50'
    }
  ]

  return (
    <section id="plans" className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 text-gray-700 px-4 py-2">
              <Zap className="h-4 w-4 text-blue-600 mr-2" />
              Our Plans
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Choose Your Perfect Plan
              </span>
            </h2>
            <p className="max-w-[800px] text-lg md:text-xl text-gray-600 leading-relaxed">
              From simple websites to complex CRM systems, we have a plan that fits your needs and budget.
            </p>
          </div>
        </div>



        {/* Plans Grid */}
        <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-16">
          {plans.map((plan) => {
            const IconComponent = plan.icon
            
            return (
              <Card 
                key={plan.id}
                className={`group relative overflow-hidden border-2 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ${
                  plan.popular 
                    ? 'border-blue-500 ring-2 ring-blue-100' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <Badge className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 text-sm font-semibold z-10">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}

                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <CardHeader className="text-center pb-4 pt-16">
                    {/* Icon container */}
                    <div className="relative mx-auto mb-4">
                      <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      <div className={`relative bg-gradient-to-r ${plan.color} p-3 rounded-2xl`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mb-4">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Features list */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA Button */}
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                          : 'bg-gray-900 hover:bg-gray-800 text-white'
                      } transition-all duration-300 transform hover:scale-105`}
                      asChild
                    >
                      <Link href="#contact">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Get Started
                      </Link>
                    </Button>
                    
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Custom quote based on requirements
                    </p>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Need a Custom Solution?
              </h3>
              <p className="text-lg text-gray-600">
                Every project is unique. Let's discuss your specific needs and create a tailored solution that fits your budget and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="#contact">
                    <Clock className="mr-2 h-5 w-5" />
                    Schedule Free Consultation
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-6 text-lg font-semibold bg-white hover:bg-gray-50 transition-all duration-300"
                  asChild
                >
                  <Link href="#contact">
                    Get Custom Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 