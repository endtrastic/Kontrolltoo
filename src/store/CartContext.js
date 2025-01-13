import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (meal) => {
    setCartItems((prevItems) => [...prevItems, meal]);
  };

  const removeItem = (mealId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== mealId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
