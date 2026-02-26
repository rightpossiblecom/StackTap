import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/landing/Hero';
import Features from './components/landing/Features';
import HowItWorks from './components/landing/HowItWorks';
import FAQ from './components/landing/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  );
}
