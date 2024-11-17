import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItemsCount = useSelector((state) => state.cart.items.length);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShoppyGlobe
        </Link>
        <Link to="/cart" className="relative">
          <span className="text-xl">🛒</span>
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItemsCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;