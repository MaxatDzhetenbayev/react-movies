import React from 'react'
import ItemTag from '../ItemTag'
import './MovieCard.scss'

const MovieCard = ({ genres, title, description, rating, year, image }) => {




   return (
      <div className='movie-card'>
         <img className='movie-card__img' src={image} alt="" />
         <div className='movie-card__body'>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
               {genres.map((genre) => (
                  <ItemTag key={genre} title={genre} />
               ))}
            </div>
            <div className='movie-card__title'>{title}</div>
            <div className='movie-card__text' >{description.slice(0,60)}...</div>
         </div>

      </div>
   )
}

export default MovieCard