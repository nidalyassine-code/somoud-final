import React, { useState } from 'react';
import { AreaStatus, Product } from './types';

function App() {
  const [status] = useState({
    areaStatus: AreaStatus.ACTIVE,
    statusMessage: "نحن صامدون، الإنتاج مستمر والتوصيل متاح.",
    lastUpdated: new Date().toLocaleDateString('ar-LB')
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Header */}
      <header className="bg-earthy-olive text-white p-8 text-center shadow-lg">
        <h1 className="text-5xl mb-2">صُمود</h1>
        <p className="text-xl font-light italic">Resilience of the Land</p>
      </header>

      {/* Status Bar */}
      <div className="max-w-4xl mx-auto mt-8 p-4 bg-white border-l-4 border-earthy-olive shadow-sm flex justify-between items-center">
        <div>
          <span className="font-bold earthy-olive">حالة المنطقة: </span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">{status.areaStatus}</span>
        </div>
        <div className="text-gray-600 text-sm">آخر تحديث: {status.lastUpdated}</div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl earthy-olive mb-4">دعم المنتجين المحليين</h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            منصة تربطك مباشرة بالمزارعين والحرفيين في المناطق الصامدة. تسوق بوعي، وادعم استمراريتهم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Product Card */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-transform hover:scale-105">
            <div className="h-48 bg-beige-light rounded-lg mb-4 flex items-center justify-center text-gray-400">
              صورة المنتج
            </div>
            <h3 className="text-xl font-bold mb-2">زيت زيتون بلدي</h3>
            <p className="text-gray-600 mb-4 text-sm">عصرة أولى على البارد من أشجار الجنوب الصامدة.</p>
            <button className="bg-earthy-olive text-white px-6 py-2 rounded-full hover:bg-opacity-90 w-full transition-colors">
              طلب عبر واتساب
            </button>
          </div>
        </div>
      </main>

      <footer className="mt-20 p-8 text-center text-gray-500 border-t border-gray-200">
        <p>© {new Date().getFullYear()} مشروع صمود - لدعم الاقتصاد المحلي</p>
      </footer>
    </div>
  );
}

export default App;
