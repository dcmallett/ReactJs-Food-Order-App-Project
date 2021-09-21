import { Fragment } from "react";
import styles from './MealItem.module.css';

const MealItem = (props) => {
    //we are fixing the price to 2 decimal places
    const mealPrice = `£${props.mealPrice.toFixed(2)}`;
    return (
        <Fragment>
            <li className={styles.meal}>
                {/*reminder when we are passing props from another component
                        we need to use the property name. in this case
                        we defined mealName as our propName in the avilable meals (left side)
                        so we need to pass this into the component we are rendering into.
                */}
                <h3>{props.mealName}</h3>
                <p className={styles.description}>{props.mealDescription}</p>
                <p className={styles.price}>{mealPrice}</p>
            </li>
        </Fragment>
    )
}

export default MealItem;