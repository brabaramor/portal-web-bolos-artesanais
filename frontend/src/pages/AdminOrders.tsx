import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminHeader } from '../components/AdminHeader';
import { Footer } from '../components/Footer';

interface Order {
  id: number;
  orderNumber: string;
  customerName: string;
  neighborhood: string;
  orderDate: string;
  deliveryDate: string;
  phone: string;
  status: 'Novo' | 'Em Produção' | 'Pronto' | 'Entregue';
}

const mockOrders: Order[] = Array(6).fill(null).map((_, i) => ({
  id: i + 1,
  orderNumber: '#1024',
  customerName: 'Maria Silva',
  neighborhood: 'Red Velvet - Médio',
  orderDate: '24/04/2026',
  deliveryDate: '27/04/2026',
  phone: '(51) 9 8888-2222',
  status: 'Novo',
}));

export function AdminOrders() {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: Order['status']) => {
    const colors = {
      'Novo': 'bg-blue-100 text-blue-700',
      'Em Produção': 'bg-yellow-100 text-yellow-700',
      'Pronto': 'bg-green-100 text-green-700',
      'Entregue': 'bg-gray-100 text-gray-700',
    };
    return colors[status];
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdminHeader />

      <main className="flex-1 px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-pink-900">Gerenciar Pedidos</h1>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold shadow-md transition-all text-sm md:text-base whitespace-nowrap flex items-center justify-center gap-2">
              <span>📥</span>
              <span>Exportar Lista</span>
            </button>
          </div>

          <div className="hidden md:block bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                >
                  <option>Todos</option>
                  <option>Novo</option>
                  <option>Em Produção</option>
                  <option>Pronto</option>
                  <option>Entregue</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Data Inicial</label>
                <input
                  type="text"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder="dd/mm/aaaa"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Data Final</label>
                <input
                  type="text"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  placeholder="dd/mm/aaaa"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Buscar</label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Cliente, pedido..."
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-600 hover:bg-pink-700 text-white px-3 py-1.5 rounded-md text-sm font-bold transition-colors">
                    Filtrar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden bg-white rounded-xl shadow-sm p-4 mb-4 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 outline-none"
                >
                  <option>Todos</option>
                  <option>Novo</option>
                  <option>Em Produção</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Data Inicial</label>
                <input
                  type="text"
                  placeholder="dd/mm/aaaa"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Data Final</label>
                <input
                  type="text"
                  placeholder="dd/mm/aaaa"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Buscar</label>
                <input
                  type="text"
                  placeholder="Cliente..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 outline-none"
                />
              </div>
            </div>
            <button className="w-full bg-pink-600 text-white py-2 rounded-lg text-sm font-bold">
              Filtrar
            </button>
          </div>

          <div className="hidden md:grid md:grid-cols-2 gap-6 mb-8">
            {mockOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-3xl font-bold text-pink-600">{order.orderNumber}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>

                <div className="mb-3">
                  <p className="text-lg font-bold text-gray-900">{order.customerName}</p>
                  <p className="text-base text-gray-700">{order.neighborhood}</p>
                </div>

                <div className="space-y-1 mb-5 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span>🛒</span>
                    <span>Pedido: {order.orderDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🚚</span>
                    <span>Entrega: {order.deliveryDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <span>{order.phone}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/admin/pedidos/${order.id}`)}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  Ver Detalhes
                </button>
              </div>
            ))}
          </div>

          <div className="md:hidden space-y-3 mb-6">
            {mockOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-pink-600">{order.orderNumber}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
                <div className="space-y-2 text-sm mb-4">
                  <div className="font-bold text-gray-900">{order.customerName}</div>
                  <div className="text-gray-600">{order.neighborhood}</div>
                  <div className="text-gray-600 text-xs">
                    🛒 Pedido: {order.orderDate}
                  </div>
                  <div className="text-gray-600 text-xs">
                    📦 Entrega: {order.deliveryDate}
                  </div>
                  <div className="text-gray-600 text-xs">
                    📞 {order.phone}
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/admin/pedidos/${order.id}`)}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2.5 rounded-xl font-bold text-sm"
                >
                  Ver Detalhes
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
