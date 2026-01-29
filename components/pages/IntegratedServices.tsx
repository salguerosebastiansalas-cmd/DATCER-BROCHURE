import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { Zap, Thermometer, ShieldCheck, Flame, Network, MonitorDot, HardHat, BatteryCharging } from 'lucide-react';
import { Language, DetailItem } from '../../App';

const IntegratedServices: React.FC<{ lang: Language, onOpenDetail: (item: DetailItem) => void }> = ({ lang, onOpenDetail }) => {
  const content = {
    es: {
      title: "Ecosistema",
      subtitle: "Integrado.",
      desc: "Ingeniería multidisciplinaria para continuidad operativa.",
      items: [
        { id: "elec", icon: Zap, title: "Potencia Eléctrica", desc: "Media y Baja Tensión. Calidad de energía.", specs: ["Subestaciones", "Tableros Inteligentes"] },
        { id: "cool", icon: Thermometer, title: "Termomecánica", desc: "Refrigeración de precisión y CFD.", specs: ["In-Row / Perimetral", "Free Cooling"] },
        { id: "fire", icon: Flame, title: "Protección Incendios", desc: "Detección VESDA y supresión.", specs: ["Agentes Limpios", "Pre-acción"] },
        { id: "sec", icon: ShieldCheck, title: "Physical Security", desc: "Control biométrico y CCTV.", specs: ["Anti-Passback", "Video Analytics"] },
        { id: "data", icon: Network, title: "Conectividad", desc: "Cableado estructurado y fibra óptica.", specs: ["MPO/MTP", "Cat 6A/8"] },
        { id: "bms", icon: MonitorDot, title: "BMS / DCIM", desc: "Gestión centralizada de infraestructura.", specs: ["Modbus/Bacnet", "Energy Monitoring"] },
        { id: "ups", icon: BatteryCharging, title: "Respaldo Energía", desc: "UPS y Generadores.", specs: ["Baterías Li-Ion", "Redundancia 2N"] },
        { id: "civil", icon: HardHat, title: "Obra Civil", desc: "Adecuación arquitectónica especializada.", specs: ["Piso Técnico", "Blindaje RF"] }
      ]
    },
    en: {
      title: "Integrated",
      subtitle: "Ecosystem.",
      desc: "Multidisciplinary engineering for operational continuity.",
      items: [
        { id: "elec", icon: Zap, title: "Electrical Power", desc: "MV/LV Distribution. Power Quality.", specs: ["Substations", "Smart Panels"] },
        { id: "cool", icon: Thermometer, title: "Thermal Mgmt", desc: "Precision cooling and CFD.", specs: ["In-Row / Perimeter", "Free Cooling"] },
        { id: "fire", icon: Flame, title: "Fire Protection", desc: "VESDA detection and suppression.", specs: ["Clean Agents", "Pre-action"] },
        { id: "sec", icon: ShieldCheck, title: "Physical Security", desc: "Biometric control and CCTV.", specs: ["Anti-Passback", "Video Analytics"] },
        { id: "data", icon: Network, title: "Connectivity", desc: "Structured cabling and fiber optics.", specs: ["MPO/MTP", "Cat 6A/8"] },
        { id: "bms", icon: MonitorDot, title: "BMS / DCIM", desc: "Centralized infrastructure management.", specs: ["Modbus/Bacnet", "Energy Monitoring"] },
        { id: "ups", icon: BatteryCharging, title: "Power Backup", desc: "UPS and Generators.", specs: ["Li-Ion Batteries", "2N Redundancy"] },
        { id: "civil", icon: HardHat, title: "Civil Works", desc: "Specialized architectural adequacy.", specs: ["Raised Floor", "RF Shielding"] }
      ]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper>
      <div className="h-full flex flex-col justify-center py-8">
        <div className="mb-8 flex items-end justify-between px-2">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-2">
              {t.title} <span className="text-brand-orange">{t.subtitle}</span>
            </h2>
            <p className="opacity-60 text-base font-light">{t.desc}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.items.map((s, i) => (
            <div 
              key={i}
              onClick={() => onOpenDetail(s)}
              className={`glass-card p-5 rounded-[2rem] hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col justify-between ${i < 2 ? 'md:col-span-2 md:flex-row md:items-center gap-6' : 'md:col-span-1'}`}
            >
              <div className={`flex items-start justify-between ${i < 2 ? 'md:w-auto' : 'w-full mb-4'}`}>
                 <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <s.icon size={i < 2 ? 32 : 24} strokeWidth={1.5} />
                 </div>
              </div>

              <div className="flex-grow">
                <h3 className={`${i < 2 ? 'text-2xl' : 'text-sm'} font-bold mb-1 tracking-tight`}>{s.title}</h3>
                <p className="opacity-60 text-[11px] leading-relaxed font-medium mb-3">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                   {s.specs.map((spec, idx) => (
                     <span key={idx} className="text-[9px] bg-current/5 px-2 py-0.5 rounded text-current/60 font-bold uppercase tracking-wider">
                       {spec}
                     </span>
                   ))}
                </div>
              </div>
              
              {i < 2 && (
                 <div className="hidden md:flex w-10 h-10 rounded-full border border-current/10 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xl">↗</span>
                 </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default IntegratedServices;