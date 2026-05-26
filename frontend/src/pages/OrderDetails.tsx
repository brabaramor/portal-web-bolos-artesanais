import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminHeader } from '../components/AdminHeader';
import { Footer } from '../components/Footer';

export function OrderDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [status, setStatus] = useState('Em Produção');
  const [notes, setNotes] = useState('');

  // Mock data
  const orderData = {
    orderNumber: '#1023',
    product: 'Bolo de Chocolate',
    size: 'Grande (25cm)',
    orderDate: '24/04/2026 às 15:30',
    deliveryDate: '27/04/2026 às 14:00',
    customerName: 'João Santos',
    phone: '(51) 9 8888-2222',
    email: 'joao@email.com',
    observations: 'Decoração com tema de futebol. Mensagem: "Parabéns Pedro 30 anos". Cliente tem alergia a nozes — NÃO usar castanhas no amendoim.',
  };

  const handleCancel = () => {
    if (confirm('Tem certeza que deseja cancelar este pedido?')) {
      navigate('/admin/pedidos');
    }
  };

  const handleSave = () => {
    alert('Alterações salvas com sucesso!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdminHeader />

      <main className="flex-1 px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <button
              onClick={() => navigate('/admin/pedidos')}
              className="text-pink-600 hover:text-pink-700 font-medium text-sm mb-4 flex items-center gap-2"
            >
              <span>←</span>
              <span>Voltar para lista de pedidos</span>
            </button>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl md:text-3xl font-bold text-pink-900">
                Pedido {orderData.orderNumber}
              </h1>
              <button
                onClick={handleCancel}
                className="bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold shadow-md transition-all text-sm md:text-base"
              >
                Cancelar Pedido
              </button>
            </div>
          </div>

          {/* Desktop/Tablet Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {/* Left Column - Order Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                  📋 <span className="font-bold">Informações do Pedido</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Status do Pedido
                    </label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                    >
                      <option>Em Produção</option>
                      <option>Novo</option>
                      <option>Pronto</option>
                      <option>Entregue</option>
                      <option>Cancelado</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">Produto</label>
                    <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
                      {orderData.product}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Tamanho do Bolo
                    </label>
                    <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
                      {orderData.size}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-2">
                        Data do Pedido
                      </label>
                      <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 text-sm">
                        {orderData.orderDate}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-2">
                        Data da Entrega
                      </label>
                      <input
                        type="text"
                        value={orderData.deliveryDate}
                        className="w-full px-4 py-3 border border-pink-300 bg-pink-50 rounded-lg text-gray-700 text-sm focus:ring-2 focus:ring-pink-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Observações do Cliente
                    </label>
                    <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 text-sm leading-relaxed">
                      {orderData.observations}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Notas Internas
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Adicione anotações sobre o pedido..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none resize-none h-24"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Customer Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-6">
                👤 <span className="font-bold">Dados do Cliente</span>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">Nome</label>
                  <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
                    {orderData.customerName}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">Telefone</label>
                  <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
                    {orderData.phone}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">E-mail</label>
                  <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
                    {orderData.email}
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold shadow-md transition-all flex items-center justify-center gap-2">
                  <span>💬</span>
                  <span>Contatar via WhatsApp</span>
                </button>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                  ⚡ <span className="font-bold">Ações</span>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={handleCancel}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold transition-all"
                  >
                    Cancelar Pedido
                  </button>
                  <button
                    onClick={handleSave}
                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    Salvar Alterações
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-4">
            {/* Order Info Card */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                📋 <span className="font-bold">Informações do Pedido</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Status do Pedido
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 outline-none"
                  >
                    <option>Em Produção</option>
                    <option>Novo</option>
                    <option>Pronto</option>
                    <option>Entregue</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Produto</label>
                  <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
                    {orderData.product}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Tamanho do Bolo</label>
                  <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
                    {orderData.size}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Data do Pedido</label>
                  <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
                    {orderData.orderDate}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Data da Entrega</label>
                  <input
                    type="text"
                    value={orderData.deliveryDate}
                    className="w-full px-3 py-2 border border-pink-300 bg-pink-50 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Observações do Cliente
                  </label>
                  <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700 leading-relaxed">
                    {orderData.observations}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Notas Internas</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Adicione anotações sobre o pedido..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 outline-none resize-none h-20"
                  />
                </div>
              </div>
            </div>

            {/* Customer Info Card */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                👤 <span className="font-bold">Dados do Cliente</span>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Nome</label>
                  <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
                    {orderData.customerName}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Telefone</label>
                  <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
                    {orderData.phone}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">E-mail</label>
                  <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
                    {orderData.email}
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
                  <span>💬</span>
                  <span>Contatar via WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Actions Card */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                ⚡ <span className="font-bold">Ações</span>
              </div>
              <div className="space-y-3">
                <button
                  onClick={handleCancel}
                  className="w-full bg-red-600 text-white py-3 rounded-xl font-bold text-sm"
                >
                  Cancelar Pedido
                </button>
                <button
                  onClick={handleSave}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-xl font-bold text-sm"
                >
                  Salvar Alterações
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
