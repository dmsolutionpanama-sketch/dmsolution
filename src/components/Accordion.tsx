import React, { useState } from 'react';
import { SECTORS_DATA } from '../data/servicesData';
import { SectorItem } from '../types';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const Accordion: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative z-20 w-full bg-[#0a0a0c] shadow-[0_-80px_140px_rgba(0,0,0,1)]">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5">
        <div>
          <div className="inline-flex items-center gap-2 text-[#FFD700] text-xs tracking-[3px] uppercase font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Servicios Integrales & Sectores Estratégicos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[2px] uppercase text-white">
            Ecosistema de <span className="font-normal text-[#FFD700]">Innovación</span>
          </h2>
        </div>
        <p className="text-white/50 text-sm font-light max-w-md">
          Pasa el cursor o toca cada sector para revelar nuestra infraestructura técnica, activos de marca y catálogo de representación.
        </p>
      </div>

      {/* Accordion Full-Width Container */}
      <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[92vh] bg-black overflow-hidden border-t border-white/5">
        {SECTORS_DATA.map((sector: SectorItem, index: number) => {
          const isHovered = hoveredId === sector.id;

          return (
            <div
              key={sector.id}
              id={sector.id}
              onMouseEnter={() => setHoveredId(sector.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setHoveredId(hoveredId === sector.id ? null : sector.id)}
              className={`group relative overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] p-8 sm:p-12 md:p-14 flex flex-col justify-end cursor-pointer border-b lg:border-b-0 lg:border-r border-white/5 bg-black ${
                isHovered
                  ? 'lg:flex-[3.8] h-[720px] lg:h-full'
                  : 'lg:flex-1 h-[280px] lg:h-full'
              }`}
            >
              {/* Layer 1: Grayscale Background (Default) */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] z-1"
                style={{
                  backgroundImage: `url(/${sector.imgGray}), ${sector.fallbackGradientGray}`,
                  opacity: isHovered ? 0 : 0.45,
                  filter: isHovered ? 'blur(35px) grayscale(100%)' : 'blur(0px) grayscale(100%)',
                  transform: isHovered ? 'scale(1.08)' : 'scale(1)'
                }}
              />

              {/* Layer 2: Color Background (Cinematic Diffusion on Hover) */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] z-2"
                style={{
                  backgroundImage: `url(/${sector.imgColor}), ${sector.fallbackGradientColor}`,
                  opacity: isHovered ? 0.8 : 0,
                  filter: isHovered ? 'blur(0px) grayscale(0%)' : 'blur(35px) grayscale(0%)',
                  transform: isHovered ? 'scale(1.03)' : 'scale(1.1)'
                }}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-3" />

              {/* Grid Overlay Texture */}
              <div 
                className="absolute inset-0 z-4 opacity-25 pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }}
              />

              {/* Rotating Gold Border Glow on Hover */}
              <div 
                className={`absolute inset-0 p-[2px] pointer-events-none z-10 transition-opacity duration-700 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'conic-gradient(from var(--rotate-angle, 0deg), transparent, #FFD700, transparent, #FFD700, transparent)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
              />

              {/* Sector Content */}
              <div className="relative z-10">
                {/* Sector Tag */}
                <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[#FFD700] mb-3 flex items-center justify-between">
                  <span>{sector.sectorTag}</span>
                  <ArrowUpRight className={`w-4 h-4 transition-transform duration-500 ${isHovered ? 'rotate-45 text-[#FFD700]' : 'text-white/30'}`} />
                </div>

                {/* Main Card Title */}
                <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-extralight tracking-[1.5px] uppercase text-white leading-tight mb-4 max-w-xl transition-all duration-500 ${
                  isHovered ? 'text-[#FFD700] font-light -translate-y-1' : ''
                }`}>
                  {sector.title}
                </h3>

                {/* Subtitle / Category */}
                <div className="text-xs uppercase tracking-[2px] text-white/50 mb-3 font-light">
                  {sector.subtitle}
                </div>

                {/* Expanded Description & Bullet Points */}
                <div className={`overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isHovered ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-white/75 text-sm sm:text-base font-light leading-relaxed mb-6 max-w-2xl">
                    {sector.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-3 max-w-2xl">
                    {sector.points.map((pt, pIdx) => (
                      <li key={pIdx} className="border-l-2 border-[#FFD700] pl-3 py-0.5">
                        <div className="text-xs sm:text-sm font-medium text-white">
                          {pt.title}
                        </div>
                        <div className="text-xs text-white/50 font-light mt-0.5">
                          {pt.detail}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
