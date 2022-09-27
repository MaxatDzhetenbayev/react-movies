import React from 'react'
import s from "./Input.module.scss"

const Input = ({ value, change }) => {
   return (
      <input className={s.input} placeholder='Поиск фильма' value={value} onChange={change} />
   )
}

export default Input