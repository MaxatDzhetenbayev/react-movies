import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Input from '../../../components/inputs/Input'
import { setQueryMovies } from '../controls-slice'
import MoviesSearchModal from './moviesSearchModal/MoviesSearchModal'

const Search = () => {

   const dispatch = useDispatch()

   const [query, setQuery] = useState('')
   const [modalVisible, setModalVisible] = useState(false)


   useEffect(() => {
      dispatch(setQueryMovies(query))

      if (query.length > 0) {
         setModalVisible(true)
      } else {
         setModalVisible(false)
      }

   }, [query])


   return (
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px 0px', }}>
         <Input placeholder='Поиск фильма' value={query} change={setQuery} />
         <MoviesSearchModal visible={modalVisible} />
      </div>
   )
}

export default Search