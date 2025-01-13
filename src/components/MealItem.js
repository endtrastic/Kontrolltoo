import React, { useContext } from 'react';
import { CartContext } from '../store/CartContext'; 
import Button from './UI/Button';
import '../index.css';

const MealItem = (props) => {
  const { addItem } = useContext(CartContext); 

  const handleAddToCart = () => {
    addItem(props.meal);  
  };

  return (
    <ul id='meals'>
      <li className='meal-item'>
        <article>
          <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name} />
          <div>
            <h3 className='meal-item-name'>{props.meal.name}</h3>
            <p className='meal-item-price'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(props.meal.price)}</p>
            <p className='meal-item-description'>{props.meal.description}</p>
          </div>
          <p>
            <Button onClick={handleAddToCart} textOnly={false}>Add to Cart</Button> 
          </p>
        </article>
      </li>
    </ul>
  );
};

export default MealItem;
