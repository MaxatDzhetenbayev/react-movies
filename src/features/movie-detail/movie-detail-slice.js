import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



const initialState = {
   entities: [],
   status: 'idle',
   error: null,

}

export const loadMovieDetails = createAsyncThunk(
   '@@movie-detail/load-movie-detail',
   async (id, { extra: { client, api } }) => {
      const res = await client.get(api.SELECT_MOVIE_BY_ID(id))
      return res.data
   }
)

const movieDetailsSlice = createSlice({
   name: '@@movie-detail',
   initialState,
   extraReducers: (builders) => {
      builders
         .addCase(loadMovieDetails.pending, (state) => {
            state.status = 'loading'
            state.error = null
         })
         .addCase(loadMovieDetails.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload || action.meta.requestStatus
         })
         .addCase(loadMovieDetails.fulfilled, (state, action) => {
            state.status = 'received'
            state.entities = action.payload.data.movie
         })
   }
})

export const selectMovieInfo = (state) => state.movieDetails

export const movieDetailsReduser = movieDetailsSlice.reducer