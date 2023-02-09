import { useEffect, useState } from 'react';
import './App.css';
import MovieSection from './components/MovieSection';
import FetchApiMovie from './FetchApiMovie';
import Header from './components/Header';
import Footer from './components/Footer';
import { FaPlay } from 'react-icons/fa';
import { RiInformationLine } from 'react-icons/ri';
function App() {
  let genres = [];
  window.document.addEventListener('scroll',async (event) => {
    const navbar = document.querySelector('.navbar');
    //console.log('Scrolling...', window.scrollY); 
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
});
  
  const [moviesList, setMoviesList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
 // console.log(moviesList[0]);
  useEffect(() => {
    const loadMoviies = async () => {
      let list = await FetchApiMovie.getHomeMovies()
      //console.log(list);
      setMoviesList(list);
      // un seul film pour le banner
      let originals = list.filter((oneMovie) => oneMovie.slug === "top_rated")
      //console.log(originals)
      let result = JSON.parse(JSON.stringify(originals[0].item.results))
      let chooseRandomMovie =  Math.floor((
        Math.random() * (result.length - 1)))
    
       //console.log(chooseRandomMovie)
      let chosen = await  originals[0].item.results[chooseRandomMovie];
      //console.log(chosen);
      let chosenInfo = await FetchApiMovie.getOneMovie(chosen.id, "movie");
      setFeatureData(chosenInfo)
  
    }
    loadMoviies();
  }, []);
  if (featureData) {
    for (const genre of featureData.genres) {
      genres.push(genre.name)
    }
  }
  return (
    <div className="App">
      <Header />
      <main>
        <>
      {
        featureData && 
        <section className='featured' style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${featureData.backdrop_path})`,
          backgroundPosition: 'center'
        }}>
          <div className='featured--vertical'>
            <div className='featured--horizontal'>
                <div className='featured--name'>{featureData.title}</div>
                <div className='featured--info'>
                      <div className='featured--ranking'>{featureData.vote_count}</div>
                      <div className='featured--year'>{featureData.release_date}</div>
                </div>
                <div className='featured--description'>{featureData.overview}</div>
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
      }
      </>
      <section className='list'>
        {
          moviesList.map((item, key) => (
            <MovieSection className="item" key={key} title={item.title} items={item.item}/>
          ))
        }
      </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
