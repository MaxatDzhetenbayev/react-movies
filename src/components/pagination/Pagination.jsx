import React from 'react'
import Button from '../buttons/Button'

const Pagination = ({ total_page, handleSetPage, page }) => {




   return (
      <div style={{ display: 'flex', gap: '1rem' }}>
         {total_page.slice(0, 10).map(item => (
            <Button key={item} onClick={() => handleSetPage(item)} >
               {item}
            </Button>
         ))}
      </div>
   )
}

export default Pagination