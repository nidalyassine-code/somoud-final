
import React, { useState, useEffect, useCallback } from 'react';
import { Product, AreaStatus, SiteSettings, Category } from './types';
import { Icons, COLORS } from './constants';
import { generateProductDescription, generateSlogan } from './services/geminiService';

// Mock Storage Service
const STORAGE_KEYS = {
  PRODUCTS: 'soumoud_products',
  SETTINGS: 'soumoud_settings'
};

const App: React.FC = () => {
  const [view, setView] = useState<'public' | 'admin'>('public');
  const [products, setProducts] = useState<Product[]>([]);
  const [settings, setSettings] = useState<SiteSettings>({
    areaStatus: AreaStatus.ACTIVE,
    statusMessage: 'Production area is safe. Harvesting continues.',
    lastUpdated: new Date().toLocaleDateString()
  });
  const [slogan, setSlogan] = useState('Resilience from the Land');
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Data
  useEffect(() => {
    const storedProducts = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    const storedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);

    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      // Default products
      const defaultProducts: Product[] = [
        {
          id: '1',
          name: 'Extra Virgin Olive Oil',
          description: 'Pressed from ancient trees in our mountain groves.',
          price: '$15.00 / 1L',
          category: 'Agricultural',
          imageUrl: 'https://picsum.photos/seed/olive/400/400',
          producerPhone: '96170000000'
        },
        {
          id: '2',
          name: 'Handwoven Wool Rug',
          description: 'Traditional patterns passed down through generations.',
          price: '$45.00',
          category: 'Artisanal',
          imageUrl: 'https://picsum.photos/seed/rug/400/400',
          producerPhone: '96170000000'
        }
      ];
      setProducts(defaultProducts);
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(defaultProducts));
    }

    if (storedSettings) {
      setSettings(JSON.parse(storedSettings));
    }

    // Fetch dynamic slogan
    const fetchSlogan = async () => {
      try {
        const res = await generateSlogan();
        setSlogan(res);
      } catch (e) {
        console.error("Gemini failed for slogan:", e);
      }
    };
    fetchSlogan();
  }, []);

  const saveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(newProducts));
  };

  const saveSettings = (newSettings: SiteSettings) => {
    setSettings(newSettings);
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(newSettings));
  };

  const addProduct = (product: Product) => {
    saveProducts([...products, product]);
  };

  const deleteProduct = (id: string) => {
    saveProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen pb-12 flex flex-col items-center">
      {/* Navigation */}
      <nav className="w-full max-w-md bg-white shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold earthy-olive" style={{ fontFamily: 'Playfair Display' }}>Soumoud</h1>
        <button 
          onClick={() => setView(view === 'public' ? 'admin' : 'public')}
          className="text-xs uppercase tracking-widest font-semibold border-b border-earthy-olive pb-1"
        >
          {view === 'public' ? 'Admin Access' : 'View Shop'}
        </button>
      </nav>

      {/* Main Content Container (Mobile First) */}
      <main className="w-full max-w-md px-4 pt-4 flex-grow">
        {view === 'public' ? (
          <PublicView 
            products={products} 
            settings={settings} 
            slogan={slogan} 
          />
        ) : (
          <AdminDashboard 
            products={products} 
            settings={settings} 
            onAdd={addProduct} 
            onDelete={deleteProduct}
            onUpdateSettings={saveSettings}
          />
        )}
      </main>

      <footer className="mt-8 text-center text-gray-400 text-xs px-6">
        <p>© 2024 Soumoud Collective. Resilience through Solidarity.</p>
      </footer>
    </div>
  );
};

// --- Components ---

