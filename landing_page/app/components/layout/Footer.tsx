'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 dark:bg-black border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.svg"
                alt="StackTap"
                width={40}
                height={40}
                className="filter invert"
              />
              <span className="text-xl font-bold">StackTap</span>
            </div>
            <p className="text-gray-400 text-sm">
              Simple arcade stacking game. Tap to stack blocks and beat your high score.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#features" className="hover:text-blue-400 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-blue-400 transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-blue-400 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="mailto:support@stacktap.app" className="hover:text-blue-400 transition">
                  support@stacktap.app
                </a>
              </li>
              <li>
                <Link href="/help" className="hover:text-blue-400 transition">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© {currentYear} StackTap. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://twitter.com" className="hover:text-blue-400 transition" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://facebook.com" className="hover:text-blue-400 transition" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://instagram.com" className="hover:text-blue-400 transition" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
