import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Language } from '../../App';
import { BookOpen, CheckCircle, Users, Scale, Activity } from 'lucide-react';

const About: React.FC<{ lang: Language }> = ({ lang }) => {
  const content = {
    es: {
      tag: "Filosofía de Ingeniería",
      title: "Resiliencia Digital.",
      desc: "Creamos organismos tecnológicos capaces de sostener operaciones críticas mediante una precisión técnica absoluta y neutralidad de marca.",
      stats: [
        { val: "+15", label: "Años Exp." },
        { val: "50+", label: "Proyectos" },
        { val: "100%", label: "Uptime" }
      ],
      standards: ["TIA-942-B", "UPTIME INSTITUTE", "ICREA STD-131", "NFPA 75/76", "ASHRAE TC9.9", "BICSI 002"],
      pillars: [
        { h: "Expertise Global", p: "Acreditaciones ATD/WCQA." },
        { h: "Independencia", p: "Diseño agnóstico a marcas." },
        { h: "Escalabilidad", p: "Future-proof design." }
      ]
    },
    en: {
      tag: "Engineering Philosophy",
      title: "Digital Resilience.",
      desc: "We create technological organisms capable of sustaining critical operations through absolute technical precision and brand neutrality.",
      stats: [
        { val: "+15", label: "Years Exp." },
        { val: "50+", label: "Projects" },
        { val: "100%", label: "Uptime" }
      ],
      standards: ["TIA-942-B", "UPTIME INSTITUTE", "ICREA STD-131", "NFPA 75/76", "ASHRAE TC9.9", "BICSI 002"],
      pillars: [
        { h: "Global Expertise", p: "ATD/WCQA Accreditations." },
        { h: "Independence", p: "Vendor-agnostic design." },
        { h: "Scalability", p: "Future-proof design." }
      ]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper className="relative overflow-hidden justify-center h-full">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-12 md:grid-rows-6 gap-4 h-full max-h-[700px]">
          
          {/* Main Card */}
          <div className="md:col-span-8 md:row-span-4 glass-card p-10 rounded-[2.5rem] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                 <h2 className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.4em]">
                   {t.tag}
                 </h2>
              </div>
              <h3 className="text-5xl md:text-6xl font-semibold leading-[0.9] tracking-tighter mb-6">
                {t.title}
              </h3>
              <p className="text-xl opacity-70 leading-relaxed font-light max-w-2xl">
                {t.desc}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-8 border-t border-current/10 pt-8">
               {t.pillars.map((p, i) => (
                 <div key={i}>
                    <h4 className="text-sm font-bold mb-1">{p.h}</h4>
                    <p className="text-xs opacity-50">{p.p}</p>
                 </div>
               ))}
            </div>
          </div>

          {/* Stats Column */}
          <div className="md:col-span-4 md:row-span-4 flex flex-col gap-4">
             {t.stats.map((stat, i) => (
               <div key={i} className="glass-card flex-1 p-6 rounded-[2rem] flex items-center justify-between hover:bg-white/5 transition-colors">
                  <div>
                    <div className="text-4xl font-light tracking-tight">{stat.val}</div>
                    <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">{stat.label}</div>
                  </div>
                  <Activity className="opacity-20" size={32} />
               </div>
             ))}
          </div>

          {/* Standards Ticker */}
          <div className="md:col-span-12 md:row-span-2 glass-card p-8 rounded-[2.5rem] flex flex-col justify-center relative overflow-hidden">
             <div className="flex items-center gap-2 mb-4 opacity-50">
               <BookOpen size={16} />
               <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Compliance & Standards</span>
             </div>
             <div className="flex flex-wrap gap-x-12 gap-y-4 items-center">
                {t.standards.map((std, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <CheckCircle size={18} className="text-brand-orange opacity-80" />
                    <span className="text-lg md:text-2xl font-light tracking-tight group-hover:text-brand-orange transition-colors cursor-default">{std}</span>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default About;