import React from 'react'

import './Buttons.scss'

const Button = ({ children, ...props }) => {
   return (
      <button
         {...props}
         className='button'
      >
         {children}
      </button>
   )
}

export default Button