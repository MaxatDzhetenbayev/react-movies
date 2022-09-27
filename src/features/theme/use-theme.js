import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from './theme-slice'

export const useTheme = () => {

   const dispatch = useDispatch()
   const theme = useSelector(state => state.theme)

   const handleSetTheme = (theme) => {
      dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
   }


   return [theme, handleSetTheme]
}