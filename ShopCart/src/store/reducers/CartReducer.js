import {
    createSlice
} from "@reduxjs/toolkit";



const CartReducer = createSlice({
    name: "CartReducer",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            const product = state.find(item => item.id === action.payload.id)
            product ? product.quantity++ : state.push({
                ...action.payload,
                quantity: 1
            })
        },
        removeCart(state, action) {
            return state.filter(item => item.id !== action.payload.id)
        },
        modifyCart(state, action) {
            const product = state.find(item => item.id == action.payload.id)
            product ? product.quantity = action.payload.quantity : 1
        },
        clearCart(){
            return []
        }
    }
})

export const {addToCart,removeCart,modifyCart,clearCart} = CartReducer.actions
export default CartReducer.reducer