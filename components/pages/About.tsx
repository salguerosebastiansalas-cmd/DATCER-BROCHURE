import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Layers, CheckCircle2, DraftingCompass } from 'lucide-react';

const About: React.FC = () => {
  return (
    <PageWrapper>
      <div className="grid lg:grid-cols-12 gap-3 md:gap-5 w-full max-w-6xl mx-auto items-stretch">
        
        {/* Main Text Block */}
        <div className="lg:col-span-7 bg-ios-dark rounded-2xl md:rounded-3xl p-5 md:p-10 flex flex-col justify-center border border-white/5 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-brand-orange font-bold text-[10px] md:text-sm uppercase tracking-widest mb-2">Nuestra Especialidad</h2>
            <h3 className="text-lg md:text-4xl font-bold text-white mb-3 md:mb-5 leading-tight">
              Transformamos requisitos de TI en infraestructura física resiliente.
            </h3>
            <p className="text-ios-gray text-xs md:text-lg leading-relaxed mb-3">
              En <span className="text-white font-semibold">DATCER</span>, diseñamos el ecosistema físico que permite que su tecnología funcione 24/7.
            </p>
            <p className="text-white text-xs md:text-lg font-medium leading-relaxed">
              Aseguramos su inversión tecnológica mediante ingeniería de vanguardia.
            </p>
          </div>
        </div>

        {/* Right Column - Compact Grid for mobile */}
        <div className="lg:col-span-5 grid grid-cols-2 lg:flex lg:flex-col gap-2 md:gap-4">
          <div className="col-span-2 sm:col-span-1 bg-ios-dark rounded-xl md:rounded-3xl p-3 md:p-5 border border-white/5 flex items-center gap-3">
            <div className="p-1.5 bg-brand-orange/10 rounded-lg text-brand-orange shrink-0"><DraftingCompass size={16}/></div>
            <div>
              <h4 className="text-white font-bold text-xs md:text-lg leading-none">Ingeniería</h4>
              <p className="text-[10px] md:text-sm text-ios-gray mt-1 hidden sm:block">Planos constructivos.</p>
            </div>
          </div>

          <div className="bg-ios-dark rounded-xl md:rounded-3xl p-3 md:p-5 border border-white/5 flex items-center gap-3">
            <div className="p-1.5 bg-white/10 rounded-lg text-white shrink-0"><Layers size={16}/></div>
            <div>
              <h4 className="text-white font-bold text-xs md:text-lg leading-none">Consultoría</h4>
            </div>
          </div>

          <div className="bg-ios-dark rounded-xl md:rounded-3xl p-3 md:p-5 border border-white/5 flex items-center gap-3">
            <div className="p-1.5 bg-brand-grey rounded-lg text-white shrink-0"><CheckCircle2 size={16}/></div>
            <div>
              <h4 className="text-white font-bold text-xs md:text-lg leading-none">Validación</h4>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;