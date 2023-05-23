import React from 'react'
import {Link, useMatch, useResolvedPath } from 'react-router-dom'

const Card1 = () => {
  return (
    <div>

    <Link to = "/SurroundedByTheSpirits">
        <a style={{color: "rgb(221, 105, 29)"}}> &#8592; Go Back</a>
      </Link>
    
      <h1>UNIT 1</h1>
    </div>
  )
}

export default Card1
