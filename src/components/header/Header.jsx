import React from 'react'
import ThemeSwitcher from '../../features/theme/ThemeSwitcher'
import './Header.scss'

const Header = () => {
   return (
      <section className='header'>
         <div className='container'>
            <div className='header__row'>
               <div className='header__logo'>
                  Movies
               </div>
               <ThemeSwitcher />
            </div>
         </div>
      </section>
   )
}

export default Header