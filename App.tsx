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
    { component: <About />, title: "Nosotros", subtitle: "Propuesta de Valor" },
    { component: <Services />, title: "Servicios", subtitle: "Ingeniería" },
    { component: <Process />, title: "Proceso", subtitle: "Workflow" },
    { component: <WhyUs />, title: "Por Qué Elegirnos", subtitle: "Diferenciales" },
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
      
      {/* Ambient Background - Updated to DATCER Orange/Warm tones */}
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

      {/* Scroll Hint Animation - Visible mainly on first page, fades out on others */}
      <div 
        className={`fixed bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 transition-all duration-700 pointer-events-none ${
          currentPage === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="animate-float flex flex-col items-center">
            {/* Mouse Body */}
            <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2 bg-black/20 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                {/* Scrolling Wheel */}
                <div className="w-1 h-2 bg-brand-orange rounded-full animate-bounce"></div>
            </div>
            {/* Text */}
            <span className="text-[10px] text-white/50 uppercase tracking-widest mt-2 font-medium">
                Scroll / Desliza
            </span>
        </div>
      </div>

      {/* Control Capsule */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-panel rounded-full px-2 py-2 flex items-center gap-4 shadow-2xl shadow-black/50 transition-all duration-300 hover:scale-[1.02]">
          
          {/* Brand */}
          <div className="hidden md:flex items-center gap-2 pl-4 pr-2">
            <div className="font-bold text-sm font-logo uppercase italic">
              <span className="text-brand-orange">DAT</span>
              <span className="text-brand-grey">CER</span>
            </div>
            <span className="text-ios-gray text-xs">|</span>
            <span className="text-xs text-ios-gray max-w-[120px] truncate">{pages[currentPage].title}</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-1">
            <button 
              onClick={() => navigate('prev')}
              disabled={currentPage === 0}
              className="p-2.5 rounded-full hover:bg-white/10 disabled:opacity-20 transition-all active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="text-xs font-mono text-ios-gray w-12 text-center">
              {currentPage + 1} / {totalPages}
            </div>

            <button 
              onClick={() => navigate('next')}
              disabled={currentPage === totalPages - 1}
              className="p-2.5 rounded-full hover:bg-white/10 disabled:opacity-20 transition-all active:scale-90"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Grid View */}
          <button 
            onClick={() => setShowOverview(true)}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all active:scale-90 ml-2"
          >
            <Grid size={18} />
          </button>
        </div>
      </div>

      {/* Progress Bar (Orange) */}
      <div className="fixed top-0 left-0 h-[2px] w-full z-50 bg-white/5">
        <div 
          className="h-full bg-brand-orange transition-all duration-1000 ease-out"
          style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
        ></div>
      </div>

      {/* Overview */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl transition-opacity duration-500 flex flex-col items-center justify-center ${
          showOverview ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={() => setShowOverview(false)}
          className="absolute top-8 right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-8">
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index);
                setShowOverview(false);
              }}
              className={`group text-left p-6 rounded-3xl border transition-all duration-300 hover:scale-[1.02] ${
                currentPage === index 
                  ? 'bg-ios-dark border-brand-orange ring-1 ring-brand-orange' 
                  : 'bg-ios-dark/50 border-white/5 hover:bg-ios-dark hover:border-white/10'
              }`}
            >
              <span className="text-xs font-semibold text-ios-gray uppercase tracking-widest mb-2 block">
                0{index + 1}
              </span>
              <h3 className={`text-2xl font-semibold mb-1 ${currentPage === index ? 'text-white' : 'text-white/80'}`}>
                {page.title}
              </h3>
              <p className="text-sm text-ios-gray">
                {page.subtitle}
              </p>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default App;