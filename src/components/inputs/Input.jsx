import React from 'react'
import s from "./Input.module.scss"

const Input = ({ value, change, placeholder }) => {
   return (
      <input className={s.input} placeholder={placeholder} value={value} onChange={(e) => change(e.target.value)} />
   )
}

export default Input