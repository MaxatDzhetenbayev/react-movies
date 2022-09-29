import { createSlice } from "@reduxjs/toolkit";




const selectSlice = createSlice({
   name: '@@select',
   initialState: '',
   reducers: {
      setSelect: (state, action) => {
         return action.payload
      }
   }
})

export const { setSelect } = selectSlice.actions

export const selectReduser = selectSlice.reducer