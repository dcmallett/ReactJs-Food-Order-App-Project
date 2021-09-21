import styles from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  //here we are setting a "helper const" to do our map method to make our jsx code much leaner
  //so we map the DUMMY_MEALS and pass it a JSX element in this case a <li></li> and pass in the meal.name
  const mealsList = DUMMY_MEALS.map(meal => 
  <MealItem
    key={meal.id}
    mealId={meal.id}
    mealName={meal.name}
    mealDescription={meal.description}
    mealPrice={meal.price}
  />)


const AvailableMeals = () => {
    return (
        <section className={styles.meals}>
            {/*Wrap this ul into a Card component */}
            <Card>
                <ul>
                {mealsList} 
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;