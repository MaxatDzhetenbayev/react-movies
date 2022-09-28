import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



const initialState = {
   status: 'idle',
   entities: [],
   error: null
}

export const loadMovies = createAsyncThunk(
   '@@movies/load-movies',
   async (_, { extra: { api, client } }) => {
      const res = await client.get(api.MOVIE_FILTER_LIMIT_AND_PAGE())
      return res.data
   }
)

const moviesSlice = createSlice({
   name: '@@movies',
   initialState,
   reducers: {},
   extraReducers: (builders) => {
      builders
         .addCase(loadMovies.pending, (state) => {
            state.status = 'loading'
            state.error = null
         })
         .addCase(loadMovies.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload || action.meta.error
         })
         .addCase(loadMovies.fulfilled, (state, action) => {
            state.status = 'received'
            state.entities = action.payload.data.movies
         })
   }
})

export const moviesReduser = moviesSlice.reducer


export const selectMoviesInfo = (state) => ({
   status: state.movies.status,
   error: state.movies.error,
   qty: state.movies.entities.length,
})

export const selectAllMovies = (state) => state.movies.entities

export const selectVisibleMovies = (state, filter) => {
   return state.movies.entities.filter((movie) => movie.title.toLowerCase().includes(filter.toLowerCase()))
}