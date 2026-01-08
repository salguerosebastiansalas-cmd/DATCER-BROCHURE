import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappNumber = "573024845350";
  const message = encodeURIComponent("Solicitud de información técnica para proyecto de Infraestructura Crítica.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <PageWrapper className="justify-center items-center">
      <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in">
        
        <div className="mb-12">
          <span className="text-[10px] font-bold text-apple-muted uppercase tracking-[0.5em]">
            Próximos Pasos
          </span>
        </div>

        <h2 className="text-5xl md:text-8xl font-semibold text-white tracking-tight mb-16">
          Hablemos de su <br />
          <span className="text-brand-orange">infraestructura.</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-24">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-10 py-5 bg-white text-black font-medium text-lg rounded-full hover:bg-brand-orange hover:text-white transition-all duration-500"
          >
            <span>Iniciar Consultoría</span>
            <ArrowUpRight size={18} />
          </a>
          
          <a 
            href="mailto:gerencia@datcer.com"
            className="text-apple-muted hover:text-white text-lg font-light transition-colors border-b border-white/10 pb-1"
          >
            gerencia@datcer.com
          </a>
        </div>

        <div className="pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
           <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Chía</p>
              <p className="text-xs font-light">Sede Principal</p>
           </div>
           <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Bogotá</p>
              <p className="text-xs font-light">Consultoría</p>
           </div>
           <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Certificación</p>
              <p className="text-xs font-light">Uptime / ICREA</p>
           </div>
           <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Misión</p>
              <p className="text-xs font-light">Critical Facility</p>
           </div>
        </div>

      </div>
    </PageWrapper>
  );
};

export default Contact;