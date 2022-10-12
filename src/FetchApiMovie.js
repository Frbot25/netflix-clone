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

export default {
    getHomeMovies: async () => {
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
            
        ]
    },
    getTopMovies: async () => {
        return [
            {
                slug: "top_rated",
                title: "Mieux notés",
                item: await fetchMovies(`movie/top_rated?api_key=${API_KEY}`),
            },
        ]
    },
    getsearch: async (keyword) => {
        return [
            {
                slug: "top_rated",
                title: "Mieux notés",
                item: await fetchMovies(`search/${keyword}?api_key=${API_KEY}`),
            },
        ]
    },
    getOneMovie: async (movieId, type) => {
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
};

