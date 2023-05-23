import React from 'react';
import { Link } from 'react-router-dom';

const Card1 = () => {
  return (
    <div>
      <Link to="/SurroundedByTheSpirits">
        <button style={{ color: 'rgb(221, 105, 29)' }}> &#8592; Go Back</button>
      </Link>
      <h1>UNIT 1</h1>
    </div>
  );
};

export default Card1;
