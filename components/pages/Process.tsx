import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Language, DetailItem } from '../../App';
import { Settings } from 'lucide-react';

const Process: React.FC<{ lang: Language, onOpenDetail: (item: DetailItem) => void }> = ({ lang, onOpenDetail }) => {
  const content = {
    es: {
      title: "Metodología",
      tagline: "De la estrategia conceptual a la excelencia operativa total.",
      steps: [
        { num: "01", title: "Assessment", text: "Evaluamos viabilidad técnica y normativa. Definimos objetivos de disponibilidad Tier/Clase." },
        { num: "02", title: "Conceptual", text: "Arquitectura preliminar, topología de sistemas y modelo de inversión CAPEX." },
        { num: "03", title: "Detalle", text: "Ingeniería final ejecutiva con pliegos de especificaciones técnicas de alta fidelidad." },
        { num: "04", title: "Commissioning", text: "Validación integral de sistemas asegurando que la infraestructura cumpla el diseño." }
      ]
    },
    en: {
      title: "Methodology",
      tagline: "From conceptual strategy to total operational excellence.",
      steps: [
        { num: "01", title: "Assessment", text: "Technical and regulatory feasibility assessment. We define Tier/Class availability targets." },
        { num: "02", title: "Conceptual", text: "Preliminary architecture, system topology, and CAPEX investment model." },
        { num: "03", title: "Detail", text: "Final executive engineering with high-fidelity technical specification sheets." },
        { num: "04", title: "Commissioning", text: "Integral system validation ensuring infrastructure meets the design requirements." }
      ]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 relative">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">{t.title}<span className="text-brand-orange">.</span></h2>
          <p className="opacity-60 text-xl font-light">{t.tagline}</p>
        </div>

        <div className="relative">
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
              </defs>
              <line x1="0" y1="20" x2="1000" y2="20" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4,4" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
            {t.steps.map((step, index) => (
              <div key={index} className="relative">
                <div 
                  onClick={() => onOpenDetail({ title: step.title, desc: step.text, icon: Settings, tag: `FASE ${step.num}` })}
                  className="glass-card h-full p-8 rounded-[2.5rem] flex flex-col border-white/[0.05] hover:border-brand-orange/40 transition-all duration-700 group cursor-pointer bg-current/[0.01]"
                >
                  <div className="flex justify-between items-start mb-10">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange shadow-[0_0_10px_#F26722]"></div>
                      <span className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.3em]">Fase {step.num}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                    {step.title}
                  </h3>
                  <p className="opacity-60 text-sm leading-relaxed font-light">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Process;