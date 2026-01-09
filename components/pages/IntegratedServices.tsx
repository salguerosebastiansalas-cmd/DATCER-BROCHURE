import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Zap, Thermometer, ShieldCheck, Flame, Network, MonitorDot, HardHat, BatteryCharging } from 'lucide-react';
import { Language } from '../../App';

const IntegratedServices: React.FC<{ lang: Language }> = ({ lang }) => {
  const content = {
    es: {
      title: "Ecosistema",
      subtitle: "Integrado.",
      desc: "Nuestros diseños abarcan todas las disciplinas técnicas necesarias para garantizar una operación de misión crítica ininterrumpida.",
      items: [
        { icon: Zap, title: "Ingeniería Eléctrica", desc: "Media y baja tensión, coordinación de protecciones y estudios de arco eléctrico." },
        { icon: Thermometer, title: "Climatización (HVAC)", desc: "Refrigeración de precisión, pasillos fríos/calientes y gestión de flujo de aire." },
        { icon: BatteryCharging, title: "Backup de Energía", desc: "Sistemas UPS, bancos de baterías y plantas eléctricas de emergencia." },
        { icon: Flame, title: "Seguridad Contra Incendio", desc: "Detección temprana (VESDA) y sistemas de extinción por agentes limpios." },
        { icon: Network, title: "Conectividad & Fibra", desc: "Redes SAN/LAN de alta velocidad y gestión de infraestructura de cableado." },
        { icon: ShieldCheck, title: "Seguridad Física", desc: "CCTV inteligente, biometría y control de acceso perimetral automatizado." },
        { icon: MonitorDot, title: "BMS & DCIM", desc: "Monitoreo integral de infraestructura y gestión de activos en tiempo real." },
        { icon: HardHat, title: "Obra Civil", desc: "Reforzamiento estructural, pisos técnicos y blindaje de salas de datos." }
      ]
    },
    en: {
      title: "Integrated",
      subtitle: "Ecosystem.",
      desc: "Our designs encompass all technical disciplines necessary to guarantee uninterrupted mission-critical operation.",
      items: [
        { icon: Zap, title: "Electrical Engineering", desc: "Medium and low voltage, protection coordination, and arc flash studies." },
        { icon: Thermometer, title: "HVAC & Cooling", desc: "Precision cooling, hot/cold aisles, and airflow management." },
        { icon: BatteryCharging, title: "Power Backup", desc: "UPS systems, battery banks, and emergency power plants." },
        { icon: Flame, title: "Fire Safety", desc: "Early detection (VESDA) and clean agent suppression systems." },
        { icon: Network, title: "Connectivity & Fiber", desc: "High-speed SAN/LAN networks and structured cabling management." },
        { icon: ShieldCheck, title: "Physical Security", desc: "Intelligent CCTV, biometrics, and automated perimeter access control." },
        { icon: MonitorDot, title: "BMS & DCIM", desc: "Integral infrastructure monitoring and real-time asset management." },
        { icon: HardHat, title: "Civil Works", desc: "Structural reinforcement, raised floors, and data hall shielding." }
      ]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3">
            {t.title} <span className="text-brand-orange">{t.subtitle}</span>
          </h2>
          <p className="opacity-80 text-base md:text-lg font-light max-w-2xl leading-snug">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pb-4">
          {t.items.map((s, i) => (
            <div 
              key={i}
              className="glass-card p-5 md:p-7 rounded-[1.5rem] md:rounded-[2rem] hover:border-brand-orange/40 transition-all group flex flex-col h-full shadow-sm"
            >
              <div className="mb-4 text-brand-orange/90 group-hover:text-brand-orange transition-colors">
                <s.icon size={20} strokeWidth={2} />
              </div>
              <h3 className="text-xs md:text-sm font-bold mb-2 tracking-tight leading-tight">{s.title}</h3>
              <p className="opacity-70 text-[10px] md:text-xs leading-relaxed font-light mt-auto">
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