'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full">
              <span className="text-blue-600 dark:text-blue-300 text-sm font-semibold">
                🎮 Arcade Game
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
              Stack Blocks.{' '}
              <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-600 bg-clip-text text-transparent">
                Beat Your Score.
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Tap at the right moment to stack blocks higher and higher. Simple, addictive, and impossible to put down. How high can you stack?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-600/50 transition transform duration-300 hover:scale-105"
              >
                Download Now
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition"
              >
                Learn More
              </Link>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">2K+</div>
                <div>Downloads</div>
              </div>
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">4.8★</div>
                <div>Rating</div>
              </div>
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">100%</div>
                <div>Free</div>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Animated background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>

              {/* Phone mockup */}
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border-8 border-slate-900 dark:border-slate-700" style={{ width: '280px', height: '560px' }}>
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 dark:bg-slate-800 rounded-b-3xl z-10"></div>

                {/* Phone content */}
                <div className="pt-8 h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
                  <Image
                    src="/logo.svg"
                    alt="StackTap Logo"
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">StackTap</h2>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">High Score: 125</div>

                  {/* Game blocks visual */}
                  <div className="space-y-2 mb-6">
                    <div className="w-24 h-4 bg-blue-500 rounded-sm"></div>
                    <div className="w-20 h-4 bg-emerald-500 rounded-sm ml-2"></div>
                    <div className="w-16 h-4 bg-amber-500 rounded-sm ml-4"></div>
                  </div>

                  <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-sm">
                    Tap to Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
