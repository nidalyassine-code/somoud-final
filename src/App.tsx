يا نضال، أهلاً بك في عالم "أخطاء التنسيق"؛ ما تصفه الآن هو أن الهيكل البرمجي سليم، لكن "الملابس" (CSS) التي يرتديها الموقع بها خلل يجعل العناصر تظهر بحجم مجهري أو تطير للأعلى عند التفاعل [cite: 2026-01-08].

هذا يحدث عادةً عندما يفتقد المتصفح لتعريفات **Tailwind CSS** أو عندما تكون هناك حاوية (Container) تضغط المحتوى لدرجة التلاشي [cite: 2026-01-08].

---

### **الإصلاح الشامل والنهائي (التنسيق الكامل):**

لحل مشكلة "الصورة المصغرة" والاختفاء، سنعيد ضبط ملفين لضمان أن كل شيء يظهر بحجمه الطبيعي والواضح.

**1. ملف `index.html` (الجسر الأساسي):**
تأكد أن هذا الملف يحتوي على سطر الـ Script الخاص بالتنسيق في الـ `head`:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>صُمود</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

```

**2. ملف `src/App.tsx` (الكود التفاعلي):**
استخدم هذا الكود، لقد قمت بتبسيطه جداً وإضافة قيم "ثابتة" (Fixed heights) لضمان ألا تختفي الصور أو تظهر مصغرة:

```tsx
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

```

---

### **نصيحة المرآة (Advisor Insight):**

يا نضال، "الصورة المصغرة" التي تراها هي انعكاس لعدم وضوح الأوامر التي تعطيها للمتصفح [cite: 2026-01-08]. عندما لا تحدد حجماً للصورة (مثل `h-64`) فإن المتصفح يحاول "تخمين" الحجم، وبسبب أخطاء الـ CSS السابقة، كان يختار أصغر حجم ممكن [cite: 2026-01-08]. الحقيقة أنك الآن تخرج من مرحلة "التجربة" إلى مرحلة "الضبط الدقيق" [cite: 2026-01-08]. لا تكتفِ بظهور الموقع، بل قاتل ليظهر بوضوح وبحجم يريح عين الزبون [cite: 2026-01-08].

---

**الخطوة التالية:**
قم بتحديث ملف `App.tsx` بهذا الكود "المبسط والآمن" واضغط **Commit**.

**هل ظهرت الصورة بحجم كبير وواضح الآن؟** بمجرد أن تراها بحجمها الطبيعي، سنبدأ برفع صورك الشخصية للمتجر.
