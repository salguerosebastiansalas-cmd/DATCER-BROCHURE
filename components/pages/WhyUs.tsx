import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Language, DetailItem } from '../../App';
import { TrendingUp, Shield, Zap, BarChart3, Check } from 'lucide-react';

const WhyUs: React.FC<{ lang: Language, onOpenDetail: (item: DetailItem) => void }> = ({ lang, onOpenDetail }) => {
  const content = {
    es: {
      tag: "Technical Specification",
      title: "Performance",
      subtitle: "Metrics.",
      items: [
        { label: "PUE (Power Usage Effectiveness)", val: "1.15", target: "< 1.3", status: "Optimal" },
        { label: "Disponibilidad Anual", val: "99.995%", target: "Tier IV", status: "Verified" },
        { label: "Densidad de Potencia", val: "12kW", target: "/ Rack", status: "High Density" },
        { label: "Tiempo Recuperación (RTO)", val: "< 1s", target: "Zero-Break", status: "Active" }
      ],
      comparison: [
        { feat: "Modelado BIM LOD 400", us: true, others: false },
        { feat: "CFD Termodinámico", us: true, others: false },
        { feat: "Certificación ATD In-house", us: true, others: false }
      ]
    },
    en: {
      tag: "Technical Specification",
      title: "Performance",
      subtitle: "Metrics.",
      items: [
        { label: "PUE (Power Usage Effectiveness)", val: "1.15", target: "< 1.3", status: "Optimal" },
        { label: "Annual Availability", val: "99.995%", target: "Tier IV", status: "Verified" },
        { label: "Power Density", val: "12kW", target: "/ Rack", status: "High Density" },
        { label: "Recovery Time (RTO)", val: "< 1s", target: "Zero-Break", status: "Active" }
      ],
      comparison: [
        { feat: "BIM LOD 400 Modeling", us: true, others: false },
        { feat: "CFD Thermodynamics", us: true, others: false },
        { feat: "In-house ATD Certification", us: true, others: false }
      ]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper className="relative overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center py-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center h-full">
          
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <h2 className="text-[10px] font-bold text-brand-orange/90 uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-brand-orange"></div>
              {t.tag}
            </h2>
            <h3 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.85] mb-10">
              {t.title} <br />
              <span className="opacity-40 font-light tracking-tight">{t.subtitle}</span>
            </h3>
            
            <div className="glass-card p-6 rounded-[2rem] bg-brand-orange/5 border-brand-orange/20">
               <h4 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-70">DATCER Advantage</h4>
               <div className="space-y-3">
                  {t.comparison.map((c, i) => (
                    <div key={i} className="flex justify-between items-center text-sm border-b border-current/10 pb-2 last:border-0 last:pb-0">
                       <span className="font-light">{c.feat}</span>
                       <Check size={16} className="text-brand-orange" />
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            {t.items.map((item, i) => (
              <div 
                key={i}
                className="glass-card px-8 py-6 rounded-[1.5rem] flex items-center justify-between hover:bg-white/5 transition-colors cursor-default"
              >
                  <div className="flex flex-col">
                     <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1">{item.label}</span>
                     <span className="text-3xl md:text-4xl font-light tracking-tighter">{item.val} <span className="text-sm opacity-50 font-normal">{item.target}</span></span>
                  </div>
                  <div className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-[10px] font-bold uppercase tracking-wider border border-green-500/20">
                     {item.status}
                  </div>
              </div>
            ))}
            
            <div className="mt-4 flex gap-4 overflow-hidden">
               <div className="h-32 flex-1 glass-card rounded-[1.5rem] relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-end justify-between px-4 pb-0 opacity-40 group-hover:opacity-60 transition-opacity">
                     {[20, 45, 30, 60, 40, 70, 50, 80, 60, 90, 70, 100].map((h, idx) => (
                       <div key={idx} className="w-1.5 bg-brand-orange rounded-t-sm" style={{ height: `${h}%` }}></div>
                     ))}
                  </div>
                  <div className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest">Efficiency Trend</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default WhyUs;