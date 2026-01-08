import React from 'react';
import PageWrapper from '../layout/PageWrapper';

const About: React.FC = () => {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          <div>
            <h2 className="text-[11px] font-bold text-brand-orange uppercase tracking-[0.4em] mb-8">
              Filosofía de Ingeniería
            </h2>
            <h3 className="text-4xl md:text-6xl font-semibold text-white leading-[1.1] tracking-tighter mb-10">
              Aseguramos la <br />
              <span className="text-apple-muted font-light italic">continuidad</span> del <br />
              ecosistema digital.
            </h3>
            <p className="text-xl text-apple-muted leading-relaxed font-light">
              No diseñamos simples salas de servidores. Creamos organismos resilientes capaces de sostener las operaciones más exigentes del mundo con eficiencia y precisión técnica.
            </p>
          </div>

          <div className="space-y-12 pt-4">
            <div className="group">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-brand-orange"></span>
                Expertise Global
              </h4>
              <p className="text-apple-muted leading-relaxed">
                Consultores con acreditaciones internacionales ATD y WCQA para garantizar el cumplimiento normativo más estricto.
              </p>
            </div>
            
            <div className="group">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-white/20"></span>
                Independencia Técnica
              </h4>
              <p className="text-apple-muted leading-relaxed">
                Neutralidad total de marca. Nuestra única prioridad es la eficiencia y el rendimiento de su infraestructura.
              </p>
            </div>

            <div className="group">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-white/20"></span>
                Visión Futura
              </h4>
              <p className="text-apple-muted leading-relaxed">
                Diseños escalables que anticipan el crecimiento de TI y las demandas de densificación energética.
              </p>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default About;