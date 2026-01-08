import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const WhyUs: React.FC = () => {
  return (
    <PageWrapper>
      <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center">
        
        <div className="text-center lg:text-left">
          <h2 className="text-2xl md:text-6xl font-bold text-white tracking-tight mb-3 md:mb-6 leading-none">
            Ingeniería para su <br /><span className="text-brand-orange">Inversión.</span>
          </h2>
          <p className="text-xs md:text-xl text-ios-gray leading-relaxed max-w-md mx-auto lg:mx-0 mb-4 md:mb-8">
            Optimizamos el CAPEX inicial y reducimos drásticamente el OPEX a largo plazo.
          </p>
          
          <div className="grid grid-cols-2 gap-2 text-left sm:block sm:space-y-4">
             <div className="flex items-start gap-2">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></div>
                <div>
                  <h4 className="text-white font-bold text-[9px] md:text-base leading-none">Neutralidad</h4>
                  <p className="text-[8px] md:text-sm text-gray-500 hidden sm:block">Sin compromiso con marcas.</p>
                </div>
             </div>
             <div className="flex items-start gap-2">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-grey shrink-0"></div>
                <div>
                  <h4 className="text-white font-bold text-[9px] md:text-base leading-none">Normativa</h4>
                  <p className="text-[8px] md:text-sm text-gray-500 hidden sm:block">Garantía internacional.</p>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 md:gap-6">
          <div className="bg-ios-dark p-3 md:p-8 rounded-xl md:rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div>
              <div className="text-xl md:text-5xl font-bold text-white mb-0 md:mb-1 tracking-tighter">1.2</div>
              <div className="text-[8px] md:text-xs text-ios-gray uppercase font-semibold">PUE</div>
            </div>
            <div className="hidden md:flex h-12 w-12 rounded-full border border-green-500/20 items-center justify-center">
               <span className="text-green-500 text-[9px] font-bold">ECO</span>
            </div>
          </div>

          <div className="bg-ios-dark p-3 md:p-8 rounded-xl md:rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div>
              <div className="text-xl md:text-5xl font-bold text-white mb-0 md:mb-1 tracking-tighter">99.9%</div>
              <div className="text-[8px] md:text-xs text-ios-gray uppercase font-semibold">Uptime</div>
            </div>
             <div className="hidden md:flex h-12 w-12 rounded-full border border-brand-orange/20 items-center justify-center">
               <span className="text-brand-orange text-[9px] font-bold">UP</span>
            </div>
          </div>

          <div className="bg-ios-dark p-3 md:p-8 rounded-xl md:rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div>
              <div className="text-xl md:text-5xl font-bold text-white mb-0 md:mb-1 tracking-tighter">ROI</div>
              <div className="text-[8px] md:text-xs text-ios-gray uppercase font-semibold">Max</div>
            </div>
             <div className="hidden md:flex h-12 w-12 rounded-full border border-white/20 items-center justify-center">
               <span className="text-white text-[9px] font-bold">$</span>
            </div>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

export default WhyUs;