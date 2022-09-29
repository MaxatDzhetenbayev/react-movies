import { createSlice } from '@reduxjs/toolkit'


const initialState = {
   filter: '',
}

const controlsSlice = createSlice({
   name: '@@controls',
   initialState,
   reducers: {
      setFilter: (state, action) => {
         state.filter = action.payload
      },

   }
})

export const { setFilter } = controlsSlice.actions

export const controlsReduser = controlsSlice.reducer


