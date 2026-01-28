import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D3321] font-sans selection:bg-[#556B2F] selection:text-white">
      {/* Navigation */}
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter text-[#556B2F]">صُمود</h1>
        <div className="hidden md:flex gap-10 text-sm font-bold uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-[#556B2F] transition-all border-b-2 border-transparent hover:border-[#556B2F]">الأرض</a>
          <a href="#" className="hover:text-[#556B2F] transition-all border-b-2 border-transparent hover:border-[#556B2F]">القصة</a>
          <a href="#" className="hover:text-[#556B2F] transition-all border-b-2 border-transparent hover:border-[#556B2F]">المتجر</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.3em] uppercase bg-[#556B2F] text-white rounded-full">
          Est. 2025 • فلسطين
        </span>
        
        <h2 className="text-6xl md:text-8xl font-serif mb-10 leading-[1.1] tracking-tight text-[#1A1F12]">
          جذورٌ لا تنكسر، <br/> <span className="text-[#556B2F]">حكايةٌ لا تنتهي.</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-[#5A634D] mb-14 max-w-3xl mx-auto leading-relaxed font-light">
          نحن نوثق صمود الأرض من خلال أجود ما تنتجه؛ زيتوننا، عسلنا، وروحنا التي تتجذر في كل تفصيل.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="px-10 py-5 bg-[#556B2F] text-white font-bold text-lg hover:bg-[#3D4D22] transition-all shadow-2xl shadow-[#556B2F]/30 transform hover:-translate-y-1">
            تسوق الآن
          </button>
          <button className="px-10 py-5 border-2 border-[#556B2F] text-[#556B2F] font-bold text-lg hover:bg-[#556B2F] hover:text-white transition-all transform hover:-translate-y-1">
            قصتنا الكاملة
          </button>
        </div>
      </header>

      {/* Visual Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-[500px] bg-[#E5E1D8] flex items-center justify-center group cursor-pointer overflow-hidden relative">
           <div className="absolute inset-0 bg-[#556B2F]/10 group-hover:bg-[#556B2F]/0 transition-all duration-700"></div>
           <span className="text-[#556B2F] font-serif italic text-2xl group-hover:scale-110 transition-transform">ثمار الأرض</span>
        </div>
        <div className="h-[500px] bg-[#556B2F] flex items-center justify-center group cursor-pointer overflow-hidden relative text-[#FDFBF7]">
           <span className="font-serif italic text-2xl group-hover:scale-110 transition-transform">صُنع بحب في فلسطين</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#E5E1D8] text-center text-sm text-[#8A937B] tracking-widest">
        &copy; 2026 صمود - جميع الحقوق محفوظة
      </footer>
    </div>
  );
}

export default App;
