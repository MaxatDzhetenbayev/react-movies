import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import Input from '../../../../components/inputs/Input'

import { setQueryMovies } from '../../controls-slice'

const MovieQuery = ({ handleVisible, }) => {

   const dispatch = useDispatch()
   const [query, setQuery] = useState('')

   useEffect(() => {
      dispatch(setQueryMovies(query))
   }, [query])

   return (
      <div onClick={e => e.stopPropagation()}>
         <Input placeholder='Поиск фильма' value={query} change={setQuery} onClick={handleVisible} />
      </div>
   )
}

export default MovieQuery