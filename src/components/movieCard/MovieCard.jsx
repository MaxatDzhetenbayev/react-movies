import React from 'react'
import ItemTag from '../ItemTag'
import './MovieCard.scss'

const MovieCard = () => {


   const genres = ['horror', 'mistycs',]

   return (
      <div className='movie-card'>
         <img className='movie-card__img' src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/3e3a43a91f0025ed8dbe692da76dd4f7/960x540" alt="" />
         <div className='movie-card__body'>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
               {genres.map((genre) => (
                  <ItemTag key={genre} title={genre} />
               ))}
            </div>
            <div className='movie-card__title'>Грань</div>
            <div className='movie-card__text' >sdfsdfsdf sdfsdfsdf sdf sdf sdfsdfsdfewcwe ue iweyfiwehi  ggdiusfg s</div>
         </div>

      </div>
   )
}

export default MovieCard