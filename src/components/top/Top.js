import './Top.css';
import FetchApiMovie from '../../FetchApiMovie';
import { useEffect, useState } from 'react';

const Top = () => {
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
        moviesList.map((item, key) => {
         // return console.log(item.item.results)
        })
      }
      result()
    return (
        <div className='top'>
            {
                moviesList.map((item, key) => (
                    <section key={key}>
                    <h2>Top 10 des séries aujourd'hui: France</h2>
                    <h3 className='top--one'>{item.item.id}</h3>
                    
                </section>
                ))
            }
           
        </div>
    )

};

export default Top;