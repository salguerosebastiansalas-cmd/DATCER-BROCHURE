import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { FileText, Award, ShieldCheck, Activity } from 'lucide-react';
import { Language, DetailItem } from '../../App';

const Services: React.FC<{ lang: Language, onOpenDetail: (item: DetailItem) => void }> = ({ lang, onOpenDetail }) => {
  const content = {
    es: {
      title: "Servicios",
      subtitle: "Especializados.",
      items: [
        { 
          icon: FileText, 
          title: "Diseño & Ingeniería", 
          desc: "Carpeta técnica de precisión para construcción de misión crítica bajo estándares Tier e ICREA.",
          details: ["Planos ejecutivos 3D/BIM", "Cálculos de carga estructural", "Topologías de potencia", "Sistemas mecánicos avanzados"]
        },
        { 
          icon: Award, 
          title: "Certificaciones", 
          desc: "Gestión experta y acompañamiento técnico ante Uptime Institute y WCQA.",
          details: ["Acompañamiento ATD", "Validación TCCF / TCOS", "Certificación ICREA", "Auditoría de cumplimiento"]
        },
        { 
          icon: ShieldCheck, 
          title: "Consultoría Estratégica", 
          desc: "Análisis de riesgos, estudios de carga y optimización de infraestructura existente.",
          details: ["Análisis Gap", "Plan Maestro de IT", "Estudios de Arc Flash", "Análisis de falla única"]
        },
        { 
          icon: Activity, 
          title: "Commissioning", 
          desc: "Protocolos de validación integral (FAT/SAT/IST) simulando escenarios de falla extremos.",
          details: ["Pruebas de Nivel 1 a 5", "Simulación de carga térmica", "Validación de redundancia", "Aceptación operativa final"]
        }
      ]
    },
    en: {
      title: "Specialized",
      subtitle: "Services.",
      items: [
        { 
          icon: FileText, 
          title: "Design & Engineering", 
          desc: "Precision technical folder for mission-critical construction under Tier and ICREA standards.",
          details: ["3D/BIM executive drawings", "Structural load calculations", "Power topologies", "Advanced mechanical systems"]
        },
        { 
          icon: Award, 
          title: "Certifications", 
          desc: "Expert management and technical support for Uptime Institute and WCQA.",
          details: ["ATD support", "TCCF / TCOS validation", "ICREA certification", "Compliance auditing"]
        },
        { 
          icon: ShieldCheck, 
          title: "Strategic Consulting", 
          desc: "Risk analysis, load studies, and optimization of existing infrastructure.",
          details: ["Gap analysis", "IT Master Plan", "Arc Flash studies", "Single point of failure analysis"]
        },
        { 
          icon: Activity, 
          title: "Commissioning", 
          desc: "Integral validation protocols (FAT/SAT/IST) simulating extreme failure scenarios.",
          details: ["Level 1 to 5 testing", "Thermal load simulation", "Redundancy validation", "Final operational acceptance"]
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(currentColor 0.5px, transparent 0.5px), linear-gradient(90deg, currentColor 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px' 
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
              onClick={() => onOpenDetail(s)}
              className="glass-card p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] group relative overflow-hidden cursor-pointer"
            >
              <div className="mb-6 md:mb-8 text-brand-orange/80 group-hover:text-brand-orange group-hover:scale-110 transition-all duration-500 origin-left">
                <s.icon size={28} strokeWidth={1.2} />
              </div>
              <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4 tracking-tight">{s.title}</h3>
              <p className="opacity-60 text-sm md:text-base leading-relaxed font-light max-w-sm mb-6">
                {s.desc}
              </p>
              
              <div className="flex items-center gap-2 text-[10px] font-bold text-brand-orange uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {lang === 'es' ? 'Ver Detalles' : 'View Details'}
                <FileText size={12} />
              </div>

              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-brand-orange/[0.015] blur-[80px] rounded-full group-hover:bg-brand-orange/[0.03] transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Services;