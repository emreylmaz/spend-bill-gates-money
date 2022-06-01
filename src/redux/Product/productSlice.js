import { createSlice } from "@reduxjs/toolkit";

import productsjson from "../../products.json"

const data = productsjson.products;
export const productSlice = createSlice({
    name: 'product',
    initialState:{
        items:data,
        money: 100000000000,
        initialMoney:100000000000,
    },
    reducers:{
        updateCount:(state,action)=>{
            const {id,count} = action.payload;
            const item = state.items.find((tmp) => tmp.id===id);
            item.count=count;
            let price=0;

            state.items.map((tmp)=>{
                price += Number(tmp.count)*Number(tmp.productPrice);
            });
            state.money= Number(state.initialMoney)-Number(price);
          
        }
    },
})

export const {updateCount} = productSlice.actions;
export default productSlice.reducer;