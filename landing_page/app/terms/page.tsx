import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - StackTap',
  description: 'Terms of Service for StackTap arcade game',
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-slate-900 pt-24">
        <div className="container mx-auto px-6 py-16 max-w-3xl">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Terms of Service</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Last Updated: February 26, 2026</p>

          <div className="space-y-8 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, accessing, or using the StackTap mobile application (the "Application"), you agree to comply with and be bound by these Terms of Service (the "Terms"). If you do not agree to these Terms, you may not use the Application.
              </p>
              <p className="mt-4">
                StackTap (the "Company," "we," "us," or "our") reserves the right to modify these Terms at any time. Your continued use of the Application following any changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">2. License Grant</h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable, revocable license to use the Application solely for your personal, non-commercial entertainment purposes, in accordance with these Terms. You may not:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Modify, adapt, or translate the Application</li>
                <li>Reverse engineer, decompile, or disassemble the Application</li>
                <li>Rent, lease, lend, sell, or otherwise transfer the Application</li>
                <li>Exploit, hack, or otherwise compromise the Application's security</li>
                <li>Use the Application for any commercial purpose or public display</li>
                <li>Remove, obscure, or alter any proprietary notices or labels on the Application</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">3. User Conduct</h2>
              <p>
                You agree that while using the Application, you will not:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Engage in any conduct that violates applicable laws or regulations</li>
                <li>Transmit viruses, worms, malware, or any code of destructive nature</li>
                <li>Attempt to gain unauthorized access to the Application or its systems</li>
                <li>Harass, threaten, or harm other users</li>
                <li>Post spam, advertisements, or unsolicited promotional material</li>
                <li>Interfere with or disrupt the normal operation of the Application</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">4. Intellectual Property Rights</h2>
              <p>
                All content, features, and functionality of the Application, including but not limited to text, graphics, logos, images, and software, are the exclusive property of StackTap or its content suppliers and protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-4">
                You agree not to reproduce, distribute, publicly perform or display, or create derivative works of any copyrighted material or trademarks contained in the Application without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">5. Disclaimer of Warranties</h2>
              <p>
                THE APPLICATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p className="mt-4">
                We do not warrant that:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>The Application will be uninterrupted, secure, or error-free</li>
                <li>Any defects in the Application will be corrected</li>
                <li>The results obtained from using the Application will meet your expectations</li>
                <li>The Application will be compatible with all devices or operating systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">6. Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL STACKTAP BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE APPLICATION, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="mt-4">
                Some jurisdictions do not allow the exclusion of implied warranties or limitation of liability, so the above limitation may not apply to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">7. High Score and Game Data</h2>
              <p>
                Your high score and game data are stored locally on your device. We do not collect or store this information on our servers unless you explicitly choose to share it. You are responsible for maintaining backups of your data. We are not liable for loss of game data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">8. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless StackTap, its officers, directors, employees, agents, and third-party partners from any claims, damages, losses, liabilities, and expenses (including attorney's fees) arising from:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Your violation of these Terms</li>
                <li>Your use or misuse of the Application</li>
                <li>Your infringement of any intellectual property or other rights</li>
                <li>Your conduct or actions while using the Application</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">9. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to the Application at any time, for any reason, and without notice or liability. Upon termination, all rights granted to you under these Terms will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where StackTap is located, without regard to its conflicts of laws principles. You agree to submit to the exclusive jurisdiction of the courts located in that jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">11. Severability</h2>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect, and the invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">12. Contact Information</h2>
              <p>
                If you have questions or concerns regarding these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                <p className="font-semibold">StackTap Support</p>
                <p>Email: support@stacktap.app</p>
                <p>Website: stacktap.app</p>
              </div>
            </section>

            <section className="mt-8 p-4 bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded-lg">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                By using StackTap, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service in their entirety.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
