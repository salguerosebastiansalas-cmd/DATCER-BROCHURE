import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const Cover: React.FC = () => {
  return (
    <PageWrapper className="items-center text-center">
      <div className="space-y-4 md:space-y-8 animate-fade-in relative z-10 w-full">
        
        <div className="inline-block">
          <span className="text-brand-orange font-bold tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-sm uppercase bg-brand-orange/10 px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-brand-orange/20">
            Ingeniería de Misión Crítica
          </span>
        </div>

        <div className="mb-2 md:mb-4 overflow-hidden">
            <h1 className="text-6xl sm:text-8xl md:text-[12rem] font-bold font-logo uppercase leading-none italic tracking-tighter">
                <span className="text-brand-orange">DAT</span>
                <span className="text-brand-grey">CER</span>
            </h1>
        </div>
        
        <h2 className="text-2xl md:text-6xl font-medium text-white tracking-tight">
          Data Center Engineering.
        </h2>

        <p className="text-sm md:text-2xl text-ios-gray font-normal max-w-3xl mx-auto leading-relaxed mt-2 md:mt-4 px-4 md:px-0">
          Consultoría estratégica y diseño de alta disponibilidad para infraestructuras tecnológicas resilientes.
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 pt-10 md:pt-16 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards] px-4">
          <span className="px-4 py-2 md:px-8 md:py-3 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-sm text-gray-300 backdrop-blur-md">Uptime Certified</span>
          <span className="px-4 py-2 md:px-8 md:py-3 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-sm text-gray-300 backdrop-blur-md">Tier III & IV</span>
          <span className="px-4 py-2 md:px-8 md:py-3 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-sm text-gray-300 backdrop-blur-md">ICREA Expertise</span>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-gradient-to-tr from-brand-orange/15 to-transparent rounded-full blur-[80px] md:blur-[140px] pointer-events-none opacity-40"></div>
    </PageWrapper>
  );
};

export default Cover;