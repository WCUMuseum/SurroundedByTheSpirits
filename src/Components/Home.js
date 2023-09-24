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
      <p style={{ display: 'flex', justifyContent: 'center', marginTop: "0", fontSize: "50px" }}>  Paul Stoller: A Custodian of Knowledge </p>
     <p>
      <a href="https://paulstollersblog.wordpress.com/">Paul Stoller</a> is the Professor of Anthropology at West Chester University of Pennsylvania, and is
      known for his contributions to the field of anthropology of West Africa. His many acclaimed
      books examine Songhay culture, religion, rituals, and wellness. In recognition of his upcoming
      retirement and the extensive impact of his life's work, this oral history serves to chronicle his
      scholarly achievements and educate visitors on the inspiration behind the Museum’s exhibition, 
     <span> Surrounded by the Spirits: Paul Stoller and the Songhay Journey Towards Wellbeing.</span> 
      </p>
    <p>
    Stoller received a Bachelor of Arts degree in Political Science from the University of Pittsburgh
    in 1969, where he also studied philosophy and was a writer for the college newspaper. Following
    his graduation, he joined the Peace Corps, where he was stationed in Niger, immersing himself in
    its vibrant culture and teaching English to the Songhay people until 1971.</p>
    <p>
    Driven by a passion for understanding the intricate dynamics of human societies, Dr. Stoller
    pursued further academic study, earning a Master of Science in Sociolinguistics from
    Georgetown University in 1974. He then went on to achieve a Ph.D. in Anthropology from the
    University of Texas at Austin in 1978.
    </p>
    <p>
    Stoller's research has focused primarily on the Songhay people of Niger, West Africa. Although
    he originally studied linguistic anthropology, he was captivated by their spirit possession troupes
    and was taken under the wing of the possession priest Adamu Jenitongo and visual
    anthropologist Jean Rouch. He is particularly well-known for his book <span>In Sorcery's Shadow: A
    Memoir of Apprenticeship among the Songhay of Niger</span>, which describes his experiences living
    among the Songhay as an apprentice to a sorcerer, as well as <span> Fusion of the Worlds: An
    Ethnography of Possession Among the Songhay of Niger </span>. 
    </p>
    <p>
    Stoller’s life and fieldwork shifted dramatically after a series of illnesses, first in Niger, where he
    was told bad magic was being cast on him, and again after a cancer diagnosis in the early 2000s.
    <span> A Stranger Among the Village of the Sick</span> is a memoir about his experience of fusing Western
    cosmopolitan medicine with Songhay spirituality.
    </p>
    <p>
    Feeling he could not return to Niger, he shifted his field site to the Malcolm Shabazz Market in
    Harlem, NY, studying the West African diaspora. <span>Money Has No Smell</span> is one of several books
    emerging from this work.    
    </p>
    <p>
    Stoller is particularly renowned for his unique writing style, having pioneered the “ethnographic
    novel”—readable, yet instructive academic work. He has been a regular contributor to the
    <span>Huffington Post</span> and <span>Psychology Today</span>, bringing anthropological insight to a non-academic
    audience through the publication of over 100 articles. For this, the American Anthropological
    Association awarded him the Robert B. Textor and Family Prize for Anticipatory Anthropology
    in 1994, honoring those whose significant contributions affect policy decisions, and the
    Anthropology in the Media Award in 2015. Attuned to the role of the senses in ethnography, he
    also has been a major influence in humanistic and sensory anthropology; <span>The Taste of
    Ethnographic Things: The Senses in Anthropology</span> is his best-known work in this field. In
    addition to fellowships from the National Endowment for the Humanities and the John Simon
    Guggenheim Memorial Foundation, he was awarded prestigious Anders Retzius Gold Medal in
    Anthropology—the discipline’s “Nobel Prize” given by the King of Sweden every four years. He
    now travels around the world giving writing workshops and transmitting the knowledge of the
    Songhay ancestors to a new generation of students.    
    </p>

    <p style={{paddingBottom:"0"}}>
      To read Paul Stoller's blog: <a href="https://paulstollersblog.wordpress.com/"> <Button style={{ backgroundColor: 'rgb(221, 105, 29)' }} type="button" className="btn btn-primary">
      Click Here!
    </Button></a>
    </p>
    
      <p>
        To see more of Paul Stoller's books and accomplishments:   
        <Link style={{paddingLeft: '10px'}} to="/paul_stoller">
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
