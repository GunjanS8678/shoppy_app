import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <p className="text-lg font-bold mb-4">${product.price}</p>
        <div className="flex justify-between">
          <Link 
            to={`/product/${product.id}`}
            className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;