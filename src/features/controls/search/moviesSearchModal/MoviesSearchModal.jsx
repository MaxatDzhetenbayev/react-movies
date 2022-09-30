import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ItemTag from '../../../../components/ItemTag'

import { loadMovieDetails } from '../../../movie-detail/movie-detail-slice'

import './MoviesSearchModal.scss'

const MoviesSearchModal = ({ visible }) => {

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const queryMovies = useSelector(state => state.controls.queryMovies)


   const handleSelectMovieById = (id, slug) => {
      dispatch(loadMovieDetails(id))
      navigate(`/movies-detail/${slug}`)
   }

   return (
      <div className='moviesSearchModal' style={{ visibility: visible === false ? 'hidden' : '' }}>
         <div className='modalInfo'>
            {
               queryMovies &&
               queryMovies.map((movies) => {
                  const { title_long, genres, rating, large_cover_image, id, slug } = movies
                  return (
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
                  )
               })
            }

         </div>
      </div>
   )
}

export default MoviesSearchModal