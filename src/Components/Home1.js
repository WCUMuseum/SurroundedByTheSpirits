import React from 'react'
import {Link, useMatch, useResolvedPath } from 'react-router-dom'


const Paul_Stoller = () => {
  return (
    <div className='paul' style={{paddingTop: '25px'}}>
    <img src="Pau;_stoller.jpg" alt="Paul Stoller" />

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

      <h2> Accomplishments: </h2>
      <ul>
        <li>
        2007 - Wenner-Gren Foundation for Anthropological Research Grant (for ethnographic fieldwork
          among West African immigrants in New York City.
         
         
        </li>
        <li>
        2002 - Robert B. Textor and Family Prize for Excellence in Anticipatory Anthropology:
 American Anthropological Association. 
        </li>
        <li>
        1999 - Awarded NSF Grant “ Mobile Merchants/Dispersed Communities: The Dynamics of the
 West African Art Trade in North America
        </li>

        <li>
        1993 - Wenner-Gren Foundation for Anthropological Research,
 Small Grant (for research on African street vendors in
 New York City) 
        </li>
       
        <li>
         1990 Council of Trustees Achievement Award, West Chester
        University
        </li>

        <li>
        1989 National Endowment for the Humanities Fellow (for
          research on Songhay ethnohistory in the Republic of Niger)
        </li>
        <li>
        1987 American Philosophical Society Grantee (for field
          Research on Songhay ethnohistory in the Republic of
          Niger) 
        </li>
        <li>
        1984 Wenner-Gren Foundation for Anthropological Research
 Grant-in-Aid (for field research on ethnomedicine in the Republic of Niger) 
        </li>

        <li>
        1982 American Philosophical Society Grant (for field research
          in the Republic of Niger) 
        </li>


      </ul>
      <hr style={{ borderTop: "1px solid black" }} />

      <h2> Books: </h2>
          <ul>
            <li>

            </li>
          </ul>



    
    
    </div>
  )
}

export default Paul_Stoller

import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Paul_Stoller = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <div className='paul' style={{ paddingTop: '25px' }}>
      <img  className='paul-img' src="Pau;_stoller.jpg" alt="Paul Stoller" />

      <h2> About Paul Stoller: </h2>
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

      <h2> Accomplishments (Click the List below!) : </h2>
      <ul>
        <li onClick={() => toggleItem(0)} style={{ cursor: 'pointer' }}>
          2007 - Wenner-Gren Foundation for Anthropological Research Grant (for ethnographic fieldwork among West African immigrants in New York City.)
          {expandedItems.includes(0) && <img src="moon.jpg" alt="Image 1" />}
        </li>
        <li onClick={() => toggleItem(1)} style={{ cursor: 'pointer' }}>
 2002 - Robert B. Textor and Family Prize for Excellence in Anticipatory Anthropology:
 American Anthropological Association.           {expandedItems.includes(2) && <img src="moon.jpg" alt="Image 1" />}
        </li>
        <li onClick={() => toggleItem(2)} style={{ cursor: 'pointer' }}>
1999 - Awarded NSF Grant “ Mobile Merchants/Dispersed Communities: The Dynamics of the
 West African Art Trade in North America          {expandedItems.includes(2) && <img src="moon.jpg" alt="Image 1" />}
        </li>
        <li onClick={() => toggleItem(3)} style={{ cursor: 'pointer' }}>
        1993 - Wenner-Gren Foundation for Anthropological Research,
 Small Grant (for research on African street vendors in
 New York City)           {expandedItems.includes(3) && <img src="moon.jpg" alt="Image 1" />}
        </li>
        <li onClick={() => toggleItem(4)} style={{ cursor: 'pointer' }}>
         1990 Council of Trustees Achievement Award, West Chester
        University          {expandedItems.includes(4) && <img src="moon.jpg" alt="Image 1" />}
        </li>
        <li onClick={() => toggleItem(5)} style={{ cursor: 'pointer' }}>
        1989 National Endowment for the Humanities Fellow (for
          research on Songhay ethnohistory in the Republic of Niger)          {expandedItems.includes(5) && <img src="moon.jpg" alt="Image 1" />}
        </li>
        <li onClick={() => toggleItem(6)} style={{ cursor: 'pointer' }}>
        1987 American Philosophical Society Grantee (for field
          Research on Songhay ethnohistory in the Republic of
          Niger)          
           {expandedItems.includes(6) && <img src="moon.jpg" alt="Image 1" />}
        </li>
        <li onClick={() => toggleItem(7)} style={{ cursor: 'pointer' }}>
        1984 Wenner-Gren Foundation for Anthropological Research
 Grant-in-Aid (for field research on ethnomedicine in the Republic of Niger) 
           {expandedItems.includes(7) && <img src="moon.jpg" alt="Image 1" />}
        </li>
        <li onClick={() => toggleItem(8)} style={{ cursor: 'pointer' }}>
        1982 American Philosophical Society Grant (for field research
          in the Republic of Niger)         
           {expandedItems.includes(8) && <img src="moon.jpg" alt="Image 1" />}
        </li>
        
      </ul>

      <hr style={{ borderTop: "1px solid black" }} />

      <h2> Books: </h2>
      <ul>
        <li onClick={() => toggleItem(9)} style={{ cursor: 'pointer' }}>
          Book Title 1
          {expandedItems.includes(9) && <img src="image2.jpg" alt="Image 2" />}
        </li>
        {/* ...other list items... */}
      </ul>
    </div>
  );
};

export default Paul_Stoller;

