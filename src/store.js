import { configureStore } from '@reduxjs/toolkit'
import { themeReduser } from './features/theme/theme-slice'
import axios from 'axios'
import { loadStorage, updateStorage } from './localStorage'


const persisStore = loadStorage()

export const store = configureStore({
   reducer: {
      theme: themeReduser,
   },
   preloadedState: persisStore,
   devTools: true,
   middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
      thunk: {
         extraArgument: {
            client: axios,
         }
      }
   })
})

store.subscribe(() => {
   updateStorage({
      theme: store.getState().theme
   })
})