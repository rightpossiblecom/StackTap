'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is StackTap really free?',
      answer: 'Yes! StackTap is completely free with no ads, no in-app purchases, and no hidden costs. We believe great games should be accessible to everyone.',
    },
    {
      question: 'How is my score calculated?',
      answer: 'You earn 1 point for each successful block placement. Bonus points may be awarded for consecutive perfect placements. Your highest score is automatically saved locally on your device.',
    },
    {
      question: 'Why does the game speed increase?',
      answer: 'As your tower grows, the block moves faster to increase the challenge. This keeps the game engaging and rewards precision and focus. The speed increases gradually to maintain playability.',
    },
    {
      question: 'Can I play offline?',
      answer: 'Absolutely! StackTap is a fully offline game. No internet connection required. Play anytime, anywhere—on flights, commutes, or whenever you have a free moment.',
    },
    {
      question: 'Is there multiplayer mode?',
      answer: 'Currently, StackTap is a single-player arcade experience. However, you can challenge friends by sharing your high scores. Multiplayer features may be added in future updates.',
    },
    {
      question: 'How do I reset my high score?',
      answer: 'You can reset your high score anytime in the Settings menu. Just tap the reset button and confirm. This action cannot be undone, so be careful!',
    },
    {
      question: 'Does StackTap have settings?',
      answer: 'Yes! In the Settings menu, you can toggle sound effects on/off, control vibration feedback, reset your high score, and access legal pages.',
    },
    {
      question: 'What devices does StackTap support?',
      answer: 'StackTap is available on iOS and Android. Check your app store for the latest version. Minimum requirements vary by platform—see the store listing for details.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-slate-900 transition">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to know about StackTap.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden hover:border-blue-400 dark:hover:border-blue-400 transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-left"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still need help? */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800 rounded-xl text-center border border-blue-200 dark:border-slate-700">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Still have a question?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We're here to help! Reach out to our support team.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
