import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <p className="font-bold">Error</p>
      <p>{error}</p>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{product.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.thumbnail} alt={product.title} className="w-full rounded-lg" />
        <div>
          <p className="text-2xl font-bold mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <button
            onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;