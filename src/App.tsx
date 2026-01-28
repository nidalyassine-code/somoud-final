import React, { useEffect, useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen bg-[#FDFBF7] text-[#2D3321] font-sans selection:bg-[#556B2F] selection:text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Navigation */}
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto relative z-50">
        <h1 className="text-3xl font-bold tracking-tighter text-[#556B2F] cursor-pointer hover:scale-110 transition-all duration-300">
          صُمود
        </h1>
        <div className="hidden md:flex gap-10 text-sm font-bold uppercase tracking-[0.2em]">
          {['الأرض', 'القصة', 'المتجر'].map((item) => (
            <a key={item} href={`#${item}`} className="relative group py-2">
              <span className="group-hover:text-[#556B2F] transition-colors duration-300">{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#556B2F] transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative max-w-6xl mx-auto px-6 py-20 text-center overflow-hidden">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="inline-block px-6 py-2 mb-8 text-[11px] font-black tracking-[0.4em] uppercase bg-[#556B2F] text-[#FDFBF7] rounded-full shadow-lg animate-bounce">
            فلسطين • 2026
          </span>
          
          <h2 className="text-7xl md:text-9xl font-serif mb-12 leading-tight tracking-tighter text-[#1A1F12]">
            جذورٌ لا <span className="text-[#556B2F] italic">تنكسر</span>، <br/> 
            حكايةٌ لا <span className="relative">تنتهي<span className="absolute bottom-2 left-0 w-full h-3 bg-[#556B2F]/10 -z-10"></span></span>
          </h2>
          
          <p className="text-xl md:text-3xl text-[#5A634D] mb-16 max-w-3xl mx-auto leading-relaxed font-light italic">
            "من عمق التربة إلى أفق العالم، نروي قصة الأرض التي لا تموت."
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8 items-center">
            <button className="group relative px-12 py-6 bg-[#556B2F] text-[#FDFBF7] font-bold text-xl rounded-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(85,107,47,0.3)] active:scale-95">
              <span className="relative z-10">ابدأ الرحلة</span>
              <div className="absolute inset-0 bg-[#2D3321] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
            <button className="group px-12 py-6 border-2 border-[#556B2F] text-[#556B2F] font-bold text-xl rounded-sm hover:bg-[#556B2F] hover:text-[#FDFBF7] transition-all duration-500 relative overflow-hidden">
              <span className="relative z-10">شاهد القصة</span>
            </button>
          </div>
        </div>
      </header>

      {/* Interactive Grid Sections */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Box 1 */}
        <div className="group relative h-[600px] bg-[#E5E1D8] overflow-hidden cursor-pointer shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D3321] via-transparent to-transparent opacity-60 z-10"></div>
          <div className="absolute inset-0 bg-[#556B2F] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out opacity-20"></div>
          <div className="absolute bottom-10 right-10 z-20 transition-all duration-500 group-hover:bottom-16">
            <h3 className="text-4xl font-serif text-white mb-4">كُنوز الأرض</h3>
            <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700">تصفح أجود أنواع الزيت والعسل</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="group relative h-[600px] bg-[#556B2F] overflow-hidden cursor-pointer shadow-2xl">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="absolute inset-0 scale-110 bg-[#2D3321] opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <span className="text-5xl font-serif text-[#FDFBF7] border-b-2 border-transparent group-hover:border-[#FDFBF7] transition-all duration-500 py-4">
              إرثنا
            </span>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-20 text-center border-t border-[#556B2F]/10">
        <p className="text-[#556B2F] font-bold tracking-widest text-sm uppercase opacity-50">
          صنع بكل فخر في فلسطين • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
