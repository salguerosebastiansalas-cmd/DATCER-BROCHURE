import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Grid, X } from 'lucide-react';
import Cover from './components/pages/Cover';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Process from './components/pages/Process';
import WhyUs from './components/pages/WhyUs';
import Contact from './components/pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showOverview, setShowOverview] = useState(false);
  
  const pages = [
    { component: <Cover />, title: "Portada", subtitle: "Infraestructura Crítica" },
    { component: <About />, title: "Nosotros", subtitle: "Misión y Visión" },
    { component: <Services />, title: "Servicios", subtitle: "Ingeniería Pro" },
    { component: <Process />, title: "Proceso", subtitle: "Metodología" },
    { component: <WhyUs />, title: "Valor", subtitle: "Nuestra Diferencia" },
    { component: <Contact />, title: "Contacto", subtitle: "Hablemos" },
  ];

  const totalPages = pages.length;

  const navigate = useCallback((direction: 'next' | 'prev') => {
    setCurrentPage(curr => {
      if (direction === 'next') return Math.min(curr + 1, totalPages - 1);
      return Math.max(curr - 1, 0);
    });
  }, [totalPages]);

  const handleScroll = useCallback((e: WheelEvent) => {
    if (Math.abs(e.deltaY) < 30 && Math.abs(e.deltaX) < 30) return;
    if (e.deltaY > 0 || e.deltaX > 0) navigate('next');
    else navigate('prev');
  }, [navigate]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const onWheel = (e: WheelEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handleScroll(e), 50);
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [handleScroll]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowRight', 'PageDown', 'Space'].includes(e.key)) navigate('next');
      else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) navigate('prev');
      else if (e.key === 'Escape') setShowOverview(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-ios-black text-white font-sans selection:bg-brand-orange selection:text-white">
      
      {/* Fondo Ambientale */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-brand-orange/10 blur-[120px]"></div>
        <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] rounded-full bg-brand-grey/10 blur-[120px]"></div>
      </div>

      {/* Slider Horizontal Cinematográfico */}
      <main className="h-full w-full relative z-10">
        <div 
          className="flex h-full transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1)"
          style={{ 
            width: `${totalPages * 100}%`,
            transform: `translateX(-${(currentPage * 100) / totalPages}%)` 
          }}
        >
          {pages.map((page, index) => (
            <section 
              key={index} 
              className="w-full h-full relative flex-shrink-0 flex items-center justify-center overflow-hidden"
              style={{ width: `${100 / totalPages}%` }}
            >
               <div className={`w-full h-full transition-all duration-1000 delay-100 px-4 md:px-0 ${currentPage === index ? 'opacity-100 scale-100 blur-0' : 'opacity-30 scale-90 blur-xl grayscale'}`}>
                 {page.component}
               </div>
            </section>
          ))}
        </div>
      </main>

      {/* INDICADOR DE SCROLL ANIMADO */}
      <div 
        className={`fixed bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3 transition-all duration-700 pointer-events-none ${
          currentPage === 0 ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <span className="text-[9px] md:text-[10px] font-bold tracking-[0.6em] text-white uppercase ml-1">Scroll</span>
        <div className="w-[18px] h-[30px] md:w-[22px] md:h-[36px] border-2 border-white/20 rounded-full flex justify-center p-1.5">
          <div className="w-1 h-1.5 md:w-1.5 md:h-2 bg-brand-orange rounded-full animate-scroll-dot"></div>
        </div>
      </div>

      {/* Cápsula de Navegación Responsiva */}
      <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[500px]">
        <div className="glass-panel rounded-full px-3 md:px-6 py-2 md:py-3 flex items-center justify-between shadow-2xl border border-white/10">
          
          <div className="flex items-center gap-2 md:gap-4 pr-3 md:pr-6 border-r border-white/10 overflow-hidden">
            <div className="font-bold text-sm md:text-lg font-logo uppercase italic shrink-0">
              <span className="text-brand-orange">DAT</span>
              <span className="text-brand-grey">CER</span>
            </div>
            <div className="hidden sm:flex flex-col min-w-[80px] md:min-w-[120px]">
               <span className="text-[8px] md:text-[10px] text-brand-orange font-bold uppercase tracking-widest">{pages[currentPage].title}</span>
               <span className="text-[10px] md:text-[12px] text-ios-gray font-medium truncate">{pages[currentPage].subtitle}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-2 shrink-0">
            <button 
              onClick={() => navigate('prev')}
              disabled={currentPage === 0}
              className="p-1.5 md:p-2 rounded-full hover:bg-white/10 disabled:opacity-20 transition-all active:scale-90"
            >
              <ChevronLeft size={18} />
            </button>
            
            <div className="text-[10px] md:text-sm font-mono text-ios-gray w-8 md:w-12 text-center">
              {currentPage + 1}/{totalPages}
            </div>

            <button 
              onClick={() => navigate('next')}
              disabled={currentPage === totalPages - 1}
              className="p-1.5 md:p-2 rounded-full hover:bg-white/10 disabled:opacity-20 transition-all active:scale-90"
            >
              <ChevronRight size={18} />
            </button>

            <div className="h-4 w-[1px] bg-white/10 mx-1"></div>

            <button 
              onClick={() => setShowOverview(true)}
              className="p-2 md:p-2.5 rounded-full bg-white text-black hover:bg-brand-orange hover:text-white transition-all active:scale-90 shadow-lg shrink-0"
            >
              <Grid size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Grid de Vista Previa */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-3xl transition-all duration-500 flex flex-col items-center justify-center ${
          showOverview ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button 
          onClick={() => setShowOverview(false)}
          className="absolute top-6 md:top-10 right-6 md:right-10 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl w-full px-6 md:px-12 max-h-[80vh] overflow-y-auto">
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index);
                setShowOverview(false);
              }}
              className={`group text-left p-4 md:p-8 rounded-2xl md:rounded-3xl border transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-ios-dark border-brand-orange shadow-[0_0_30px_rgba(242,103,34,0.15)]' 
                  : 'bg-ios-dark/50 border-white/5 hover:border-white/20'
              }`}
            >
              <span className={`text-[10px] font-bold mb-1 md:mb-2 block ${currentPage === index ? 'text-brand-orange' : 'text-ios-gray'}`}>
                PAGE 0{index + 1}
              </span>
              <h3 className="text-lg md:text-2xl font-bold text-white mb-1">{page.title}</h3>
              <p className="hidden md:block text-xs text-ios-gray leading-snug">{page.subtitle}</p>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default App;