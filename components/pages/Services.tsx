import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { FileText, Award, Server, Activity } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: "Diseño & Ingeniería de Detalle",
      desc: "Desarrollo completo de la carpeta técnica para construcción (Blueprints).",
      details: ["Planos Eléctricos, Mecánicos y BMS", "Cálculos de carga térmica", "Distribución de Racks (White Space)", "Especificación de generadores y UPS"]
    },
    {
      icon: Award,
      title: "Certificaciones (Tier/ICREA)",
      desc: "Acompañamiento estratégico para obtener sellos de calidad internacional.",
      details: ["Gap Analysis (Diagnóstico previo)", "Gestión ante Uptime Institute", "Defensa del diseño ante certificadores", "Validación de construcción"]
    },
    {
      icon: Server,
      title: "Simulación & Optimización",
      desc: "Uso de software avanzado para predecir el comportamiento del Data Center.",
      details: ["Estudios CFD (Dinámica de Fluidos)", "Análisis de Calidad de Energía", "Optimización de PUE", "Planificación de Capacidad"]
    },
    {
      icon: Activity,
      title: "Commissioning (Cx)",
      desc: "Proceso de aseguramiento de calidad antes de encender los servidores.",
      details: ["Pruebas de fábrica (FAT)", "Pruebas en sitio (SAT)", "Pruebas integrales (IST)", "Capacitación a operadores"]
    }
  ];

  return (
    <PageWrapper>
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Soluciones Técnicas.</h2>
        <p className="text-ios-gray text-xl mt-4">Entregables tangibles para la toma de decisiones críticas.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div 
            key={i}
            className="group bg-ios-dark rounded-3xl p-8 border border-white/5 hover:border-brand-orange/20 hover:bg-white/5 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                <s.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-6 font-medium">
              {s.desc}
            </p>

            <ul className="space-y-2 mt-auto">
              {s.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-ios-gray">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-orange shrink-0"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Services;