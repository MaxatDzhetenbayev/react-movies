import React from 'react'
import './ThemeSwitcher.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { BsMoonFill, BsMoon } from 'react-icons/bs'

import { setTheme } from './theme-slice'

const ThemeSwitcher = () => {

   const dispatch = useDispatch()
   const theme = useSelector(state => state.theme)

   useEffect(() => {
      document.body.setAttribute('data-theme', theme)
   }, [theme])

   const handleTheme = (theme) => {
      dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
   }



   return (
      <div className='theme'>
         {theme === 'light'
            ? <BsMoon className='theme__switcher' onClick={() => handleTheme('light')} />
            : <BsMoonFill className='theme__switcher' onClick={() => handleTheme('dark')} />}

      </div>
   )
}

export default ThemeSwitcher