import React, { useState } from 'react';
import { Header } from './components/Header';
import { VideoHero } from './components/VideoHero';
import { Accordion } from './components/Accordion';
import { Footer } from './components/Footer';
import { CodeExportModal } from './components/CodeExportModal';

export default function App() {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#121214] text-white font-['Inter',sans-serif] selection:bg-[#FFD700] selection:text-black">
      {/* Floating Header */}
      <Header onOpenExportModal={() => setIsExportModalOpen(true)} />

      {/* Scroll-Driven Video Hero */}
      <VideoHero />

      {/* Accordion of Integrated Services with Cinematic Diffusion & Gold Glow */}
      <Accordion />

      {/* Editorial Footer with 1/4 Menu & 3/4 Waze Dark Map */}
      <Footer />

      {/* Export / Hostinger Code Modal */}
      <CodeExportModal 
        isOpen={isExportModalOpen} 
        onClose={() => setIsExportModalOpen(false)} 
      />
    </div>
  );
}
