import React from 'react'
import ItemTag from '../ItemTag'
import './MovieCard.scss'

const MovieCard = ({ genres, title, description, year, image }) => {


   return (
      <div className='movie-card'>
         <img className='movie-card__img' src={image} alt="" />
         <div className='movie-card__body'>
            <div style={{ display: 'flex',  gap: '0.4rem',  fontSize: '14px' }}>
               {genres.slice(0, 2).map((genre) => (
                  <ItemTag key={genre} title={genre} />
               ))}
               {genres.length > 2 && <ItemTag title={`Еще +${genres.length - 2} `}/>}
               
            </div>
            <div className='movie-card__title'>{title} ({year})</div>
            <div className='movie-card__text' >{description.slice(0, 80)}...</div>
         </div>

      </div>
   )
}

export default MovieCard