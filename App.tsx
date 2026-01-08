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
    { component: <Services />, title: "Servicios", subtitle: "Ingeniería Especializada" },
    { component: <Process />, title: "Proceso", subtitle: "Metodología de Trabajo" },
    { component: <WhyUs />, title: "Por Qué DATCER", subtitle: "Nuestra Diferencia" },
    { component: <Contact />, title: "Contacto", subtitle: "Hablemos de su Proyecto" },
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
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-brand-orange/10 blur-[120px]"></div>
        <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] rounded-full bg-brand-grey/10 blur-[120px]"></div>
      </div>

      {/* Slider */}
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
               <div className={`w-full h-full transition-all duration-1000 delay-100 ${currentPage === index ? 'opacity-100 scale-100' : 'opacity-40 scale-95 blur-md grayscale'}`}>
                 {page.component}
               </div>
            </section>
          ))}
        </div>
      </main>

      {/* Control Capsule UI */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-panel rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl">
          <div className="flex items-center gap-4 pr-6 border-r border-white/10">
            <div className="font-bold text-lg font-logo uppercase italic">
              <span className="text-brand-orange">DAT</span>
              <span className="text-brand-grey">CER</span>
            </div>
          </div>

          <div className="flex flex-col min-w-[140px]">
             <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest">{pages[currentPage].title}</span>
             <span className="text-[12px] text-ios-gray font-medium truncate">{pages[currentPage].subtitle}</span>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('prev')}
              disabled={currentPage === 0}
              className="p-2 rounded-full hover:bg-white/10 disabled:opacity-20 transition-all active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="text-sm font-mono text-ios-gray w-12 text-center">
              {currentPage + 1} / {totalPages}
            </div>

            <button 
              onClick={() => navigate('next')}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-full hover:bg-white/10 disabled:opacity-20 transition-all active:scale-90"
            >
              <ChevronRight size={20} />
            </button>

            <button 
              onClick={() => setShowOverview(true)}
              className="ml-4 p-2.5 rounded-full bg-white text-black hover:bg-brand-orange hover:text-white transition-all active:scale-90"
            >
              <Grid size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Overview Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/90 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center ${
          showOverview ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button 
          onClick={() => setShowOverview(false)}
          className="absolute top-10 right-10 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X size={32} />
        </button>

        <div className="grid grid-cols-3 gap-8 max-w-5xl w-full px-12">
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index);
                setShowOverview(false);
              }}
              className={`group text-left p-8 rounded-3xl border transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-ios-dark border-brand-orange' 
                  : 'bg-ios-dark/50 border-white/5 hover:border-white/20'
              }`}
            >
              <span className={`text-xs font-bold mb-2 block ${currentPage === index ? 'text-brand-orange' : 'text-ios-gray'}`}>
                SECCIÓN 0{index + 1}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">{page.title}</h3>
              <p className="text-sm text-ios-gray leading-snug">{page.subtitle}</p>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default App;