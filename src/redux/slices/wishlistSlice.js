import { createSlice } from "@reduxjs/toolkit";


const whishlistSlice = createSlice({
    name: 'wishlist',
    initialState:[],
    reducers:{
        // add to wishlist - addtowishlist btn clicked in view
        addToWishlist : (state,action)=>{
            state.push(action.payload)
        },
        // remove wishlist
        removeWishlistItem : (state,action)=>{
         return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishlist, removeWishlistItem} = whishlistSlice.actions
export default whishlistSlice.reducer
