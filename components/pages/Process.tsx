import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const Process: React.FC = () => {
  const steps = [
    { 
      num: "01", 
      title: "Assessment", 
      text: "Evaluamos viabilidad y riesgos. Definimos Tier/Clase." 
    },
    { 
      num: "02", 
      title: "Conceptual", 
      text: "Diseño preliminar (Layouts, Topología) y CAPEX." 
    },
    { 
      num: "03", 
      title: "Detalle", 
      text: "Planos constructivos y especificaciones técnicas." 
    },
    { 
      num: "04", 
      title: "Commissioning", 
      text: "Validación de infraestructura bajo falla." 
    },
  ];

  return (
    <PageWrapper>
      <div className="mb-10 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight text-center">Workflow.</h2>
        <p className="text-ios-gray text-center mt-2 text-base md:text-lg">De la idea a la operación.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4">
        {steps.map((step, index) => (
          <div key={index} className="relative group">
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-white/10 z-0"></div>
            )}
            
            <div className="h-full relative z-10 flex flex-col items-center text-center p-5 md:p-6 rounded-2xl md:rounded-3xl bg-ios-dark border border-white/5 transition-all duration-300 hover:border-brand-orange/50">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-ios-black border border-white/10 flex items-center justify-center text-base md:text-lg font-bold text-white mb-4 shadow-lg group-hover:text-brand-orange transition-colors">
                {step.num}
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-4">{step.title}</h3>
              <p className="text-xs md:text-sm text-ios-gray leading-relaxed">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Process;