import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartProvider } from './store/CartContext';

const App = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch('http://localhost:3001/meals');
      const data = await res.json();
      setMeals(data); 
    };

    fetchMeals();
  }, []);

  return (
    <CartProvider> 
      <h1>Food Order App</h1>
      <Header /> 
      <Meals meals={meals} /> 
    </CartProvider>
  );
};

export default App;
