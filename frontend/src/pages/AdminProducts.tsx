import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminHeader } from '../components/AdminHeader';
import { Footer } from '../components/Footer';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const mockProducts: Product[] = Array(8).fill(null).map((_, i) => ({
  id: i + 1,
  name: 'Título do Card',
  description: 'Descrição breve do conteúdo',
  price: 100.00,
  imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
}));

export function AdminProducts() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todos os produtos');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdminHeader />

      <main className="flex-1 px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-pink-900">Gerenciar Produtos</h1>
              <p className="text-gray-600 text-sm mt-1">24 produtos disponíveis</p>
            </div>
            <button
              onClick={() => navigate('/admin/produtos/novo')}
              className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all text-sm md:text-base whitespace-nowrap"
            >
              + Adicionar Novo Produto
            </button>
          </div>

          {/* Filters Section */}
          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-700 font-medium"
                >
                  <option>Todos os produtos</option>
                  <option>Bolos Tradicionais</option>
                  <option>Bolos Especiais</option>
                  <option>Bolos de Frutas</option>
                </select>
              </div>

              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar produtos..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-2 rounded-md transition-colors">
                  🔍
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid - Desktop/Tablet */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {mockProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 h-40 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                  <div className="text-xl font-bold text-pink-600 mb-4">
                    R$ {product.price.toFixed(2)}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/admin/produtos/${product.id}/editar`)}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-bold transition-colors"
                    >
                      ✏️ Editar
                    </button>
                    <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors">
                      ⚙️
                    </button>
                    <button className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-lg transition-colors">
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Products List - Mobile */}
          <div className="md:hidden space-y-4 mb-6">
            {mockProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex gap-4">
                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-20 h-20 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1 truncate">{product.name}</h3>
                    <div className="text-lg font-bold text-pink-600 mb-2">
                      R$ {product.price.toFixed(2)}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(`/admin/produtos/${product.id}/editar`)}
                        className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold"
                      >
                        Editar
                      </button>
                      <button className="bg-gray-200 p-1.5 rounded-lg text-sm">
                        +
                      </button>
                      <button className="bg-red-100 text-red-600 p-1.5 rounded-lg text-sm">
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2">
            <button className="w-10 h-10 rounded-lg bg-pink-600 text-white font-bold">1</button>
            <button className="w-10 h-10 rounded-lg bg-white border border-gray-300 text-gray-700 hover:border-pink-400 transition-colors">2</button>
            <button className="w-10 h-10 rounded-lg bg-white border border-gray-300 text-gray-700 hover:border-pink-400 transition-colors">3</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
