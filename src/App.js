import { useEffect, useState } from 'react';
import './App.css';
import MovieSection from './components/MovieSection';
import FetchApiMovie from './FetchApiMovie';
import Header from './components/Header';
import film from './assets/1352387_backdrop_scale_1280xauto.jpg'
import Banner from './components/banner/Banner';
import Top from './components/top/Top';
import FeaturedMovie from './components/FeaturedMovie';

function App() {
  
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
      console.log(chosen);
      let chosenInfo = await FetchApiMovie.getOneMovie(chosen.id, "movie");
      setFeatureData(chosenInfo)

    }
    loadMoviies();
  }, []);


  return (
    <div className="App">
      <Header />
      <main>
        <>
      {
        featureData && <FeaturedMovie film={featureData}/>
      }
      </>
        {/* <Banner film={film}/> */}
        <Top />
      <section className='list'>
        {
          moviesList.map((item, key) => (
            <MovieSection className="item" key={key} title={item.title} items={item.item}/>
          ))
        }
      </section>
      </main>
      
    </div>
  );
}

export default App;
