import './Top.css';
import FetchApiMovie from '../../FetchApiMovie';
import { useEffect, useState } from 'react';

const Top = ({title}) => {
  console.log(title)
    const [moviesList, setMoviesList] = useState([]);
    useEffect(() => {
        const loadMoviies = async () => {
          let list = await FetchApiMovie.getTopMovies()
          //console.log(list);
          setMoviesList(list);
    
        }
        loadMoviies();
      }, []);
      const result = () => {
        console.log(moviesList)
        moviesList.map((item, key) => {
         return console.log(item.item.results)
        })
      }
      result()
    return (
        <div className='top'>
          <h2>{title}</h2>
            {/* {
                moviesList.map((item, key) => (
                    <section key={key}>
                    
                    <div  className="movieRow--item">
                         <img  src={`https://image.tmdb.org/t/p/w200${item.item.poster_path}`} alt="poster" />
                        
                           
                         
                </div>
                    
                </section>
                ))
            } */}
           
        </div>
    )

};

export default Top;