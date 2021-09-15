import { Fragment  } from 'react';
import styles from './HeaderCartBtn.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartBtn = (props) => {
    return (
        <Fragment>
            <button className={styles.button}>
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