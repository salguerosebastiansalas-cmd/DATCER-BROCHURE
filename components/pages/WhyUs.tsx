import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const WhyUs: React.FC = () => {
  return (
    <PageWrapper>
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center px-2">
        
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tight mb-4 md:mb-6">
            Ingeniería para su <br /><span className="text-brand-orange">Inversión.</span>
          </h2>
          <p className="text-base md:text-xl text-ios-gray leading-relaxed max-w-md mx-auto lg:mx-0 mb-6 md:mb-8">
            Optimizamos el CAPEX inicial y reducimos drásticamente el OPEX a largo plazo.
          </p>
          
          <div className="space-y-4 text-left inline-block lg:block">
             <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_10px_#F26722]"></div>
                <div>
                  <h4 className="text-white font-medium text-sm md:text-base">Neutralidad Tecnológica</h4>
                  <p className="text-[11px] md:text-sm text-gray-500">No estamos casados con marcas de hardware.</p>
                </div>
             </div>
             <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-brand-grey shadow-[0_0_10px_#636466]"></div>
                <div>
                  <h4 className="text-white font-medium text-sm md:text-base">Cumplimiento Normativo</h4>
                  <p className="text-[11px] md:text-sm text-gray-500">Garantía de estándares internacionales.</p>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:gap-6">
          {/* Card 1 */}
          <div className="bg-ios-dark p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 flex items-center justify-between group hover:border-brand-orange/30 transition-colors">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tighter">1.2</div>
              <div className="text-[10px] md:text-xs text-ios-gray uppercase tracking-widest font-semibold">PUE Objetivo</div>
            </div>
            <div className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-green-500/20 flex items-center justify-center">
               <span className="text-green-500 text-[10px] md:text-xs font-bold">ECO</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-ios-dark p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 flex items-center justify-between group hover:border-brand-orange/30 transition-colors">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tighter">99.99%</div>
              <div className="text-[10px] md:text-xs text-ios-gray uppercase tracking-widest font-semibold">Disponibilidad</div>
            </div>
             <div className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-brand-orange/20 flex items-center justify-center">
               <span className="text-brand-orange text-[10px] md:text-xs font-bold">UP</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-ios-dark p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 flex items-center justify-between group hover:border-brand-orange/30 transition-colors">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tighter">ROI</div>
              <div className="text-[10px] md:text-xs text-ios-gray uppercase tracking-widest font-semibold">Optimizado</div>
            </div>
             <div className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-white/20 flex items-center justify-center">
               <span className="text-white text-[10px] md:text-xs font-bold">$</span>
            </div>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

export default WhyUs;