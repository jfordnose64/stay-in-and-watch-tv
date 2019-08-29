import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CastPage = () => {
  const fetchCast = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/100/credits?api_key=6ace706710ef6a37e0b50b31f5814c90&language=en-US'
    )
  }

  useEffect(() => {
    fetchCast()
  })

  return <div>wow</div>
}

export default CastPage
