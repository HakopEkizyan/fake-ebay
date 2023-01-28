import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find(item => item._id === action.payload._id)
            if (!item) { 
                state.products.push(action.payload);
            } else {
                console.log('Item already in cart')
            }
        },
        removeItem: (state, action) => {
            state.products = state.products.filter(item => item._id !== action.payload)
        },
        emptyCart: (state) => {
            state.products = []
        },
    },
});

export const { addToCart, removeItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;