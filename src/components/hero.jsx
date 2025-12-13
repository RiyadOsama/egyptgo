"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full h-96 md:h-[500px] bg-linear-to-r from-orange-600 via-accent to-orange-800 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-balance">Discover Egypt's Wonders</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl text-balance">
            Experience the magic of ancient civilizations, breathtaking landscapes, and unforgettable moments
          </p>
          <div className="flex gap-4 pt-4">
            <Link
              href="/destinations"
              className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition"
            >
              Explore Destinations
            </Link>
            <Link
              href="/packages"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
