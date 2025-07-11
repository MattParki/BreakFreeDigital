import { ArrowRight, CheckCircle, Zap, Globe, Smartphone, Users, MessageCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Plans } from "@/components/plans"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <Hero />
        <Services />
        <Plans />



        {/* Our Work Section */}
        <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Work</h2>
                <p className="max-w-[900px] text-slate-300 md:text-xl">
                  Real projects, real results. See how we've helped businesses transform their digital presence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-1">
              {/* ProspectsEasy Project */}
              <Card className="bg-white text-slate-900 border-0">
                <CardContent className="p-8">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Badge className="bg-slate-800 text-white">Completed Project</Badge>
                        <h3 className="text-2xl font-bold">ProspectsEasy</h3>
                        <p className="text-slate-600">Lead Generation & CRM Platform</p>
                      </div>
                      <p className="text-slate-700">
                        A comprehensive lead generation and customer relationship management platform designed to help
                        businesses streamline their sales processes. ProspectsEasy combines powerful prospecting tools
                        with an intuitive CRM system to maximize conversion rates.
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            Custom website with modern design
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            Full CRM system with lead tracking
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            Integrated blog platform for content marketing
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            Advanced analytics and reporting
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            Email automation and follow-up sequences
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3">Project Timeline</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span className="font-medium">3 months</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Technologies:</span>
                            <span className="font-medium">React, Node.js, Firebase</span>
                          </div>
                        </div>
                      </div>
                      <Button asChild className="w-full bg-slate-800 hover:bg-slate-900">
                        <a href="https://prospectseasy.com" target="_blank" rel="noopener noreferrer">
                          Visit ProspectsEasy
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* MutualGro Project */}
              <Card className="bg-white text-slate-900 border-0">
                <CardContent className="p-8">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Badge className="bg-slate-800 text-white">Completed Project</Badge>
                        <h3 className="text-2xl font-bold">MutualGro</h3>
                        <p className="text-slate-600">Investment & Wealth Management Platform</p>
                      </div>
                      <p className="text-slate-700">
                        A sophisticated investment platform that connects investors with mutual growth opportunities.
                        MutualGro provides tools for portfolio management, investment tracking, and collaborative wealth
                        building through community-driven investment strategies.
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            Responsive web application
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            Real-time portfolio tracking
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            Community investment features
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            Advanced security protocols
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            Mobile-optimized interface
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3">Project Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span className="font-medium">2 months</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Technologies:</span>
                            <span className="font-medium">Next.js, TypeScript, Firebase</span>
                          </div>
                        </div>
                      </div>
                      <Button asChild className="w-full bg-slate-800 hover:bg-slate-900">
                        <a href="https://www.mutualgro.com" target="_blank" rel="noopener noreferrer">
                          Visit MutualGro
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Gym-Slot Project */}
              <Card className="bg-white text-slate-900 border-0">
                <CardContent className="p-8">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Badge className="bg-orange-600 text-white">In Development</Badge>
                        <h3 className="text-2xl font-bold">Gym-Slot</h3>
                        <p className="text-slate-600">Fitness Class Booking Management System</p>
                      </div>
                      <p className="text-slate-700">
                        A comprehensive booking management system designed specifically for gym owners to streamline
                        class scheduling and member bookings. Gym-Slot provides an intuitive platform where gym members
                        can easily book classes while giving gym owners powerful tools to manage their facilities.
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold">Planned Features:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            Bespoke class booking system
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            Real-time availability tracking
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            Member management dashboard
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            Automated notifications and reminders
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            Payment integration and billing
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3">Development Status</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Status:</span>
                            <span className="font-medium">In Development</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Technologies:</span>
                            <span className="font-medium">React Native, Node.js, Firebase</span>
                          </div>
                        </div>
                      </div>
                      <Button disabled className="w-full bg-slate-400 cursor-not-allowed">
                        Coming Soon
                        <Zap className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-300 mb-6">Ready to see your project featured here?</p>
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="#contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
