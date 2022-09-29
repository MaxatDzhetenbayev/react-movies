import { createSlice } from '@reduxjs/toolkit'




const initialState = {
   filter: '',
   sort: ''
}

const controlsSlice = createSlice({
   name: '@@controls',
   initialState,
   reducers: {
      setFilter: (state, action) => {
         state.filter = action.payload
      },
      setSort: (state, action) => {
         state.sort = action.payload
      }
   }
})

export const { setFilter, setSort } = controlsSlice.actions

export const controlsReduser = controlsSlice.reducer


