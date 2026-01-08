import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappNumber = "573024845350";
  const message = encodeURIComponent("Hola DATCER, estoy interesado en agendar una consultoría técnica.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <PageWrapper className="justify-center items-center text-center">
      
      <div className="max-w-3xl animate-fade-in px-2 w-full">
        <h2 className="text-2xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight mb-4 md:mb-8">
          Hablemos de <br /><span className="text-brand-orange">Infraestructura.</span>
        </h2>
        
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 px-6 py-3 md:px-10 md:py-5 bg-white text-black font-bold text-sm md:text-lg rounded-full shadow-lg"
        >
          <span>Agendar Consultoría</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="mt-8 md:mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          <div className="col-span-1">
            <div className="text-[8px] md:text-sm text-ios-gray mb-1 uppercase tracking-widest font-bold">WhatsApp</div>
            <div className="text-[10px] md:text-lg text-white font-medium">+57 302 484 5350</div>
          </div>
          <div className="col-span-1">
            <div className="text-[8px] md:text-sm text-ios-gray mb-1 uppercase tracking-widest font-bold">Correo</div>
            <div className="text-[10px] md:text-lg text-white font-medium">gerencia@datcer.com</div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="text-[8px] md:text-sm text-ios-gray mb-1 uppercase tracking-widest font-bold">Web</div>
            <div className="text-[10px] md:text-lg text-white font-medium">www.datcer.com</div>
          </div>
        </div>

        <div className="mt-8 md:mt-20 text-ios-gray text-[9px] md:text-sm">
          Designed by <span className="font-bold text-white uppercase italic">DATCER</span>.
        </div>
      </div>

    </PageWrapper>
  );
};

export default Contact;