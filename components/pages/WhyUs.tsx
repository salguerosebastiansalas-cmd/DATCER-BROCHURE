import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Language } from '../../App';

const WhyUs: React.FC<{ lang: Language }> = ({ lang }) => {
  const content = {
    es: {
      tag: "Engineering Excellence",
      title: "Métricas de",
      subtitle: "Efectividad Global.",
      desc: "Modelamos infraestructuras bajo estándares de clase mundial, optimizando el rendimiento energético y la disponibilidad operativa mediante visualización de datos predictivos.",
      cards: [
        { h: "PUE Optimization", v: "1.18", unit: "idx", desc: "Efficiency Target achieved" },
        { h: "Operational Availability", v: "99.99", unit: "%", desc: "Maximum Redundancy", tag: "TIER IV" },
        { h: "Financial Engineering", v: "ROI Optimized", desc: "Reducción del 25% en costos operativos anuales." }
      ]
    },
    en: {
      tag: "Engineering Excellence",
      title: "Global Effectiveness",
      subtitle: "Metrics.",
      desc: "We model infrastructure under world-class standards, optimizing energy performance and operational availability through predictive data visualization.",
      cards: [
        { h: "PUE Optimization", v: "1.18", unit: "idx", desc: "Efficiency Target achieved" },
        { h: "Operational Availability", v: "99.99", unit: "%", desc: "Maximum Redundancy", tag: "TIER IV" },
        { h: "Financial Engineering", v: "ROI Optimized", desc: "25% reduction in annual operating costs." }
      ]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6">
            <h2 className="text-[11px] font-bold text-brand-orange/80 uppercase tracking-[0.4em] mb-6">
              {t.tag}
            </h2>
            <h3 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-tight mb-8">
              {t.title} <br />
              <span className="opacity-40 font-light">{t.subtitle}</span>
            </h3>
            <p className="text-xl opacity-60 font-light leading-relaxed max-w-xl">
              {t.desc}
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-8 rounded-[2rem] hover:border-brand-orange/20 transition-all group overflow-hidden relative">
                <div className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em] mb-10">{t.cards[0].h}</div>
                <div className="text-5xl font-light tracking-tighter mb-4">{t.cards[0].v}<span className="text-xl ml-1 opacity-40">{t.cards[0].unit}</span></div>
                <div className="w-full h-[1.5px] bg-current/5 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-brand-orange/60 rounded-full"></div>
                </div>
                <p className="mt-4 text-[10px] opacity-30 font-medium uppercase tracking-widest">{t.cards[0].desc}</p>
            </div>

            <div className="glass-card p-8 rounded-[2rem] hover:border-brand-orange/20 transition-all group overflow-hidden relative">
                <div className="flex justify-between items-start mb-10">
                  <div className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em]">{t.cards[1].h}</div>
                  <div className="text-[10px] font-bold opacity-20">{t.cards[1].tag}</div>
                </div>
                <div className="text-5xl font-light tracking-tighter mb-4">{t.cards[1].v}<span className="text-xl ml-1 text-brand-orange/80">{t.cards[1].unit}</span></div>
                <div className="grid grid-cols-8 gap-1 h-0.5">
                   {[...Array(8)].map((_, i) => (
                     <div key={i} className={`h-full rounded-full ${i < 7 ? 'bg-brand-orange/60' : 'bg-current/10'}`}></div>
                   ))}
                </div>
                <p className="mt-4 text-[10px] opacity-30 font-medium uppercase tracking-widest">{t.cards[1].desc}</p>
            </div>

            <div className="glass-card p-8 rounded-[2rem] hover:border-brand-orange/20 transition-all group md:col-span-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <div className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em] mb-4">Financial Engineering</div>
                  <div className="text-4xl font-light tracking-tighter">{t.cards[2].v}</div>
                  <p className="mt-2 text-xs opacity-30">{t.cards[2].desc}</p>
                </div>
                <div className="flex gap-4 opacity-40">
                   <div className="w-12 h-20 bg-current/5 rounded-t-lg relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-current/10"></div>
                   </div>
                   <div className="w-12 h-20 bg-current/5 rounded-t-lg relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-brand-orange/20"></div>
                   </div>
                   <div className="w-12 h-20 bg-current/5 rounded-t-lg relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-[90%] bg-brand-orange/40"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default WhyUs;