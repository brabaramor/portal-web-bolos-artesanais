import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminHeader } from '../components/AdminHeader';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';

interface ProductFormData {
  id?: number;
  name: string;
  description: string;
  price: number;
  category: string;
  size: string;
  imageUrl: string;
}

export function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;

  // Mock data for editing - replace with API call
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    price: 0,
    category: 'Tradicional',
    size: 'Médio',
    imageUrl: '',
  });

  const [imagePreview, setImagePreview] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setFormData(prev => ({ ...prev, imageUrl: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement save logic (API call)
    console.log('Saving product:', formData);
    navigate('/admin/produtos');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdminHeader />

      <main className="flex-1 px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <button
              onClick={() => navigate('/admin/produtos')}
              className="text-pink-600 hover:text-pink-700 font-medium text-sm mb-4 flex items-center gap-2"
            >
              <span>←</span>
              <span>Voltar para lista de produtos</span>
            </button>
            <h1 className="text-2xl md:text-3xl font-bold text-pink-900">
              {isEditing ? 'Editar Produto' : 'Adicionar Novo Produto'}
            </h1>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-2">
                  Nome do Produto *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: Bolo Red Velvet"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-bold text-gray-800 mb-2">
                  Descrição *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Descreva o produto..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none resize-none transition-all"
                  required
                />
              </div>

              {/* Price and Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="price" className="block text-sm font-bold text-gray-800 mb-2">
                    Preço (R$) *
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-bold text-gray-800 mb-2">
                    Categoria *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                    required
                  >
                    <option value="Tradicional">Tradicional</option>
                    <option value="Especial">Especial</option>
                    <option value="Frutas">Frutas</option>
                    <option value="Chocolate">Chocolate</option>
                  </select>
                </div>
              </div>

              {/* Size and Image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="size" className="block text-sm font-bold text-gray-800 mb-2">
                    Tamanho *
                  </label>
                  <select
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                    required
                  >
                    <option value="Pequeno">Pequeno (15cm)</option>
                    <option value="Médio">Médio (20cm)</option>
                    <option value="Grande">Grande (25cm)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="imageFile" className="block text-sm font-bold text-gray-800 mb-2">
                    Imagem do Produto *
                  </label>
                  <input
                    type="file"
                    id="imageFile"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-pink-50 file:text-pink-600 hover:file:bg-pink-100 file:cursor-pointer"
                    required={!isEditing}
                  />
                </div>
              </div>

              {/* Preview */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-xs font-bold text-gray-600 mb-4 uppercase tracking-wide">
                  Pré-visualização do Card
                </p>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden max-w-xs mx-auto">
                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 h-40 flex items-center justify-center overflow-hidden">
                    {imagePreview || formData.imageUrl ? (
                      <img
                        src={imagePreview || formData.imageUrl}
                        alt={formData.name || 'Produto'}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center text-gray-400">
                        <div className="text-5xl mb-2">📷</div>
                        <div className="text-xs">Selecione uma imagem</div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1 truncate">
                      {formData.name || 'Nome do Produto'}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {formData.description || 'Descrição do produto'}
                    </p>
                    <div className="text-xl font-bold text-pink-600 mb-4">
                      R$ {formData.price.toFixed(2)}
                    </div>
                    <div className="flex gap-2">
                      <button type="button" className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-bold">
                        ✏️ Editar
                      </button>
                      <button type="button" className="bg-gray-200 p-2 rounded-lg text-sm">
                        ⚙️
                      </button>
                      <button type="button" className="bg-red-100 text-red-600 p-2 rounded-lg text-sm">
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col-reverse md:flex-row gap-4 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => navigate('/admin/produtos')}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-full font-bold text-gray-700 hover:bg-gray-50 transition-all"
                >
                  Cancelar
                </button>
                <Button type="submit" fullWidth className="flex-1">
                  {isEditing ? '💾 Salvar Alterações' : '✨ Adicionar Produto'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
