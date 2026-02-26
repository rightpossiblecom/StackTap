import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - StackTap',
  description: 'Privacy policy for StackTap arcade game',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-slate-900 pt-24">
        <div className="container mx-auto px-6 py-16 max-w-3xl">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Last Updated: February 26, 2026</p>

          <div className="space-y-8 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
              <p>
                StackTap ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application StackTap (the "Application").
              </p>
              <p className="mt-4">
                Please read this privacy policy carefully. If you do not agree with our policies and practices, please do not use our Application. Your continued use of the Application following the posting of revised Privacy Policy means that you accept and agree to such changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 mt-4">2.1 Information You Provide Directly</h3>
              <p>
                At this time, StackTap does not require account creation or authentication. However, if you contact us for support, we may collect:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Your email address</li>
                <li>Your message content</li>
                <li>Device information you voluntarily provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">2.2 Information Collected Automatically</h3>
              <p>
                When you use StackTap, certain information is collected automatically:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Game statistics (high score, gameplay history) stored locally on your device</li>
                <li>Device type, operating system version, and unique device identifiers</li>
                <li>App usage patterns and crash logs (if you opt-in to send them)</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">2.3 Local Storage</h3>
              <p>
                StackTap stores your high score, game preferences, and settings locally on your device. This data never leaves your device unless you explicitly choose to share it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">3. How We Use Your Information</h2>
              <p>We use collected information for the following purposes:</p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>To provide, maintain, and improve the Application</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To detect, prevent, and address technical issues and fraud</li>
                <li>To analyze usage patterns to enhance user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">4. Data Sharing</h2>
              <p>
                StackTap does not sell, trade, or rent your personal information to third parties. We do not share your personal information with third parties for marketing purposes.
              </p>
              <p className="mt-4">
                We may disclose information when required by law or when we believe in good faith that such disclosure is necessary to:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Comply with applicable laws and regulations</li>
                <li>Enforce our Terms of Service and other agreements</li>
                <li>Protect the safety, rights, and property of StackTap, our users, or the public</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">6. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to opt-out of certain data processing</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at support@stacktap.app with the subject line "Privacy Request."
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">7. Third-Party Links</h2>
              <p>
                The Application may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites before providing your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">8. Children's Privacy</h2>
              <p>
                StackTap is designed to be a family-friendly arcade game. We do not knowingly collect personal information from children under the age of 13. If we become aware that we have collected such information, we will promptly take steps to delete such information and terminate the child's account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of the Application following such modifications constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">10. Contact Us</h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                <p className="font-semibold">StackTap Support</p>
                <p>Email: support@stacktap.app</p>
                <p>Website: stacktap.app</p>
              </div>
            </section>

            <section className="mt-8 p-4 bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded-lg">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                This privacy policy is comprehensive and designed to protect your information while using StackTap. We take your privacy seriously and are committed to maintaining the trust you place in us.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
