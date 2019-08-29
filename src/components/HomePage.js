import React, { useState } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [topMovies, newTopMovies] = useState('')

  const fetchMovies = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=6ace706710ef6a37e0b50b31f5814c90&language=en-US&page=1'
    )
    console.log(resp.data.results.original_name)
  }

  return (
    <div>
      <header>
        <h1>Stay Home and Watch Tv</h1>
        <button type="button" onClick={fetchMovies}>
          Top Movies
        </button>
      </header>
      <article>
        <h2>Top Rated</h2>
        <h3>{topMovies}</h3>
      </article>
    </div>
  )
}
//api key 6ace706710ef6a37e0b50b31f5814c90
export default HomePage
