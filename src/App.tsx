import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // هنا نضع منتجاتك الحقيقية - يمكنك إضافة المزيد بسهولة
  const products = [
    {
      id: 1,
      name: "عصير صمود الطبيعي",
      price: "15 ₪",
      description: "عصير طبيعي 100% مستخلص من خيرات الأرض الفلسطينية.",
      image: "https://raw.githubusercontent.com/nitalyassine-code/somoud-final/main/public/Screenshot.jpg" // رابط صورتك
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D3321] font-sans text-right" dir="rtl">
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
          <div className="text-center">
             <span className="inline-block px-6 py-2 mb-8 text-[11px] font-black tracking-[0.4em] uppercase bg-[#556B2F] text-white rounded-full">فلسطين • 2026</span>
             <h2 className="text-7xl md:text-9xl font-serif mb-12 leading-tight text-[#1A1F12]">جذورٌ لا تنكسر</h2>
             <button onClick={() => setCurrentPage('shop')} className="px-12 py-6 bg-[#556B2F] text-white font-bold text-xl hover:bg-[#2D3321] transition-all">اكتشف المتجر</button>
          </div>
        )}

        {currentPage === 'shop' && (
          <div className="text-center">
            <h2 className="text-5xl font-serif text-[#556B2F] mb-10">منتجاتنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {products.map(product => (
                <div key={product.id} className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden border border-[#556B2F]/5">
                  <div className="aspect-[4/5] overflow-hidden bg-[#F3F4F1]">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 text-right">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-black text-[#556B2F]">{product.price}</span>
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                    </div>
                    <p className="text-[#5A634D] mb-8 leading-relaxed">{product.description}</p>
                    <button className="w-full py-4 border-2 border-[#556B2F] text-[#556B2F] font-bold hover:bg-[#556B2F] hover:text-white transition-all">إضافة للسلة</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === 'story' && (
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-serif text-[#556B2F] mb-8">حكايتنا</h2>
            <p className="text-2xl leading-relaxed text-[#2D3321] italic">
              "نحن لا نبيع منتجات فقط، نحن نتقاسم معكم بركة الأرض الفلسطينية وصمود أهلها."
            </p>
          </div>
        )}
      </main>

      <footer className="py-10 text-center opacity-40 text-[10px] mt-20 border-t border-[#556B2F]/5">صنع بكل فخر في فلسطين • 2026</footer>
    </div>
  );
}

export default App;
