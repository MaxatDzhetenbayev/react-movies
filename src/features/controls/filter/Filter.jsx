import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../../components/inputs/Input'
import { setFilter } from '../controls-slice'

const Filter = () => {

   const dispatch = useDispatch()
   const filter = useSelector(state => state.controls.filter)


   const handleFilterChange = (target) => {
      dispatch(setFilter(target))
   }

   return (
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px 0' }}>
         <Input placeholder='Поиск фильма' value={filter} change={handleFilterChange} />
      </div>
   )
}

export default Filter