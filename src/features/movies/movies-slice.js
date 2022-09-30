import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



const initialState = {
   status: 'idle',
   entities: [],
   movie_count: null,
   page: 1,
   detailId: null,
   error: null
}

export const loadMovies = createAsyncThunk(
   '@@movies/load-movies',
   async ({ page, sort }, { extra: { api, client } }) => {
      const res = await client.get(api.LOADED_MOVIE(page, sort))
      return res.data
   }
)

const moviesSlice = createSlice({
   name: '@@movies',
   initialState,
   reducers: {
      setPage: (state, action) => {
         state.page = action.payload
      },
      setDetailId: (state, action) => {
         state.detailId = action.payload
      }
   },
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
            state.movie_count = action.payload.data.movie_count
         })
   }
})

export const { setPage, setDetailId } = moviesSlice.actions
export const moviesReduser = moviesSlice.reducer


export const selectMoviesInfo = (state) => ({
   status: state.movies.status,
   error: state.movies.error,
   movie_count: state.movies.movie_count,
   page: state.movies.page,
   detailId: state.movies.detailId
})

export const selectAllMovies = (state) => state.movies.entities

export const selectVisibleMovies = (state, search) => {
   return state.movies.entities.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
}