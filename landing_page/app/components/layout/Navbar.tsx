'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 dark:bg-slate-900/95 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/app_logo.png"
            alt="StackTap"
            width={40}
            height={40}
            className="dark:filter dark:invert"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            StackTap
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-600 hover:text-blue-600 transition dark:text-gray-300 dark:hover:text-blue-400">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition dark:text-gray-300 dark:hover:text-blue-400">
            How It Works
          </Link>
          <Link href="#faq" className="text-gray-600 hover:text-blue-600 transition dark:text-gray-300 dark:hover:text-blue-400">
            FAQ
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition dark:text-gray-300 dark:hover:text-blue-400">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-800 dark:bg-white block"></span>
          <span className="w-6 h-0.5 bg-gray-800 dark:bg-white block"></span>
          <span className="w-6 h-0.5 bg-gray-800 dark:bg-white block"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              href="#features"
              className="text-gray-600 hover:text-blue-600 transition dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-blue-600 transition dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              className="text-gray-600 hover:text-blue-600 transition dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 transition dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
