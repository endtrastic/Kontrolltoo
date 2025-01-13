import Header from './components/Header'
import './index.css'
import Meals from './components/Meals' 
import MealItem from './components/MealItem';

const res = await fetch('http://localhost:3001/meals');
const meals = await res.json();
console.log(meals)

const App = () => {
 return (
    <>
     <h1>Food Order App</h1>
     <Header/>
     <Meals meals={meals} />
    </>
  );
}

export default App;
