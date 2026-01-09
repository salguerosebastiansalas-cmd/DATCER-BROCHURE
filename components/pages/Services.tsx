import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { FileText, Award, ShieldCheck, Activity } from 'lucide-react';
import { Language } from '../../App';

const Services: React.FC<{ lang: Language }> = ({ lang }) => {
  const content = {
    es: {
      title: "Servicios",
      subtitle: "Especializados.",
      items: [
        { icon: FileText, title: "Diseño & Ingeniería", desc: "Carpeta técnica de precisión para construcción de misión crítica bajo estándares Tier e ICREA." },
        { icon: Award, title: "Certificaciones", desc: "Gestión experta y acompañamiento técnico ante Uptime Institute y WCQA." },
        { icon: ShieldCheck, title: "Consultoría Estratégica", desc: "Análisis de riesgos, estudios de carga y optimización de infraestructura existente." },
        { icon: Activity, title: "Commissioning", desc: "Protocolos de validación integral (FAT/SAT/IST) simulando escenarios de falla extremos." }
      ]
    },
    en: {
      title: "Specialized",
      subtitle: "Services.",
      items: [
        { icon: FileText, title: "Design & Engineering", desc: "Precision technical folder for mission-critical construction under Tier and ICREA standards." },
        { icon: Award, title: "Certifications", desc: "Expert management and technical support for Uptime Institute and WCQA." },
        { icon: ShieldCheck, title: "Strategic Consulting", desc: "Risk analysis, load studies, and optimization of existing infrastructure." },
        { icon: Activity, title: "Commissioning", desc: "Integral validation protocols (FAT/SAT/IST) simulating extreme failure scenarios." }
      ]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-14">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">
            {t.title} <span className="opacity-40 font-light italic">{t.subtitle}</span>
          </h2>
          <div className="h-[2px] w-16 bg-brand-orange rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {t.items.map((s, i) => (
            <div 
              key={i}
              className="glass-card p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] hover:scale-[1.01] hover:bg-white/[0.02] group relative overflow-hidden"
            >
              <div className="mb-6 md:mb-8 text-brand-orange/80 group-hover:text-brand-orange group-hover:scale-110 transition-all duration-500 origin-left">
                <s.icon size={28} strokeWidth={1.2} />
              </div>
              <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4 tracking-tight">{s.title}</h3>
              <p className="opacity-60 text-sm md:text-base leading-relaxed font-light max-w-sm">
                {s.desc}
              </p>
              
              {/* Resplandor interno extremadamente sutil */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-brand-orange/[0.015] blur-[80px] rounded-full group-hover:bg-brand-orange/[0.03] transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Services;