import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Grid, X, Sun, Moon, Languages, ArrowUpRight } from 'lucide-react';
import Cover from './components/pages/Cover';
import About from './components/pages/About';
import Services from './components/pages/Services';
import IntegratedServices from './components/pages/IntegratedServices';
import Process from './components/pages/Process';
import WhyUs from './components/pages/WhyUs';
import Contact from './components/pages/Contact';

export type Language = 'es' | 'en';
export type Theme = 'dark' | 'light';

export interface DetailItem {
  icon: any;
  title: string;
  desc: string;
  details?: string[];
  tag?: string;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showOverview, setShowOverview] = useState(false);
  const [activeDetail, setActiveDetail] = useState<DetailItem | null>(null);
  const [lang, setLang] = useState<Language>('es');
  const [theme, setTheme] = useState<Theme>('dark');
  
  const pages = [
    { component: <Cover lang={lang} />, title: lang === 'es' ? "PORTADA" : "COVER", subtitle: lang === 'es' ? "Infraestructura Crítica" : "Critical Infrastructure" },
    { component: <About lang={lang} />, title: lang === 'es' ? "NOSOTROS" : "ABOUT", subtitle: lang === 'es' ? "Misión y Filosofía" : "Mission & Philosophy" },
    { component: <Services lang={lang} onOpenDetail={setActiveDetail} />, title: lang === 'es' ? "SERVICIOS" : "SERVICES", subtitle: lang === 'es' ? "Ingeniería de Precisión" : "Precision Engineering" },
    { component: <IntegratedServices lang={lang} onOpenDetail={setActiveDetail} />, title: lang === 'es' ? "INTEGRACIÓN" : "INTEGRATION", subtitle: lang === 'es' ? "Servicios Complementarios" : "Integrated Services" },
    { component: <Process lang={lang} onOpenDetail={setActiveDetail} />, title: lang === 'es' ? "PROCESO" : "PROCESS", subtitle: lang === 'es' ? "Metodología Operativa" : "Operational Methodology" },
    { component: <WhyUs lang={lang} onOpenDetail={setActiveDetail} />, title: lang === 'es' ? "MÉTRICAS" : "METRICS", subtitle: lang === 'es' ? "Dashboard de Eficiencia" : "Efficiency Dashboard" },
    { component: <Contact lang={lang} />, title: lang === 'es' ? "CONTACTO" : "CONTACT", subtitle: lang === 'es' ? "Consulta Global" : "Global Inquiry" },
  ];

  const totalPages = pages.length;

  const navigate = useCallback((direction: 'next' | 'prev') => {
    setCurrentPage(curr => {
      if (direction === 'next') return Math.min(curr + 1, totalPages - 1);
      return Math.max(curr - 1, 0);
    });
  }, [totalPages]);

  const handleScroll = useCallback((e: WheelEvent) => {
    if (activeDetail || showOverview) return;
    if (Math.abs(e.deltaY) < 30) return;
    if (e.deltaY > 0) navigate('next');
    else navigate('prev');
  }, [navigate, activeDetail, showOverview]);

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
      if (activeDetail || showOverview) {
        if (e.key === 'Escape') {
          setActiveDetail(null);
          setShowOverview(false);
        }
        return;
      }
      if (['ArrowDown', 'ArrowRight', 'Space'].includes(e.key)) navigate('next');
      else if (['ArrowUp', 'ArrowLeft'].includes(e.key)) navigate('prev');
      else if (e.key === 'Escape') setShowOverview(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, activeDetail, showOverview]);

  return (
    <div className={`relative h-screen w-screen overflow-hidden font-sans transition-all duration-1000 ease-in-out ${theme === 'dark' ? 'theme-dark bg-[#000000] text-[#f5f5f7]' : 'theme-light bg-[#f5f5f7] text-[#1d1d1f]'}`}>
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-[-10%] left-[-5%] w-[70vw] h-[70vw] rounded-full transition-all duration-1000 ${theme === 'dark' ? 'bg-brand-orange/[0.04] blur-[140px]' : 'bg-brand-orange/[0.02] blur-[120px]'}`}></div>
        <div className={`absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full transition-all duration-1000 ${theme === 'dark' ? 'bg-white/[0.015] blur-[160px]' : 'bg-brand-orange/[0.01] blur-[150px]'}`}></div>
      </div>

      <div className="fixed top-8 right-8 z-[100] flex items-center gap-3">
        <button 
          onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
          className={`nav-capsule p-3 rounded-full transition-all duration-500 border hover:scale-110 active:scale-95 flex items-center justify-center ${theme === 'dark' ? 'text-white border-white/10 bg-white/5' : 'text-black border-black/10 bg-white/80 shadow-sm'}`}
        >
          {theme === 'dark' ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
        </button>
        
        <button 
          onClick={() => setLang(prev => prev === 'es' ? 'en' : 'es')}
          className={`nav-capsule px-5 py-3 rounded-full text-[11px] font-bold tracking-[0.2em] transition-all duration-500 border hover:scale-105 active:scale-95 flex items-center gap-2 ${theme === 'dark' ? 'text-white border-white/10 bg-white/5' : 'text-black border-black/5 bg-white/80 shadow-sm'}`}
        >
          <Languages size={14} />
          {lang.toUpperCase()}
        </button>
      </div>

      <main className="h-full w-full relative z-10">
        <div 
          className="flex h-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
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
               <div className={`w-full h-full transition-all duration-1000 ${currentPage === index ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98] blur-sm'}`}>
                 {page.component}
               </div>
            </section>
          ))}
        </div>
      </main>

      {/* DETAIL MODAL (APPLE STYLE OPTIMIZED) */}
      <div className={`fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12 transition-all duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${activeDetail ? 'opacity-100 pointer-events-auto backdrop-blur-3xl bg-black/40' : 'opacity-0 pointer-events-none backdrop-blur-none bg-black/0'}`}>
        <div className="absolute inset-0" onClick={() => setActiveDetail(null)}></div>
        
        <div className={`glass-card relative w-full max-w-4xl max-h-full overflow-y-auto rounded-[3rem] p-10 md:p-16 border-white/15 shadow-2xl transition-all duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] transform will-change-transform ${activeDetail ? 'scale-100 translate-y-0 opacity-100' : 'scale-[0.92] translate-y-8 opacity-0'}`}>
          {activeDetail && (
            <>
              <button 
                onClick={() => setActiveDetail(null)}
                className="absolute top-8 right-8 p-3 rounded-full hover:bg-current/10 transition-colors z-20"
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col gap-10">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-brand-orange mb-6 flex items-center gap-2">
                      {activeDetail.icon && <activeDetail.icon size={48} strokeWidth={1} />}
                      {activeDetail.tag && <span className="bg-brand-orange/10 text-brand-orange px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest ml-4">{activeDetail.tag}</span>}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">{activeDetail.title}</h2>
                    <div className="h-1.5 w-20 bg-brand-orange rounded-full"></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-5 gap-12">
                  <div className="md:col-span-3">
                    <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80 mb-8">
                      {activeDetail.desc}
                    </p>
                    <p className="text-base opacity-60 leading-relaxed font-light">
                      {lang === 'es' 
                        ? "Nuestra aproximación técnica garantiza que cada componente del diseño responda a los criterios más exigentes de resiliencia y eficiencia operativa global."
                        : "Our technical approach ensures that every design component responds to the most demanding criteria for global resilience and operational efficiency."}
                    </p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-6">{lang === 'es' ? 'Especificaciones Técnicas' : 'Technical Specifications'}</h4>
                    <ul className="flex flex-col gap-4">
                      {(activeDetail.details || [
                        lang === 'es' ? "Cumplimiento normativo ISO/IEC" : "ISO/IEC regulatory compliance",
                        lang === 'es' ? "Estrategia de redundancia N+1" : "N+1 redundancy strategy",
                        lang === 'es' ? "Optimización de eficiencia energética" : "Energy efficiency optimization",
                        lang === 'es' ? "Documentación de ingeniería detallada" : "Detailed engineering documentation"
                      ]).map((det, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-light opacity-70">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                          {det}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-12 pt-8 border-t border-current/10">
                      <button 
                        onClick={() => { setActiveDetail(null); setCurrentPage(6); }}
                        className="group flex items-center gap-3 text-brand-orange font-bold text-xs uppercase tracking-[0.2em] hover:gap-5 transition-all"
                      >
                        {lang === 'es' ? 'Hablar con un consultor' : 'Talk to a consultant'}
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* NAVEGACIÓN INFERIOR */}
      <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[620px] transition-all duration-700 ${activeDetail ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <div className={`nav-capsule rounded-full px-6 py-4 flex items-center justify-between border transition-all duration-700 ${theme === 'dark' ? 'bg-[#111]/80 border-white/15 shadow-2xl shadow-black/40' : 'bg-white/90 border-black/10 shadow-xl shadow-black/5'}`}>
          <div className="flex items-center gap-5 pr-6 border-r border-current/10 min-w-0">
            <div className="text-sm font-logo italic font-bold tracking-tighter shrink-0 select-none">
              <span className="text-brand-orange">DAT</span>
              <span className={theme === 'dark' ? 'text-[#86868b]' : 'text-[#222]'}>CER</span>
            </div>
            <div className="hidden sm:flex flex-col min-w-0">
              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.2em] leading-none mb-1 truncate">
                {pages[currentPage].title}
              </span>
              <span className={`text-[12px] font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px] opacity-50`}>
                {pages[currentPage].subtitle}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => navigate('prev')}
                disabled={currentPage === 0}
                className={`p-1.5 rounded-full disabled:opacity-5 transition-all ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <div className="text-[11px] font-bold w-12 text-center tabular-nums opacity-70">
                <span className={theme === 'dark' ? 'text-white' : 'text-black'}>{currentPage + 1}</span> / {totalPages}
              </div>
              <button 
                onClick={() => navigate('next')}
                disabled={currentPage === totalPages - 1}
                className={`p-1.5 rounded-full disabled:opacity-5 transition-all ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="h-4 w-[1px] bg-current/10"></div>
            <button 
              onClick={() => setShowOverview(true)}
              className={`p-1.5 rounded-full opacity-60 hover:opacity-100 transition-all ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
            >
              <Grid size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* OVERVIEW GRID */}
      <div className={`fixed inset-0 z-[150] backdrop-blur-3xl transition-all duration-[500ms] flex flex-col items-center justify-center ${showOverview ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} ${theme === 'dark' ? 'bg-black/95' : 'bg-white/95'}`}>
        <button onClick={() => setShowOverview(false)} className={`absolute top-10 right-10 p-5 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-white/5 text-white' : 'hover:bg-black/5 text-black'}`}>
          <X size={32} strokeWidth={1} />
        </button>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full px-10">
          {pages.map((page, index) => (
            <button 
              key={index} 
              onClick={() => { setCurrentPage(index); setShowOverview(false); }} 
              className={`group text-left p-8 rounded-[2.5rem] border transition-all duration-500 ${currentPage === index ? 'bg-brand-orange border-brand-orange shadow-2xl shadow-brand-orange/30 scale-[1.03]' : (theme === 'dark' ? 'bg-white/[0.05] border-white/10 hover:bg-white/[0.1]' : 'bg-black/[0.03] border-black/5 hover:bg-black/[0.06]')}`}
            >
              <span className={`text-[10px] font-bold mb-3 block uppercase tracking-widest ${currentPage === index ? 'text-white' : 'text-brand-orange'}`}>0{index + 1}</span>
              <h3 className={`text-xl font-medium tracking-tight ${currentPage === index ? 'text-white' : (theme === 'dark' ? 'text-white' : 'text-black')}`}>{page.title}</h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;