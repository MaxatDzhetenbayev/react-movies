import { createSlice } from '@reduxjs/toolkit'


const themeSlice = createSlice({
   name: '@@theme',
   initialState: 'light',
   reducers: {
      setTheme: (state, action) => {
         return state = action.payload
      }
   }
})

export const { setTheme } = themeSlice.actions

export const themeReduser = themeSlice.reducer