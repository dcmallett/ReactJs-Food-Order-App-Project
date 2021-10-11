import { useContext } from 'react';
import styles from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import CartContext from '../../../store/cart-context';


const MealItem = (props) => {
    //we are fixing the price to 2 decimal places
    const mealPrice = `£${props.mealPrice.toFixed(2)}`;

    const cartCtx = useContext(CartContext);


    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            mealId: props.id,
            mealName: props.name,
            amount: amount,
            mealPrice: props.price,
        })
    };

    return (
            <li className={styles.meal}>
                <div>
                    {/*reminder when we are passing props from another component
                            we need to use the property name. in this case
                            we defined mealName as our propName in the avilable meals (left side)
                            so we need to pass this into the component we are rendering into.
                    */}
                    <h3>{props.mealName}</h3>
                    <div className={styles.description}>{props.mealDescription}</div>
                    <div className={styles.price}>{mealPrice}</div>
                    <div>
                        <MealItemForm onAddToCart={addToCartHandler} />
                    </div>
                </div>
            </li>
    )
}

export default MealItem;