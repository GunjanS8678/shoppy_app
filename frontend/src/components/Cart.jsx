import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={() => dispatch(removeFromCart(item.id))}
              onUpdateQuantity={(quantity) =>
                dispatch(updateQuantity({ id: item.id, quantity }))
              }
            />
          ))}
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <Link
              to="/checkout"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;