import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Language, DetailItem } from '../../App';
import { TrendingUp, Shield, Zap } from 'lucide-react';

const WhyUs: React.FC<{ lang: Language, onOpenDetail: (item: DetailItem) => void }> = ({ lang, onOpenDetail }) => {
  const content = {
    es: {
      tag: "Engineering Excellence",
      title: "Métricas de",
      subtitle: "Efectividad Global.",
      desc: "Modelamos infraestructuras bajo estándares de clase mundial, optimizando el rendimiento energético y la disponibilidad operativa.",
      cards: [
        { h: "PUE Optimization", v: "1.15", unit: "idx", desc: "Eficiencia energética ultra-alta.", icon: Zap },
        { h: "Operational Availability", v: "99.995", unit: "%", desc: "Redundancia tolerante a fallas (2N+1).", tag: "TIER IV", icon: Shield },
        { h: "ROI & OPEX", v: "-28", unit: "%", desc: "Reducción costos operativos.", icon: TrendingUp }
      ]
    },
    en: {
      tag: "Engineering Excellence",
      title: "Global Effectiveness",
      subtitle: "Metrics.",
      desc: "We model infrastructure under world-class standards, optimizing energy performance and operational availability.",
      cards: [
        { h: "PUE Optimization", v: "1.15", unit: "idx", desc: "Ultra-high energy efficiency.", icon: Zap },
        { h: "Operational Availability", v: "99.995", unit: "%", desc: "Fault tolerant redundancy (2N+1).", tag: "TIER IV", icon: Shield },
        { h: "ROI & OPEX", v: "-28", unit: "%", desc: "Operating cost reduction.", icon: TrendingUp }
      ]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper className="relative overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 text-left">
            <h2 className="text-[10px] font-bold text-brand-orange/90 uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-brand-orange"></div>
              {t.tag}
            </h2>
            <h3 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.9] mb-8">
              {t.title} <br />
              <span className="opacity-40 font-light">{t.subtitle}</span>
            </h3>
            <p className="text-lg opacity-70 font-light leading-relaxed">
              {t.desc}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.cards.slice(0, 2).map((card, i) => (
              <div 
                key={i}
                onClick={() => onOpenDetail({ title: card.h, desc: card.desc, icon: card.icon, tag: card.tag })}
                className="glass-card p-8 rounded-[2.5rem] hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group cursor-pointer"
              >
                  <div className="flex justify-between items-start mb-10">
                     <div className="text-[9px] font-bold opacity-40 uppercase tracking-[0.2em]">{card.h}</div>
                     <card.icon size={20} className="text-brand-orange opacity-90" />
                  </div>
                  
                  <div className="text-5xl xl:text-6xl font-light tracking-tighter mb-5">
                    {card.v}<span className="text-2xl ml-1 opacity-40 font-thin">{card.unit}</span>
                  </div>
                  
                  <div className="w-full h-1.5 bg-current/5 rounded-full overflow-hidden mb-4">
                    <div 
                      className="h-full bg-brand-orange/80 rounded-full animate-pulse" 
                      style={{ width: i === 0 ? '88%' : '99%' }}
                    ></div>
                  </div>
                  <p className="text-xs opacity-60 font-medium">{card.desc}</p>
              </div>
            ))}

            <div 
              onClick={() => onOpenDetail({ title: t.cards[2].h, desc: t.cards[2].desc, icon: t.cards[2].icon })}
              className="glass-card p-8 rounded-[2.5rem] md:col-span-2 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-8"
            >
              <div className="flex-1 text-center sm:text-left">
                <div className="text-[9px] font-bold opacity-40 uppercase tracking-[0.2em] mb-3">{t.cards[2].h}</div>
                <div className="text-5xl font-light tracking-tighter mb-2">{t.cards[2].v}<span className="text-brand-orange">%</span></div>
                <p className="text-xs opacity-60">{t.cards[2].desc}</p>
              </div>
              
              <div className="flex gap-3 h-24 items-end opacity-60">
                 {[30, 50, 40, 75, 55, 90, 65, 80].map((h, idx) => (
                   <div key={idx} className="w-3 bg-current/10 rounded-t-sm relative overflow-hidden group-hover:bg-brand-orange/20 transition-colors" style={{ height: `${h}%` }}>
                     <div className="absolute bottom-0 w-full bg-brand-orange" style={{ height: `${h * 0.4}%` }}></div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default WhyUs;