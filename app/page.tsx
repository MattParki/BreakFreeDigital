import { ArrowRight, CheckCircle, Zap, Globe, Smartphone, Users, MessageCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6 text-slate-800" />
          <span className="ml-2 text-lg font-bold">BreakFree Digital</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-slate-800 transition-colors" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:text-slate-800 transition-colors" href="#plans">
            Plans
          </Link>
          <Link className="text-sm font-medium hover:text-slate-800 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-slate-800 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Break Free from Digital Limitations
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  We transform your ideas into powerful digital products. From stunning websites to innovative mobile
                  apps, we deliver solutions that drive your business forward.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-slate-800 hover:bg-slate-900">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-slate-800 text-slate-800 hover:bg-slate-50">
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  We specialize in creating digital products that make a difference
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="border-2 hover:border-slate-200 transition-colors">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 mx-auto text-slate-800" />
                  <CardTitle>Website Design & Development</CardTitle>
                  <CardDescription>
                    Custom websites that are fast, responsive, and optimized for conversions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Responsive Design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      SEO Optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Performance Focused
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      CMS Integration
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-slate-200 transition-colors">
                <CardHeader className="text-center">
                  <Smartphone className="h-12 w-12 mx-auto text-slate-800" />
                  <CardTitle>Mobile App Development</CardTitle>
                  <CardDescription>
                    Native and cross-platform apps that deliver exceptional user experiences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      iOS & Android
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Cross-Platform Solutions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      UI/UX Design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      App Store Deployment
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-slate-200 transition-colors">
                <CardHeader className="text-center">
                  <Zap className="h-12 w-12 mx-auto text-slate-800" />
                  <CardTitle>Digital Strategy</CardTitle>
                  <CardDescription>Comprehensive digital solutions tailored to your business goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Technology Consulting
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Digital Transformation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Maintenance & Support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Analytics & Optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="plans" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Plans</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  Every project is unique. Let's discuss your specific needs and create a custom solution.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3">
              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-xl">Starter</CardTitle>
                  <CardDescription>Perfect for small businesses and startups</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Includes:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Custom website design
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Mobile responsive
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Basic SEO setup
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />3 months support
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-slate-800 hover:bg-slate-900">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contact for Pricing
                    </Button>
                    <p className="text-xs text-gray-500 mt-2 text-center">Pricing varies based on requirements</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="relative border-slate-200 border-2">
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-slate-800">Most Popular</Badge>
                <CardHeader>
                  <CardTitle className="text-xl">Professional</CardTitle>
                  <CardDescription>Ideal for growing businesses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Everything in Starter, plus:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Advanced functionality
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        CMS integration
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        E-commerce capabilities
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />6 months support
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-slate-800 hover:bg-slate-900">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contact for Pricing
                    </Button>
                    <p className="text-xs text-gray-500 mt-2 text-center">Custom quote based on scope</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-xl">Enterprise</CardTitle>
                  <CardDescription>For large-scale projects and organizations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Everything in Professional, plus:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Custom app development
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        API integrations
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Dedicated support
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        12 months support
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-slate-800 hover:bg-slate-900">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contact for Pricing
                    </Button>
                    <p className="text-xs text-gray-500 mt-2 text-center">Tailored solutions & pricing</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                {
                  "Every project has unique requirements. We'll work with you to create a custom solution that fits your budget and goals."
                }
              </p>
              <Button variant="outline" size="lg" className="border-slate-800 text-slate-800 hover:bg-slate-50">
                Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About BreakFree Digital</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    We're a team of passionate developers and designers who believe in the power of great digital
                    products.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    With years of experience in web development and mobile app creation, we've helped businesses of all
                    sizes transform their ideas into successful digital products. Our approach combines cutting-edge
                    technology with user-centered design to deliver solutions that not only look great but perform
                    exceptionally.
                  </p>
                  <p className="text-gray-600">
                    Every project is unique, which is why we take the time to understand your specific needs,
                    challenges, and goals before proposing a solution. This personalized approach ensures that you get
                    exactly what you need, when you need it.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center space-x-4">
                    <Users className="h-8 w-8 text-slate-800" />
                    <div>
                      <h3 className="font-bold">Expert Team</h3>
                      <p className="text-sm text-gray-600">Skilled developers and designers</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Zap className="h-8 w-8 text-slate-800" />
                    <div>
                      <h3 className="font-bold">Fast Delivery</h3>
                      <p className="text-sm text-gray-600">Efficient project management</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-8 w-8 text-slate-800" />
                    <div>
                      <h3 className="font-bold">Quality Assured</h3>
                      <p className="text-sm text-gray-600">Rigorous testing and optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  {"Let's discuss your project and create something amazing together."}
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-slate-800 hover:bg-slate-900">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Us Today
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-slate-800 text-slate-800 hover:bg-slate-50"
                >
                  <a href="mailto:hello@breakfreedigitalagency.com">
                    hello@breakfreedigitalagency.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">© 2024 BreakFree Digital. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
