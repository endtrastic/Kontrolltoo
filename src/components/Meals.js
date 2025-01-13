import React from 'react';
import MealItem from './MealItem';
import '../index.css'

const Meals = ({ meals }) => {
  return (
    <ul>
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} /> 
      ))}
    </ul>
  );
};

export default Meals;
