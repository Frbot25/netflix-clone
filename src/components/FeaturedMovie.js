import React from 'react'
import './FeaturedMovie.css'
import { FaPlay } from 'react-icons/fa';
import { RiInformationLine } from 'react-icons/ri';
const FeaturedMovie = ({film})=> {
  let genres = [];
  if (film) {
    for (const genre of film.genres) {
      genres.push(genre.name)
    }
    return (
      <section className='featured' style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${film.backdrop_path})`,
        backgroundPosition: 'center'
      }}>
        <div className='featured--vertical'>
          <div className='featured--horizontal'>
              <div className='featured--name'>{film.title}</div>
              <div className='featured--info'>
                    <div className='featured--ranking'>{film.vote_count}</div>
                    <div className='featured--year'>{film.release_date}</div>
              </div>
              <div className='featured--description'>{film.overview}</div>
              <div className='featured--button'>
                <a href="/" className='featured--playbutton'><FaPlay /> Lecture</a>
                <a href="/" className='featured--mylistbutton'><RiInformationLine /> Plus d'infos</a>
                </div>
                <div className='featured--genres'>
                   <strong> Genres : {genres.join(", ")}</strong>
                </div>
          </div>
        </div>
      </section>
    )
  }
  
}

export default FeaturedMovie;