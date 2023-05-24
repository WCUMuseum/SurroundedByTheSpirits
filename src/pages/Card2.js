import React from 'react';
import { Link } from 'react-router-dom';


const Card2 = () => {
  return (
    <div>
    <Link to="/SurroundedByTheSpirits" className="link">
        <span className="arrow"> &#8592; </span>
        <span className="text">Go Back</span>
      </Link>
      <h1>UNIT 2</h1>
      <div className="row" style={{ paddingLeft: '5px' , paddingRight: '5px'}}>
        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: '100%', maxHeight: '600px' }}>
          <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/iI3pRSqjPsc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card 1</h5>
          <p className="card-text">
            DESCRIPTION HERE
          </p>

          
        </div>
        </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: '100%', maxHeight: '600px' }}>
          <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/iI3pRSqjPsc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card 2</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
            little bit longer.
          </p>
        
        </div>
        </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: '100%', maxHeight: '600px' }}>
          <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/iI3pRSqjPsc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card 3</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
            little bit longer.
          </p>
          
        </div>
          </div>
        </div>
        <hr style={{ borderTop: "1px solid black" }} />

      </div>

      <div className="row" style={{ paddingLeft: '5px' , paddingRight: '5px'}}>
        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: '100%', maxHeight: '600px' }}>
          <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/iI3pRSqjPsc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card 4</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
            little bit longer.
          </p>
         
        </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: '100%', maxHeight: '600px' }}>
          <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/iI3pRSqjPsc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card 5</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
            little bit longer.
          </p>
         
        </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-3" style={{ maxWidth: '100%', maxHeight: '600px' }}>
          <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/iI3pRSqjPsc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card 6</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
            little bit longer.
          </p>
         
        </div>
          </div>

        </div>
        <hr style={{ borderTop: "1px solid black" }} />
        </div>
      
    </div>
  );
};

export default Card2;
