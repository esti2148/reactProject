import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteProductThunk = createAsyncThunk(
 
    'deleteProductThunk',
    async (id) => {
    debugger
        const response = await fetch(`https://localhost:7267/api/Products/delete${id}`)

    }
)