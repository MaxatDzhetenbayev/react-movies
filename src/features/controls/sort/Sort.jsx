import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import Select from 'react-select'
import { setSelect } from '../select-slice'

const Sort = () => {

   const movie_options = [
      {
         value: 'download_count',
         label: 'popular',
      },
      {
         value: 'rating',
         label: 'rating',
      },
      {
         value: 'title',
         label: 'title',
      },
      {
         value: 'year',
         label: 'year',
      },
   ]

   const [selectOption, setSelectOption] = useState('download_count')
   const dispatch = useDispatch()


   useEffect(() => {
      dispatch(setSelect(selectOption))

   }, [selectOption])



   const getMovieOption = () => {
      return selectOption ? movie_options.find((movie) => movie.value === selectOption) : ''
   }

   const setMovieOption = (newValue) => {
      setSelectOption(newValue.value)
   }


   return (
      <div>
         <Select onChange={setMovieOption} value={getMovieOption()} options={movie_options} />
      </div>
   )
}

export default Sort