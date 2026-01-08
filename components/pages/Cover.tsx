import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const Cover: React.FC = () => {
  return (
    <PageWrapper className="items-center text-center">
      <div className="space-y-8 animate-fade-in relative z-10">
        
        {/* Brand Tag */}
        <div className="inline-block">
          <span className="text-brand-orange font-semibold tracking-wide text-sm uppercase">
            Ingeniería de Misión Crítica
          </span>
        </div>

        {/* Hero Logo Typography - Adjusted for Swis721 Ex BT Look with Italic */}
        <div className="mb-2">
            <h1 className="text-7xl md:text-9xl font-bold font-logo uppercase leading-none italic">
                <span className="text-brand-orange">DAT</span>
                <span className="text-brand-grey">CER</span>
            </h1>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
          Data Center Engineering.
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-ios-gray font-normal max-w-3xl mx-auto leading-relaxed mt-4">
          Expertos en diseño, consultoría y certificación de infraestructura tecnológica de alto rendimiento.
        </p>

        {/* Deliverables */}
        <div className="flex flex-wrap justify-center gap-3 pt-10 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
          <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-md hover:border-brand-orange/50 transition-colors">Tier Certification</span>
          <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-md hover:border-brand-orange/50 transition-colors">CFD Analysis</span>
          <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-md hover:border-brand-orange/50 transition-colors">Blueprints</span>
        </div>
      </div>
      
      {/* Background Glow - Orange */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-orange/10 to-transparent rounded-full blur-[120px] pointer-events-none opacity-40"></div>
    </PageWrapper>
  );
};

export default Cover;