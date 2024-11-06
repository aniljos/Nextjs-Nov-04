import { CartItem } from "@/model/CartItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GadgetState = {
    cart: CartItem[]
}

const initialState: GadgetState = {
    cart: []
}

//action: addToCart -type: addToCart, payload: CartItem
//action: removeItem -type: removeItem, productId: number
//action: clearCart -type: clearCart


// export const gadgetsReducer = (currentState= initialState, action: {type: string})=>{

//     //console.log("gadgetsReducer", action);
//     if(action.type === "addToCart"){
//         const cartItem = action.payload;
//         const copy = [...currentState.cart];
//         copy.push(cartItem);
//         return {
//             cart: copy
//         };
//     }

//     return currentState;

// }

const slice = createSlice({
    name: "gadgets",
    initialState: initialState,
    reducers: () => {

          return {
                addToCart: (state: GadgetState, action: PayloadAction<CartItem>)=> {
                    state.cart.push(action.payload);
                },
                removeItem: (state: GadgetState, action: PayloadAction<number>)=> {

                    const index = state.cart.findIndex(item => item.product?.id === action.payload);
                    if(index !== -1){
                        state.cart.splice(index, 1);
                    }
                }
          }  
    }
});

export const gadgetsReducer = slice.reducer;
//action creators
export const {addToCart, removeItem} = slice.actions;
