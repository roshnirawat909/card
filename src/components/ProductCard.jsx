import React from 'react';

const ProductCard = ({ product, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-48 w-full">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 truncate" title={product.title}>
          {product.title}
        </h2>
        <p className="text-gray-600 mt-2 text-2xl font-bold">${product.price.toFixed(2)}</p>
        <div className="mt-auto pt-4">
          {/* --- CONDITIONAL BUTTON LOGIC --- */}
          {onAddToCart && (
            <button
              onClick={onAddToCart}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Add to Cart
            </button>
          )}
          {onRemoveFromCart && (
            <button
              onClick={onRemoveFromCart}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;