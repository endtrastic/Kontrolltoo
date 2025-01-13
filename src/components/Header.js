import React, { useContext } from 'react';
import { CartContext } from '../store/CartContext';  
import logo from '../assets/logo.jpg';
import Button from './UI/Button';

const Header = () => {
  const { cartItems } = useContext(CartContext); 

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>React Food Order App</h1>
      </div>
      <nav>
        <Button textOnly={true}>
          Cart ({cartItems.length}) 
        </Button>
      </nav>
    </header>
  );
};

export default Header;
