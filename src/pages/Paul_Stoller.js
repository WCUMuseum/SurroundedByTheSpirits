import React, { useState } from 'react';
import paulStollerImage from '../assest/Paul_stoller.jpg'; 
import sampleImage from '../assest/moon.jpg'
import GoBack from '../Components/GoBack';


const Paul_Stoller = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  return (
    <div className='paul' style={{ paddingTop: '25px' }}>
    <GoBack/>
      <img className='paul-img' src={paulStollerImage} alt="Paul Stoller" />

      <h2 > About Paul Stoller: </h2>
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
      <hr style={{ borderTop: "1px solid black" }} />

      <h2> Accomplishments (Click the List below!): </h2>
      <ul>
        <li onClick={() => toggleItem(0)} style={{ cursor: 'pointer' }}>
          <div>
            2007 - Wenner-Gren Foundation for Anthropological Research Grant (for ethnographic fieldwork among West African immigrants in New York City.)
          </div>
          {expandedItem === 0 && (
          <div>
            <img style={{ paddingLeft: '30px' }} src={sampleImage} alt="Image 1" />
          </div>
        )}
      </li>
      
      <li onClick={() => toggleItem(1)} style={{ cursor: 'pointer' }}>
        <div>
          2002 - Robert B. Textor and Family Prize for Excellence in Anticipatory Anthropology:
          American Anthropological Association.
        </div>
        {expandedItem === 1 && (
          <div>
            <img style={{ paddingLeft: '35px' }} src={sampleImage} alt="Image 1" />
          </div>
        )}
      </li>
    
        <li onClick={() => toggleItem(2)} style={{ cursor: 'pointer' }}>
        1999 - Awarded NSF Grant “ Mobile Merchants/Dispersed Communities: The Dynamics of the
        West African Art Trade in North America 
          {expandedItem === 2 && (
            <div>
              <img style={{ paddingLeft: '35px' }} src={sampleImage} alt="Image 1" />
            </div>
          )}
        </li>
        <li onClick={() => toggleItem(3)} style={{ cursor: 'pointer' }}>
        1993 - Wenner-Gren Foundation for Anthropological Research,
        Small Grant (for research on African street vendors in
        New York City)
          {expandedItem === 3 && (
            <div>
              <img style={{ paddingLeft: '35px' }} src={sampleImage} alt="Image 1" />
            </div>
          )}
        </li>
        <li onClick={() => toggleItem(4)} style={{ cursor: 'pointer' }}>
        1990 Council of Trustees Achievement Award, West Chester
        University 
          {expandedItem === 4 &&(
            <div>
              <img style={{ paddingLeft: '35px' }} src={sampleImage} alt="Image 1" />
            </div>
          )}
        </li>
        <li onClick={() => toggleItem(5)} style={{ cursor: 'pointer' }}>
        1989 National Endowment for the Humanities Fellow (for
          research on Songhay ethnohistory in the Republic of Niger)
          {expandedItem === 5 && (
            <div>
              <img style={{ paddingLeft: '35px' }} src={sampleImage} alt="Image 1" />
            </div>
          )}
        </li>
        <li onClick={() => toggleItem(6)} style={{ cursor: 'pointer' }}>
        1987 American Philosophical Society Grantee (for field
          Research on Songhay ethnohistory in the Republic of
          Niger)
          {expandedItem === 6 && (
            <div>
              <img style={{ paddingLeft: '35px' }} src={sampleImage} alt="Image 1" />
            </div>
          )}
        </li>
        <li onClick={() => toggleItem(7)} style={{ cursor: 'pointer' }}>
        1984 Wenner-Gren Foundation for Anthropological Research
        Grant-in-Aid (for field research on ethnomedicine in the Republic of Niger)
          {expandedItem === 7 && (
            <div>
              <img style={{ paddingLeft: '35px' }} src={sampleImage} alt="Image 1" />
            </div>
          )}
        </li>
        <li onClick={() => toggleItem(8)} style={{ cursor: 'pointer' }}>
        1982 American Philosophical Society Grant (for field research
          in the Republic of Niger) 
          {expandedItem === 8 && (
            <div>
              <img style={{ paddingLeft: '35px' }} src={sampleImage} alt="Image 1" />
            </div>
          )}
        </li>
        


        
        {/* ...other list items... */}
      </ul>

      <hr style={{ borderTop: "1px solid black" }} />

      <h2> Books: </h2>
      <ul>
        <li onClick={() => toggleItem(9)} style={{ cursor: 'pointer' }}>
          "In Sorcery's Shadow: A Memoir of Apprenticeship Among the Songhay of Niger":
          {expandedItem === 9 && (
            <div>
            <img  src={sampleImage} style={{paddingLeft: '35px'}} alt="Image 2" />
          <ul>
          <li>
          In this memoir, Paul Stoller recounts his experiences living among the Songhay people of Niger as an apprentice to a sorcerer. He delves into the fascinating world of sorcery, exploring the cultural, spiritual, and social aspects of Songhay society.
          </li>
          </ul>
          </div>
          )}

        </li>
        <li onClick={() => toggleItem(10)} style={{ cursor: 'pointer' }}>
        "The Taste of Ethnographic Things: The Senses in Anthropology":
          {expandedItem === 10 && 
            (
              <div>
              <img  src={sampleImage} style={{paddingLeft: '35px'}} alt="Image 2" />
            <ul>
            <li>
            In this book, Stoller examines the role of the senses in anthropology and ethnography. He explores how sensory experiences shape our understanding of culture, using vivid examples from his fieldwork among different communities to illustrate the profound impact of the senses on human perception.          </li>
            
            </ul>
            </div>
            )}
            
            
           
        </li>
        <li onClick={() => toggleItem(11)} style={{ cursor: 'pointer' }}>
        "Fusion of the Worlds: An Ethnography of Possession Among the Songhay of Niger":
          {expandedItem === 11 &&
            (
              <div>
              <img  src={sampleImage} style={{paddingLeft: '35px'}} alt="Image 2" />
            <ul>
            <li>
            This ethnographic study focuses on possession rituals among the Songhay people of Niger. Stoller delves into the complexities of possession, shedding light on how spiritual beliefs and practices shape individual and collective identities within the Songhay culture.          </li>
            
            </ul>
            </div>
            )}
            
        </li>
        <li onClick={() => toggleItem(12)} style={{ cursor: 'pointer' }}>
        "Money Has No Smell: The Africanization of New York City":
          {expandedItem === 12 && 
            (
              <div>
              <img  src={sampleImage} style={{paddingLeft: '35px'}} alt="Image 2" />
            <ul>
            <li>
            This book delves into the experiences of West African immigrants living in New York City. Stoller explores the ways in which these immigrants navigate the challenges of cultural adaptation, economic survival, and maintaining their cultural identities in a multicultural urban environment.          </li>
            
            </ul>
            </div>
            )}
            
            
            
        </li>
        <li onClick={() => toggleItem(13)} style={{ cursor: 'pointer' }}>
        "Ethnography and Virtual Worlds: A Handbook of Method":
          {expandedItem === 13 && 
            
            (
              <div>
              <img  src={sampleImage} style={{paddingLeft: '35px'}} alt="Image 2" />
            <ul>
            <li>
            Co-authored with Tom Boellstorff, Bonnie Nardi, and Celia Pearce, this book examines the intersection of ethnography and virtual worlds. The authors explore how ethnographic methods can be adapted to study online communities, virtual realities, and digital cultures.          </li>
            
            </ul>
            </div>
            )}
             
        </li>
        <li onClick={() => toggleItem(14)} style={{ cursor: 'pointer' }}>
        "The Power of the Between: An Anthropological Odyssey":
          {expandedItem === 14 &&
            
                 
            (
              <div>
              <img  src={sampleImage} style={{paddingLeft: '35px'}} alt="Image 2" />
            <ul>
            <li>
            In this memoir, Stoller shares his personal journey as an anthropologist, recounting his experiences and reflections from fieldwork in West Africa. He explores the complexities of cultural encounters, the power of ritual and symbolism, and the transformative potential of anthropological inquiry.          </li>
            
            </ul>
            </div>
            )}
             
          
        </li>
      
      </ul>
    </div>
  );
};

export default Paul_Stoller;
