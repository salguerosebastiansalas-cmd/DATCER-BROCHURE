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
          desc: "Desarrollo conceptual, básico y de detalle (LOD 400). Topologías Tier III/IV y coordinación BIM multidisciplinaria.",
          details: ["Modelado BIM 3D / Revit", "Cálculo CFD", "Ingeniería Civil y Arquitectura", "Coordinación MEP", "Presupuestos CAPEX"]
        },
        { 
          icon: Award, 
          title: "Certificaciones", 
          desc: "Gestión estratégica para sellos de calidad global ante Uptime Institute (TCCF/TCOS) e ICREA (Niveles I-V).",
          details: ["Accredited Tier Designer (ATD)", "Gestión documental Uptime", "Auditorías ICREA", "Certificación CEEDA", "Compliance LEED"]
        },
        { 
          icon: ShieldCheck, 
          title: "Consultoría Técnica", 
          desc: "Diagnósticos profundos, análisis de riesgos SPOF, brechas normativas y planes de remediación.",
          details: ["Análisis SPOF", "Estudios Arc Flash", "Assessment de Capacidad", "Auditorías PUE", "Plan DRP"]
        },
        { 
          icon: Activity, 
          title: "Commissioning (Cx)", 
          desc: "Validación rigurosa de rendimiento. Desde pruebas en fábrica (FAT) hasta pruebas integradas (IST) con carga.",
          details: ["Cx Nivel 1-3 (Diseño/Fábrica)", "Cx Nivel 4-5 (Sitio/Integrado)", "Pull the Plug Test", "Validación Secuencias", "Reportes Ejecutivos"]
        },
        { 
          icon: Briefcase, 
          title: "Project Management", 
          desc: "Gerencia de proyectos bajo estándares PMBOK. Control estricto de cronograma, costos y mitigación de riesgos.",
          details: ["Gestión PMBOK", "Supervisión de Obra", "Control Presupuestal", "Gestión de Licitaciones", "Reportes de Avance"]
        },
        { 
          icon: Leaf, 
          title: "Sustentabilidad", 
          desc: "Estrategias de eficiencia energética y descarbonización. Optimización de métricas PUE y WUE.",
          details: ["Optimización PUE/WUE", "Huella de Carbono", "Energías Renovables", "Economía Circular", "Diseño Bioclimático"]
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
          desc: "Conceptual, basic, and detailed development (LOD 400). Tier III/IV topologies and multidisciplinary BIM coordination.",
          details: ["3D BIM / Revit Modeling", "CFD Analysis", "Civil & Architecture", "MEP Coordination", "CAPEX Budgeting"]
        },
        { 
          icon: Award, 
          title: "Certifications", 
          desc: "Strategic management for global quality seals from Uptime Institute (TCCF/TCOS) and ICREA (Levels I-V).",
          details: ["Accredited Tier Designer (ATD)", "Uptime Documentation", "ICREA Audits", "CEEDA Certification", "LEED Compliance"]
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
          desc: "Rigorous performance validation. From factory tests (FAT) to integrated systems testing (IST) under load.",
          details: ["Cx Level 1-3 (Design/Factory)", "Cx Level 4-5 (Site/Integrated)", "Pull the Plug Test", "Sequence Validation", "Executive Reports"]
        },
        { 
          icon: Briefcase, 
          title: "Project Management", 
          desc: "Project management under PMBOK standards. Strict control of schedule, costs, and risk mitigation.",
          details: ["PMBOK Management", "Site Supervision", "Budget Control", "Tender Management", "Progress Reporting"]
        },
        { 
          icon: Leaf, 
          title: "Sustainability", 
          desc: "Energy efficiency and decarbonization strategies. Optimization of PUE and WUE metrics.",
          details: ["PUE/WUE Optimization", "Carbon Footprint", "Renewable Energy", "Circular Economy", "Bioclimatic Design"]
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

      <div className="relative z-10 h-full flex flex-col justify-center py-12">
        <div className="mb-10 pl-2">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-3">
            {t.title} <span className="opacity-40 font-light italic text-brand-orange">{t.subtitle}</span>
          </h2>
          <p className="opacity-60 text-lg font-light max-w-2xl">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((s, i) => (
            <div 
              key={i}
              onClick={() => onOpenDetail(s)}
              className="glass-card group cursor-pointer rounded-[2rem] p-8 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 flex flex-col"
            >
               <div className="flex justify-between items-start mb-6">
                  <div className="p-3.5 rounded-2xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    <s.icon size={26} strokeWidth={1.5} />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                     <span className="text-lg leading-none text-current opacity-40">↗</span>
                  </div>
               </div>
               
               <h3 className="text-xl font-bold mb-3 tracking-tight">{s.title}</h3>
               <p className="opacity-60 text-[13px] leading-relaxed font-light mb-6 flex-grow">
                 {s.desc}
               </p>

               <div className="pt-5 border-t border-current/5 flex flex-wrap gap-2">
                  <span className="text-[9px] uppercase tracking-wider font-bold bg-current/5 px-2 py-1 rounded opacity-50">
                     {s.details[0]}
                  </span>
                  {s.details[1] && (
                    <span className="text-[9px] uppercase tracking-wider font-bold bg-current/5 px-2 py-1 rounded opacity-50">
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