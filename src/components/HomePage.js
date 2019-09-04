import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CastPage from './CastPage'

const HomePage = () => {
  const [topMovies, newTopMovies] = useState([])
  const [showId, setShowId] = useState('')
  const [randomMovie, setRandomMovie] = useState('')

  const fetchMovies = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=6ace706710ef6a37e0b50b31f5814c90&language=en-US&page=1'
    )
    newTopMovies(resp.data.results)
    setShowId(resp.data.results[0].id)
    setRandomMovie(resp.data.results[Math.floor(Math.random() * 19)])
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <>
      <article className="randomMovie">
        <img
          src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
        />
        <h2>{randomMovie.original_name}</h2>
        <p>{randomMovie.overview}</p>
      </article>
      <h3>
        {topMovies.map(movies => {
          return (
            <li className="top-movies" key={topMovies.id}>
              <header key={movies.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                  alt="Movie Poster"
                />
                <p>{movies.id}</p>
                <h3>{movies.original_name}</h3>
                <p className="movie-desc">{movies.overview}</p>
                <Link to={`/tv/${movies.id}`}>View The Cast</Link>
              </header>
            </li>
          )
        })}
      </h3>
    </>
  )
}
//api key 6ace706710ef6a37e0b50b31f5814c90
export default HomePage
