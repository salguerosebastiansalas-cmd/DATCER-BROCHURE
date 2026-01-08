import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const Process: React.FC = () => {
  const steps = [
    { 
      num: "01", 
      title: "Assessment", 
      text: "Evaluamos viabilidad técnica y normativa. Definimos Tier/Clase." 
    },
    { 
      num: "02", 
      title: "Conceptual", 
      text: "Arquitectura preliminar (Layouts, Topología) y modelo CAPEX." 
    },
    { 
      num: "03", 
      title: "Detalle", 
      text: "Ingeniería final constructiva y pliegos de especificaciones." 
    },
    { 
      num: "04", 
      title: "Commissioning", 
      text: "Validación integral de sistemas bajo escenarios de falla." 
    },
  ];

  return (
    <PageWrapper>
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-4">Workflow<span className="text-brand-orange">.</span></h2>
        <p className="text-apple-muted text-xl font-light">De la estrategia conceptual a la excelencia operativa.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative group">
            <div className="h-full flex flex-col p-8 rounded-[2rem] bg-apple-gray/30 border border-white/[0.05] transition-all duration-500 hover:bg-apple-gray/50 hover:border-brand-orange/20">
              <div className="text-xs font-bold text-brand-orange mb-6 tracking-widest uppercase">
                Step {step.num}
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">{step.title}</h3>
              <p className="text-apple-muted text-base leading-relaxed font-light">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Process;