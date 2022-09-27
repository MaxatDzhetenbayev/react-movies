import React from 'react'

import { useEffect } from 'react'
import { useTheme } from './use-theme'

import { BsMoonFill, BsMoon } from 'react-icons/bs'

import './ThemeSwitcher.scss'
const ThemeSwitcher = () => {


   const [theme, handleSetTheme] = useTheme()

   useEffect(() => {
      document.body.setAttribute('data-theme', theme)
   }, [theme])


   return (
      <div className='theme'>
         {theme === 'light'
            ? <BsMoon className='theme__switcher' onClick={() => handleSetTheme('light')} />
            : <BsMoonFill className='theme__switcher' onClick={() => handleSetTheme('dark')} />}

      </div>
   )
}

export default ThemeSwitcher