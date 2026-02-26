'use client';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission (in a real app, you would send to a backend)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-slate-900 pt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-flex items-center gap-2">
              <span>←</span> Back to Home
            </Link>

            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
              Have a question or feedback about StackTap? We'd love to hear from you. Reach out and we'll get back to you as soon as possible.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Get in Touch</h2>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900">
                          <svg className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Email</h3>
                        <p className="text-gray-600 dark:text-gray-400">support@stacktap.app</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">We typically respond within 24 hours</p>
                      </div>
                    </div>

                    {/* Support */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-emerald-100 dark:bg-emerald-900">
                          <svg className="h-6 w-6 text-emerald-600 dark:text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Help Center</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          <Link href="#faq" className="hover:text-blue-600 transition">
                            Check our FAQ section
                          </Link>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Many questions answered instantly</p>
                      </div>
                    </div>

                    {/* Social */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-amber-100 dark:bg-amber-900">
                          <svg className="h-6 w-6 text-amber-600 dark:text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Follow Us</h3>
                        <div className="flex gap-4 mt-2">
                          <a href="https://twitter.com" className="text-blue-600 dark:text-blue-400 hover:underline transition">
                            Twitter
                          </a>
                          <a href="https://facebook.com" className="text-blue-600 dark:text-blue-400 hover:underline transition">
                            Facebook
                          </a>
                          <a href="https://instagram.com" className="text-blue-600 dark:text-blue-400 hover:underline transition">
                            Instagram
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response time guarantee */}
                <div className="p-6 bg-blue-50 dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-slate-700">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-2">⏱️ Quick Response</p>
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    Our support team is dedicated to responding to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                      placeholder="Tell us your feedback, bug report, or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-600/50 transition transform duration-300 hover:scale-105"
                  >
                    Send Message
                  </button>

                  {submitted && (
                    <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-200 rounded-lg">
                      ✓ Message sent! Thank you for reaching out. We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-3xl mb-3">📧</div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Email Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  For general inquiries and support requests
                </p>
              </div>

              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-3xl mb-3">🐛</div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Bug Reports</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Found a bug? Let us know and help us improve
                </p>
              </div>

              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Feedback</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Have feature ideas? We'd love to hear them
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
