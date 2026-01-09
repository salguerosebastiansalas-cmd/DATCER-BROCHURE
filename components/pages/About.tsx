import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Language } from '../../App';

const About: React.FC<{ lang: Language }> = ({ lang }) => {
  const content = {
    es: {
      tag: "Filosofía de Ingeniería",
      title1: "Aseguramos la",
      title2: "continuidad",
      title3: "del ecosistema digital.",
      desc: "No diseñamos simples salas de servidores. Creamos organismos resilientes capaces de sostener las operaciones más exigentes con precisión técnica absoluta.",
      pillars: [
        { h: "Expertise Global", p: "Consultores con acreditaciones internacionales ATD y WCQA para cumplimiento normativo estricto." },
        { h: "Independencia Técnica", p: "Neutralidad total de marca. Priorizamos la eficiencia y el rendimiento sobre cualquier proveedor." },
        { h: "Visión Futura", p: "Diseños escalables que anticipan el crecimiento de TI y las demandas de densificación." }
      ]
    },
    en: {
      tag: "Engineering Philosophy",
      title1: "We ensure",
      title2: "continuity",
      title3: "within the digital ecosystem.",
      desc: "We don't design simple server rooms. We create resilient organisms capable of sustaining the most demanding operations with absolute technical precision.",
      pillars: [
        { h: "Global Expertise", p: "Consultants with international ATD and WCQA accreditations for strict regulatory compliance." },
        { h: "Technical Independence", p: "Total brand neutrality. We prioritize efficiency and performance over any provider." },
        { h: "Future Vision", p: "Scalable designs that anticipate IT growth and densification demands." }
      ]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          <div className="glass-card p-10 md:p-14 rounded-[3rem] flex flex-col justify-center">
            <h2 className="text-[11px] font-bold text-brand-orange uppercase tracking-[0.4em] mb-8">
              {t.tag}
            </h2>
            <h3 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tighter mb-10">
              {t.title1} <br />
              <span className="opacity-50 font-light italic">{t.title2}</span> <br />
              {t.title3}
            </h3>
            <p className="text-lg opacity-80 leading-relaxed font-light">
              {t.desc}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {t.pillars.map((pill, i) => (
              <div key={i} className="glass-card p-8 rounded-[2.5rem] hover:border-brand-orange/30 transition-all group">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-3">
                  <span className={`w-6 h-[1px] ${i === 0 ? 'bg-brand-orange' : 'bg-current/30 group-hover:bg-brand-orange/50'} transition-colors`}></span>
                  {pill.h}
                </h4>
                <p className="opacity-70 text-sm leading-relaxed font-light">
                  {pill.p}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default About;