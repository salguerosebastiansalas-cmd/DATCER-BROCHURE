import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { ArrowUpRight } from 'lucide-react';
import { Language } from '../../App';

const Contact: React.FC<{ lang: Language }> = ({ lang }) => {
  const whatsappNumber = "573024845350";
  const message = encodeURIComponent(lang === 'es' ? "Solicitud de información técnica para proyecto de Infraestructura Crítica." : "Technical information request for Critical Infrastructure project.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  const content = {
    es: {
      tag: "Próximos Pasos",
      title: "Hablemos de su",
      highlight: "infraestructura.",
      cta: "Iniciar Consultoría",
      locations: [
        { h: "Chía", p: "Sede Principal" },
        { h: "Bogotá", p: "Consultoría" },
        { h: "Certificación", p: "Uptime / ICREA" },
        { h: "Misión", p: "Critical Facility" }
      ]
    },
    en: {
      tag: "Next Steps",
      title: "Let's talk about your",
      highlight: "infrastructure.",
      cta: "Start Consulting",
      locations: [
        { h: "Chía", p: "Headquarters" },
        { h: "Bogotá", p: "Consultancy" },
        { h: "Certification", p: "Uptime / ICREA" },
        { h: "Mission", p: "Critical Facility" }
      ]
    }
  };

  const t = content[lang];

  return (
    <PageWrapper className="justify-center items-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-10">
          <span className="text-[10px] font-bold opacity-40 uppercase tracking-[0.5em] animate-fade-in">
            {t.tag}
          </span>
        </div>

        <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter mb-16 animate-blur-in">
          {t.title} <br />
          <span className="text-brand-orange drop-shadow-sm">{t.highlight}</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-10 py-5 bg-brand-orange text-white font-bold text-lg rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/20 transition-all duration-500"
          >
            <span>{t.cta}</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          
          <a 
            href="mailto:gerencia@datcer.com"
            className="group flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity"
          >
            <span className="text-lg font-light">gerencia@datcer.com</span>
            <span className="h-[1px] w-0 group-hover:w-full bg-current transition-all duration-500"></span>
          </a>
        </div>

        <div className="pt-16 border-t border-current/5 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-30">
           {t.locations.map((loc, i) => (
             <div key={i} className="text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{loc.h}</p>
                <p className="text-[11px] font-light">{loc.p}</p>
             </div>
           ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;