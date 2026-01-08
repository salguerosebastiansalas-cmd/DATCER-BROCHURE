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
    { component: <Cover />, title: "Precision", subtitle: "Misión Crítica" },
    { component: <About />, title: "Visión", subtitle: "Nuestra Filosofía" },
    { component: <Services />, title: "Ingeniería", subtitle: "Core Business" },
    { component: <Process />, title: "Método", subtitle: "Operatividad" },
    { component: <WhyUs />, title: "Valor", subtitle: "Sustentabilidad" },
    { component: <Contact />, title: "Link", subtitle: "Consulta Global" },
  ];

  const totalPages = pages.length;

  const navigate = useCallback((direction: 'next' | 'prev') => {
    setCurrentPage(curr => {
      if (direction === 'next') return Math.min(curr + 1, totalPages - 1);
      return Math.max(curr - 1, 0);
    });
  }, [totalPages]);

  const handleScroll = useCallback((e: WheelEvent) => {
    if (Math.abs(e.deltaY) < 40) return;
    if (e.deltaY > 0) navigate('next');
    else navigate('prev');
  }, [navigate]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const onWheel = (e: WheelEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handleScroll(e), 80);
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [handleScroll]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowRight', 'Space'].includes(e.key)) navigate('next');
      else if (['ArrowUp', 'ArrowLeft'].includes(e.key)) navigate('prev');
      else if (e.key === 'Escape') setShowOverview(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-apple-black text-white font-sans selection:bg-brand-orange/30">
      
      {/* FONDO SOBRIO APPLE: Un solo degradado sutil de profundidad */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(40,40,40,0.15)_0%,_rgba(0,0,0,1)_100%)]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 blur-[150px] rounded-full opacity-60"></div>
      </div>

      {/* Main Content con transiciones suaves */}
      <main className="h-full w-full relative z-10">
        <div 
          className="flex h-full transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1)"
          style={{ 
            width: `${totalPages * 100}%`,
            transform: `translateX(-${(currentPage * 100) / totalPages}%)` 
          }}
        >
          {pages.map((page, index) => (
            <section 
              key={index} 
              className="w-full h-full flex-shrink-0 flex items-center justify-center"
              style={{ width: `${100 / totalPages}%` }}
            >
               <div className={`w-full h-full transition-all duration-1000 ${currentPage === index ? 'opacity-100 blur-0' : 'opacity-0 blur-md translate-y-4'}`}>
                 {page.component}
               </div>
            </section>
          ))}
        </div>
      </main>

      {/* INDICADOR DE SCROLL MINIMALISTA */}
      <div 
        className={`fixed bottom-28 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 transition-opacity duration-1000 ${
          currentPage === 0 ? 'opacity-40' : 'opacity-0'
        }`}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-orange animate-scroll-dot shadow-[0_0_10px_#F26722]"></div>
        </div>
      </div>

      {/* NAVEGACIÓN CORPORATIVA APPLE STYLE */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[460px]">
        <div className="nav-capsule rounded-full px-6 py-3.5 flex items-center justify-between">
          
          <div className="flex items-center gap-4 pr-6 border-r border-white/10">
            <div className="text-base font-logo italic font-bold tracking-tight select-none">
              <span style={{ color: '#F26722' }}>DAT</span>
              <span style={{ color: '#636466' }}>CER</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <button 
                onClick={() => navigate('prev')}
                disabled={currentPage === 0}
                className="p-1.5 rounded-full hover:bg-white/5 disabled:opacity-10 transition-colors text-white"
                aria-label="Anterior"
              >
                <ChevronLeft size={16} />
              </button>
              
              <div className="text-[10px] font-semibold text-apple-muted w-8 text-center uppercase tracking-widest">
                {currentPage + 1}/{totalPages}
              </div>

              <button 
                onClick={() => navigate('next')}
                disabled={currentPage === totalPages - 1}
                className="p-1.5 rounded-full hover:bg-white/5 disabled:opacity-10 transition-colors text-white"
                aria-label="Siguiente"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="h-4 w-[1px] bg-white/10"></div>

            <button 
              onClick={() => setShowOverview(true)}
              className="p-1.5 rounded-full text-apple-muted hover:text-white transition-colors"
              aria-label="Vista general"
            >
              <Grid size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* GRID SELECTOR */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-3xl transition-all duration-700 flex flex-col items-center justify-center ${
          showOverview ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={() => setShowOverview(false)}
          className="absolute top-10 right-10 p-3 rounded-full hover:bg-white/5 transition-colors"
        >
          <X size={24} strokeWidth={1} />
        </button>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full px-10">
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index);
                setShowOverview(false);
              }}
              className={`group text-left p-8 rounded-3xl border transition-all duration-500 ${
                currentPage === index 
                  ? 'bg-white/10 border-brand-orange shadow-[0_20px_60px_rgba(0,0,0,0.6)]' 
                  : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/20'
              }`}
            >
              <span className={`text-[10px] font-bold mb-3 block uppercase tracking-widest ${currentPage === index ? 'text-brand-orange' : 'text-apple-muted'}`}>
                Section 0{index + 1}
              </span>
              <h3 className="text-xl font-medium text-white tracking-tight">{page.title}</h3>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default App;