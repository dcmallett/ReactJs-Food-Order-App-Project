import { useReducer } from 'react';
import CartContext from "./cart-context";

const defaultCartState = {
    cartItems: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD_CART_ITEM') {
        //concat gives us a brand new array
        //when we are adding items we always want to calculate the updatyed total amount first
        const updatedTotalAmount = 
        state.totalAmount + action.item.price * action.item.amount;

        //finds the index of an item in an array
        //if the item were currently looking at in the array has the same id were adding with this action
        //it will return us the index of the item if it exists
        const existingCartItemIndex = state.cartItems.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.cartItems[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            //if its truthy we set the updatedItem to a new obj
            //were we copy the existing cart item and we just update the amount i.e becuase the item already exists were just setting a new amount 
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            //we are updating the list of cartItems but updating it immutably so we are creating a new array
            //so we copy the old objs
            updatedItems = [...state.cartItems];
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            //else if its a new item the updated item is a brand new item were we copy the action item
            updatedItems = state.cartItems.concat(action.item)
        }

        // const updatedCartItems = state.cartItems.concat(action.item)
        //change cartItems below back to updatedCartItems if does not work
        return {
            cartItems: updatedItems,
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

    const addItemToCartHandler = (item) => {
        //we are forwording the cart item param 
        dispatchCartAction({type: 'ADD_CART_ITEM', item: item});
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