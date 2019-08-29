import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [topMovies, newTopMovies] = useState([])

  const fetchMovies = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=6ace706710ef6a37e0b50b31f5814c90&language=en-US&page=1'
    )
    newTopMovies(resp.data.results)
  }

  useEffect(() => {
    fetchMovies()
  })

  return (
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
                <header>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                  />
                  <h3>{movies.original_name}</h3>
                  <p>{movies.overview}</p>
                </header>
              </li>
            )
          })}
        </h3>
      </article>
    </div>
  )
}
//api key 6ace706710ef6a37e0b50b31f5814c90
export default HomePage
