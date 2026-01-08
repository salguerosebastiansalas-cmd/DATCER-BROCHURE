import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Layers, CheckCircle2, DraftingCompass } from 'lucide-react';

const About: React.FC = () => {
  return (
    <PageWrapper>
      {/* Layout Grid: Removed h-full to prevent overflow. Added max-w-6xl for better containment. */}
      <div className="grid lg:grid-cols-12 gap-5 w-full max-w-6xl mx-auto items-stretch">
        
        {/* Main Text Block - Left Side */}
        {/* Reduced padding (p-10 -> p-8) and text sizes for a tighter look */}
        <div className="lg:col-span-7 bg-ios-dark rounded-3xl p-8 flex flex-col justify-center border border-white/5 relative overflow-hidden group hover:border-brand-orange/20 transition-colors duration-500">
          <div className="relative z-10">
            <h2 className="text-brand-orange font-semibold text-xs md:text-sm uppercase tracking-wide mb-3">Nuestra Especialidad</h2>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Transformamos requisitos de TI en infraestructura física resiliente.
            </h3>
            <p className="text-ios-gray text-base md:text-lg leading-relaxed mb-4">
              En <span className="text-white font-semibold">DATCER</span>, diseñamos el ecosistema físico (Energía, Climatización y Seguridad) que permite que su tecnología funcione 24/7.
            </p>
            <p className="text-white text-base md:text-lg font-medium leading-relaxed">
              Desde la ingeniería conceptual hasta la obtención de certificaciones internacionales (Uptime Institute / ICREA), aseguramos su inversión tecnológica.
            </p>
          </div>
        </div>

        {/* Right Column - 3 Compact Cards */}
        {/* Removing h-full here allows cards to take natural height or stretch to match left col */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          <div className="flex-1 bg-ios-dark rounded-3xl p-5 border border-white/5 hover:border-brand-orange/30 transition-colors group flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-brand-orange/10 rounded-lg text-brand-orange shrink-0"><DraftingCompass size={20}/></div>
              <h4 className="text-white font-bold text-base md:text-lg">Ingeniería</h4>
            </div>
            <p className="text-ios-gray text-sm leading-snug">Entregamos planos ejecutivos, diagramas unifilares y memorias de cálculo listas para construcción.</p>
          </div>

          <div className="flex-1 bg-ios-dark rounded-3xl p-5 border border-white/5 hover:border-brand-orange/30 transition-colors group flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/10 rounded-lg text-white shrink-0"><Layers size={20}/></div>
              <h4 className="text-white font-bold text-base md:text-lg">Consultoría</h4>
            </div>
            <p className="text-ios-gray text-sm leading-snug">Auditorías de infraestructura existente, análisis de brechas (Gap Analysis) y optimización energética.</p>
          </div>

          <div className="flex-1 bg-ios-dark rounded-3xl p-5 border border-white/5 hover:border-brand-orange/30 transition-colors group flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-brand-grey rounded-lg text-white shrink-0"><CheckCircle2 size={20}/></div>
              <h4 className="text-white font-bold text-base md:text-lg">Validación</h4>
            </div>
            <p className="text-ios-gray text-sm leading-snug">Commissioning y pruebas de estrés para asegurar que el diseño teórico funcione en la realidad.</p>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default About;