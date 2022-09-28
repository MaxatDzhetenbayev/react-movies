import React from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeSwitcher from '../../features/theme/ThemeSwitcher'
import './Header.scss'

const Header = () => {

   const navigate = useNavigate()

   return (
      <section className='header' >
         <div className='container'>
            <div className='header__row'>
               <div className='header__logo' onClick={() => navigate('/')}>
                  Movies
               </div>
               <ThemeSwitcher />
            </div>
         </div>
      </section>
   )
}

export default Header