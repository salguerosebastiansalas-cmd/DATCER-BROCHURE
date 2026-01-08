import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const WhyUs: React.FC = () => {
  return (
    <PageWrapper>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-8">
          <h2 className="text-7xl font-bold text-white tracking-tight leading-tight">
            Ingeniería para su <br /><span className="text-brand-orange">Inversión.</span>
          </h2>
          <p className="text-2xl text-ios-gray leading-relaxed max-w-xl">
            Optimizamos el CAPEX inicial y reducimos drásticamente el OPEX mediante diseños de alta eficiencia energética y neutralidad tecnológica.
          </p>
          
          <div className="space-y-6 pt-4">
             <div className="flex items-start gap-4">
                <div className="mt-2 w-3 h-3 rounded-full bg-brand-orange shadow-[0_0_15px_#F26722]"></div>
                <div>
                  <h4 className="text-white font-bold text-xl uppercase tracking-widest">Neutralidad Tecnológica</h4>
                  <p className="text-ios-gray text-lg">No estamos vinculados a marcas; seleccionamos lo mejor para su proyecto.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="mt-2 w-3 h-3 rounded-full bg-brand-grey shadow-[0_0_15px_#636466]"></div>
                <div>
                  <h4 className="text-white font-bold text-xl uppercase tracking-widest">Garantía de Disponibilidad</h4>
                  <p className="text-ios-gray text-lg">Diseños validados bajo los estándares más estrictos del mundo.</p>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-ios-dark p-12 rounded-[3rem] border border-white/5 flex items-center justify-between group hover:border-brand-orange/30 transition-all duration-500">
            <div>
              <div className="text-7xl font-bold text-white mb-2 tracking-tighter">1.2</div>
              <div className="text-sm text-ios-gray uppercase tracking-[0.3em] font-black">PUE Objetivo</div>
            </div>
            <div className="h-20 w-20 rounded-full border-4 border-brand-orange/20 flex items-center justify-center text-brand-orange font-bold">ECO</div>
          </div>

          <div className="bg-ios-dark p-12 rounded-[3rem] border border-white/5 flex items-center justify-between group hover:border-brand-orange/30 transition-all duration-500">
            <div>
              <div className="text-7xl font-bold text-white mb-2 tracking-tighter">99.99%</div>
              <div className="text-sm text-ios-gray uppercase tracking-[0.3em] font-black">Disponibilidad</div>
            </div>
            <div className="h-20 w-20 rounded-full border-4 border-brand-grey/20 flex items-center justify-center text-brand-grey font-bold">TIER</div>
          </div>

          <div className="bg-ios-dark p-12 rounded-[3rem] border border-white/5 flex items-center justify-between group hover:border-brand-orange/30 transition-all duration-500">
            <div>
              <div className="text-7xl font-bold text-white mb-2 tracking-tighter leading-none">ROI</div>
              <div className="text-sm text-ios-gray uppercase tracking-[0.3em] font-black">Optimizado</div>
            </div>
            <div className="h-20 w-20 rounded-full border-4 border-white/10 flex items-center justify-center text-white font-bold">$</div>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

export default WhyUs;