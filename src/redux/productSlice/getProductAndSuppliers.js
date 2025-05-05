import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const getProductAndSuppliers = createAsyncThunk(
 
    'getProductAndSuppliers',
    async () => {
        const disp= useDispatch()
    debugger
        const response = await fetch(`https://localhost:7267/api/Products/GetAllSimple`);
       
        const data = await response.json();
          //  disp(setSuppliers(data.sup))
        return data;

    }
)