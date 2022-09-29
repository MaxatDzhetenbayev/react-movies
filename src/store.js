import { configureStore } from '@reduxjs/toolkit'

import { themeReduser } from './features/theme/theme-slice'
import { moviesReduser } from './features/movies/movies-slice'
import { controlsReduser } from './features/controls/controls-slice'
import { movieDetailsReduser } from './features/movie-detail/movie-detail-slice'
import { pagionationReduser } from './features/pagination/pagination'
import { selectReduser } from './features/controls/select-slice'

import axios from 'axios'
import * as api from './config'

import { loadStorage, updateStorage } from './localStorage'


const persisStore = loadStorage()

export const store = configureStore({
   reducer: {
      theme: themeReduser,
      movies: moviesReduser,
      controls: controlsReduser,
      movieDetails: movieDetailsReduser,
      pagination: pagionationReduser,
      select: selectReduser,
   },
   preloadedState: persisStore,
   devTools: true,
   middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
      thunk: {
         extraArgument: {
            client: axios,
            api,
         }
      }
   })
})

store.subscribe(() => {
   updateStorage({
      theme: store.getState().theme,
      movieDetails: store.getState().movieDetails,
      select: store.getState().select
   })
})