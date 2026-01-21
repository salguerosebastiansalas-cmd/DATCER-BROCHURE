import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Language, DetailItem } from '../../App';
import { BarChart3 } from 'lucide-react';

const WhyUs: React.FC<{ lang: Language, onOpenDetail: (item: DetailItem) => void }> = ({ lang, onOpenDetail }) => {
  const content = {
    es: {
      tag: "Engineering Excellence",
      title: "Métricas de",
      subtitle: "Efectividad Global.",
      desc: "Modelamos infraestructuras bajo estándares de clase mundial, optimizando el rendimiento energético y la disponibilidad operativa mediante visualización de datos predictivos.",
      cards: [
        { h: "PUE Optimization", v: "1.18", unit: "idx", desc: "Efficiency Target achieved", icon: BarChart3 },
        { h: "Operational Availability", v: "99.99", unit: "%", desc: "Maximum Redundancy", tag: "TIER IV", icon: BarChart3 },
        { h: "Financial Engineering", v: "ROI Optimized", desc: "Reducción del 25% en costos operativos anuales.", icon: BarChart3 }
      ]
    },
    en: {
      tag: "Engineering Excellence",
      title: "Global Effectiveness",
      subtitle: "Metrics.",
      desc: "We model infrastructure under world-class standards, optimizing energy performance and operational availability through predictive data visualization.",
      cards: [
        { h: "PUE Optimization", v: "1.18", unit: "idx", desc: "Efficiency Target achieved", icon: BarChart3 },
        { h: "Operational Availability", v: "99.99", unit: "%", desc: "Maximum Redundancy", tag: "TIER IV", icon: BarChart3 },
        { h: "Financial Engineering", v: "ROI Optimized", desc: "25% reduction in annual operating costs.", icon: BarChart3 }
      ]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper className="relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.02] dark:opacity-[0.05]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.2" fill="none" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.2" fill="none" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.2" fill="none" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.1" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.1" />
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.1" fill="none" strokeDasharray="1,2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
            {t.cards.slice(0, 2).map((card, i) => (
              <div 
                key={i}
                onClick={() => onOpenDetail({ title: card.h, desc: card.desc, icon: card.icon, tag: card.tag })}
                className="glass-card p-8 rounded-[2rem] hover:border-brand-orange/20 transition-all group overflow-hidden relative cursor-pointer"
              >
                  <div className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em] mb-10">{card.h}</div>
                  <div className="text-5xl font-light tracking-tighter mb-4">{card.v}<span className="text-xl ml-1 opacity-40">{card.unit}</span></div>
                  <div className="w-full h-[1.5px] bg-current/5 rounded-full overflow-hidden">
                    <div className={`h-full bg-brand-orange/60 rounded-full ${i === 0 ? 'w-[85%]' : 'w-[99%]'}`}></div>
                  </div>
                  <p className="mt-4 text-[10px] opacity-30 font-medium uppercase tracking-widest">{card.desc}</p>
              </div>
            ))}

            <div 
              onClick={() => onOpenDetail({ title: t.cards[2].h, desc: t.cards[2].desc, icon: t.cards[2].icon })}
              className="glass-card p-8 rounded-[2rem] hover:border-brand-orange/20 transition-all group md:col-span-2 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <div className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em] mb-4">{t.cards[2].h}</div>
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