import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const Cover: React.FC = () => {
  return (
    <PageWrapper className="items-center text-center">
      <div className="space-y-8 animate-fade-in relative z-10 w-full">
        
        <div className="inline-block">
          <span className="text-brand-orange font-bold tracking-[0.4em] text-sm uppercase bg-brand-orange/10 px-6 py-2 rounded-full border border-brand-orange/20">
            Ingeniería de Misión Crítica
          </span>
        </div>

        <div>
            <h1 className="text-[12rem] font-bold font-logo uppercase leading-none italic tracking-tighter">
                <span className="text-brand-orange">DAT</span>
                <span className="text-brand-grey">CER</span>
            </h1>
        </div>
        
        <h2 className="text-6xl font-medium text-white tracking-tight">
          Data Center Engineering.
        </h2>

        <p className="text-2xl text-ios-gray font-normal max-w-3xl mx-auto leading-relaxed mt-4">
          Consultoría estratégica y diseño de alta disponibilidad para infraestructuras tecnológicas resilientes.
        </p>

        <div className="flex justify-center gap-4 pt-16 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
          <span className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-md">Uptime Certified Professionals</span>
          <span className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-md">Tier III & IV Design</span>
          <span className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-md">ICREA Expertise</span>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-brand-orange/10 to-transparent rounded-full blur-[140px] pointer-events-none opacity-40"></div>
    </PageWrapper>
  );
};

export default Cover;