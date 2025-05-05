import { createSlice } from "@reduxjs/toolkit";
import { getProductThunk } from "./getProductThunk";
import { addProductThunk } from "./addProductThunk";
import { updateProductThunk } from "./editProductThunk";
import { getProductAndSuppliers } from "./getProductAndSuppliers";

const INITIAL_STATE = {

   products:[],
   currentProduct:{}

  }
  export const productSlice = createSlice({
      name: 'Product',
      initialState: INITIAL_STATE,
      reducers: {
          ///.......
         
      },
      extraReducers: (builder) => {
      builder.addCase(getProductThunk.pending,(state,action)=>{
  
      });

      builder.addCase(getProductThunk.fulfilled, (state, action) => {
        state.products=action.payload
      });
      builder.addCase(getProductThunk.rejected,(state,action)=>{
          
      });

      builder.addCase(addProductThunk.pending,(state,action)=>{
  
      });

      builder.addCase(addProductThunk.fulfilled, (state, action) => {
        debugger
        state.products=action.payload
      });
      builder.addCase(addProductThunk.rejected,(state,action)=>{
          
      });


      builder.addCase(updateProductThunk.pending,(state,action)=>{
  
      });

      builder.addCase(updateProductThunk.fulfilled, (state, action) => {
        state.products=action.payload
      });
      builder.addCase(updateProductThunk.rejected,(state,action)=>{
          
      });


      builder.addCase(getProductAndSuppliers.pending,(state,action)=>{
  
      });

      builder.addCase(getProductAndSuppliers.fulfilled, (state, action) => {
        state.currentProduct=action.payload
      });
      builder.addCase(getProductAndSuppliers.rejected,(state,action)=>{
          
      });
    }

});