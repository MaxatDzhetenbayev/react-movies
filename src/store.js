import { configureStore } from '@reduxjs/toolkit'
import { themeReduser } from './features/theme/theme-slice'
import axios from 'axios'

export const store = configureStore({
   reducer: {
      theme: themeReduser,
   },
   devTools: true,
   middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
      thunk: {
         extraArgument: {
            client: axios,
         }
      }
   })
})