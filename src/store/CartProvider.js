import { useReducer } from 'react';
import CartContext from "./cart-context";

const defaultCartState = {
    cartItems: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD_CART_ITEM') {
        //concat gives us a brand new array
        const updatedCartItems = state.cartItems.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            cartItems: updatedCartItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
};


const CartProvider = (props) => {
    //returns 2 args 1st a stateSnapshot, and a dispatch
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);



    //here we are accessing CartContext.Provider and passing props.children
    //this allows us to wrap any components that should get or need access to the context
    //with this CartProvider component. and add all the logic to managing the context data
    //to this component so its all maintained in 1 component

    const addItemToCartHandler = (cartItem) => {
        //we are forwording the cart item param 
        dispatchCartAction({type: 'ADD_CART_ITEM', item: cartItem});
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE_CART_ITEM', id: id})
    }

    //this cartContext is set as a value for the value prop on the provider
    const cartContext = {
        cartItems: cartState.cartItems,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }


    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );

}

export default CartProvider;