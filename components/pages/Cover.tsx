import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const Cover: React.FC = () => {
  return (
    <PageWrapper className="items-center text-center">
      {/* Elemento Decorativo Sutil de Red */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
              <line x1="2" y1="2" x2="100" y2="100" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="relative z-10 w-full animate-blur-in">
        <div className="mb-14">
          <span className="text-[11px] font-semibold text-apple-muted uppercase tracking-[0.5em] opacity-60">
            Precision Engineering & Design House
          </span>
        </div>

        <div className="mb-8 overflow-visible">
            <h1 className="text-[15vw] md:text-[12rem] font-logo italic font-bold tracking-[-0.03em] leading-[0.8] select-none">
              <span style={{ color: '#F26722' }} className="drop-shadow-[0_10px_30px_rgba(242,103,34,0.2)]">DAT</span>
              <span style={{ color: '#636466' }}>CER</span>
            </h1>
        </div>
        
        <div className="max-w-2xl mx-auto mb-20">
          <h2 className="text-2xl md:text-5xl font-light text-apple-light tracking-tight leading-tight">
            Consultoría estratégica para <br />
            <span className="font-semibold text-white">misión crítica.</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-x-14 gap-y-4 opacity-40 text-[10px] font-bold uppercase tracking-[0.3em] text-apple-muted">
          <span>Uptime Certified</span>
          <div className="w-[1px] h-4 bg-white/20 hidden md:block"></div>
          <span>Tier Strategy</span>
          <div className="w-[1px] h-4 bg-white/20 hidden md:block"></div>
          <span>Digital Resiliency</span>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/[0.04] blur-[180px] rounded-full pointer-events-none"></div>
    </PageWrapper>
  );
};

export default Cover;