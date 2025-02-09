import React from 'react';
import { useShop } from '../Context/ShopContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart, addToCart } = useShop();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * 15 * item.quantity, 0);

  return (
    <div className="flex flex-col md:w-6/12 mx-auto rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center py-10">
          <img
            src="https://static.oxinis.com/healthmug/image/healthmug/empty-cart.webp"
            alt="Empty Cart"
            className="mb-4 w-40 "
          />
          <p className="text-gray-600 text-center text-lg">Your cart is empty. Add some items!</p>
        </div>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item._id}
                className="flex justify-between items-center bg-gray-100 rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-center gap-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-green-600 font-bold">Rs {item.price * 15}/-</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-3">
                  <button
                    className="bg-gray-200 px-2 rounded-md font-bold text-lg hover:bg-gray-300"
                    onClick={() => removeFromCart(item._id)}
                  >
                    -
                  </button>
                  <p className="text-lg">{item.quantity}</p>
                  <button
                    className="bg-gray-200 px-2 rounded-md font-bold text-lg hover:bg-gray-300"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total Price Section */}
          <div className="border-t border-gray-300 mt-6 pt-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Price</span>
              <span className="text-green-600">Rs {totalPrice}/-</span>
            </div>
          </div>

          {/* Clear Cart and Checkout */}
          <div className="mt-6 flex flex-col gap-3">
            <button
              className="w-full bg-red-500 text-white py-2 rounded-md font-bold hover:bg-red-600"
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <button
              className="w-full bg-green-500 text-white py-2 rounded-md font-bold hover:bg-green-600"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
