import React, { useState } from 'react';
import { generateStandaloneHtml } from '../utils/generateStandaloneHtml';
import { X, Copy, Check, Download, Server, FileCode, CheckCircle } from 'lucide-react';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const fullHtmlCode = generateStandaloneHtml();

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([fullHtmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c0e] border border-[#FFD700]/30 rounded-3xl p-6 sm:p-8 flex flex-col shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700]">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-light tracking-wide text-white">
                Código para <span className="text-[#FFD700] font-normal">Hostinger</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/50 font-light">
                Archivo unificado <span className="text-white font-mono">index.html</span> listo para producción.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Instructions Banner */}
        <div className="my-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="flex items-start gap-2 text-white/70">
            <CheckCircle className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
            <span>1. Descarga o copia este <strong>index.html</strong></span>
          </div>
          <div className="flex items-start gap-2 text-white/70">
            <CheckCircle className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
            <span>2. Súbelo a la carpeta <strong>public_html</strong> de Hostinger</span>
          </div>
          <div className="flex items-start gap-2 text-white/70">
            <CheckCircle className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
            <span>3. Coloca tus archivos (<strong>intro_scroll.mp4</strong>, <strong>logo.svg</strong>, <strong>sector1..4</strong>) en la misma carpeta</span>
          </div>
        </div>

        {/* Code Preview Box */}
        <div className="flex-1 min-h-[220px] max-h-[360px] overflow-auto rounded-xl bg-black/60 border border-white/5 p-4 font-mono text-xs text-white/80 select-all">
          <pre className="whitespace-pre-wrap">{fullHtmlCode}</pre>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-white/40 font-mono">
            {fullHtmlCode.split('\n').length} líneas de código HTML5 / CSS3 / ES6
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>¡Código Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Código</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium text-black bg-[#FFD700] hover:bg-[#ffe033] shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Descargar index.html</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
