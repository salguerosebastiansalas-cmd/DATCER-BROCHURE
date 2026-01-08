import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const Process: React.FC = () => {
  const steps = [
    { 
      num: "01", 
      title: "Assessment", 
      text: "Evaluamos la viabilidad del sitio y riesgos físicos. Definimos los requerimientos de Tier/Clase." 
    },
    { 
      num: "02", 
      title: "Ingeniería Conceptual", 
      text: "Diseño preliminar (Layouts, Topología Eléctrica/Mecánica) y estimación de CAPEX." 
    },
    { 
      num: "03", 
      title: "Ingeniería de Detalle", 
      text: "Desarrollo de planos constructivos, memorias, y especificaciones técnicas para licitación." 
    },
    { 
      num: "04", 
      title: "Commissioning", 
      text: "Validación rigurosa de que la infraestructura soporta la carga crítica bajo falla." 
    },
  ];

  return (
    <PageWrapper>
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center">Workflow de Proyecto.</h2>
        <p className="text-ios-gray text-center mt-4 text-lg">De la idea a la operación certificada.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="relative group h-full">
            {/* Connector Line (Desktop) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-white/10 z-0"></div>
            )}
            
            <div className="h-full relative z-10 flex flex-col items-center text-center p-6 rounded-3xl bg-ios-dark border border-white/5 transition-all duration-300 hover:border-brand-orange/50 hover:shadow-2xl hover:shadow-brand-orange/10">
              <div className="w-16 h-16 rounded-full bg-ios-black border border-white/10 flex items-center justify-center text-lg font-bold text-white mb-6 shadow-lg group-hover:text-brand-orange group-hover:border-brand-orange transition-colors">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{step.title}</h3>
              <p className="text-sm text-ios-gray font-normal leading-relaxed">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Process;