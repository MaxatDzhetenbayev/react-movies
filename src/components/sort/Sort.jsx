import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'

import './Sort.scss'

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
   const navigate = useNavigate()

   useEffect(() => {
      navigate(`/movie-sort/${selectOption}`)
   }, [selectOption])



   const getMovieOption = () => {
      return selectOption ? movie_options.find((movie) => movie.value === selectOption) : ''
   }

   const setMovieOption = (newValue) => {
      setSelectOption(newValue.value)

   }


   return (
      <div>
         <Select
            classNamePrefix='custom-sort'
            onChange={setMovieOption}
            value={getMovieOption()}
            options={movie_options}
         >
         </Select>
      </div >
   )
}

export default Sort