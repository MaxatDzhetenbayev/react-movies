import React from 'react'
import s from "./Input.module.scss"

const Input = ({ value, change, placeholder, onClick, ...props }) => {
   return (
      <input
         {...props}
         className={s.input}
         placeholder={placeholder}
         value={value}
         onChange={(e) => change(e.target.value)}
         onClick={onClick} />

   )
}

export default Input