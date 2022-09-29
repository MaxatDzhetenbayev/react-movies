import React from 'react'

import './Buttons.scss'

const Button = ({ children, width, ...props }) => {
   return (
      <button
         {...props}
         style={{ minWidth: `${width}vw` }}
         className='button'
      >
         {children}
      </button>
   )
}

export default Button