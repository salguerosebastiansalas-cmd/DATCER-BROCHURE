import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const About: React.FC = () => {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Paleta Principal de Texto */}
          <div className="glass-card p-10 md:p-14 rounded-[3rem] border-white/[0.05] flex flex-col justify-center">
            <h2 className="text-[11px] font-bold text-brand-orange uppercase tracking-[0.4em] mb-8">
              Filosofía de Ingeniería
            </h2>
            <h3 className="text-4xl md:text-5xl font-semibold text-white leading-[1.1] tracking-tighter mb-10">
              Aseguramos la <br />
              <span className="text-apple-muted font-light italic">continuidad</span> del <br />
              ecosistema digital.
            </h3>
            <p className="text-lg text-apple-muted leading-relaxed font-light">
              No diseñamos simples salas de servidores. Creamos organismos resilientes capaces de sostener las operaciones más exigentes con precisión técnica absoluta.
            </p>
          </div>

          {/* Paleta Secundaria: Pilares */}
          <div className="flex flex-col gap-6">
            <div className="glass-card p-8 rounded-[2.5rem] border-white/[0.05] hover:border-brand-orange/20 transition-all group">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-brand-orange"></span>
                Expertise Global
              </h4>
              <p className="text-apple-muted text-sm leading-relaxed font-light">
                Consultores con acreditaciones internacionales ATD y WCQA para cumplimiento normativo estricto.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-[2.5rem] border-white/[0.05] hover:border-brand-orange/20 transition-all group">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-white/20 group-hover:bg-brand-orange/40 transition-colors"></span>
                Independencia Técnica
              </h4>
              <p className="text-apple-muted text-sm leading-relaxed font-light">
                Neutralidad total de marca. Priorizamos la eficiencia y el rendimiento sobre cualquier proveedor.
              </p>
            </div>

            <div className="glass-card p-8 rounded-[2.5rem] border-white/[0.05] hover:border-brand-orange/20 transition-all group">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-white/20 group-hover:bg-brand-orange/40 transition-colors"></span>
                Visión Futura
              </h4>
              <p className="text-apple-muted text-sm leading-relaxed font-light">
                Diseños escalables que anticipan el crecimiento de TI y las demandas de densificación.
              </p>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default About;