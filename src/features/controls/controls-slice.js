import { createSlice } from '@reduxjs/toolkit'


const initialState = {
   search: '',
}

const controlsSlice = createSlice({
   name: '@@controls',
   initialState,
   reducers: {
      setFilter: (state, action) => {
         state.search = action.payload
      },

   }
})

export const { setFilter } = controlsSlice.actions

export const controlsReduser = controlsSlice.reducer


