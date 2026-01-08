import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Layers, CheckCircle2, DraftingCompass } from 'lucide-react';

const About: React.FC = () => {
  return (
    <PageWrapper>
      <div className="grid lg:grid-cols-12 gap-8 w-full max-w-6xl mx-auto items-stretch">
        
        {/* Main Text Block */}
        <div className="lg:col-span-7 bg-ios-dark rounded-[2.5rem] p-16 flex flex-col justify-center border border-white/5 relative overflow-hidden group hover:border-brand-orange/20 transition-all duration-700">
          <div className="relative z-10">
            <h2 className="text-brand-orange font-bold text-sm uppercase tracking-[0.3em] mb-6">Nuestra Especialidad</h2>
            <h3 className="text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
              Transformamos requisitos de TI en infraestructura física <span className="text-brand-orange italic">resiliente.</span>
            </h3>
            <p className="text-ios-gray text-xl leading-relaxed mb-8">
              En <span className="text-white font-semibold">DATCER</span>, diseñamos el ecosistema físico (Energía, Climatización y Seguridad) que permite que su tecnología funcione 24/7 sin interrupciones.
            </p>
            <p className="text-white text-xl font-medium leading-relaxed">
              Desde la ingeniería conceptual hasta la certificación internacional, aseguramos el retorno de su inversión tecnológica.
            </p>
          </div>
        </div>

        {/* Right Column Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-ios-dark rounded-[2rem] p-8 border border-white/5 hover:border-brand-orange/30 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-brand-orange/10 rounded-2xl text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all"><DraftingCompass size={24}/></div>
              <h4 className="text-white font-bold text-2xl">Ingeniería</h4>
            </div>
            <p className="text-ios-gray text-lg leading-relaxed">Entregamos planos ejecutivos, diagramas unifilares y memorias de cálculo listas para licitación y construcción.</p>
          </div>

          <div className="bg-ios-dark rounded-[2rem] p-8 border border-white/5 hover:border-brand-orange/30 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/10 rounded-2xl text-white group-hover:bg-brand-grey transition-all"><Layers size={24}/></div>
              <h4 className="text-white font-bold text-2xl">Consultoría</h4>
            </div>
            <p className="text-ios-gray text-lg leading-relaxed">Auditorías de infraestructura existente, análisis de brechas de disponibilidad y optimización energética.</p>
          </div>

          <div className="bg-ios-dark rounded-[2rem] p-8 border border-white/5 hover:border-brand-orange/30 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-brand-grey/20 rounded-2xl text-white group-hover:bg-brand-orange transition-all"><CheckCircle2 size={24}/></div>
              <h4 className="text-white font-bold text-2xl">Certificación</h4>
            </div>
            <p className="text-ios-gray text-lg leading-relaxed">Acompañamiento experto para la obtención de sellos Uptime Institute TIER e ICREA WCQA.</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;