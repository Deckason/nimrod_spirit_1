import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skull, BookOpen, ShoppingCart, Users, Eye, Flame, Moon, Star, ArrowRight, Play, Zap } from "lucide-react"
import Link from "next/link"

export default function NimrodSpiritLanding() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-red-950/20 to-purple-950/30">
        <div className="absolute inset-0 bg-grid animate-pulse" />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-red-900/30 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Skull className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
                NIMROD SPIRIT
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#courses" className="text-gray-300 hover:text-red-400 transition-colors">
                Courses
              </Link>
              <Link href="#shop" className="text-gray-300 hover:text-red-400 transition-colors">
                Shop
              </Link>
              <Link href="#blog" className="text-gray-300 hover:text-red-400 transition-colors">
                Blog
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-red-400 transition-colors">
                About
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent"
              >
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700">
                Join Now
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center">
              <Badge className="bg-red-900/50 text-red-300 border-red-700 px-4 py-2 text-sm">
                <Eye className="w-4 h-4 mr-2" />
                Unlock the Forbidden Knowledge
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-500 via-purple-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                EMBRACE THE
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">DARKNESS WITHIN</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Journey into the realm of ancient wisdom, forbidden arts, and mystical knowledge.
              <br className="hidden md:block" />
              Where shadows dance and spirits whisper their secrets.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-lg px-8 py-4 group"
              >
                Begin Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white text-lg px-8 py-4 group bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Preview
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-bounce">
          <Moon className="h-8 w-8 text-purple-400 opacity-60" />
        </div>
        <div className="absolute top-1/3 right-16 animate-pulse">
          <Star className="h-6 w-6 text-red-400 opacity-40" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-spin-slow">
          <Flame className="h-10 w-10 text-orange-500 opacity-50" />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-red-950/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
                Three Paths to Power
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose your path through our trinity of dark knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* LMS Card */}
            <Card className="bg-gradient-to-br from-red-950/50 to-black border-red-800/50 hover:border-red-600/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-red-900/30 rounded-full group-hover:bg-red-800/40 transition-colors">
                    <BookOpen className="h-12 w-12 text-red-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Dark Academia</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Master the forbidden arts through our comprehensive courses in mysticism, occult practices, and
                  ancient wisdom.
                </p>
                <Button className="w-full bg-red-800 hover:bg-red-700 group-hover:shadow-lg group-hover:shadow-red-500/25">
                  Explore Courses
                  <Zap className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* E-commerce Card */}
            <Card className="bg-gradient-to-br from-purple-950/50 to-black border-purple-800/50 hover:border-purple-600/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-purple-900/30 rounded-full group-hover:bg-purple-800/40 transition-colors">
                    <ShoppingCart className="h-12 w-12 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Mystic Emporium</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Acquire rare artifacts, ritual tools, and enchanted items to enhance your spiritual journey and
                  practices.
                </p>
                <Button className="w-full bg-purple-800 hover:bg-purple-700 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                  Browse Shop
                  <Eye className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Blog Card */}
            <Card className="bg-gradient-to-br from-orange-950/50 to-black border-orange-800/50 hover:border-orange-600/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-orange-900/30 rounded-full group-hover:bg-orange-800/40 transition-colors">
                    <Users className="h-12 w-12 text-orange-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Shadow Chronicles</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Dive deep into our collection of dark tales, mystical insights, and forbidden knowledge shared by our
                  community.
                </p>
                <Button className="w-full bg-orange-800 hover:bg-orange-700 group-hover:shadow-lg group-hover:shadow-orange-500/25">
                  Read Stories
                  <Flame className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-red-950/20 via-black to-purple-950/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
                Ready to Embrace Your Destiny?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands who have already begun their journey into the shadows. Your transformation awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email..."
                className="bg-black/50 border-red-800 text-white placeholder:text-gray-500 focus:border-red-500"
              />
              <Button className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 whitespace-nowrap">
                Join the Coven
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">By joining, you accept the terms of our dark covenant.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-red-900/30 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Skull className="h-6 w-6 text-red-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
                  NIMROD SPIRIT
                </span>
              </div>
              <p className="text-gray-400 text-sm">Guiding souls through the darkness since the beginning of time.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Learning</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Workshops
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Certifications
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Ritual Tools
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Books
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Artifacts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Forums
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-red-900/30 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 Nimrod Spirit. All rights reserved. May the shadows guide you.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
