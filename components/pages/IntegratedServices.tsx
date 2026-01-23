import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Zap, Thermometer, ShieldCheck, Flame, Network, MonitorDot, HardHat, BatteryCharging } from 'lucide-react';
import { Language, DetailItem } from '../../App';

const IntegratedServices: React.FC<{ lang: Language, onOpenDetail: (item: DetailItem) => void }> = ({ lang, onOpenDetail }) => {
  const content = {
    es: {
      title: "Ecosistema",
      subtitle: "Integrado.",
      desc: "Diseños que abarcan todas las disciplinas técnicas para garantizar una operación ininterrumpida.",
      items: [
        { icon: Zap, title: "Eléctrica", desc: "Media y baja tensión, coordinación protecciones, calidad energía." },
        { icon: Thermometer, title: "Climatización", desc: "Refrigeración de precisión, confinamiento pasillos, CFD." },
        { icon: BatteryCharging, title: "Respaldo", desc: "UPS modulares, baterías Li-Ion/VRLA, generadores." },
        { icon: Flame, title: "Incendios", desc: "Detección temprana (VESDA) y supresión agentes limpios." },
        { icon: Network, title: "Conectividad", desc: "Cableado estructurado, fibra óptica, soluciones MPO." },
        { icon: ShieldCheck, title: "Seguridad", desc: "Control acceso biométrico, CCTV analítica, blindaje." },
        { icon: MonitorDot, title: "BMS & DCIM", desc: "Monitoreo ambiental/eléctrico y gestión activos TI." },
        { icon: HardHat, title: "Civil", desc: "Pisos técnicos, reforzamiento estructural, arquitectura." }
      ]
    },
    en: {
      title: "Integrated",
      subtitle: "Ecosystem.",
      desc: "Designs encompassing all technical disciplines to ensure uninterrupted operation.",
      items: [
        { icon: Zap, title: "Electrical", desc: "Medium/low voltage, protection coordination, power quality." },
        { icon: Thermometer, title: "Cooling", desc: "Precision cooling, aisle containment, CFD analysis." },
        { icon: BatteryCharging, title: "Backup", desc: "Modular UPS, Li-Ion/VRLA batteries, generators." },
        { icon: Flame, title: "Fire Safety", desc: "Early detection (VESDA) and clean agent suppression." },
        { icon: Network, title: "Connectivity", desc: "Structured cabling, optical fiber, MPO solutions." },
        { icon: ShieldCheck, title: "Security", desc: "Biometric access, analytics CCTV, physical shielding." },
        { icon: MonitorDot, title: "BMS & DCIM", desc: "Environmental/power monitoring and IT asset mgmt." },
        { icon: HardHat, title: "Civil Works", desc: "Raised floors, structural reinforcement, architecture." }
      ]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper>
      <div className="h-full flex flex-col justify-center py-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 px-2">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-3">
              {t.title} <span className="text-brand-orange">{t.subtitle}</span>
            </h2>
            <p className="opacity-70 text-lg font-light leading-snug">
              {t.desc}
            </p>
          </div>
          <div className="hidden md:block h-[1px] w-24 bg-current opacity-20 mb-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {t.items.map((s, i) => (
            <div 
              key={i}
              onClick={() => onOpenDetail(s)}
              className="glass-card p-6 rounded-[2rem] hover:scale-[1.03] hover:shadow-lg transition-all duration-300 group flex flex-col h-full cursor-pointer min-h-[180px]"
            >
              <div className="mb-5 text-brand-orange opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all origin-left">
                <s.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold mb-2 tracking-tight">{s.title}</h3>
              <p className="opacity-50 text-xs leading-relaxed font-medium mt-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default IntegratedServices;