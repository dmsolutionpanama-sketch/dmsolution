import React, { useState } from 'react';
import { NAV_PILLARS } from '../data/servicesData';
import { ChevronDown, Code2, Download, Check } from 'lucide-react';

interface HeaderProps {
  onOpenExportModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenExportModal }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[85%] md:w-[78%] max-w-[1100px] px-6 py-2.5 rounded-full bg-[#0a0a0c]/90 backdrop-blur-2xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex items-center justify-between transition-all duration-500">
      {/* Brand Logo */}
      <a 
        href="#main-hero" 
        className="flex items-center gap-3 group text-white decoration-transparent select-none cursor-pointer"
      >
        <div className="w-8 h-8 relative flex items-center justify-center">
          <img 
            src="/logo.svg" 
            alt="D&M Solution Logo" 
            className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.4)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
          />
        </div>
        <span className="font-light tracking-[2px] text-xs sm:text-[13px] uppercase text-white/90 group-hover:text-[#FFD700] transition-colors">
          D&M Solution <span className="hidden lg:inline text-white/50">Panamá</span>
        </span>
      </a>

      {/* Navigation Pillars with Dropdown Submenus */}
      <nav className="hidden md:flex items-center gap-1 lg:gap-2">
        {NAV_PILLARS.map((pillar) => (
          <div 
            key={pillar.id}
            className="relative"
            onMouseEnter={() => setActiveSubmenu(pillar.id)}
            onMouseLeave={() => setActiveSubmenu(null)}
          >
            <button
              onClick={() => scrollToSection(pillar.id)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[13px] font-light tracking-[1px] uppercase text-white/70 hover:text-[#FFD700] hover:bg-white/[0.03] transition-all cursor-pointer"
            >
              {pillar.title}
              <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-transform" />
            </button>

            {/* Dropdown Menu */}
            {activeSubmenu === pillar.id && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[320px] bg-[#0c0c0e]/95 backdrop-blur-2xl border border-[#FFD700]/25 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.7)] animate-in fade-in zoom-in-95 duration-200 z-50">
                <div className="text-[10px] tracking-[2.5px] uppercase font-semibold text-[#FFD700] pb-2 mb-2 border-b border-[#FFD700]/15">
                  {pillar.category}
                </div>
                <div className="space-y-1.5">
                  {pillar.items.map((subItem, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        scrollToSection(pillar.id);
                        setActiveSubmenu(null);
                      }}
                      className="w-full text-left p-2 rounded-lg hover:bg-[#FFD700]/[0.06] group/sub transition-all cursor-pointer"
                    >
                      <div className="text-[12px] font-medium text-white/85 group-hover/sub:text-white group-hover/sub:translate-x-1 transition-transform">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <div className="text-[11px] text-white/40 line-clamp-2 mt-0.5 font-light">
                          {subItem.description}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Hostinger Code Export Button */}
      {onOpenExportModal && (
        <button
          onClick={onOpenExportModal}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-[#FFD700] bg-[#FFD700]/10 hover:bg-[#FFD700]/20 border border-[#FFD700]/30 transition-all cursor-pointer shadow-[0_0_12px_rgba(255,215,0,0.15)]"
          title="Descargar o copiar el archivo index.html completo para Hostinger"
        >
          <Code2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Exportar Código</span>
        </button>
      )}
    </header>
  );
};
