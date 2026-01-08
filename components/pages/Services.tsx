import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { FileText, Award, Server, Activity } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: "Diseño & Ingeniería",
      desc: "Carpeta técnica completa para construcción.",
      details: ["Planos Eléctricos", "White Space"]
    },
    {
      icon: Award,
      title: "Certificaciones",
      desc: "Acompañamiento Tier e ICREA.",
      details: ["Gap Analysis", "Gestión Uptime"]
    },
    {
      icon: Server,
      title: "Simulación CFD",
      desc: "Predicción térmica avanzada por software.",
      details: ["Dinámica Fluidos", "Optimización PUE"]
    },
    {
      icon: Activity,
      title: "Commissioning",
      desc: "Pruebas de calidad y estrés (IST).",
      details: ["Validación Falla", "Capacitación"]
    }
  ];

  return (
    <PageWrapper>
      <div className="mb-4 md:mb-10 text-center md:text-left">
        <h2 className="text-2xl md:text-5xl font-bold text-white tracking-tight">Soluciones Técnicas.</h2>
        <p className="text-ios-gray text-xs md:text-xl mt-1 md:mt-4 uppercase tracking-widest font-medium">Entregables de Ingeniería</p>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 md:gap-6">
        {services.map((s, i) => (
          <div 
            key={i}
            className="group bg-ios-dark rounded-xl md:rounded-3xl p-4 md:p-8 border border-white/5 hover:border-brand-orange/20 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-6">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-brand-orange transition-colors">
                <s.icon size={16} className="md:w-6 md:h-6" strokeWidth={2} />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-white">{s.title}</h3>
            </div>
            
            <p className="text-white/70 text-[10px] md:text-base leading-snug mb-2 md:mb-4">
              {s.desc}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {s.details.map((detail, idx) => (
                <span key={idx} className="text-[8px] md:text-xs px-2 py-0.5 rounded bg-white/5 text-ios-gray border border-white/5">
                  {detail}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Services;