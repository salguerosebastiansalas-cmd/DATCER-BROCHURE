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
    { component: <Cover />, title: "Portada", subtitle: "Inicio" },
    { component: <About />, title: "Nosotros", subtitle: "Propuesta" },
    { component: <Services />, title: "Servicios", subtitle: "Ingeniería" },
    { component: <Process />, title: "Proceso", subtitle: "Workflow" },
    { component: <WhyUs />, title: "Por Qué", subtitle: "Valor" },
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
    window.addEventListener('wheel', onWheel);
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
      
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-brand-orange/10 blur-[120px]"></div>
        <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] rounded-full bg-gray-800/20 blur-[120px]"></div>
      </div>

      {/* Main Slider */}
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
               <div className={`w-full h-full transition-all duration-1000 delay-100 ${currentPage === index ? 'opacity-100 scale-100 blur-0' : 'opacity-40 scale-95 blur-md grayscale'}`}>
                 {page.component}
               </div>
            </section>
          ))}
        </div>
      </main>

      {/* Scroll Hint - Adjusted for mobile position */}
      <div 
        className={`fixed bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 transition-all duration-700 pointer-events-none ${
          currentPage === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="animate-float flex flex-col items-center">
            <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border border-white/20 flex justify-center pt-2 bg-black/20 backdrop-blur-sm">
                <div className="w-0.5 h-1.5 md:w-1 md:h-2 bg-brand-orange rounded-full animate-bounce"></div>
            </div>
            <span className="text-[8px] md:text-[10px] text-white/50 uppercase tracking-[0.2em] mt-2 font-medium">
                Scroll / Swipe
            </span>
        </div>
      </div>

      {/* Control Capsule - More compact on mobile */}
      <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto max-w-[400px]">
        <div className="glass-panel rounded-full px-2 py-1.5 md:py-2 flex items-center justify-between md:gap-4 shadow-2xl transition-all duration-300">
          
          {/* Brand Name (Hidden on very small screens to save space) */}
          <div className="hidden sm:flex items-center gap-2 pl-4 pr-2 border-r border-white/10">
            <div className="font-bold text-xs md:text-sm font-logo uppercase italic">
              <span className="text-brand-orange">DAT</span>
              <span className="text-brand-grey">CER</span>
            </div>
          </div>

          {/* Current Page Text */}
          <div className="flex-1 md:flex-none text-center md:text-left px-4">
             <span className="text-[10px] md:text-xs text-ios-gray uppercase tracking-widest block md:inline font-bold">
               {pages[currentPage].title}
             </span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-1">
            <button 
              onClick={() => navigate('prev')}
              disabled={currentPage === 0}
              className="p-2 md:p-2.5 rounded-full hover:bg-white/10 disabled:opacity-10 transition-all active:scale-90"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            
            <div className="text-[10px] md:text-xs font-mono text-ios-gray w-8 md:w-10 text-center">
              {currentPage + 1}
            </div>

            <button 
              onClick={() => navigate('next')}
              disabled={currentPage === totalPages - 1}
              className="p-2 md:p-2.5 rounded-full hover:bg-white/10 disabled:opacity-10 transition-all active:scale-90"
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>

            <button 
              onClick={() => setShowOverview(true)}
              className="p-2 md:p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-all active:scale-90 ml-1"
              aria-label="Vista general"
            >
              <Grid size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar (Orange) */}
      <div className="fixed top-0 left-0 h-[2px] w-full z-50 bg-white/5">
        <div 
          className="h-full bg-brand-orange transition-all duration-1000 ease-out"
          style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
        ></div>
      </div>

      {/* Overview Grid */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center ${
          showOverview ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button 
          onClick={() => setShowOverview(false)}
          className="absolute top-6 right-6 md:top-8 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[70]"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-4xl w-full px-6 overflow-y-auto max-h-[80vh] py-10">
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index);
                setShowOverview(false);
              }}
              className={`group text-left p-4 md:p-6 rounded-2xl border transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-ios-dark border-brand-orange' 
                  : 'bg-ios-dark/50 border-white/5 hover:border-white/20'
              }`}
            >
              <span className={`text-[10px] font-bold mb-1 block ${currentPage === index ? 'text-brand-orange' : 'text-ios-gray'}`}>
                PAGINA 0{index + 1}
              </span>
              <h3 className={`text-sm md:text-xl font-bold ${currentPage === index ? 'text-white' : 'text-white/70'}`}>
                {page.title}
              </h3>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default App;