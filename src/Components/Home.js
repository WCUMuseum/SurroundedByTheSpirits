import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import paulStollerImage from '../assest/Paul_stoller.jpg';
import Cards  from './Cards';
function Home() {
  return (
    <div>
      <div style={{paddingTop:'25px'}} className="paul" >
      <img className="paul-img" src={paulStollerImage} alt="Paul Stoller" />
      <p style={{ display: 'flex', justifyContent: 'center', marginTop: "0" }}> <a href="https://paulstollersblog.wordpress.com/">Paul Stoller's Personal Blog</a> </p>
      <p>
      WCU Professor <a href="https://paulstollersblog.wordpress.com/">Paul Stoller</a> is an anthropologist, known for his contributions to the field of anthropology in the areas of West African culture, religion, rituals, and wellness. In recognition of his upcoming retirement and the extensive impact of his life's work, this annex serves to chronicle his scholarly achievements and educate visitors on the inspiration behind the larger exhibition.
    </p>
    <p>
      Dr. Paul Stoller received a Bachelor of Arts degree in Political Science from the University of Pittsburgh in 1969. Following his graduation, he joined the Peace Corps, where he was stationed in Niger, immersing himself in the vibrant culture and teaching English to the Songhay people until 1971.
    </p>
    <p>
      Driven by a passion for understanding the intricate dynamics of human societies, Dr. Stoller pursued further academic enrichment, culminating in the acquisition of a Master of Science degree in Sociolinguistics from Georgetown University in 1974. Building upon this foundation, he went on to achieve a Ph.D. in Anthropology from the University of Texas at Austin in 1978.
    </p>
    <p>
      Stoller's research has focused primarily on the Songhay people of Niger, West Africa, and he has written extensively about their religion, music, and culture. He is particularly well-known for his book "In Sorcery's Shadow: A Memoir of Apprenticeship among the Songhay of Niger," which describes his experiences living among the Songhay as an apprentice to a sorcerer.
    </p>
    <p>
      In addition to his academic work, Stoller has also written several books, including "The Taste of Ethnographic Things: The Senses in Anthropology" and "Fusion of the Worlds: An Ethnography of Possession Among the Songhay of Niger." He has received awards and honors for his work, including fellowships from the National Endowment for the Humanities, the John Simon Guggenheim Memorial Foundation, and more.
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

        <Cards/>

         
  </div>
  );
}

export default Home;
