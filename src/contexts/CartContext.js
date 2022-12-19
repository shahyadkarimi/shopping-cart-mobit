import React, { useReducer, createContext } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false
};

const cartReducer = (state, action) => {
    switch(action.type) {

        // add items to cart
        case "ADD_ITEM" :
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems]
            }

        // remove items from cart
        case "REMOVE_ITEM" :
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            
            return {
                ...state,
                selectedItems: [...newSelectedItems]
            }

        // add items quantity
        case "INCREASE":
            const increaseIndex = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[increaseIndex].quantity++;

            return {
                ...state,
            }
        
        // remove items quantity
        case "DECREASE":
            const decreaseIndex = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[decreaseIndex].quantity--;

            return {
                ...state,
            }

        case "CHECKOUT": 
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true
            }

        case "CLEAR": 
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false
            }

        default:
            return state;
    }
}

// cart context
export const cartContext = createContext()

const CartContext = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
      <cartContext.Provider value={{state, dispatch}}>
          {children}
      </cartContext.Provider>
  )
};

export default CartContext;
