import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const Cover: React.FC = () => {
  return (
    <PageWrapper className="items-center text-center">
      <div className="space-y-4 md:space-y-8 animate-fade-in relative z-10 w-full">
        
        {/* Brand Tag */}
        <div className="inline-block">
          <span className="text-brand-orange font-semibold tracking-widest text-[10px] md:text-sm uppercase">
            Ingeniería de Misión Crítica
          </span>
        </div>

        {/* Hero Logo Typography - Adjusted for small mobiles */}
        <div className="mb-1 md:mb-2">
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold font-logo uppercase leading-none italic tracking-tighter">
                <span className="text-brand-orange">DAT</span>
                <span className="text-brand-grey">CER</span>
            </h1>
        </div>
        
        <h2 className="text-xl md:text-5xl font-medium text-white tracking-tight px-2 md:px-4">
          Data Center Engineering.
        </h2>

        {/* Subtitle - Reduced size for mobile */}
        <p className="text-sm md:text-xl text-ios-gray font-normal max-w-2xl mx-auto leading-relaxed mt-2 md:mt-4 px-4">
          Expertos en diseño, consultoría y certificación de infraestructura tecnológica de alto rendimiento.
        </p>

        {/* Deliverables - More compact on mobile */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 pt-4 md:pt-10 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards] px-2">
          <span className="px-3 py-1 md:px-5 md:py-2 rounded-full bg-white/5 border border-white/10 text-[9px] md:text-sm text-gray-400 backdrop-blur-md">Tier Certification</span>
          <span className="px-3 py-1 md:px-5 md:py-2 rounded-full bg-white/5 border border-white/10 text-[9px] md:text-sm text-gray-400 backdrop-blur-md">CFD Analysis</span>
          <span className="px-3 py-1 md:px-5 md:py-2 rounded-full bg-white/5 border border-white/10 text-[9px] md:text-sm text-gray-400 backdrop-blur-md">Blueprints</span>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] md:w-[600px] h-[240px] md:h-[600px] bg-gradient-to-tr from-brand-orange/15 to-transparent rounded-full blur-[60px] md:blur-[120px] pointer-events-none opacity-30"></div>
    </PageWrapper>
  );
};

export default Cover;