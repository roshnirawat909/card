import React, { useContext } from 'react';
import ProductCard from './ProductCard'; // Import ProductCard
import { MyStore } from '../context/MyContext';

const Cart = ({ toggleCart, removeFromCart }) => {

  let { cart } = useContext(MyStore);
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-200 rounded-lg shadow-lg p-6 w-full max-w-3xl flex flex-col">
        <div className="flex justify-between items-center mb-4 flex-shrink-0">
          <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
          <button onClick={toggleCart} className="text-gray-600 hover:text-gray-900">
            {/* Close Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center py-8">Your cart is empty. 🛒</p>
        ) : (
          <>
            {/* Scrollable area for product cards */}
            <div className="flex-grow overflow-y-auto max-h-[60vh] p-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {cart.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  // Pass the remove function, not the add function
                  onRemoveFromCart={() => removeFromCart(product.id)}
                />
              ))}
            </div>
            {/* Total Price Section */}
            <div className="mt-4 pt-4 border-t flex justify-between items-center flex-shrink-0">
              <p className="text-xl font-bold">Total:</p>
              <p className="text-xl font-bold">${totalPrice.toFixed(2)}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;