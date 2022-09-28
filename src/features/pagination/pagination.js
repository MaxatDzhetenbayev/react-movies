import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
   page_number: null,
   movie_count: null
}



const paginationSlice = createSlice({
   name: '@@pagination',
   initialState,
   extraReducers: (buildres) => {

   }
})

export const pagionationReduser = paginationSlice.reducer

