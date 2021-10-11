import React from 'react';

import styles from './Input.module.css';

//to forward a ref on a custom component. you need to wrap the component with 
//React.forwardRef and pass in a ref param. then we use that ref param as the value on the ref={} prop
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* using {...props. } this ensures all the key value pairs we recive on input 
                are added as props to input. i.e if it as type="text" this code will then make sure type="text" is being added.
                    makes it highly configurable 
            */}
            <input ref={ref} {...props.input} />
        </div>
    )
});


export default Input;