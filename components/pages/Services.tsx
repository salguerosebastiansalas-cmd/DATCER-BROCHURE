import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { FileText, Award, ShieldCheck, Activity } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: "Diseño & Ingeniería",
      desc: "Carpeta técnica de precisión para construcción de misión crítica bajo estándares Tier e ICREA."
    },
    {
      icon: Award,
      title: "Certificaciones",
      desc: "Gestión experta y acompañamiento técnico ante Uptime Institute y WCQA."
    },
    {
      icon: ShieldCheck,
      title: "Consultoría Estratégica",
      desc: "Análisis de riesgos, estudios de carga y optimización de infraestructura existente."
    },
    {
      icon: Activity,
      title: "Commissioning",
      desc: "Protocolos de validación integral (FAT/SAT/IST) simulando escenarios de falla extremos."
    }
  ];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            Servicios <span className="text-apple-muted font-light">Especializados.</span>
          </h2>
          <div className="h-[1px] w-24 bg-brand-orange"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <div 
              key={i}
              className="glass-card p-10 md:p-12 rounded-[2.5rem] hover:bg-white/[0.05] transition-all group relative overflow-hidden"
            >
              <div className="mb-8 text-brand-orange opacity-80 group-hover:opacity-100 transition-opacity">
                <s.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">{s.title}</h3>
              <p className="text-apple-muted text-base leading-relaxed font-light max-w-sm">
                {s.desc}
              </p>
              {/* Accento visual sutil */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/[0.02] blur-2xl rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Services;