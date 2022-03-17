import { createSlice } from "@reduxjs/toolkit";


export const basketSlice = createSlice({
    name: "basket",
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        addItem: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeItem: (state, action) => {
            const index= state.items.findIndex(item => item.id == action.payload.id);

            let newBaset =  [...state.items];

            if(index >= 0){
                newBaset.splice(index,1);
            }

            state.items=newBaset;
        }
    },
});

export const {addItem, removeItem} =basketSlice.actions;

export const selectItems = (state)=>state.basket.items;
export const selectItemsTotal = (state)=>state.basket.items.reduce((total,item)=>total+item.price, 0);
export default basketSlice.reducer;