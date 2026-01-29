import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Language } from '../../App';
import { Globe, ShieldCheck, Activity } from 'lucide-react';

const Cover: React.FC<{ lang: Language }> = ({ lang }) => {
  const content = {
    es: {
      tagline: "Precision Engineering & Design House",
      title1: "Consultoría estratégica para",
      title2: "misión crítica.",
      specs: ["Uptime Certified", "Tier Strategy", "Digital Resiliency"],
      footer: {
        loc: "Latam HQ",
        status: "Operación Nominal",
        cert: "ISO/IEC 27001 Ready"
      }
    },
    en: {
      tagline: "Precision Engineering & Design House",
      title1: "Strategic consultancy for",
      title2: "mission critical.",
      specs: ["Uptime Certified", "Tier Strategy", "Digital Resiliency"],
      footer: {
        loc: "Latam HQ",
        status: "Nominal Operation",
        cert: "ISO/IEC 27001 Ready"
      }
    }
  };

  const t = content[lang];

  return (
    <PageWrapper className="items-center text-center overflow-hidden relative justify-between py-20">
      {/* Background Decor - Abstract Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0 }} />
            </radialGradient>
          </defs>
          <path d="M0,500 Q250,0 500,500 T1000,500" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,400 Q250,900 500,400 T1000,400" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="500" cy="500" r="300" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="10,10" />
        </svg>
      </div>

      <div className="flex-grow flex flex-col justify-center relative z-10 w-full animate-blur-in">
        <div className="mb-14">
          <div className="inline-flex items-center gap-3 border border-current/20 px-4 py-1.5 rounded-full">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">
                {t.tagline}
             </span>
          </div>
        </div>

        <div className="mb-8 overflow-visible">
            <h1 className="text-[18vw] md:text-[13rem] font-logo italic font-bold tracking-[-0.05em] leading-[0.75] select-none scale-y-110">
              <span style={{ color: '#F26722' }} className="drop-shadow-[0_25px_50px_rgba(242,103,34,0.15)]">DAT</span>
              <span className="text-current opacity-90">CER</span>
            </h1>
        </div>
        
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-5xl font-light tracking-tight leading-[1.15] opacity-90">
            {t.title1} <br />
            <span className="font-semibold text-current italic">{t.title2}</span>
          </h2>
        </div>
      </div>

      {/* Technical Footer Bar */}
      <div className="w-full max-w-5xl glass-card rounded-full px-8 py-4 flex flex-wrap justify-between items-center gap-6 text-[10px] font-medium tracking-widest uppercase opacity-60">
         <div className="flex items-center gap-2">
            <Globe size={14} />
            <span>{t.footer.loc}</span>
         </div>
         <div className="hidden md:block w-[1px] h-4 bg-current/20"></div>
         <div className="flex items-center gap-2">
            <Activity size={14} />
            <span>{t.footer.status}</span>
         </div>
         <div className="hidden md:block w-[1px] h-4 bg-current/20"></div>
         <div className="flex items-center gap-2">
            <ShieldCheck size={14} />
            <span>{t.footer.cert}</span>
         </div>
         <div className="hidden md:block w-[1px] h-4 bg-current/20"></div>
         <div>
            EST. 2018
         </div>
      </div>
    </PageWrapper>
  );
};

export default Cover;