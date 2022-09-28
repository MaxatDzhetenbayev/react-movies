import React from 'react'

const ItemTag = ({ title, ...props }) => {

   return (
      <div
         {...props}
         style={{
            padding: '5px 10px',
            backgroundColor: 'var(--ui-bg)',
            borderRadius: '8px',
            color: 'var(--colors-text)'

         }}
      > {title}</div >
   )
}

export default ItemTag