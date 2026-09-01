import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, VolumeX, Sparkles } from 'lucide-react';

export const VideoHero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    let animationFrameId: number;
    let targetTime = 0;
    let currentTime = 0;

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const spacerHeight = (window.innerHeight * 8.5); // equivalent to ~950vh total spacer
      const progress = Math.min(Math.max(scrollPos / spacerHeight, 0), 0.999);
      setScrollProgress(progress);

      if (video && video.duration && !isNaN(video.duration)) {
        targetTime = video.duration * progress;
      }
    };

    const renderLoop = () => {
      if (video && video.duration && !isNaN(video.duration)) {
        currentTime += (targetTime - currentTime) * 0.12;
        try {
          if (Math.abs(video.currentTime - currentTime) > 0.01) {
            video.currentTime = currentTime;
          }
        } catch {
          // ignore seek errors during load
        }
      }

      // If video is not active or as an animated ambient background, render particle canvas
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const width = canvas.width = window.innerWidth;
          const height = canvas.height = window.innerHeight;

          // Draw ambient gradient
          ctx.fillStyle = '#0a0a0c';
          ctx.fillRect(0, 0, width, height);

          // Grid lines
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
          ctx.lineWidth = 1;
          const gridSize = 60;
          for (let x = 0; x < width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
          }
          for (let y = 0; y < height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
          }

          // Ambient light pulses
          const time = Date.now() * 0.001;
          const pulseX = width * 0.5 + Math.sin(time * 0.5) * 150;
          const pulseY = height * 0.45 + Math.cos(time * 0.5) * 80;

          const grad = ctx.createRadialGradient(pulseX, pulseY, 10, pulseX, pulseY, width * 0.45);
          grad.addColorStop(0, 'rgba(255, 215, 0, 0.12)');
          grad.addColorStop(0.5, 'rgba(34, 34, 38, 0.4)');
          grad.addColorStop(1, 'rgba(10, 10, 12, 0.95)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, width, height);
        }
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(renderLoop);

    if (video) {
      video.addEventListener('loadedmetadata', () => {
        setVideoLoaded(true);
      });
      video.play().catch(() => {
        // Video autoplay policy handled
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div id="main-hero" className="relative w-full">
      {/* Fixed Fullscreen Viewport */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-[#0a0a0c] overflow-hidden">
        {/* Canvas Fallback Background */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Scroll-Driven Video Tag */}
        <video
          ref={videoRef}
          preload="auto"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70 transition-opacity duration-1000"
        >
          <source src="/intro_scroll.mp4" type="video/mp4" />
        </video>

        {/* Hero Title & Scroll Driven HUD Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6 text-center">
          <div 
            className="transition-all duration-700 max-w-4xl"
            style={{
              opacity: Math.max(1 - scrollProgress * 2.8, 0),
              transform: `translateY(${scrollProgress * -80}px) scale(${1 - scrollProgress * 0.2})`
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse" />
              <span className="text-[11px] tracking-[3px] uppercase font-light text-[#FFD700]">
                Ecosistema de Alta Gama
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-[4px] uppercase text-white leading-[1.1] mb-6">
              D&M Solution <span className="font-normal text-[#FFD700]">Panamá</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg font-light text-white/70 max-w-2xl mx-auto leading-relaxed">
              Agencia de desarrollo de marca, ingeniería avanzada, BTL de lujo y representación global de talentos.
            </p>

            <div className="mt-12 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-xs tracking-[2px] uppercase text-white/50 font-light">
                <span>Desliza para explorar la intro</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#FFD700]" />
              </div>
              {/* Progress bar */}
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#FFD700]/50 to-[#FFD700] transition-all duration-100"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer that unlocks the page and drives the scroll duration (950vh) */}
      <div className="h-[950vh] w-full pointer-events-none" />
    </div>
  );
};
