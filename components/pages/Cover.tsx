import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Language } from '../../App';

const Cover: React.FC<{ lang: Language }> = ({ lang }) => {
  const content = {
    es: {
      tagline: "Precision Engineering & Design House",
      title1: "Consultoría estratégica para",
      title2: "misión crítica.",
      specs: ["Uptime Certified", "Tier Strategy", "Digital Resiliency"]
    },
    en: {
      tagline: "Precision Engineering & Design House",
      title1: "Strategic consultancy for",
      title2: "mission critical.",
      specs: ["Uptime Certified", "Tier Strategy", "Digital Resiliency"]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper className="items-center text-center overflow-hidden relative">
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

      <div className="relative z-10 w-full animate-blur-in">
        <div className="mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.5em] opacity-50">
            {t.tagline}
          </span>
        </div>

        <div className="mb-10 overflow-visible">
            <h1 className="text-[18vw] md:text-[14rem] font-logo italic font-bold tracking-[-0.05em] leading-[0.75] select-none">
              <span style={{ color: '#F26722' }} className="drop-shadow-[0_15px_35px_rgba(242,103,34,0.08)]">DAT</span>
              <span className="text-current opacity-90">CER</span>
            </h1>
        </div>
        
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl md:text-5xl font-light tracking-tight leading-[1.15] opacity-90">
            {t.title1} <br />
            <span className="font-semibold text-current italic">{t.title2}</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-x-14 gap-y-4 opacity-30 text-[10px] font-bold uppercase tracking-[0.4em]">
          {t.specs.map((spec, i) => (
            <React.Fragment key={i}>
              <span>{spec}</span>
              {i < t.specs.length - 1 && <div className="w-[1px] h-3 bg-current opacity-30 hidden md:block"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Cover;