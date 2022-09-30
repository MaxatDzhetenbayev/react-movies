import React from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ItemTag from '../../../../components/ItemTag'

import { loadMovieDetails } from '../../../movie-detail/movie-detail-slice'

const MoviesModalInfo = ({ moviesInfo }) => {

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { id, large_cover_image, genres, rating, title_long, slug } = moviesInfo

   const handleSelectMovieById = (id, slug) => {
      dispatch(loadMovieDetails(id))
      navigate(`/movies-detail/${slug}`)
   }


   return (
      <>
         <div key={id} className='modalInfo-item' onClick={() => handleSelectMovieById(id, slug)}>
            <img className='modalInfo-item__img' src={large_cover_image} alt="" />
            <div className='modalInfo-item__bot'>
               <div className='modalInfo-item__rating'>{rating}</div>
               <div className='modalInfo-item__genres'>
                  {genres && genres.slice(0, 2).map((genre) => (
                     <ItemTag key={genre} title={genre} />
                  ))}
               </div>
               <div className='modalInfo-item__title'> {title_long}</div>
            </div>
         </div>
      </>
   )
}

export default MoviesModalInfo