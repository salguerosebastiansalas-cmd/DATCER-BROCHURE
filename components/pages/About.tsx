import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Layers, CheckCircle2, DraftingCompass } from 'lucide-react';

const About: React.FC = () => {
  return (
    <PageWrapper>
      <div className="grid lg:grid-cols-12 gap-4 md:gap-5 w-full max-w-6xl mx-auto items-stretch">
        
        {/* Main Text Block - Left Side */}
        <div className="lg:col-span-7 bg-ios-dark rounded-3xl p-6 md:p-10 flex flex-col justify-center border border-white/5 relative overflow-hidden group hover:border-brand-orange/20 transition-colors duration-500">
          <div className="relative z-10">
            <h2 className="text-brand-orange font-semibold text-xs md:text-sm uppercase tracking-wide mb-3">Nuestra Especialidad</h2>
            <h3 className="text-xl md:text-4xl font-bold text-white mb-4 md:mb-5 leading-tight">
              Transformamos requisitos de TI en infraestructura física resiliente.
            </h3>
            <p className="text-ios-gray text-sm md:text-lg leading-relaxed mb-4">
              En <span className="text-white font-semibold">DATCER</span>, diseñamos el ecosistema físico (Energía, Climatización y Seguridad) que permite que su tecnología funcione 24/7.
            </p>
            <p className="text-white text-sm md:text-lg font-medium leading-relaxed">
              Desde la ingeniería conceptual hasta la obtención de certificaciones internacionales (Uptime Institute / ICREA), aseguramos su inversión tecnológica.
            </p>
          </div>
        </div>

        {/* Right Column - 3 Compact Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:flex lg:flex-col gap-3 md:gap-4">
          
          <div className="bg-ios-dark rounded-2xl md:rounded-3xl p-4 md:p-5 border border-white/5 hover:border-brand-orange/30 transition-colors group flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-brand-orange/10 rounded-lg text-brand-orange shrink-0"><DraftingCompass size={18}/></div>
              <h4 className="text-white font-bold text-sm md:text-lg">Ingeniería</h4>
            </div>
            <p className="text-ios-gray text-xs md:text-sm leading-snug">Entregamos planos ejecutivos, diagramas unifilares y memorias de cálculo listas para construcción.</p>
          </div>

          <div className="bg-ios-dark rounded-2xl md:rounded-3xl p-4 md:p-5 border border-white/5 hover:border-brand-orange/30 transition-colors group flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/10 rounded-lg text-white shrink-0"><Layers size={18}/></div>
              <h4 className="text-white font-bold text-sm md:text-lg">Consultoría</h4>
            </div>
            <p className="text-ios-gray text-xs md:text-sm leading-snug">Auditorías de infraestructura existente, análisis de brechas y optimización energética.</p>
          </div>

          <div className="bg-ios-dark rounded-2xl md:rounded-3xl p-4 md:p-5 border border-white/5 hover:border-brand-orange/30 transition-colors group flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-brand-grey rounded-lg text-white shrink-0"><CheckCircle2 size={18}/></div>
              <h4 className="text-white font-bold text-sm md:text-lg">Validación</h4>
            </div>
            <p className="text-ios-gray text-xs md:text-sm leading-snug">Commissioning y pruebas de estrés para asegurar que el diseño funcione en la realidad.</p>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default About;