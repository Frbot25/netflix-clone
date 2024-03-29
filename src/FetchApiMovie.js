const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.themoviedb.org/3/";
const token = process.env.TOKEN;


const fetchMovies = async (endpoint) => {
    
    return await fetch (
    `${API_URL}${endpoint}&language=fr-FR`
    , {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`, // notice the Bearer before your token
        },
    })
    .then((response) => response.json())
    .catch((error) => console.log(error))
}


  const  getHomeMovies = async () => {
        return [
            {
                slug: "top_rated",
                title: "Mieux notés",
                item: await fetchMovies(`movie/top_rated?api_key=${API_KEY}`),
            },
            {
                slug: "trend-allweek",
                title: "Tendance",
                item: await fetchMovies(`trending/all/week?api_key=${API_KEY}`),
            },
            {
                slug: "upcoming",
                title: "Les plus récents",
                item: await fetchMovies(`movie/upcoming?api_key=${API_KEY}`),
            },
            {
                slug: "action",
                title: "action",
                item: await fetchMovies(`discover/movie?api_key=${API_KEY}&with_genres=28`),
            },
            {
                slug: "Documentary",
                title: "Documentaire",
                item: await fetchMovies(`discover/movie?api_key=${API_KEY}&with_genres=99`),
            },
            {
                slug: "Horror",
                title: "Horreur",
                item: await fetchMovies(`discover/movie?api_key=${API_KEY}&with_genres=27`),
            },
            {
                slug: "Science Fiction",
                title: "Science Fiction",
                item: await fetchMovies(`discover/movie?api_key=${API_KEY}&with_genres=878`),
            },
            {
                slug: "Romance",
                title: "Romance",
                item: await fetchMovies(`discover/movie?api_key=${API_KEY}&with_genres=10749`),
            },
            {
                slug: "Family",
                title: "Family",
                item: await fetchMovies(`discover/movie?api_key=${API_KEY}&with_genres=10751`),
            },
            
        ]
    }
   const getTopMovies = async () => {
        return [
            {
                slug: "top_rated",
                title: "Mieux notés",
                item: await fetchMovies(`movie/top_rated?api_key=${API_KEY}`),
            },
        ]
    }
  const  getsearch = async (keyword) => {
        return [
            {
                slug: "top_rated",
                title: "Mieux notés",
                item: await fetchMovies(`search/${keyword}?api_key=${API_KEY}`),
            },
        ]
    }
   const getOneMovie = async (movieId, type) => {
        let info = [];
        if(movieId) {
            switch (type) {
                case 'movie':
                    info =  await fetchMovies(`movie/${movieId}?api_key=${API_KEY}`)
                    
                    break
                    case 'tv':
                        info = await fetchMovies(`tv/${movieId}?api_key=${API_KEY}`)
                        break
                    default:
                        break
            }
        }
       return info
    }
    const exp = {
        getHomeMovies,
        getTopMovies,
        getsearch,
        getOneMovie
    }
    export default exp;


