import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Language, DetailItem } from '../../App';
import { Settings, ClipboardCheck, PenTool, PlayCircle } from 'lucide-react';

const Process: React.FC<{ lang: Language, onOpenDetail: (item: DetailItem) => void }> = ({ lang, onOpenDetail }) => {
  const stepsIcons = [ClipboardCheck, PenTool, Settings, PlayCircle];

  const content = {
    es: {
      title: "Metodología",
      tagline: "Estrategia conceptual a excelencia operativa.",
      steps: [
        { num: "01", title: "Assessment", text: "Viabilidad técnica y normativa. Objetivos Tier/Clase." },
        { num: "02", title: "Conceptual", text: "Arquitectura, topología y modelo CAPEX." },
        { num: "03", title: "Detalle", text: "Ingeniería ejecutiva y especificaciones técnicas." },
        { num: "04", title: "Cx", text: "Commissioning y validación integral de sistemas." }
      ]
    },
    en: {
      title: "Methodology",
      tagline: "Conceptual strategy to operational excellence.",
      steps: [
        { num: "01", title: "Assessment", text: "Technical feasibility. Tier/Class targets." },
        { num: "02", title: "Conceptual", text: "Architecture, topology & CAPEX model." },
        { num: "03", title: "Detail", text: "Executive engineering & technical specs." },
        { num: "04", title: "Cx", text: "Commissioning & integral validation." }
      ]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper>
      <div className="h-full flex flex-col justify-center">
        <div className="mb-12 relative text-left pl-2">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-3">{t.title}<span className="text-brand-orange">.</span></h2>
          <p className="opacity-60 text-xl font-light tracking-tight">{t.tagline}</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative z-10">
            {t.steps.map((step, index) => {
              const Icon = stepsIcons[index];
              return (
                <div key={index} className="relative group h-full">
                  <div 
                    onClick={() => onOpenDetail({ title: step.title, desc: step.text, icon: Icon, tag: `FASE ${step.num}` })}
                    className="glass-card h-full p-6 rounded-[2rem] flex flex-col justify-between hover:-translate-y-3 hover:shadow-xl transition-all duration-500 cursor-pointer"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-10 h-10 rounded-xl bg-current/5 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
                           <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <span className="text-[9px] font-bold opacity-30 uppercase tracking-[0.2em] mt-1">0{index + 1}</span>
                      </div>
                      
                      <h3 className="text-xl font-medium mb-3 tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="opacity-50 text-sm leading-relaxed font-light border-t border-current/5 pt-3">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Process;