const StatusBanner: React.FC<{ settings: SiteSettings }> = ({ settings }) => {
  const getStatusColor = () => {
    switch (settings.areaStatus) {
      case AreaStatus.ACTIVE: return 'bg-green-100 text-green-800 border-green-200';
      case AreaStatus.IMPACTED: return 'bg-red-100 text-red-800 border-red-200';
      case AreaStatus.CAUTION: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  return (
    <div className={`mb-6 p-4 rounded-xl border-l-4 shadow-sm ${getStatusColor()} flex flex-col`}>
      <div className="flex items-center gap-2 mb-1">
        <div className={`w-2 h-2 rounded-full ${settings.areaStatus === AreaStatus.ACTIVE ? 'animate-pulse bg-green-500' : 'bg-current'}`} />
        <span className="font-bold text-sm tracking-wide">LIVE STATUS: {settings.areaStatus}</span>
      </div>
      <p className="text-sm opacity-90">{settings.statusMessage}</p>
      <span className="text-[10px] mt-2 opacity-60">Last updated: {settings.lastUpdated}</span>
    </div>
  );
};

const PublicView: React.FC<{ products: Product[], settings: SiteSettings, slogan: string }> = ({ products, settings, slogan }) => {
  return (
    <div className="animate-fadeIn">
      <header className="mb-8 text-center pt-4">
        <p className="italic text-gray-600 mb-2 leading-relaxed px-4">{slogan}</p>
        <div className="h-[1px] w-12 bg-earthy-olive mx-auto my-4" />
      </header>

      <StatusBanner settings={settings} />

      <div className="grid grid-cols-1 gap-8">
        {products.length === 0 && (
          <div className="text-center py-20 text-gray-400 italic">No products currently available.</div>
        )}
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello! I'm interested in ordering "${product.name}" from Soumoud.`);
    window.open(`https://wa.me/${product.producerPhone}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
      <div className="aspect-square w-full overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{product.category}</span>
          <span className="text-lg font-bold earthy-olive">{product.price}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {product.description}
        </p>
        
        <button 
          onClick={handleWhatsApp}
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-bold shadow-md hover:bg-green-600 transition-colors"
        >
          <Icons.WhatsApp />
          Order via WhatsApp
        </button>
      </div>
    </div>
  );
};

const AdminDashboard: React.FC<{ 
  products: Product[], 
  settings: SiteSettings, 
  onAdd: (p: Product) => void, 
  onDelete: (id: string) => void,
  onUpdateSettings: (s: SiteSettings) => void
}> = ({ products, settings, onAdd, onDelete, onUpdateSettings }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    category: 'Agricultural',
    producerPhone: '96170000000'
  });
  const [aiLoading, setAiLoading] = useState(false);

  const handleAIHelp = async () => {
    if (!newProduct.name) return alert("Enter a product name first");
    setAiLoading(true);
    try {
      const desc = await generateProductDescription(newProduct.name, newProduct.category || 'Agricultural');
      setNewProduct(prev => ({ ...prev, description: desc }));
    } catch (e) {
      console.error(e);
    } finally {
      setAiLoading(false);
    }
  };

  const handleSave = () => {
    if (!newProduct.name || !newProduct.price) return alert("Fill in basic details");
    onAdd({
      id: Date.now().toString(),
      name: newProduct.name!,
      description: newProduct.description || 'No description provided.',
      price: newProduct.price!,
      category: (newProduct.category as Category) || 'Agricultural',
      imageUrl: newProduct.imageUrl || 'https://picsum.photos/seed/default/400/400',
      producerPhone: newProduct.producerPhone!
    });
    setIsAdding(false);
    setNewProduct({ category: 'Agricultural', producerPhone: '96170000000' });
  };

  return (
    <div className="animate-slideUp">
      <h2 className="text-2xl font-bold mb-6 earthy-olive">Admin Panel</h2>

      {/* Area Status Controls */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
        <h3 className="font-bold text-sm mb-4 uppercase tracking-widest text-gray-500">Live Status Management</h3>
        <div className="flex gap-2 mb-4">
          {Object.values(AreaStatus).map(status => (
            <button
              key={status}
              onClick={() => onUpdateSettings({ ...settings, areaStatus: status, lastUpdated: new Date().toLocaleDateString() })}
              className={`flex-1 py-2 text-xs rounded-lg font-bold border transition-all ${
                settings.areaStatus === status 
                  ? 'bg-earthy-olive text-white border-earthy-olive' 
                  : 'bg-white text-gray-400 border-gray-100'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
        <textarea
          className="w-full border border-gray-100 rounded-xl p-3 text-sm focus:ring-1 focus:ring-olive outline-none"
          rows={2}
          value={settings.statusMessage}
          onChange={(e) => onUpdateSettings({ ...settings, statusMessage: e.target.value, lastUpdated: new Date().toLocaleDateString() })}
          placeholder="Enter current safety/status message..."
        />
      </section>

      {/* Product List */}
      <section className="mb-20">
        <div className="flex justify-between items-center mb-4 px-2">
          <h3 className="font-bold text-sm uppercase tracking-widest text-gray-500">Inventory</h3>
          <button 
            onClick={() => setIsAdding(true)}
            className="bg-earthy-olive text-white p-2 rounded-full shadow-lg"
          >
            <Icons.Add />
          </button>
        </div>

        <div className="space-y-4">
          {products.map(p => (
            <div key={p.id} className="flex items-center gap-4 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
              <img src={p.imageUrl} className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-grow">
                <h4 className="font-bold text-sm">{p.name}</h4>
                <p className="text-xs text-gray-400">{p.price}</p>
              </div>
              <button 
                onClick={() => onDelete(p.id)}
                className="text-red-400 p-2 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Icons.Trash />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Add Product Modal (Simulation) */}
      {isAdding && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-end">
          <div className="bg-white w-full rounded-t-3xl p-8 animate-slideUp max-w-md mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Add New Product</h3>
              <button onClick={() => setIsAdding(false)} className="text-gray-400 font-bold">✕</button>
            </div>
            
            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 pb-6">
              <div>
                <label className="text-[10px] font-bold uppercase text-gray-400 mb-1 block">Product Name</label>
                <input 
                  type="text" 
                  className="w-full border-b border-gray-200 py-2 outline-none focus:border-earthy-olive transition-colors"
                  placeholder="e.g. Organic Honey"
                  value={newProduct.name || ''}
                  onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-gray-400 mb-1 block">Category</label>
                <select 
                   className="w-full border-b border-gray-200 py-2 outline-none focus:border-earthy-olive bg-transparent"
                   value={newProduct.category}
                   onChange={e => setNewProduct({...newProduct, category: e.target.value as Category})}
                >
                  <option value="Agricultural">Agricultural</option>
                  <option value="Artisanal">Artisanal</option>
                  <option value="Traditional">Traditional</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-gray-400 mb-1 block">Price Label</label>
                <input 
                  type="text" 
                  className="w-full border-b border-gray-200 py-2 outline-none focus:border-earthy-olive"
                  placeholder="e.g. $10.00 / kg"
                  value={newProduct.price || ''}
                  onChange={e => setNewProduct({...newProduct, price: e.target.value})}
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[10px] font-bold uppercase text-gray-400 block">Description</label>
                  <button 
                    onClick={handleAIHelp}
                    disabled={aiLoading}
                    className="text-[10px] bg-beige-light text-earthy-olive px-2 py-1 rounded-md font-bold disabled:opacity-50"
                  >
                    {aiLoading ? 'Thinking...' : '✨ Describe with AI'}
                  </button>
                </div>
                <textarea 
                  className="w-full border border-gray-100 rounded-xl p-3 text-sm focus:ring-1 focus:ring-olive outline-none"
                  rows={3}
                  placeholder="Tell the story of this product..."
                  value={newProduct.description || ''}
                  onChange={e => setNewProduct({...newProduct, description: e.target.value})}
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-gray-400 mb-1 block">Image URL</label>
                <input 
                  type="text" 
                  className="w-full border-b border-gray-200 py-2 outline-none focus:border-earthy-olive text-xs"
                  placeholder="https://..."
                  value={newProduct.imageUrl || ''}
                  onChange={e => setNewProduct({...newProduct, imageUrl: e.target.value})}
                />
                <p className="text-[10px] text-gray-400 mt-1">Use a direct link to an image file.</p>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-gray-400 mb-1 block">Contact Phone (WhatsApp)</label>
                <input 
                  type="text" 
                  className="w-full border-b border-gray-200 py-2 outline-none focus:border-earthy-olive"
                  placeholder="Country code + number"
                  value={newProduct.producerPhone || ''}
                  onChange={e => setNewProduct({...newProduct, producerPhone: e.target.value})}
                />
              </div>

              <button 
                onClick={handleSave}
                className="w-full bg-earthy-olive text-white py-4 rounded-xl font-bold shadow-lg mt-4"
              >
                Save Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
