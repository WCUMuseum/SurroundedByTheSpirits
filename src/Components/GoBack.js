import React from 'react'
import { Link } from 'react-router-dom';


const GoBack = () => {
  return (
    <div>
    <Link to="/SurroundedByTheSpirits" className="link">
        <span className="arrow"> &#8592; </span>
        <span className="text">Go Back</span>
      </Link>
    </div>
  )
}

export default GoBack
