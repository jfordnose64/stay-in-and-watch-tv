import React, { Component } from 'react'
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="header">Stay Home and Watch Tv</h1>
        </header>
        <article>
          <h2 className="top-rated-header">Top Rated Movies</h2>
          <HomePage />
        </article>
      </div>
    )
  }
}

export default App
