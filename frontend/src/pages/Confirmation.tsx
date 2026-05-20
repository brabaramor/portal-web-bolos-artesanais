import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/Button';

export function Confirmation() {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const orderData = location.state?.orderData;

  return (
    <div className="min-h-screen bg-white">
      {/* Success Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 md:px-6 lg:px-8 py-10 md:py-12 text-center">
        <div className="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full flex items-center justify-center text-3xl md:text-4xl mx-auto mb-4 md:mb-5">
          ✅
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">Pedido Confirmado!</h1>
        <p className="text-green-100 text-sm md:text-base">Recebemos sua encomenda com sucesso</p>
      </div>

      {/* Order Details */}
      <div className="px-4 md:px-6 lg:px-8 py-6 md:py-8 max-w-4xl mx-auto">
        {/* Order Number */}
        <div className="bg-gray-50 rounded-xl p-5 md:p-6 mb-5 md:mb-6 text-center">
          <div className="text-xs md:text-sm text-gray-600 mb-1">Número do Pedido</div>
          <div className="text-4xl md:text-5xl font-bold text-pink-600">#{orderId}</div>
          <div className="text-xs md:text-sm text-gray-500 mt-2">Anote este número para acompanhar seu pedido</div>
        </div>

        {/* Order Info */}
        {orderData && (
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            {[
              {
                label: 'Produto',
                value: `${orderData.cake
                  ? orderData.cake.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                  : 'Bolo Red Velvet'} - ${orderData.size
                  ? orderData.size.charAt(0).toUpperCase() + orderData.size.slice(1)
                  : 'Médio'}`
              },
              {
                label: 'Data de Entrega',
                value: `${orderData.deliveryDate
                  ? new Date(orderData.deliveryDate + 'T00:00:00').toLocaleDateString('pt-BR')
                  : '28/04/2026'}${orderData.deliveryTime ? ` às ${orderData.deliveryTime}` : ''}`
              },
              { label: 'Cliente', value: orderData.name || 'Cliente' },
              { label: 'Telefone', value: orderData.phone || '(51) 9 9999-9999' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-start py-3 border-b border-gray-200 last:border-0">
                <div className="text-gray-600 text-sm md:text-base">{item.label}</div>
                <div className="font-bold text-pink-900 text-sm md:text-base text-right max-w-[60%]">{item.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Next Steps */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4 md:p-5 mb-6 md:mb-8">
          <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2 text-sm md:text-base">
            <span>📱</span> Próximos Passos
          </h3>
          <ul className="text-xs md:text-sm text-blue-800 space-y-2">
            <li>• Você receberá uma mensagem no WhatsApp confirmando o pedido</li>
            <li>• Entraremos em contato 1 dia antes da entrega para confirmar</li>
            <li>• Qualquer dúvida, entre em contato conosco pelo WhatsApp</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <Button
            size="lg"
            fullWidth
            onClick={() => navigate('/catalogo')}
          >
            Voltar ao Catálogo
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p className="mb-1">📱 WhatsApp: (51) 9 8260-6474</p>
          <p>📷 Instagram: @doceencanto</p>
        </div>
      </div>
    </div>
  );
}
