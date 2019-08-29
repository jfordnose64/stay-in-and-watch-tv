import React, { useEffect, useState } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CastPage from './CastPage'

const HomePage = () => {
  const [topMovies, newTopMovies] = useState([])
  const [showId, setShowId] = useState('')

  const fetchMovies = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=6ace706710ef6a37e0b50b31f5814c90&language=en-US&page=1'
    )
    newTopMovies(resp.data.results)
    setShowId(resp.data.results[0].id)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <Router>
      <div>
        <header>
          <h1>Stay Home and Watch Tv</h1>
        </header>
        <article>
          <h2>Top Rated Movies</h2>
          <h3>
            {topMovies.map(movies => {
              return (
                <li className="top-movies">
                  <header key={movies.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                      alt="Movie Poster"
                    />
                    <h3>{movies.original_name}</h3>
                    <p>{movies.overview}</p>
                    <Link to="/tv">Cast</Link>
                    <Route exact path="/tv" component={CastPage}></Route>
                  </header>
                </li>
              )
            })}
          </h3>
        </article>
      </div>
    </Router>
  )
}
//api key 6ace706710ef6a37e0b50b31f5814c90
export default HomePage
