import { useEffect, useState } from 'react';
import './App.css'
import MoviesList from './movies/MoviesList'
import { landingPageDTO, movieDTO } from './movies/movie.model'

function App() {

  const [movies, setMovies] = useState<landingPageDTO>({});


  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'Luca',
            poster: 'https://m.media-amazon.com/images/I/71cNpH++xnL._AC_UF894,1000_QL80_.jpg'
          },
          {
            id: 2,
            title: 'Spider-Man: Far From Home',
            poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
          }
        ],
        upComingRelease: [
          {
            id: 3,
            title: 'Soul',
            poster: 'https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg'
          }
        ]
      })
    }, 1000)

    return () => clearTimeout(timerId);
  });

  return (
    <div className='container'>
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upComingRelease} />
    </div>
  )
}

export default App
