import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const Process: React.FC = () => {
  const steps = [
    { 
      num: "01", 
      title: "Assessment", 
      text: "Evaluamos viabilidad técnica y normativa. Definimos objetivos de disponibilidad Tier/Clase." 
    },
    { 
      num: "02", 
      title: "Conceptual", 
      text: "Arquitectura preliminar, topología de sistemas y modelo de inversión CAPEX." 
    },
    { 
      num: "03", 
      title: "Detalle", 
      text: "Ingeniería final ejecutiva con pliegos de especificaciones técnicas de alta fidelidad." 
    },
    { 
      num: "04", 
      title: "Commissioning", 
      text: "Validación integral de sistemas asegurando que la infraestructura cumpla el diseño." 
    },
  ];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 relative">
          <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-4">Metodología<span className="text-brand-orange">.</span></h2>
          <p className="text-apple-muted text-xl font-light">De la estrategia conceptual a la excelencia operativa total.</p>
        </div>

        <div className="relative">
          {/* LÍNEAS CONECTORAS PROFESIONALES (Solo Desktop) */}
          <div className="hidden md:block absolute top-[2.75rem] left-0 w-full h-8 z-0 pointer-events-none">
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 40">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F26722" stopOpacity="0" />
                  <stop offset="15%" stopColor="#F26722" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#F26722" stopOpacity="0.6" />
                  <stop offset="85%" stopColor="#F26722" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#F26722" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Línea principal con estilo de plano técnico */}
              <line 
                x1="0" y1="20" x2="1000" y2="20" 
                stroke="url(#lineGrad)" 
                strokeWidth="1" 
                strokeDasharray="4,4"
                filter="url(#glow)"
              />
              
              {/* Nodos de interconexión técnica */}
              <circle cx="250" cy="20" r="3" fill="#F26722" className="animate-pulse" />
              <circle cx="500" cy="20" r="3" fill="#F26722" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="750" cy="20" r="3" fill="#F26722" className="animate-pulse" style={{ animationDelay: '2s' }} />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card h-full p-8 rounded-[2.5rem] flex flex-col border-white/[0.05] hover:border-brand-orange/40 hover:bg-brand-orange/[0.02] transition-all duration-700 group cursor-default">
                  
                  <div className="flex justify-between items-start mb-10">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange shadow-[0_0_10px_#F26722]"></div>
                      <span className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.3em]">Fase {step.num}</span>
                    </div>
                    <div className="text-[10px] font-mono text-apple-muted/40">SC-0{index + 1}</div>
                  </div>
                  
                  <h3 className="text-2xl font-medium text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                    {step.title}
                  </h3>
                  
                  <p className="text-apple-muted text-sm leading-relaxed font-light">
                    {step.text}
                  </p>

                  {/* Detalle técnico de esquina inferior */}
                  <div className="mt-auto pt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="w-8 h-[1px] bg-brand-orange/30"></div>
                  </div>
                </div>

                {/* Conector Vertical (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center h-8 w-full">
                    <div className="w-[1px] h-full bg-gradient-to-b from-brand-orange/40 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Process;