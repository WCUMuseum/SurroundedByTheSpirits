import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import paulStollerImage from '../assest/Paul_stoller.jpg';

function Home() {
  return (
    <div>
      <div style={{paddingTop:'25px'}} className="paul" >
      <img className="paul-img" src={paulStollerImage} alt="Paul Stoller" />
      <p>
        WCU Professor Paul Stoller is an eminent anthropologist, known for his pioneering contributions to the field
        of anthropology in the areas of West African culture, religion, rituals, and wellness. In recognition of his
        upcoming retirement and the extensive impact of his life's work, this annex serves to chronicle his scholarly
        achievements and educate visitors on the inspiration behind the larger exhibition.
      </p>
      <p>
        Dr. Paul Stoller received a Bachelor of Arts degree in Political Science from the University of Pittsburgh in
        1969. Following his graduation, he joined the Peace Corps, where he was stationed in Niger, immersing himself
        in the vibrant culture and teaching English to the Songhay people until 1971.
      </p>
      <p>
        Driven by a passion for understanding the intricate dynamics of human societies, Dr. Stoller pursued further
        academic enrichment, culminating in the acquisition of a Master of Science degree in Sociolinguistics from
        Georgetown University in 1974. Building upon this foundation, he went on to achieve a distinguished Ph.D. in
        Anthropology from the prestigious University of Texas at Austin in 1978.
      </p>
      <p>
        Stoller's research has focused primarily on the Songhay people of Niger, West Africa, and he has written
        extensively about their religion, music, and culture. He is particularly well-known for his book "In Sorcery's
        Shadow: A Memoir of Apprenticeship among the Songhay of Niger", which describes his experiences living among
        the Songhay as an apprentice to a sorcerer.
      </p>
      <p>
        In addition to his academic work, Stoller has also written several popular books, including "The Taste of
        Ethnographic Things: The Senses in Anthropology" and "Fusion of the Worlds: An Ethnography of Possession Among
        the Songhay of Niger". He has received numerous awards and honors for his work, including fellowships from the
        National Endowment for the Humanities, the John Simon Guggenheim Memorial Foundation and many more.
      </p>
      <p>
        To see more of Paul Stoller's books and accomplishments:
        <Link to="/paul_stoller">
          <Button style={{ backgroundColor: 'rgb(221, 105, 29)' }} type="button" className="btn btn-primary">
            Click Here!
          </Button>
        </Link>
      </p>
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
          <h5 className="card-title">Card 1</h5>
          <p className="card-text">
            DESCRIPTION HERE
          </p>

          <p> Click to go to chapter videos: 
          <Link to="/Card1" style={{paddingLeft: '10px'}}>
          <Button style={{ backgroundColor: 'rgb(221, 105, 29)' }} type="button" className="btn btn-primary">
            Click Here!
          </Button>
        </Link>
        
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
          <p> Click to go to chapter videos: 

          <Link to="/Card2"  style={{paddingLeft: '10px'}}>
                  <Button style={{ backgroundColor: 'rgb(221, 105, 29)' }} type="button" className="btn btn-primary">
                    Click Here!
                  </Button>
                </Link>
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
          <p> Click to go to chapter videos: 

          <Link to="/Card3"  style={{paddingLeft: '10px'}}>
                  <Button style={{ backgroundColor: 'rgb(221, 105, 29)' }} type="button" className="btn btn-primary">
                    Click Here!
                  </Button>
                </Link>
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
          <p> Click to go to chapter videos: 

          <Link to="/Card4" style={{paddingLeft: '10px'}}>
                  <Button style={{ backgroundColor: 'rgb(221, 105, 29)' }} type="button" className="btn btn-primary">
                    Click Here!
                  </Button>
                </Link>
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
          <p> Click to go to chapter videos: 

          <Link to="/Card5" style={{paddingLeft: '10px'}}>
          <Button style={{ backgroundColor: 'rgb(221, 105, 29)' }} type="button" className="btn btn-primary">
            Click Here!
          </Button>
        </Link>
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
          <p> Click to go to chapter videos: 

          <Link to="/Card6" style={{paddingLeft: '10px'}}>
                  <Button style={{ backgroundColor: 'rgb(221, 105, 29)' }} type="button" className="btn btn-primary">
                    Click Here!
                  </Button>
                </Link>
                </p>
        </div>
          </div>

        </div>
        <hr style={{ borderTop: "1px solid black" }} />

      </div>
    </div>
  );
}

export default Home;
