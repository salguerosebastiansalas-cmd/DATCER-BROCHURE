import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const WhyUs: React.FC = () => {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6 text-center lg:text-left">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-tight mb-8">
              Métricas de <br />
              <span className="text-brand-orange">Alto Rendimiento.</span>
            </h2>
            <p className="text-xl md:text-2xl text-apple-muted font-light leading-relaxed max-w-xl">
              Optimizamos el CAPEX y reducimos el OPEX mediante ingeniería de valor enfocada en la sustentabilidad real.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <div className="glass-card p-10 rounded-[2rem] flex items-end justify-between hover:border-brand-orange/30 transition-all group">
              <div>
                <div className="text-5xl font-light text-white tracking-tighter mb-1">1.2</div>
                <div className="text-[10px] font-bold text-apple-muted uppercase tracking-[0.3em]">PUE Target</div>
              </div>
              <div className="text-xs font-medium text-brand-orange tracking-widest opacity-40 group-hover:opacity-100">ENERGY</div>
            </div>

            <div className="glass-card p-10 rounded-[2rem] flex items-end justify-between hover:border-brand-orange/30 transition-all group">
              <div>
                <div className="text-5xl font-light text-white tracking-tighter mb-1">99.99<span className="text-2xl">%</span></div>
                <div className="text-[10px] font-bold text-apple-muted uppercase tracking-[0.3em]">Uptime Guarantee</div>
              </div>
              <div className="text-xs font-medium text-white tracking-widest opacity-40 group-hover:opacity-100">TIER IV</div>
            </div>

            <div className="glass-card p-10 rounded-[2rem] flex items-end justify-between hover:border-brand-orange/30 transition-all group">
              <div>
                <div className="text-5xl font-light text-white tracking-tighter mb-1">ROI</div>
                <div className="text-[10px] font-bold text-apple-muted uppercase tracking-[0.3em]">Optimized Model</div>
              </div>
              <div className="text-xs font-medium text-white tracking-widest opacity-40 group-hover:opacity-100">CAPEX</div>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default WhyUs;