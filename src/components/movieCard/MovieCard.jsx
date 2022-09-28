import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loadMovieDetails } from '../../features/movie-detail/movie-detail-slice'

import ItemTag from '../ItemTag'

import './MovieCard.scss'
import { AiFillStar } from 'react-icons/ai'

const MovieCard = ({ genres, title, description, year, image, id, slug, rating }) => {

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const [movieId, setMovieId] = useState('')

   const handleSelectMovieById = (id) => {
      dispatch(loadMovieDetails(id))
      navigate(`/movies-detail/${slug}`)
   }



   return (
      <div className='movie-card' onClick={() => handleSelectMovieById(id)}>
         <img className='movie-card__img' src={image} alt="" />
         <div className='movie-card__body'>
            <div className='movie-card__rating'><AiFillStar /> <span className='movie-card__rating-num'>{rating}</span> </div>

            <div style={{ display: 'flex', gap: '0.4rem', fontSize: '14px' }}>
               {genres.slice(0, 2).map((genre) => (
                  <ItemTag key={genre} title={genre} />
               ))}
               {genres.length > 2 && <ItemTag title={`Еще +${genres.length - 2} `} />}
            </div>

            <div className='movie-card__title'>{title} ({year}) </div>
            <div className='movie-card__text' >{description.slice(0, 80)}...</div>
         </div>

      </div>
   )
}

export default MovieCard