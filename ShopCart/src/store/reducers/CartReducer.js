import {
    createSlice
} from "@reduxjs/toolkit";



const CartReducer = createSlice({
    name: "CartReducer",
    initialState: {
        cartItems: [],
        editProduct: null,
    },
    reducers: {
        addToCart(state, action) {
            const product = state.cartItems.find(item => item.id === action.payload.id)
            product ? product.quantity++ : state.cartItems.push({
                ...action.payload,
                quantity: 1,

            })
        },
        removeCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        },
        modifyCart(state, action) {
            const product = state.cartItems.find(item => item.id == action.payload.id)
            product ? product.quantity = action.payload.quantity : 1
        },
        clearCart(state) {
            state.cartItems = state.cartItems = []

        },
        setEditProduct(state, action) {
            state.editProduct = action.payload;
        },
        clearEditProduct(state) {
            state.editProduct = null;
        }
    }
})

export const {
    addToCart,
    removeCart,
    modifyCart,
    clearCart,
    setEditProduct,
    clearEditProduct
} = CartReducer.actions
export default CartReducer.reducer