import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { FileText, Award, Server, Activity } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: "Diseño & Ingeniería",
      desc: "Desarrollo completo de la carpeta técnica para construcción.",
      details: ["Planos Eléctricos y Mecánicos", "Cálculos térmicos", "White Space Design"]
    },
    {
      icon: Award,
      title: "Certificaciones",
      desc: "Acompañamiento estratégico para sellos internacionales.",
      details: ["Gap Analysis Tier/ICREA", "Gestión Uptime Institute", "Defensa de diseño"]
    },
    {
      icon: Server,
      title: "Simulación CFD",
      desc: "Software avanzado para predecir el comportamiento térmico.",
      details: ["Dinámica de Fluidos", "Análisis de Calidad Energía", "Optimización PUE"]
    },
    {
      icon: Activity,
      title: "Commissioning",
      desc: "Aseguramiento de calidad antes de la operación crítica.",
      details: ["Pruebas FAT / SAT", "Pruebas integrales IST", "Capacitación Operativa"]
    }
  ];

  return (
    <PageWrapper>
      <div className="mb-6 md:mb-10 text-center md:text-left px-2">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Soluciones Técnicas.</h2>
        <p className="text-ios-gray text-base md:text-xl mt-2 md:mt-4">Entregables tangibles para la toma de decisiones.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 px-2">
        {services.map((s, i) => (
          <div 
            key={i}
            className="group bg-ios-dark rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/5 hover:border-brand-orange/20 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-brand-orange transition-colors">
                <s.icon size={20} className="md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white">{s.title}</h3>
            </div>
            
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4 font-medium">
              {s.desc}
            </p>

            <ul className="space-y-1.5 md:space-y-2 mt-auto">
              {s.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-ios-gray">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-orange shrink-0"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Services;