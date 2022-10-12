import React from 'react'
import './MovieSection.css';

function MovieSection({title,items}) {
   // console.log(items.results.length)
  return (
    <div className='movieRow'>
        <h2 className='movies--title'>{title}</h2>
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