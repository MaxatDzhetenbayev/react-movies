import React from 'react'

import Sort from '../../components/sort/Sort'
import Filter from './filter/Filter'

import './Controls.scss'

const Controls = () => {
   return (
      <div className='controls'>
         <Sort />
         <Filter />
      </div>
   )
}

export default Controls