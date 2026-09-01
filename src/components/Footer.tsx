import React from 'react';
import { MapPin, Globe, Mail, Phone, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-20 bg-[#050506] border-t border-white/5 pt-20 pb-12 px-6 sm:px-12 lg:px-16 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: 1/4 Navigation */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.svg" 
                alt="D&M Logo" 
                className="w-7 h-7 object-contain drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]" 
              />
              <span className="text-xs uppercase tracking-[3px] font-medium text-white/90">
                D&M Solution
              </span>
            </div>
            
            <h4 className="text-[11px] font-semibold tracking-[3.5px] uppercase text-[#FFD700] mb-6">
              Navegación Corporativa
            </h4>

            <ul className="space-y-4">
              {[
                { name: 'Quienes Somos', target: 's1' },
                { name: 'Misión', target: 's2' },
                { name: 'Visión', target: 's3' },
                { name: 'Contáctenos', target: 's4' },
                { name: 'Mapa del Sitio', target: 'main-hero' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(item.target)}
                    className="text-white/50 hover:text-[#FFD700] hover:translate-x-2 text-base font-extralight tracking-wide transition-all duration-300 block cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-white/5 space-y-2 text-xs text-white/40 font-light">
            <p className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#FFD700]" />
              <span>Ciudad de Panamá, República de Panamá</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#FFD700]" />
              <span>contacto@dmsolutionpanama.com</span>
            </p>
          </div>
        </div>

        {/* Right Column: 3/4 Waze-Style Dark Map */}
        <div className="lg:col-span-3">
          <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] rounded-3xl overflow-hidden border border-[#FFD700]/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group transition-all duration-500 hover:border-[#FFD700] hover:shadow-[0_0_40px_rgba(255,215,0,0.15)] bg-black">
            
            {/* Pulsing HQ Pin Badge */}
            <div className="absolute top-5 right-5 z-10 bg-[#0a0a0c]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#FFD700]/40 flex items-center gap-2.5 shadow-lg pointer-events-none">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFD700]"></span>
              </span>
              <span className="text-[10px] tracking-[2.5px] font-semibold text-[#FFD700] uppercase">
                Panamá HQ Global Presence
              </span>
            </div>

            {/* Styled Google Maps iframe with Waze-style dark filter */}
            <iframe 
              title="D&M Solution Panama Global Headquarters"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126135.539828816!2d-79.620025!3d8.98863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f1d3996921%3A0x673553258f33b1e3!2sPanam%C3%A1!5e0!3m2!1ses!2spa!4v1700000000000!5m2!1ses!2spa"
              className="w-full h-full border-0 filter grayscale-[100%] invert-[92%] hue-rotate-[180deg] brightness-[0.9] contrast-[1.2] opacity-85 group-hover:opacity-100 group-hover:brightness-[1.05] transition-all duration-700"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

      {/* Footer Bottom Centered Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center">
        <p className="text-[11px] sm:text-xs tracking-[3.5px] uppercase font-light text-white/40">
          © 2026 D&M Solution Panamá. All rights reserved. Powered by D&M Solution Ecosystem.
        </p>
      </div>
    </footer>
  );
};
