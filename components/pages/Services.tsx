import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { FileText, Award, ShieldCheck, Activity, Briefcase, Leaf } from 'lucide-react';
import { Language, DetailItem } from '../../App';

const Services: React.FC<{ lang: Language, onOpenDetail: (item: DetailItem) => void }> = ({ lang, onOpenDetail }) => {
  const content = {
    es: {
      title: "Soluciones de",
      subtitle: "Ingeniería Global.",
      desc: "Portafolio integral de ciclo de vida completo para infraestructura de misión crítica.",
      items: [
        { 
          icon: FileText, 
          title: "Diseño & Ingeniería", 
          desc: "Desarrollo conceptual, básico y de detalle (LOD 400). Topologías Tier III/IV y coordinación BIM.",
          details: ["Modelado BIM 3D", "Cálculo CFD", "Ingeniería Civil", "Coordinación MEP", "Presupuestos CAPEX"]
        },
        { 
          icon: Award, 
          title: "Certificaciones", 
          desc: "Gestión estratégica para sellos de calidad global ante Uptime Institute (TCCF/TCOS) e ICREA.",
          details: ["Accredited Tier Designer", "Documentación Uptime", "Auditorías ICREA", "Certificación CEEDA", "Compliance LEED"]
        },
        { 
          icon: ShieldCheck, 
          title: "Consultoría Técnica", 
          desc: "Diagnósticos profundos, análisis de riesgos SPOF, brechas normativas y planes de remediación.",
          details: ["Análisis SPOF", "Estudios Arc Flash", "Assessment Capacidad", "Auditorías PUE", "Plan DRP"]
        },
        { 
          icon: Activity, 
          title: "Commissioning (Cx)", 
          desc: "Validación rigurosa de rendimiento. Desde pruebas en fábrica (FAT) hasta pruebas integradas (IST).",
          details: ["Cx Nivel 1-3", "Cx Nivel 4-5", "Pull the Plug Test", "Validación Secuencias", "Reportes Ejecutivos"]
        },
        { 
          icon: Briefcase, 
          title: "Project Management", 
          desc: "Gerencia de proyectos bajo estándares PMBOK. Control estricto de cronograma y costos.",
          details: ["Gestión PMBOK", "Supervisión de Obra", "Control Presupuestal", "Licitaciones", "Reportes de Avance"]
        },
        { 
          icon: Leaf, 
          title: "Sustentabilidad", 
          desc: "Estrategias de eficiencia energética y descarbonización. Optimización de métricas PUE y WUE.",
          details: ["Optimización PUE", "Huella de Carbono", "Energías Renovables", "Economía Circular", "Diseño Bioclimático"]
        }
      ]
    },
    en: {
      title: "Global",
      subtitle: "Engineering Solutions.",
      desc: "Comprehensive full lifecycle portfolio for mission critical infrastructure.",
      items: [
        { 
          icon: FileText, 
          title: "Design & Engineering", 
          desc: "Conceptual, basic, and detailed development (LOD 400). Tier III/IV topologies and BIM.",
          details: ["3D BIM Modeling", "CFD Analysis", "Civil & Architecture", "MEP Coordination", "CAPEX Budgeting"]
        },
        { 
          icon: Award, 
          title: "Certifications", 
          desc: "Strategic management for global quality seals from Uptime Institute (TCCF/TCOS) and ICREA.",
          details: ["Accredited Tier Designer", "Uptime Docs", "ICREA Audits", "CEEDA Certification", "LEED Compliance"]
        },
        { 
          icon: ShieldCheck, 
          title: "Technical Consulting", 
          desc: "Deep diagnostics, SPOF risk analysis, regulatory gaps, and remediation planning.",
          details: ["SPOF Analysis", "Arc Flash Studies", "Capacity Assessment", "PUE Audits", "DRP Planning"]
        },
        { 
          icon: Activity, 
          title: "Commissioning (Cx)", 
          desc: "Rigorous performance validation. From factory tests (FAT) to integrated systems testing (IST).",
          details: ["Cx Level 1-3", "Cx Level 4-5", "Pull the Plug Test", "Sequence Validation", "Executive Reports"]
        },
        { 
          icon: Briefcase, 
          title: "Project Management", 
          desc: "Project management under PMBOK standards. Strict control of schedule and costs.",
          details: ["PMBOK Management", "Site Supervision", "Budget Control", "Tender Management", "Progress Reporting"]
        },
        { 
          icon: Leaf, 
          title: "Sustainability", 
          desc: "Energy efficiency and decarbonization strategies. Optimization of PUE and WUE metrics.",
          details: ["PUE Optimization", "Carbon Footprint", "Renewable Energy", "Circular Economy", "Bioclimatic Design"]
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper className="relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px' 
        }}></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center py-6 md:py-8">
        <div className="mb-6 pl-2">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-2">
            {t.title} <span className="opacity-40 font-light italic text-brand-orange">{t.subtitle}</span>
          </h2>
          <p className="opacity-60 text-base md:text-lg font-light max-w-2xl">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {t.items.map((s, i) => (
            <div 
              key={i}
              onClick={() => onOpenDetail(s)}
              className="glass-card group cursor-pointer rounded-[1.5rem] p-5 md:p-6 hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] transition-all duration-300 flex flex-col"
            >
               <div className="flex justify-between items-start mb-3 md:mb-4">
                  <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    <s.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-1 group-hover:translate-x-0">
                     <span className="text-base leading-none text-current opacity-40">↗</span>
                  </div>
               </div>
               
               <h3 className="text-lg font-bold mb-2 tracking-tight">{s.title}</h3>
               <p className="opacity-60 text-xs leading-relaxed font-light mb-4 flex-grow line-clamp-3">
                 {s.desc}
               </p>

               <div className="pt-3 border-t border-current/5 flex flex-wrap gap-1.5">
                  <span className="text-[9px] uppercase tracking-wider font-bold bg-current/5 px-2 py-1 rounded opacity-50 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                     {s.details[0]}
                  </span>
                  {s.details[1] && (
                    <span className="text-[9px] uppercase tracking-wider font-bold bg-current/5 px-2 py-1 rounded opacity-50 whitespace-nowrap overflow-hidden text-ellipsis max-w-full hidden xl:block">
                       {s.details[1]}
                    </span>
                  )}
               </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Services;