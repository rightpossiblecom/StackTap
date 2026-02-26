import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Help Center - StackTap',
  description: 'Help center and support for StackTap arcade game',
};

export default function HelpCenter() {
  const helpCategories = [
    {
      title: 'Getting Started',
      links: [
        { text: 'How to download StackTap', href: '#' },
        { text: 'First game setup', href: '#' },
        { text: 'Understanding the controls', href: '#' },
      ],
    },
    {
      title: 'Gameplay',
      links: [
        { text: 'Game mechanics explained', href: '#' },
        { text: 'How scoring works', href: '#' },
        { text: 'Tips for higher scores', href: '#' },
        { text: 'Understanding game speed', href: '#' },
      ],
    },
    {
      title: 'Settings & Features',
      links: [
        { text: 'Sound and vibration settings', href: '#' },
        { text: 'Resetting your high score', href: '#' },
        { text: 'Color customization', href: '#' },
      ],
    },
    {
      title: 'Troubleshooting',
      links: [
        { text: 'App crashes', href: '#' },
        { text: 'Game lags or stutters', href: '#' },
        { text: 'High score not saving', href: '#' },
        { text: 'Device compatibility', href: '#' },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-slate-900 pt-24">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Help Center</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Find answers to common questions and get help with StackTap.
          </p>

          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search help articles..."
                className="w-full px-6 py-3 border-2 border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600"
              />
              <svg className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {helpCategories.map((category, index) => (
              <div key={index} className="p-6 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-400 transition">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {category.title}
                </h2>
                <ul className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="text-blue-600 dark:text-blue-400 hover:underline transition">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Common Issues */}
          <div className="bg-blue-50 dark:bg-slate-800 p-8 rounded-lg border border-blue-200 dark:border-slate-700 mb-16">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Common Issues & Solutions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  ❓ My high score isn't saving
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  High scores are stored locally on your device. If you've reinstalled the app, your previous score may be lost. Make sure your device has sufficient storage space. If the issue persists, check your app permissions in Settings.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  ❓ The app keeps crashing
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Try these steps: 1) Force close the app, 2) Clear the app cache in Settings, 3) Restart your device, 4) Make sure you have the latest version installed. If the issue continues, please contact support.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  ❓ The game feels slow or laggy
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Check your device's available memory. Close other apps running in the background. Lower your device's screen brightness slightly (can improve performance). Update to the latest version of StackTap.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  ❓ Vibration isn't working
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ensure vibration is enabled in the Settings menu. Check your device's vibration settings (some devices allow app-level vibration control). Make sure your device isn't in silent mode.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  ❓ How do I reset my high score?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Open the Settings menu in the app and tap "Reset High Score." A confirmation dialog will appear—confirm to reset. This action cannot be undone!
                </p>
              </div>
            </div>
          </div>

          {/* Still need help */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                📧 Email Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Can't find what you're looking for? Reach out to our support team directly.
              </p>
              <a
                href="mailto:support@stacktap.app"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Contact Support
              </a>
            </div>

            <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                ❓ FAQ
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Browse our frequently asked questions for instant answers.
              </p>
              <a
                href="/#faq"
                className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
