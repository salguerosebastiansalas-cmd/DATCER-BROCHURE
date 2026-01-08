import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappNumber = "573024845350";
  const message = encodeURIComponent("Hola DATCER, estoy interesado en agendar una consultoría técnica para mi infraestructura.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <PageWrapper className="justify-center items-center text-center">
      
      <div className="max-w-3xl animate-fade-in px-4">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 md:mb-8">
          Hablemos de <br /><span className="text-brand-orange">Infraestructura.</span>
        </h2>
        
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-white text-black font-semibold text-base md:text-lg rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-xl"
        >
          <span>Agendar Consultoría</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
          <div className="px-2">
            <div className="text-[10px] md:text-sm text-ios-gray mb-1 uppercase tracking-widest">WhatsApp</div>
            <div className="text-base md:text-lg text-white font-medium">+57 302 484 5350</div>
          </div>
          <div className="px-2">
            <div className="text-[10px] md:text-sm text-ios-gray mb-1 uppercase tracking-widest">Correo</div>
            <div className="text-base md:text-lg text-white font-medium">gerencia@datcer.com</div>
          </div>
          <div className="px-2">
            <div className="text-[10px] md:text-sm text-ios-gray mb-1 uppercase tracking-widest">Web</div>
            <div className="text-base md:text-lg text-white font-medium underline underline-offset-4 decoration-brand-orange/50">datcer.com</div>
          </div>
        </div>

        <div className="mt-12 md:mt-20 text-ios-gray text-[10px] md:text-sm">
          Designed by <span className="font-bold text-white">DATCER</span>.
        </div>
      </div>

    </PageWrapper>
  );
};

export default Contact;