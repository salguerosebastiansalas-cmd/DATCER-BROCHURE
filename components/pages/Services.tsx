import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { FileText, Award, Server, Activity } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: "Diseño & Ingeniería",
      desc: "Carpeta técnica de precisión para construcción de misión crítica."
    },
    {
      icon: Award,
      title: "Certificaciones",
      desc: "Gestión experta ante Uptime Institute e ICREA WCQA."
    },
    {
      icon: Server,
      title: "Simulación CFD",
      desc: "Modelado predictivo de dinámica de fluidos y gestión térmica."
    },
    {
      icon: Activity,
      title: "Commissioning",
      desc: "Protocolos de validación integral (FAT/SAT/IST) bajo falla."
    }
  ];

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            Servicios <span className="text-apple-muted font-light">Especializados.</span>
          </h2>
          <div className="h-[1px] w-24 bg-brand-orange"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-[2.5rem]">
          {services.map((s, i) => (
            <div 
              key={i}
              className="bg-apple-black p-10 md:p-14 hover:bg-white/[0.02] transition-colors group"
            >
              <div className="mb-8 text-brand-orange opacity-80 group-hover:opacity-100 transition-opacity">
                <s.icon size={32} strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">{s.title}</h3>
              <p className="text-apple-muted text-lg leading-relaxed max-w-sm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Services;