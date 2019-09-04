import React, { Component } from 'react'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CastPage from './components/CastPage'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/tv/:id" component={CastPage} />
          </Switch>
        </Router>
        <div>
          <header>
            <h1 className="header">Stay Home and Watch Tv</h1>
          </header>
          <article>
            <h2 className="top-rated-header">Top Rated Movies</h2>
          </article>
        </div>
      </>
    )
  }
}

export default App
