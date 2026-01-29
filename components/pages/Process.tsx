import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Language, DetailItem } from '../../App';
import { Settings, ClipboardCheck, PenTool, PlayCircle, FileCheck, Layers, Box, Zap } from 'lucide-react';

const Process: React.FC<{ lang: Language, onOpenDetail: (item: DetailItem) => void }> = ({ lang, onOpenDetail }) => {
  const stepsIcons = [ClipboardCheck, PenTool, Settings, PlayCircle];

  const content = {
    es: {
      title: "Metodología",
      tagline: "Estrategia conceptual a excelencia operativa.",
      steps: [
        { 
          num: "01", title: "Assessment", 
          text: "Viabilidad técnica y normativa. Objetivos Tier.",
          out: ["Gap Analysis", "Reporte Riesgos", "Budget Estimation"] 
        },
        { 
          num: "02", title: "Conceptual", 
          text: "Arquitectura, topología y modelo CAPEX.",
          out: ["BOD (Basis of Design)", "Layouts 2D/3D", "PUE Target"] 
        },
        { 
          num: "03", title: "Detalle", 
          text: "Ingeniería ejecutiva y especificaciones.",
          out: ["Planos Constructivos", "Memorias de Cálculo", "RFP Specs"] 
        },
        { 
          num: "04", title: "Cx", 
          text: "Commissioning y validación integral.",
          out: ["Protocolos FAT/SAT", "Reporte IST", "Manuales Operación"] 
        }
      ]
    },
    en: {
      title: "Methodology",
      tagline: "Conceptual strategy to operational excellence.",
      steps: [
        { 
          num: "01", title: "Assessment", 
          text: "Technical feasibility. Tier/Class targets.",
          out: ["Gap Analysis", "Risk Report", "Budget Estimation"]
        },
        { 
          num: "02", title: "Conceptual", 
          text: "Architecture, topology & CAPEX model.",
          out: ["BOD (Basis of Design)", "Layouts 2D/3D", "PUE Target"]
        },
        { 
          num: "03", title: "Detail", 
          text: "Executive engineering & technical specs.",
          out: ["Construction Plans", "Calc Sheets", "RFP Specs"]
        },
        { 
          num: "04", title: "Cx", 
          text: "Commissioning & integral validation.",
          out: ["FAT/SAT Protocols", "IST Report", "Ops Manuals"]
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper>
      <div className="h-full flex flex-col justify-center">
        <div className="mb-10 relative text-left pl-2">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-3">{t.title}<span className="text-brand-orange">.</span></h2>
          <p className="opacity-60 text-xl font-light tracking-tight">{t.tagline}</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
            {t.steps.map((step, index) => {
              const Icon = stepsIcons[index];
              return (
                <div key={index} className="relative group h-full">
                  <div 
                    onClick={() => onOpenDetail({ title: step.title, desc: step.text, icon: Icon, tag: `FASE ${step.num}` })}
                    className="glass-card h-full p-6 rounded-[2rem] flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl transition-all duration-500 cursor-pointer"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-5">
                        <div className="w-10 h-10 rounded-xl bg-current/5 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
                           <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <span className="text-[9px] font-bold opacity-30 uppercase tracking-[0.2em] mt-1">0{index + 1}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="opacity-60 text-xs leading-relaxed font-light mb-6 min-h-[3em]">
                        {step.text}
                      </p>
                    </div>
                    
                    <div className="border-t border-current/5 pt-4">
                      <span className="text-[9px] font-bold uppercase tracking-wider opacity-40 block mb-2">Entregables</span>
                      <ul className="space-y-1.5">
                        {step.out.map((o, i) => (
                          <li key={i} className="flex items-center gap-2 text-[10px] font-medium opacity-70">
                            <div className="w-1 h-1 rounded-full bg-brand-orange"></div>
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
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