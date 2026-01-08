import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Zap, Thermometer, ShieldCheck, Flame, Network, MonitorDot, HardHat, BatteryCharging } from 'lucide-react';

const IntegratedServices: React.FC = () => {
  const integratedServices = [
    {
      icon: Zap,
      title: "Ingeniería Eléctrica",
      desc: "Media y baja tensión, coordinación de protecciones y estudios de arco eléctrico."
    },
    {
      icon: Thermometer,
      title: "Climatización (HVAC)",
      desc: "Refrigeración de precisión, pasillos fríos/calientes y gestión de flujo de aire."
    },
    {
      icon: BatteryCharging,
      title: "Backup de Energía",
      desc: "Sistemas UPS, bancos de baterías y plantas eléctricas de emergencia."
    },
    {
      icon: Flame,
      title: "Seguridad Contra Incendio",
      desc: "Detección temprana (VESDA) y sistemas de extinción por agentes limpios."
    },
    {
      icon: Network,
      title: "Conectividad & Fibra",
      desc: "Redes SAN/LAN de alta velocidad y gestión de infraestructura de cableado."
    },
    {
      icon: ShieldCheck,
      title: "Seguridad Física",
      desc: "CCTV inteligente, biometría y control de acceso perimetral automatizado."
    },
    {
      icon: MonitorDot,
      title: "BMS & DCIM",
      desc: "Monitoreo integral de infraestructura y gestión de activos en tiempo real."
    },
    {
      icon: HardHat,
      title: "Obra Civil",
      desc: "Reforzamiento estructural, pisos técnicos y blindaje de salas de datos."
    }
  ];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Ecosistema <span className="text-brand-orange">Integrado.</span>
          </h2>
          <p className="text-apple-muted text-lg font-light max-w-2xl">
            Nuestros diseños abarcan todas las disciplinas técnicas necesarias para garantizar una operación de misión crítica ininterrumpida.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {integratedServices.map((s, i) => (
            <div 
              key={i}
              className="glass-card p-6 md:p-8 rounded-[2rem] hover:border-brand-orange/30 transition-all group flex flex-col h-full"
            >
              <div className="mb-5 text-brand-orange/80 group-hover:text-brand-orange transition-colors">
                <s.icon size={22} strokeWidth={2} />
              </div>
              <h3 className="text-sm md:text-base font-bold text-white mb-2 tracking-tight">{s.title}</h3>
              <p className="text-apple-muted text-[11px] md:text-xs leading-relaxed font-light mt-auto">
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