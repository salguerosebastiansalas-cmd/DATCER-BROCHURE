import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const WhyUs: React.FC = () => {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6">
            <h2 className="text-[11px] font-bold text-brand-orange uppercase tracking-[0.4em] mb-6">
              Engineering Excellence
            </h2>
            <h3 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-tight mb-8">
              Métricas de <br />
              <span className="text-apple-muted font-light">Efectividad Global.</span>
            </h3>
            <p className="text-xl text-apple-muted font-light leading-relaxed max-w-xl">
              Modelamos infraestructuras bajo estándares de clase mundial, optimizando el rendimiento energético y la disponibilidad operativa mediante visualización de datos predictivos.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* CARD 1: PUE DASHBOARD STYLE */}
            <div className="glass-card p-8 rounded-[2rem] border-white/[0.05] hover:border-brand-orange/30 transition-all group overflow-hidden relative">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="text-[10px] font-bold text-apple-muted uppercase tracking-[0.2em]">PUE Optimization</div>
                  <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></div>
                </div>
                <div className="text-5xl font-light text-white tracking-tighter mb-4">1.18<span className="text-xl ml-1 text-apple-muted">idx</span></div>
                <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-brand-orange rounded-full"></div>
                </div>
                <p className="mt-4 text-[10px] text-apple-muted font-medium uppercase tracking-widest">Efficiency Target achieved</p>
              </div>
              {/* Sutil wave/graph background */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                 <svg viewBox="0 0 100 40" className="w-full h-full preserve-3d">
                    <path d="M0,40 Q25,10 50,30 T100,20" fill="none" stroke="#F26722" strokeWidth="2" />
                 </svg>
              </div>
            </div>

            {/* CARD 2: UPTIME MONITOR */}
            <div className="glass-card p-8 rounded-[2rem] border-white/[0.05] hover:border-brand-orange/30 transition-all group overflow-hidden relative">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="text-[10px] font-bold text-apple-muted uppercase tracking-[0.2em]">Operational Availability</div>
                  <div className="text-[10px] font-bold text-white/40">TIER IV</div>
                </div>
                <div className="text-5xl font-light text-white tracking-tighter mb-4">99.99<span className="text-xl ml-1 text-brand-orange">%</span></div>
                <div className="grid grid-cols-8 gap-1 h-1">
                   {[...Array(8)].map((_, i) => (
                     <div key={i} className={`h-full rounded-full ${i < 7 ? 'bg-brand-orange' : 'bg-white/10'}`}></div>
                   ))}
                </div>
                <p className="mt-4 text-[10px] text-apple-muted font-medium uppercase tracking-widest">Maximum Redundancy</p>
              </div>
            </div>

            {/* CARD 3: CAPEX/OPEX ANALYSIS */}
            <div className="glass-card p-8 rounded-[2rem] border-white/[0.05] hover:border-brand-orange/30 transition-all group md:col-span-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <div className="text-[10px] font-bold text-apple-muted uppercase tracking-[0.2em] mb-4">Financial Engineering</div>
                  <div className="text-4xl font-light text-white tracking-tighter">ROI <span className="text-brand-orange">Optimized</span></div>
                  <p className="mt-2 text-xs text-apple-muted">Reducción del 25% en costos operativos anuales.</p>
                </div>
                <div className="flex gap-4">
                   <div className="w-12 h-20 bg-white/5 rounded-t-lg relative overflow-hidden group-hover:bg-white/10 transition-colors">
                      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-white/20"></div>
                   </div>
                   <div className="w-12 h-20 bg-white/5 rounded-t-lg relative overflow-hidden group-hover:bg-white/10 transition-colors">
                      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-brand-orange/40"></div>
                   </div>
                   <div className="w-12 h-20 bg-white/5 rounded-t-lg relative overflow-hidden group-hover:bg-white/10 transition-colors">
                      <div className="absolute bottom-0 left-0 w-full h-[90%] bg-brand-orange"></div>
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