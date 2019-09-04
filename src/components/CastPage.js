import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CastPage = props => {
  const [character, setNewCharacter] = useState([])

  const fetchCast = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/100/credits?api_key=6ace706710ef6a37e0b50b31f5814c90&language=en-US`
    )
    setNewCharacter(resp.data.cast)
  }
  useEffect(() => {
    fetchCast()
  })

  return (
    <div>
      <h4>
        {character.map(cast => {
          return (
            <li>
              <h1>{cast.name}</h1>
              <p>{cast.character}</p>
            </li>
          )
        })}
      </h4>
    </div>
  )
}

export default CastPage
