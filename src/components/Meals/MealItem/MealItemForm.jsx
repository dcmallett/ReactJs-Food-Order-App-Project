import { useRef, useState } from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input/Input';

const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitMealFormHandler = (event) => {
        event.preventDefault();
        //current will point at the input element which is stored in the ref and every element has value prop
        //always a string.
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 || 
            enteredAmountNumber < 1 || 
            enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
            <form className={styles['form-wrap']} onSubmit={submitMealFormHandler}>
                <Input 
                    ref={amountInputRef}
                    label="Amount" 
                    input={{
                        id: 'amount_' + props.id,
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        default: '1'
                    }} 
                />
                <button> + Add</button>
                {!amountIsValid && <p>Please enter a valid amount (1 - 5).</p>}
            </form>
    );
}

export default MealItemForm;