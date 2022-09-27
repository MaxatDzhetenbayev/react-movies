import { configureStore } from '@reduxjs/toolkit'

import { themeReduser } from './features/theme/theme-slice'
import { moviesReduser } from './features/movies/movies-slice'

import axios from 'axios'
import * as api from './config'

import { loadStorage, updateStorage } from './localStorage'


const persisStore = loadStorage()

export const store = configureStore({
   reducer: {
      theme: themeReduser,
      movies: moviesReduser,
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
      theme: store.getState().theme
   })
})