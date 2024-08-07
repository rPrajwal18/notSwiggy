/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    }

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.card.info.id !== itemId));
    }

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
