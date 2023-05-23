import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

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
      <img className='paul-img' src="Pau;_stoller.jpg" alt="Paul Stoller" />

      <h2> About Paul Stoller: </h2>
      {/* ...content... */}

      <hr style={{ borderTop: "1px solid black" }} />

      <h2> Accomplishments (Click the List below!): </h2>
      <ul>
        <li onClick={() => toggleItem(0)} style={{ cursor: 'pointer' }}>
          2007 - Wenner-Gren Foundation for Anthropological Research Grant (for ethnographic fieldwork among West African immigrants in New York City.)
          {expandedItem === 0 && <img style={{paddingLeft: '30px'}} src="moon.jpg" alt="Image 1" />}
        </li>
        <li onClick={() => toggleItem(1)} style={{ cursor: 'pointer' }}>
          2002 - Robert B. Textor and Family Prize for Excellence in Anticipatory Anthropology:
          American Anthropological Association.
          {expandedItem === 1 && <img  style={{paddingLeft: '25px'}} src="moon.jpg" alt="Image 1" />}
        </li>
        <li onClick={() => toggleItem(2)} style={{ cursor: 'pointer' }}>
        1999 - Awarded NSF Grant “ Mobile Merchants/Dispersed Communities: The Dynamics of the
        West African Art Trade in North America 
          {expandedItem === 2 && <img  style={{paddingLeft: '25px'}} src="moon.jpg" alt="Image 1" />}
        </li>
        <li onClick={() => toggleItem(3)} style={{ cursor: 'pointer' }}>
        1993 - Wenner-Gren Foundation for Anthropological Research,
        Small Grant (for research on African street vendors in
        New York City)
          {expandedItem === 3 && <img  style={{paddingLeft: '25px'}} src="moon.jpg" alt="Image 1" />}
        </li>
        <li onClick={() => toggleItem(4)} style={{ cursor: 'pointer' }}>
        1990 Council of Trustees Achievement Award, West Chester
        University 
          {expandedItem === 4 && <img  style={{paddingLeft: '25px'}} src="moon.jpg" alt="Image 1" />}
        </li>
        <li onClick={() => toggleItem(5)} style={{ cursor: 'pointer' }}>
        1989 National Endowment for the Humanities Fellow (for
          research on Songhay ethnohistory in the Republic of Niger)
          {expandedItem === 5 && <img  style={{paddingLeft: '25px'}} src="moon.jpg" alt="Image 1" />}
        </li>
        <li onClick={() => toggleItem(6)} style={{ cursor: 'pointer' }}>
        1987 American Philosophical Society Grantee (for field
          Research on Songhay ethnohistory in the Republic of
          Niger)
          {expandedItem === 6 && <img  style={{paddingLeft: '25px'}} src="moon.jpg" alt="Image 1" />}
        </li>
        <li onClick={() => toggleItem(7)} style={{ cursor: 'pointer' }}>
        1984 Wenner-Gren Foundation for Anthropological Research
        Grant-in-Aid (for field research on ethnomedicine in the Republic of Niger)
          {expandedItem === 7 && <img  style={{paddingLeft: '25px'}} src="moon.jpg" alt="Image 1" />}
        </li>
        <li onClick={() => toggleItem(8)} style={{ cursor: 'pointer' }}>
        1982 American Philosophical Society Grant (for field research
          in the Republic of Niger) 
          {expandedItem === 8 && <img  style={{paddingLeft: '25px'}} src="moon.jpg" alt="Image 1" />}
        </li>
        


        
        {/* ...other list items... */}
      </ul>

      <hr style={{ borderTop: "1px solid black" }} />

      <h2> Books: </h2>
      <ul>
        <li onClick={() => toggleItem(9)} style={{ cursor: 'pointer' }}>
          "In Sorcery's Shadow: A Memoir of Apprenticeship Among the Songhay of Niger":
          {expandedItem === 9 && <img src="moon.jpg" alt="Image 2" />}
          <ul>
          <li>
          In this memoir, Paul Stoller recounts his experiences living among the Songhay people of Niger as an apprentice to a sorcerer. He delves into the fascinating world of sorcery, exploring the cultural, spiritual, and social aspects of Songhay society.
          </li>
          </ul>
        </li>
        <li onClick={() => toggleItem(10)} style={{ cursor: 'pointer' }}>
        "The Taste of Ethnographic Things: The Senses in Anthropology":
          {expandedItem === 10 && <img src="moon.jpg" alt="Image 2" />}
          <ul>
          <li>
          In this book, Stoller examines the role of the senses in anthropology and ethnography. He explores how sensory experiences shape our understanding of culture, using vivid examples from his fieldwork among different communities to illustrate the profound impact of the senses on human perception.          </li>
          </ul>
        </li>
        <li onClick={() => toggleItem(11)} style={{ cursor: 'pointer' }}>
        "Fusion of the Worlds: An Ethnography of Possession Among the Songhay of Niger":
          {expandedItem === 11 && <img src="moon.jpg" alt="Image 2" />}
          <ul>
          <li>
          This ethnographic study focuses on possession rituals among the Songhay people of Niger. Stoller delves into the complexities of possession, shedding light on how spiritual beliefs and practices shape individual and collective identities within the Songhay culture.          </li>
          </ul>
        </li>
        <li onClick={() => toggleItem(12)} style={{ cursor: 'pointer' }}>
        "Money Has No Smell: The Africanization of New York City":
          {expandedItem === 12 && <img src="moon.jpg" alt="Image 2" />}
          <ul>
          <li>
          This book delves into the experiences of West African immigrants living in New York City. Stoller explores the ways in which these immigrants navigate the challenges of cultural adaptation, economic survival, and maintaining their cultural identities in a multicultural urban environment.          </li>
          </ul>
        </li>
        <li onClick={() => toggleItem(13)} style={{ cursor: 'pointer' }}>
        "Ethnography and Virtual Worlds: A Handbook of Method":
          {expandedItem === 13 && <img src="moon.jpg" alt="Image 2" />}
          <ul>
          <li>
          Co-authored with Tom Boellstorff, Bonnie Nardi, and Celia Pearce, this book examines the intersection of ethnography and virtual worlds. The authors explore how ethnographic methods can be adapted to study online communities, virtual realities, and digital cultures.          </li>
          </ul>          
        </li>
        <li onClick={() => toggleItem(14)} style={{ cursor: 'pointer' }}>
        "The Power of the Between: An Anthropological Odyssey":
          {expandedItem === 14 && <img src="moon.jpg" alt="Image 2" />}
          <ul>
          <li>
          In this memoir, Stoller shares his personal journey as an anthropologist, recounting his experiences and reflections from fieldwork in West Africa. He explores the complexities of cultural encounters, the power of ritual and symbolism, and the transformative potential of anthropological inquiry.          </li>
          </ul>
        </li>
      
      </ul>
    </div>
  );
};

export default Paul_Stoller;
