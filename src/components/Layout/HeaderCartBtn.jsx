import { Fragment  } from 'react';
import styles from './HeaderCartBtn.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartBtn = (props) => {
    return (
        <Fragment>
            {/*NOTE: only time when a prop name passing through props is not up to you is on the button element. where we need to use onClick */}
            <button className={styles.button} onClick={props.onShowCart}>
             <span className={styles.icon}>
                 <CartIcon />
             </span>
             <span>Your Cart</span>
             <span className={styles.badge}>3</span>
            </button>
        </Fragment>
    );
}

export default HeaderCartBtn;