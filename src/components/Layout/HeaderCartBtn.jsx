import { Fragment, useContext  } from 'react';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartBtn.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartBtn = (props) => {
    const cartCtx = useContext(CartContext);
    //redruce allows us to transform an array of data to a single value
    //it takes 2 arguments 1st a function which will be called for you. 2nd arg is a starting value
    //the function also recives 2 arguments automatically by JS, currentNumber, item (how you want to name them)
    const numberOfCartItems = cartCtx.cartItems.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0)
    return (
        <Fragment>
            {/*NOTE: only time when a prop name passing through props is not up to you is on the button element. where we need to use onClick */}
            <button className={styles.button} onClick={props.onShowCart}>
             <span className={styles.icon}>
                 <CartIcon />
             </span>
             <span>Your Cart</span>
             <span className={styles.badge}>{numberOfCartItems}</span>
            </button>
        </Fragment>
    );
}

export default HeaderCartBtn;