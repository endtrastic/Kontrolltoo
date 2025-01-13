import '../index.css'
import Meals from './Meals'


const MealItem = (props) => {
    return (
        <ul id='meals'>
            <li className='meal-item'>
                <article>
                    <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                    <div>
                        <h3 className='meal-item-name'>{props.meal.name}</h3>
                        <p className='meal-item-price'>{props.meal.price}</p>
                        <p className='meal-item-description'>{props.meal.description}</p>
                    </div>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </article>
            </li>
        </ul>
        
    )
}

export default MealItem