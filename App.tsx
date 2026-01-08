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
    { component: <Cover />, title: "Portada" },
    { component: <About />, title: "Nosotros" },
    { component: <Services />, title: "Servicios" },
    { component: <Process />, title: "Proceso" },
    { component: <WhyUs />, title: "Valor" },
    { component: <Contact />, title: "Contacto" },
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
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white font-sans">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-orange/10 blur-[100px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-grey/10 blur-[100px]"></div>
      </div>

      {/* Main Content Slider */}
      <main className="h-full w-full relative z-10">
        <div 
          className="flex h-full transition-transform duration-700 cubic-bezier(0.2, 0, 0, 1)"
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
               <div className={`w-full h-full transition-all duration-700 ${currentPage === index ? 'opacity-100 scale-100' : 'opacity-20 scale-95 grayscale blur-sm'}`}>
                 {page.component}
               </div>
            </section>
          ))}
        </div>
      </main>

      {/* Simplified Mobile/Desktop Control Bar */}
      <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[400px]">
        <div className="glass-panel rounded-full px-3 py-1.5 flex items-center justify-between shadow-2xl">
          
          <div className="flex items-center gap-2 pl-2">
            <span className="text-[10px] md:text-xs text-brand-orange font-bold uppercase tracking-widest truncate max-w-[70px]">
              {pages[currentPage].title}
            </span>
          </div>

          <div className="flex items-center gap-0.5">
            <button 
              onClick={() => navigate('prev')}
              disabled={currentPage === 0}
              className="p-2 rounded-full hover:bg-white/10 disabled:opacity-5 transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            
            <div className="text-[10px] font-mono text-ios-gray w-8 text-center">
              {currentPage + 1}
            </div>

            <button 
              onClick={() => navigate('next')}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-full hover:bg-white/10 disabled:opacity-5 transition-all"
            >
              <ChevronRight size={16} />
            </button>

            <button 
              onClick={() => setShowOverview(true)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 ml-1 transition-all"
            >
              <Grid size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Overview Modal */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl transition-all duration-300 flex flex-col items-center justify-center ${
          showOverview ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button 
          onClick={() => setShowOverview(false)}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-2 gap-3 max-w-sm w-full px-6">
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index);
                setShowOverview(false);
              }}
              className={`text-center p-3 rounded-xl border transition-all ${
                currentPage === index 
                  ? 'bg-ios-dark border-brand-orange' 
                  : 'bg-ios-dark/40 border-white/5'
              }`}
            >
              <span className={`text-[8px] font-bold block mb-1 uppercase ${currentPage === index ? 'text-brand-orange' : 'text-ios-gray'}`}>
                0{index + 1}
              </span>
              <h3 className="text-xs font-bold text-white">{page.title}</h3>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default App;