import React from 'react'

import Sort from '../../components/sort/Sort'
import Search from './search/Search'

import './Controls.scss'

const Controls = () => {
   return (
      <div className='controls' style={{ position: 'relative' }}>
         <Sort />
         <Search />
      </div>
   )
}

export default Controls