import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const Cover: React.FC = () => {
  return (
    <PageWrapper className="items-center text-center">
      <div className="relative z-10 w-full animate-blur-in">
        
        <div className="mb-14">
          <span className="text-[11px] font-semibold text-apple-muted uppercase tracking-[0.5em] opacity-60">
            Engineering & Design House
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
            Consultoría de alta gama para <br />
            <span className="font-semibold text-white">infraestructura crítica.</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-x-14 gap-y-4 opacity-40 text-[10px] font-bold uppercase tracking-[0.3em] text-apple-muted">
          <span>Uptime Certified</span>
          <div className="w-[1px] h-4 bg-white/20 hidden md:block"></div>
          <span>Tier III / IV Strategy</span>
          <div className="w-[1px] h-4 bg-white/20 hidden md:block"></div>
          <span>Digital Resiliency</span>
        </div>
      </div>

      {/* Sutil glow de fondo para dar profundidad Apple */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/[0.03] blur-[150px] rounded-full pointer-events-none"></div>
    </PageWrapper>
  );
};

export default Cover;