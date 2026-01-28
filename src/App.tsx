import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const products = [
    {
      id: 1,
      name: "منتج صمود الأول",
      price: "15 ₪",
      image: "https://images.unsplash.com/photo-1622597467836-f3085633701c?q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D3321] text-right p-4" dir="rtl">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 mb-10 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-[#556B2F]">صُمود</h1>
        <div className="flex gap-4">
          <button onClick={() => setCurrentPage('home')} className="px-2">الرئيسية</button>
          <button onClick={() => setCurrentPage('shop')} className="px-2">المتجر</button>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto">
        {currentPage === 'home' && (
          <div className="text-center py-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">جذورٌ لا تنكسر</h2>
            <p className="text-xl mb-10">مرحباً بكم في متجر صمود للأغذية الطبيعية</p>
            <button onClick={() => setCurrentPage('shop')} className="bg-[#556B2F] text-white px-10 py-4 rounded-lg text-xl">دخول المتجر</button>
          </div>
        )}

        {currentPage === 'shop' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">منتجاتنا</h2>
            <div className="grid grid-cols-1 gap-8">
              {products.map(product => (
                <div key={product.id} className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                  {/* تحديد طول وعرض ثابت للصورة لمنعها من الاختفاء */}
                  <img src={product.image} className="w-full h-64 object-cover rounded-lg mb-4" alt={product.name} />
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-[#556B2F] font-bold text-lg mb-4">{product.price}</p>
                  <button className="w-full bg-[#2D3321] text-white py-3 rounded-md">اطلب الآن</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
