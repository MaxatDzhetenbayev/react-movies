import React from 'react'
import { useSelector } from 'react-redux'


import VisibleContent from '../../components/visibleContent/VisibleContent'

import { selectMovieInfo } from '../../features/movie-detail/movie-detail-slice'
import MoviesInfo from '../../features/movie-detail/MoviesInfo'





const MovieDetails = () => {

   const { status, error } = useSelector(selectMovieInfo)

   return (
      <div className='movie-details'>
         <div className='container'>
            <VisibleContent status={status} error={error}>
               <MoviesInfo />
            </VisibleContent>
         </div>


      </div>
   )
}

export default MovieDetails