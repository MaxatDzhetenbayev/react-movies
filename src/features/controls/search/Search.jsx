import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../../components/inputs/Input'
import { setFilter } from '../controls-slice'

const Search = () => {

   const dispatch = useDispatch()
   const search = useSelector(state => state.controls.search)


   const handleFilterChange = (target) => {
      dispatch(setFilter(target))
   }

   return (
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px 0' }}>
         <Input placeholder='Поиск фильма' value={search} change={handleFilterChange} />
      </div>
   )
}

export default Search