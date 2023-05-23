import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import paulStollerImage from '../assest/Paul_stoller.jpg'; 
import sampleImage from '../assest/moon.jpg'


import {Link} from 'react-router-dom'


function Home() {
  return (
    <div>
    <div className='paul' style={{paddingTop: '25px'}}>
    <img className='paul-img' src={paulStollerImage} alt="Paul Stoller" />
    <p> WCU Professor Paul Stoller is an eminent anthropologist, known for his pioneering contributions to the field of anthropology in the areas of  West African culture, religion, rituals, and wellness. 
    In recognition of his upcoming retirement and the extensive impact of his life's work, this annex serves to chronicle his scholarly achievements and educate visitors on the inspiration behind the larger exhibition. </p>
    <p>
    Dr. Paul Stoller received a Bachelor of Arts degree in Political Science from the University of Pittsburgh in 1969. Following his graduation, 
    he joined the Peace Corps, where he was stationed 
    in Niger, immersing himself in the vibrant culture and teaching English to the Songhay people until 1971. 
    </p>

    <p>

    Driven by a passion for 
    understanding the intricate dynamics of human societies, Dr. Stoller pursued further academic enrichment, culminating in the acquisition
     of a Master of Science degree in Sociolinguistics from Georgetown University in 1974. Building upon this foundation, he went on to achieve
      a distinguished Ph.D. in Anthropology from the prestigious University of Texas at Austin in 1978.


      </p>
      <p >
      Stoller's research has focused primarily on the Songhay people of Niger, West Africa, and he has written extensively about their religion, music, and culture. He is particularly well-known for his book "In Sorcery's Shadow: A Memoir of Apprenticeship among the Songhay of Niger", which describes his experiences living among the Songhay as an apprentice to a sorcerer.
      </p>
      <p >
      In addition to his academic work, Stoller has also written several popular books, including "The Taste of Ethnographic Things: The Senses in Anthropology" and "Fusion of the Worlds: An Ethnography of Possession Among the Songhay of Niger". He has received numerous awards and honors for his work, including fellowships from the National Endowment for the Humanities, the John Simon Guggenheim Memorial Foundation and many more.
      </p>
      <p>To see more one Paul Stoller's books and accomplishments:
      <Link to = "/paul_stoller">
      <button style={{backgroundColor: "rgb(221, 105, 29)"}}  type="button" className="btn btn-primary">Click Here!</button>

      </Link>


 </p>

    
    
    </div>
    <div style={{ paddingTop: '25px' }}>
      <div className="workHeader" style={{ display: 'flex' }}>
        <div style={{ width: '25%', paddingRight: '1rem' }}>
          <Card style={{  width: '100%', height: '500px' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/iI3pRSqjPsc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>Life is crazy</Card.Text>
              <Link to = "/Card1">
      <button style={{backgroundColor: "rgb(221, 105, 29)"}}  type="button" className="btn btn-primary">Click Here!</button>

      </Link>
            </Card.Body>
          </Card>
        </div>

        

        <div style={{ width: '25%', paddingLeft: '1rem', paddingRight: '1rem' }}>
          <Card style={{  width: '100%', height: '500px' }}>
            <Card.Img src={sampleImage} alt="Card image" />

            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Link to = "/Card2">
      <button style={{backgroundColor: "rgb(221, 105, 29)"}}  type="button" className="btn btn-primary">Click Here!</button>

      </Link>
            </Card.Body>
          </Card>
        </div>

        <div style={{ width: '25%', paddingLeft: '1rem', paddingRight: '1rem' }}>
          <Card style={{  width: '100%', height: '500px'  }}>
            <Card.Img src={sampleImage} alt="Card image" />

            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Link to = "/Card3">
      <button style={{backgroundColor: "rgb(221, 105, 29)"}}  type="button" className="btn btn-primary">Click Here!</button>

      </Link>
            </Card.Body>
          </Card>
        </div>

        <div style={{ width: '25%', paddingLeft: '1rem', paddingRight: '1rem' }}>
          <Card style={{ width: '100%', height: '500px' }}>
            <Card.Img src={sampleImage}  alt="Card image" />

            <Card.Body>
              <Card.Title>Card 4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Link to = "/Card4">
      <button style={{backgroundColor: "rgb(221, 105, 29)"}}  type="button" className="btn btn-primary">Click Here!</button>

      </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>

    <div style={{ paddingTop: '25px' }}>
      <div className="workHeader" style={{ display: 'flex' }}>
        <div style={{ width: '25%', paddingRight: '1rem' }}>
          <Card style={{  width: '100%', height: '500px' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/iI3pRSqjPsc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>Life is crazy</Card.Text>
              <Button variant="primary" herf="/anotherone">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>

        

        <div style={{ width: '25%', paddingLeft: '1rem', paddingRight: '1rem' }}>
          <Card style={{  width: '100%', height: '500px' }}>
            <Card.Img src={sampleImage} alt="Card image" />

            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" herf="/secondone">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div style={{ width: '25%', paddingLeft: '1rem', paddingRight: '1rem' }}>
          <Card style={{  width: '100%', height: '500px'  }}>
            <Card.Img src={sampleImage} alt="Card image" />

            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" herf="/secondone">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div style={{ width: '25%', paddingLeft: '1rem', paddingRight: '1rem' }}>
          <Card style={{ width: '100%', height: '500px' }}>
            <Card.Img src={sampleImage} alt="Card image" />

            <Card.Body>
              <Card.Title>Card 4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" herf="/secondone">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    
    
    </div>
  );
}

export default Home;
