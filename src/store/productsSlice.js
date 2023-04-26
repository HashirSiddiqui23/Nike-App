import { createSlice } from "@reduxjs/toolkit";
import products from "../Data/products";

const initialState = {
    products: products, 
    selectedProduct: null,
};

export const productsSlice = createSlice ({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
           const productID = action.payload;
           state.selectedProduct = state.products.find((p)=> p.id === productID)
        }
    },
})