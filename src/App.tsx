import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D3321] font-sans selection:bg-[#556B2F] selection:text-white">
      {/* Header / Navigation */}
      <nav className="p-6 flex justify-between items-center border-b border-[#E5E1D8]">
        <h1 className="text-3xl font-bold tracking-tighter text-[#556B2F]">صُمود</h1>
        <div className="space-x-8 space-x-reverse hidden md:flex text-sm font-medium uppercase tracking-widest">
          <a href="#" className="hover:text-[#556B2F] transition-colors">الأرض</a>
          <a href="#" className="hover:text-[#556B2F] transition-colors">القصة</a>
          <a href="#" className="hover:text-[#556B2F] transition-colors">المتجر</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase bg-[#556B2F]/10 text-[#556B2F] rounded-full">
          تجذر، صمود، استمرار
        </div>
        
        <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight max-w-4xl">
          أصالة الأرض الفلسطينية في كل قطرة وزهرة.
        </h2>
        
        <p className="text-lg md:text-xl text-[#666] mb-12 max-w-2xl leading-relaxed">
          نحن هنا لنحكي قصة الأرض التي لا تموت، من خلال منتجات تعكس روح الصمود وعمق التاريخ.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-[#556B2F] text-white font-bold rounded-sm hover:bg-[#3D4D22] transition-all shadow-lg shadow-[#556B2F]/20">
            اكتشف المنتجات
          </button>
          <button className="px-8 py-4 border-2 border-[#556B2F] text-[#556B2F] font-bold rounded-sm hover:bg-[#556B2F]/5 transition-all">
            تعرف على قصتنا
          </button>
        </div>
      </main>

      {/* Placeholder for Images/Grid */}
      <section className="bg-[#E5E1D8]/30 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[3/4] bg-[#D9D4C7] rounded-sm overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-[#556B2F]/0 group-hover:bg-[#556B2F]/20 transition-all duration-500"></div>
              <div className="absolute bottom-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-bold text-xl text-black">منتج {i}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
