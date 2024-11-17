
const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex items-center p-4 mb-4 bg-white rounded-lg shadow">
      <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover rounded mr-4" />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => onUpdateQuantity(Math.max(1, item.quantity - 1))}
            className="px-2 py-1 border rounded hover:bg-gray-100"
          >
            -
          </button>
          <span className="mx-4">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.quantity + 1)}
            className="px-2 py-1 border rounded hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={onRemove}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;