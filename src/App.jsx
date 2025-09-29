import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import axios from 'axios';
import { useContext } from 'react';
import { MyStore } from './context/MyContext';

const App = () => {

    let { data, cart, isCartOpen, setCart, setData, setIsCartOpen } = useContext(MyStore);


    const productData = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products');
            setData(res.data);
        } catch (error) {
            console.log('error', error);
        }
    };

    useEffect(() => {
        productData();
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(product => product.id !== productId);
        setCart(updatedCart);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar cartCount={cart.length} toggleCart={toggleCart} />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Explore Our Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {data.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            // Update prop name to onAddToCart
                            onAddToCart={() => addToCart(product)}
                        />
                    ))}
                </div>
            </div>
            {isCartOpen && <Cart cart={cart} toggleCart={toggleCart} removeFromCart={removeFromCart} />}
        </div>
    );
};

export default App;