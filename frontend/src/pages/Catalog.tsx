import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';

const allProducts = [
  { id: 1, name: 'Bolo Red Velvet', price: 89.90, image: '🎂', category: 'Especial', size: 'Médio' },
  { id: 2, name: 'Bolo de Chocolate', price: 75.00, image: '🍫', category: 'Tradicional', size: 'Médio' },
  { id: 3, name: 'Bolo de Morango', price: 82.00, image: '🍓', category: 'Frutas', size: 'Médio' },
  { id: 4, name: 'Bolo de Limão', price: 78.00, image: '🍋', category: 'Frutas', size: 'Médio' },
  { id: 5, name: 'Bolo de Baunilha', price: 70.00, image: '🎂', category: 'Tradicional', size: 'Médio' },
  { id: 6, name: 'Bolo de Ninho', price: 92.00, image: '🥚', category: 'Especial', size: 'Médio' },
];

export function Catalog() {
  const navigate = useNavigate();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<{
    flavors: string[];
    sizes: string[];
    occasions: string[];
  }>({
    flavors: [],
    sizes: [],
    occasions: [],
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-gray-50">
        <div className="px-4 md:px-6 lg:px-8 py-6">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-pink-900">Nosso Catálogo</h1>
            <p className="text-gray-600 mt-1">{allProducts.length} produtos disponíveis</p>
          </div>

          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors ${
                filtersOpen ? 'bg-purple-700 text-white' : 'bg-pink-600 text-white'
              }`}
            >
              <span>⚙️</span>
              <span>Filtros</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow p-6 sticky top-6">
                <h3 className="text-lg font-bold text-pink-900 mb-4">Filtros</h3>

                {/* Sabor */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 text-sm">Sabor</h4>
                  <div className="space-y-2">
                    {['Chocolate', 'Baunilha', 'Morango', 'Red Velvet', 'Limão'].map((flavor) => (
                      <label key={flavor} className="flex items-center gap-2 cursor-pointer hover:text-pink-600">
                        <input type="checkbox" className="w-4 h-4 text-pink-600 rounded" />
                        <span className="text-sm">{flavor}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Tamanho */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 text-sm">Tamanho</h4>
                  <div className="space-y-2">
                    {['Pequeno (15cm)', 'Médio (20cm)', 'Grande (25cm)'].map((size) => (
                      <label key={size} className="flex items-center gap-2 cursor-pointer hover:text-pink-600">
                        <input type="checkbox" className="w-4 h-4 text-pink-600 rounded" />
                        <span className="text-sm">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg text-sm hover:bg-gray-300 font-medium">
                  Limpar Filtros
                </button>
              </div>
            </aside>

            {/* Mobile Filters Panel */}
            {filtersOpen && (
              <div className="md:hidden bg-white rounded-xl shadow p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-pink-900">Filtrar por</span>
                  <button onClick={() => setFiltersOpen(false)} className="text-gray-400 text-lg">✕</button>
                </div>

                <div className="space-y-4">
                  {/* Sabores */}
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Sabor</p>
                    <div className="flex gap-2 flex-wrap">
                      {['Chocolate', 'Morango', 'Limão', 'Baunilha'].map((f) => (
                        <button key={f} className="px-3 py-1.5 bg-pink-50 border border-pink-200 rounded-full text-xs text-pink-800 font-medium hover:bg-pink-100">
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tamanho */}
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Tamanho</p>
                    <div className="grid grid-cols-3 gap-2">
                      {['Pequeno', 'Médio', 'Grande'].map((sz) => (
                        <label key={sz} className="flex flex-col items-center p-2 border border-gray-300 rounded-lg cursor-pointer hover:border-pink-400">
                          <input type="checkbox" className="mb-1 w-3.5 h-3.5" />
                          <span className="text-xs font-bold">{sz}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button onClick={() => setFiltersOpen(false)} className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-xl text-sm font-bold">
                      Aplicar
                    </button>
                    <button className="px-4 border-2 border-gray-300 rounded-xl text-sm text-gray-600 font-medium">
                      Limpar
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Products Grid */}
            <main className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    description="Massa fofinha e recheio cremoso"
                    onOrder={() => navigate('/encomenda')}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-8">
                <button className="w-10 h-10 rounded-lg bg-pink-600 text-white font-bold">1</button>
                <button className="w-10 h-10 rounded-lg bg-white text-gray-700 border border-gray-200 hover:border-pink-400">2</button>
                <button className="w-10 h-10 rounded-lg bg-white text-gray-700 border border-gray-200 hover:border-pink-400">3</button>
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
