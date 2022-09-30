import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import throttle from 'lodash/throttle'


const initialState = {
   queryMovies: []
}

export const setQueryMovies = createAsyncThunk(
   '@@controls/set-query-movies',
   async (query, { extra: { api, client } }) => {
      const res = await client.get(api.QUERY_MOVIES(query))
      return res.data
   }
)

const controlsSlice = createSlice({
   name: '@@controls',
   initialState,
   extraReducers: (builders) => {
      builders
         .addCase(setQueryMovies.fulfilled, (state, action) => {
            state.queryMovies = action.payload.data.movies
         })
   }

})

export const { setFilter } = controlsSlice.actions

export const controlsReduser = controlsSlice.reducer


