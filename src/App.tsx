import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D3321] font-sans">
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto border-b border-[#556B2F]/10">
        <h1 onClick={() => setCurrentPage('home')} className="text-3xl font-bold text-[#556B2F] cursor-pointer">صُمود</h1>
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
          <button onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'text-[#556B2F] border-b-2 border-[#556B2F]' : ''}>الأرض</button>
          <button onClick={() => setCurrentPage('story')} className={currentPage === 'story' ? 'text-[#556B2F] border-b-2 border-[#556B2F]' : ''}>القصة</button>
          <button onClick={() => setCurrentPage('shop')} className={currentPage === 'shop' ? 'text-[#556B2F] border-b-2 border-[#556B2F]' : ''}>المتجر</button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20">
        {currentPage === 'home' && (
          <div className="text-center animate-in fade-in duration-1000">
             <span className="inline-block px-6 py-2 mb-8 text-[11px] font-black tracking-[0.4em] uppercase bg-[#556B2F] text-white rounded-full">فلسطين • 2026</span>
             <h2 className="text-7xl md:text-9xl font-serif mb-12 leading-tight text-[#1A1F12]">جذورٌ لا تنكسر</h2>
             <button onClick={() => setCurrentPage('shop')} className="px-12 py-6 bg-[#556B2F] text-white font-bold text-xl hover:bg-[#2D3321] transition-all">اكتشف المتجر</button>
          </div>
        )}

        {currentPage === 'shop' && (
          <div className="text-center animate-in slide-in-from-bottom duration-700">
            <h2 className="text-5xl font-serif text-[#556B2F] mb-10">متجر الأرض</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white p-6 shadow-md border border-[#556B2F]/10 rounded-lg">
                  <div className="h-48 bg-[#E5E1D8] mb-4 rounded flex items-center justify-center text-[#556B2F]">صورة المنتج</div>
                  <h4 className="font-bold text-xl mb-2">منتج صمود {i}</h4>
                  <p className="text-[#5A634D] text-sm">أجود ما تنتجه الأرض بلمسة عصرية.</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === 'story' && (
          <div className="max-w-3xl mx-auto text-right animate-in fade-in duration-1000">
            <h2 className="text-5xl font-serif text-[#556B2F] mb-8 text-center">حكايتنا</h2>
            <p className="text-2xl leading-relaxed text-[#2D3321] italic text-center">
              "نحن لا نبيع زيتوناً وعسلاً فقط، نحن نبيع صمود شعب وقصة أرض تتحدى الفناء."
            </p>
          </div>
        )}
      </main>

      <footer className="py-10 text-center opacity-40 text-[10px] mt-20 border-t border-[#556B2F]/5">صنع بكل فخر في فلسطين • 2026</footer>
    </div>
  );
}

export default App;
