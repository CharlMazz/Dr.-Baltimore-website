import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import VideoShowcase from './components/VideoShowcase';
import ServicesTabs from './components/ServicesTabs';
import GluteCamps from './components/GluteCamps';
import ShopSection from './components/ShopSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <VideoShowcase />
        <ServicesTabs />
        <GluteCamps />
        <ShopSection />
      </main>
      <Footer />
    </div>
  );
}
