import styles from './Input.module.css';

const Input = (props) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* using {...props. } this ensures all the key value pairs we recive on input 
                are added as props to input. i.e if it as type="text" this code will then make sure type="text" is being added.
                    makes it highly configurable 
            */}
            <input {...props.input} />
        </div>
    )
}


export default Input;