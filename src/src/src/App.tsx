import React from 'react';

function App() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif', backgroundColor: '#FDFBF7', minHeight: '100vh' }}>
      <h1 style={{ color: '#556B2F', fontSize: '48px', marginBottom: '10px' }}>صُمود</h1>
      <p style={{ fontSize: '20px', color: '#666', fontStyle: 'italic' }}>Resilience of the Land</p>
      
      <div style={{ 
        marginTop: '40px', 
        padding: '30px', 
        border: '2px solid #556B2F', 
        borderRadius: '15px',
        display: 'inline-block',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#556B2F', marginBottom: '15px' }}>الموقع قيد التشغيل بنجاح!</h2>
        <p style={{ color: '#444' }}>يا نضال، إذا كنت ترى هذه الصفحة، فقد نجحت في تخطي أصعب عقبة تقنية.</p>
        <p style={{ fontWeight: 'bold', marginTop: '10px' }}>نحن الآن نربط "صمود" بالواقع.</p>
      </div>

      <footer style={{ marginTop: '50px', color: '#888', fontSize: '14px' }}>
        © 2026 مشروع صمود - لدعم الاقتصاد المحلي
      </footer>
    </div>
  );
}

export default App;
