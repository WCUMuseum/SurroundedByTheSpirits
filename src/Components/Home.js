import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import EarlyLife from '../pages/EarlyLife';
import Paul_Stoller from '../pages/Paul_Stoller';

function Home() {
  return (
    <div style={{paddingTop: '25px'}}>
    <Paul_Stoller/>
    <div className='workHeader' style={{display: 'flex'}}>
        <div style={{width: '25%', paddingRight: '1rem'}}>     
            <Card style={{ width: '100%', height: '30rem'}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/iI3pRSqjPsc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <Card.Body >
                    <Card.Title>What is life?</Card.Title>
                    <Card.Text>
                    Life is crazy 
                    </Card.Text>
                    <Button variant="primary" herf = "/anotherone">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        
        <div style={{width: '25%', paddingLeft: '1rem', paddingRight: '1rem'}}>
            <Card style={{ width: '100%', height: '30rem'}}>
            <Card.Img src="moon.jpg" alt="Card image" />

            <Card.Body>
                <Card.Title>Why live?</Card.Title>
                <Card.Text>
                Cuz of Cats
                </Card.Text>
                <Button variant="primary" herf = "/secondone">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>

         
        <div style={{width: '25%', paddingLeft: '1rem', paddingRight: '1rem'}}>
            <Card style={{ width: '100%', height: '30rem'}}>
            <Card.Img src="moon.jpg" alt="Card image" />

            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary" herf = "/secondone">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
         
        <div style={{width: '25%', paddingLeft: '1rem', paddingRight: '1rem'}}>
            <Card style={{ width: '100%', height: '30rem'}}>
            <Card.Img src="moon.jpg" alt="Card image" />

            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary" herf = "/secondone">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
         
        <div style={{width: '25%', paddingLeft: '1rem', paddingRight: '1rem'}}>
            <Card style={{ width: '100%', height: '30rem'}}>
            <Card.Img src="moon.jpg" alt="Card image" />

            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary" herf = "/secondone">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
         
        

        {/* This is a JSX comment 
        <div style={{width: '25%', paddingLeft: '1rem', paddingRight: '1rem'}}>
        <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
        
        </div>

        <div style={{width: '25%', paddingLeft: '1rem', paddingRight: '1rem'}}>
        
        <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    </div>

    
    </div>
    
    <div>
    */} 
    
    </div>
    </div>
  );
}

export default Home;
