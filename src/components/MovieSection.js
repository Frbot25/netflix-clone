import React from 'react'
import './MovieSection.css';

function MovieSection({title,items}) {
   // console.log(items.results.length)
  return (
    <div className='movieRow'>
        <h2 className='movies--title'>{title}</h2>
        <div className='movieRow--left'>
        <svg xmlns="http://www.w3.org/2000/svg"   fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-6 h-6">
            <path   d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>

        </div>
        <div className='movieRow--right'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-6 h-6">
            <path   d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
        </div>
        <div className='movieRow--listarea'>
            <div className='movieRow--list'>
            {
                items.results.length > 0 && items.results.map((item, key) => (
                    <div key={key} className="movieRow--item">
                         <img  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="poster" />          
                </div>
                ))
            }
            </div>

        </div>
    </div>
  )
}
export default MovieSection