import { Fragment } from 'react';
import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartBtn from './HeaderCartBtn';

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h2>React Meals</h2>
                <HeaderCartBtn />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="A table of lovely meals" />
             </div>
        </Fragment>
    )
}

export default Header;