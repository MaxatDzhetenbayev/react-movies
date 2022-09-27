import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



const initialState = {
   status: 'idle',
   entities: [],
   error: null
}

export const loadMovies = createAsyncThunk(
   '@@movies/load-movies',
   async (_, { extra: { api, client } }) => {
      return await client.get(api.BASE_MOVIE_URL)
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
            state.entities = action.payload.data.data.movies
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