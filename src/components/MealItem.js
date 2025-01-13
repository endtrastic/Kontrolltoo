import '../index.css'
import Meals from './Meals'
import Button from './UI/Button'

const MealItem = (props) => {
    return (
        <ul id='meals'>
            <li className='meal-item'>
                <article>
                    <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                    <div>
                        <h3 className='meal-item-name'>{props.meal.name}</h3>
                        <p className='meal-item-price'>{( new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(props.meal.price))}</p>
                        <p className='meal-item-description'>{props.meal.description}</p>
                    </div>
                        <Button textOnly={false}>Add to Cart</Button>
                </article>
            </li>
        </ul>
        
    )
}

export default MealItem