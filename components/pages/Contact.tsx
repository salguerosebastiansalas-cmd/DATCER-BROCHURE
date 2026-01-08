import React from 'react';
import PageWrapper from '../layout/PageWrapper';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappNumber = "573024845350";
  const message = encodeURIComponent("Hola DATCER, estoy interesado en agendar una consultoría técnica para mi infraestructura.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <PageWrapper className="justify-center items-center text-center">
      
      <div className="max-w-3xl animate-fade-in">
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
          Hablemos de <br /><span className="text-brand-orange">Infraestructura.</span>
        </h2>
        
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-semibold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
        >
          <span>Agendar Consultoría</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-sm text-ios-gray mb-1">Teléfono / WhatsApp</div>
            <div className="text-lg text-white font-medium">+57 302 484 5350</div>
          </div>
          <div>
            <div className="text-sm text-ios-gray mb-1">Correo</div>
            <div className="text-lg text-white font-medium">gerencia@datcer.com</div>
          </div>
          <div>
            <div className="text-sm text-ios-gray mb-1">Web</div>
            <div className="text-lg text-white font-medium">datcer.com</div>
          </div>
        </div>

        <div className="mt-20 text-ios-gray text-sm">
          Designed by <span className="font-bold text-white">DATCER</span>.
        </div>
      </div>

    </PageWrapper>
  );
};

export default Contact;