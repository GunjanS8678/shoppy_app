import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductItem from './ProductItem';

const ProductList = () => {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <p className="font-bold">Error</p>
      <p>{error}</p>
    </div>
  );

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;