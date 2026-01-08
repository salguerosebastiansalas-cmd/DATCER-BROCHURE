import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const WhyUs: React.FC = () => {
  return (
    <PageWrapper>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Ingeniería que protege su <br /><span className="text-brand-orange">Inversión.</span>
          </h2>
          <p className="text-xl text-ios-gray leading-relaxed max-w-md mb-8">
            Un Data Center mal diseñado es un costo operativo eterno. Nosotros optimizamos CAPEX inicial y reducimos el OPEX a largo plazo.
          </p>
          
          <div className="space-y-4">
             <div className="flex items-start gap-3">
                {/* Updated shadow color to #F26722 */}
                <div className="mt-1 w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_10px_#F26722]"></div>
                <div>
                  <h4 className="text-white font-medium">Neutralidad Tecnológica</h4>
                  <p className="text-sm text-gray-500">Diseñamos la mejor solución, no estamos casados con marcas de hardware.</p>
                </div>
             </div>
             <div className="flex items-start gap-3">
                {/* Updated shadow color to #636466 */}
                <div className="mt-1 w-2 h-2 rounded-full bg-brand-grey shadow-[0_0_10px_#636466]"></div>
                <div>
                  <h4 className="text-white font-medium">Cumplimiento Normativo</h4>
                  <p className="text-sm text-gray-500">Garantía de cumplimiento con estándares internacionales.</p>
                </div>
             </div>
          </div>
        </div>

        <div className="grid gap-6">
          {/* Card 1 */}
          <div className="bg-ios-dark p-8 rounded-3xl border border-white/5 flex items-center justify-between group hover:border-brand-orange/30 transition-colors">
            <div>
              <div className="text-5xl font-bold text-white mb-2 tracking-tighter">1.2</div>
              <div className="text-xs text-ios-gray uppercase tracking-widest font-semibold">PUE Objetivo</div>
              <div className="text-xs text-gray-600 mt-1">Eficiencia Energética Alta</div>
            </div>
            <div className="h-16 w-16 rounded-full border-4 border-green-500/20 flex items-center justify-center">
               <span className="text-green-500 text-xs font-bold">ECO</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-ios-dark p-8 rounded-3xl border border-white/5 flex items-center justify-between group hover:border-brand-orange/30 transition-colors">
            <div>
              <div className="text-5xl font-bold text-white mb-2 tracking-tighter">99.99%</div>
              <div className="text-xs text-ios-gray uppercase tracking-widest font-semibold">Disponibilidad</div>
              <div className="text-xs text-gray-600 mt-1">Diseños Tier III / IV</div>
            </div>
             <div className="h-16 w-16 rounded-full border-4 border-brand-orange/20 flex items-center justify-center">
               <span className="text-brand-orange text-xs font-bold">UP</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-ios-dark p-8 rounded-3xl border border-white/5 flex items-center justify-between group hover:border-brand-orange/30 transition-colors">
            <div>
              <div className="text-5xl font-bold text-white mb-2 tracking-tighter">ROI</div>
              <div className="text-xs text-ios-gray uppercase tracking-widest font-semibold">Optimizado</div>
              <div className="text-xs text-gray-600 mt-1">Menor costo por kW IT</div>
            </div>
             <div className="h-16 w-16 rounded-full border-4 border-white/20 flex items-center justify-center">
               <span className="text-white text-xs font-bold">$</span>
            </div>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

export default WhyUs;