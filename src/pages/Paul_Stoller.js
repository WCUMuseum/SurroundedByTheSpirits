import React, { useState } from 'react';
import paulStollerImage from '../assest/pictures.png'; 
import sampleImage from '../assest/moon.jpg'
import GoBack from '../Components/GoBack';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import book1 from '../assest/book1.jpg'
import book2 from '../assest/book2.jpg'
import book3 from '../assest/book3.jpg'
import book4 from '../assest/book4.jpg'
import book5 from '../assest/book5.jpg'
import book6 from '../assest/book6.jpg'
import book7 from '../assest/book7.png'







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
      <p>
      <a href="https://paulstollersblog.wordpress.com/" target="_blank">Paul Stoller</a> is the Professor of Anthropology at West Chester University of Pennsylvania, and is
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
    and was taken under the wing of the possession priest Adamu Jenitongo and the ethno-cinematographer Jean Rouch. He is particularly well-known for his book <span> <a href='https://www.amazon.com/Sorcerys-Shadow-Memoir-Apprenticeship-Songhay/dp/0226775437' target="_blank">In Sorcery's Shadow: A
    Memoir of Apprenticeship among the Songhay of Niger</a> </span>, which describes his experiences living
    among the Songhay as an apprentice to a sorcerer, as well as <span> <a href='https://www.amazon.com/Fusion-Worlds-Ethnography-Possession-Songhay/dp/0226775453' target="_blank"> Fusion of the Worlds: An
    Ethnography of Possession Among the Songhay of Niger </a></span>. 
    </p>
    <p>
    Stoller’s life and fieldwork shifted dramatically after a series of illnesses, first in Niger, where he
    was told bad magic was being cast on him, and again after a cancer diagnosis in the early 2000s.
    <span> <a href='https://www.amazon.com/Stranger-Village-Sick-Sorcery-Healing/dp/0807072613' target="_blank">  A Stranger Among the Village of the Sick</a></span> is a memoir about his experience of fusing Western
    cosmopolitan medicine with Songhay spirituality.
    </p>
    <p>
    Feeling he could not return to Niger, he shifted his field site to the Malcolm Shabazz Market in
    Harlem, NY, studying the West African diaspora. <span> <a href='https://www.amazon.com/Money-Has-No-Smell-Africanization/dp/0226775305' target="_blank"> Money Has No Smell</a></span> is one of several books
    emerging from this work.    
    </p>
    <p>
    Stoller is particularly renowned for his unique writing style, having pioneered the “ethnographic
    novel”—readable, yet instructive academic work. He has been a regular contributor to the
    <span> <a href='https://www.huffpost.com/author/paul-stoller' target="_blank"> Huffington Post</a></span> and <span> <a target="_blank" href='https://www.psychologytoday.com/us/contributors/paul-stoller-phd'> Psychology Today</a></span>, bringing anthropological insight to a non-academic
    audience through the publication of over 100 articles. For this, the American Anthropological
    Association awarded him the <span><a href='https://americananthro.org/prizes-and-awards/robert-textor-and-family-prize/' target="_blank">Robert B. Textor and Family Prize for Anticipatory Anthropology </a> </span> in 1994, honoring those whose significant contributions affect policy decisions, and the
    <span><a href='https://americananthro.org/prizes-and-awards/aime/' target="_blank">Anthropology in the Media Award</a></span> in 2015. Attuned to the role of the senses in ethnography, he
    also has been a major influence in humanistic and sensory anthropology; <span><a href='https://www.amazon.com/Taste-Ethnographic-Things-Anthropology-Contemporary/dp/0812212924' target="_blank"> The Taste of
    Ethnographic Things: The Senses in Anthropology</a></span> is his best-known work in this field. In
    addition to fellowships from the <span><a href='https://www.neh.gov/' target="_blank"> National Endowment for the Humanities</a></span> and the <span><a href='https://www.gf.org/' target="_blank"> John Simon
    Guggenheim Memorial Foundation</a></span>, he was awarded prestigious <span><a href='https://en.wikipedia.org/wiki/Swedish_Society_for_Anthropology_and_Geography' target="_blank">Anders Retzius Gold Medal in
    Anthropology</a></span>—the discipline’s “Nobel Prize” given by the King of Sweden every four years. He
    now travels around the world giving writing workshops and transmitting the knowledge of the
    Songhay ancestors to a new generation of students.    
    </p>



    <p style={{paddingBottom:"0"}}>
      To read Paul Stoller's blog: <a href="https://paulstollersblog.wordpress.com/"> <Button style={{ backgroundColor: 'rgb(221, 105, 29)' }} type="button" className="btn btn-primary">
      Click Here!
    </Button></a>
    </p>
    
     
      <hr style={{ borderTop: "1px solid black" }} />

      <h2> Accomplishments (Click the List below!): </h2>

      
      <ul>
      
      <li onClick={() => toggleItem(0)} style={{ cursor: 'pointer' }}>
        <div>
          2013 - Anders Retzius Gold Medal in Anthropology (for his significant and innovative contributions to anthropology)
        </div>
        {expandedItem === 0 && (
        <div  className="expanded-item-box">
        <ul>
          <li style={{listStyle: 'none'}}>
          Paul Stoller received the 2013 Anders Retzius Gold Medal in Anthropology for his significant contributions to anthropology. This prestigious award is presented by the Swedish Society of Anthropology and Geography (SSAG) every third year and is patronized by the Swedish King. The award recognizes outstanding achievements and contributions to the field of anthropology.          </li>
          <li style={{listStyle: 'none'}}>
          Recipients of the Wenner-Gren Foundation for Anthropological Research Grant are typically scholars and researchers in the field of anthropology who have proposed innovative research projects. The grant aims to enable them to carry out their research, including fieldwork, data collection, analysis, and dissemination of findings.
         </li>
         <li style={{listStyle: 'none'}}>      
         The grant is highly regarded within the field of anthropology as it supports and facilitates important contributions to anthropological knowledge and understanding. It provides researchers with the resources necessary to conduct their research, explore new perspectives, and make significant contributions to the field.
         </li>          
         </ul>
        </div>
      )}
    </li>
        <li onClick={() => toggleItem(1)} style={{ cursor: 'pointer' }}>
          <div>
            2007 - Wenner-Gren Foundation for Anthropological Research Grant (for ethnographic fieldwork among West African immigrants in New York City.)
          </div>
          {expandedItem === 1 && (
          <div  className="expanded-item-box">
          <ul>
            <li style={{listStyle: 'none'}}>
            The Wenner-Gren Foundation for Anthropological Research Grant is an award that provides financial support to anthropologists for conducting research projects. The grant is offered by the Wenner-Gren Foundation, which is dedicated to advancing anthropological research and promoting the understanding of human cultural and biological diversity.
            </li>
            <li style={{listStyle: 'none'}}>
            Recipients of the Wenner-Gren Foundation for Anthropological Research Grant are typically scholars and researchers in the field of anthropology who have proposed innovative research projects. The grant aims to enable them to carry out their research, including fieldwork, data collection, analysis, and dissemination of findings.
           </li>
           <li style={{listStyle: 'none'}}>      
           The grant is highly regarded within the field of anthropology as it supports and facilitates important contributions to anthropological knowledge and understanding. It provides researchers with the resources necessary to conduct their research, explore new perspectives, and make significant contributions to the field.
           </li>          
           </ul>
          </div>
        )}
      </li>
      
      <li onClick={() => toggleItem(2)} style={{ cursor: 'pointer' }}>
        <div>
          2002 - Robert B. Textor and Family Prize for Excellence in Anticipatory Anthropology:
          American Anthropological Association.
        </div >
        {expandedItem === 2 && (
          <div className="expanded-item-box">
          <ul>
            <li style={{listStyle: 'none'}}>
            The Robert B. Textor and Family Prize for Excellence in Anticipatory Anthropology is an award presented by the American Anthropological Association (AAA). The award recognizes and honors individuals or groups who have made significant contributions to the field of anticipatory anthropology.            </li>
            <li style={{listStyle: 'none'}}>
            Anticipatory anthropology focuses on understanding and addressing future challenges and opportunities through anthropological perspectives and methodologies. The award acknowledges individuals or groups who have demonstrated excellence in this area, such as through innovative research, theoretical advancements, or practical applications that contribute to our understanding of the future and its implications for human societies and cultures.
            </li>
           <li style={{listStyle: 'none'}}>     
            <Link to = 'https://americananthro.org/prizes-and-awards/robert-textor-and-family-prize/' target= '_blank'>
            <Button style={{ backgroundColor: 'rgb(221, 105, 29)' }} type="button" className="btn btn-primary">
            Click Here!
          </Button>
            
            </Link>

           </li>          
           </ul>

          </div>
        )}
      </li>
    
        <li onClick={() => toggleItem(3)} style={{ cursor: 'pointer' }}>
        1999 - Awarded NSF Grant “ Mobile Merchants/Dispersed Communities: The Dynamics of the
        West African Art Trade in North America 
          {expandedItem === 3 && (
            <div className="expanded-item-box">
            <ul>
            <li style={{listStyle: 'none'}}>
            The awarded NSF (National Science Foundation) grant, titled "Mobile Merchants/Dispersed Communities: The Dynamics of the West African Art Trade in North America," refers to financial support provided by the NSF for a specific research project. This research project focuses on studying and understanding the dynamics of the West African art trade in North America, particularly the interactions and activities of mobile merchants and dispersed communities involved in this trade.
            </li>
            <li style={{listStyle: 'none'}}>
            The grant signifies that the research proposal was deemed worthy of funding by the NSF, which recognizes the project's potential to contribute to knowledge and understanding in the field of West African art trade and its connections to North America.
            </li>      

           </ul>    
            </div>
          )}
        </li>
        <li>1993 - Wenner-Gren Foundation for Anthropological Research,
        Small Grant (for research on African street vendors in
        New York City)
        </li>
          
        <li onClick={() => toggleItem(4)} style={{ cursor: 'pointer' }}>
        1990 - Council of Trustees Achievement Award, West Chester
        University 
          {expandedItem === 4 &&(
            <div className="expanded-item-box">
            <ul>
            <li style={{listStyle: 'none'}}>
            The Council of Trustees Achievement Award at West Chester University is a recognition given by the university's Council of Trustees. It is an honor bestowed upon individuals who have demonstrated exceptional achievements and contributions in their respective fields. 
            </li>
            <li style={{listStyle: 'none'}}>
            This award acknowledges and celebrates the significant accomplishments and impact made by recipients in their professional endeavors, academic pursuits, or community involvement. It serves as a prestigious recognition of excellence and a testament to the recipient's outstanding achievements at West Chester University.
            </li>
                 
           </ul>
           </div>
          )}
        </li>
        <li onClick={() => toggleItem(5)} style={{ cursor: 'pointer' }}>
        1989 - National Endowment for the Humanities Fellow (for
          research on Songhay ethnohistory in the Republic of Niger)
          {expandedItem === 5 && (
            <div className="expanded-item-box">
            <ul>
            <li style={{listStyle: 'none'}}>

            The National Endowment for the Humanities (NEH) Fellow award is a prestigious recognition given to individuals conducting research in the humanities field. In the context of the mentioned award, it specifically acknowledges and supports research on Songhay ethnohistory in the Republic of Niger.             </li>
            <li style={{listStyle: 'none'}}>
            The fellowship provides funding and resources to the recipient, enabling them to delve deeper into the study of Songhay culture, history, and related aspects within the field of humanities. It signifies the significance and value of the recipient's research, contributing to the advancement and understanding of the Songhay people's ethnohistory and its broader cultural significance.            </li>
                
            
            <li style={{listStyle: 'none'}}>     
            <Link to = 'https://www.neh.gov/grants/research/fellowships' target= '_blank'>
            <Button style={{ backgroundColor: 'rgb(221, 105, 29)' }} type="button" className="btn btn-primary">
            Click Here!
          </Button>
            
            </Link>

           </li>     
                 


           </ul>
            </div>
          )}
        </li>
        <li onClick={() => toggleItem(6)} style={{ cursor: 'pointer' }}>
        1987 - American Philosophical Society Grantee (for field
          Research on Songhay ethnohistory in the Republic of
          Niger)
          {expandedItem === 6 && (
            <div className="expanded-item-box">
 <ul>
            <li style={{listStyle: 'none'}}>
            The American Philosophical Society Grantee award signifies that the recipient has been granted funding and support by the American Philosophical Society (APS) to conduct field research on Songhay ethnohistory in the Republic of Niger. The APS is an esteemed scholarly organization that promotes knowledge and research in various disciplines, including philosophy, history, anthropology, and related fields.            </li>
            <li style={{listStyle: 'none'}}>
            This award indicates recognition and support for the recipient's proposed research project, which focuses on investigating the historical and cultural aspects of the Songhay people in Niger. It provides financial assistance and resources to facilitate the researcher's fieldwork and contribute to the advancement of knowledge in the field of ethnohistory.            </li>

            
           </ul>            </div>
          )}
        </li>
        <li>
        1984 - Wenner-Gren Foundation for Anthropological Research
        Grant-in-Aid (for field research on ethnomedicine in the Republic of Niger)
           
        </li>
        <li>
        1982 - American Philosophical Society Grant (for field research
          in the Republic of Niger) 
          
        </li>
        


        
        {/* ...other list items... */}
      </ul>

      <hr style={{ borderTop: "1px solid black" }} />

      <h2> Paul Stoller has published 16 books here are just a few: (Click the lists and pictures below!) :  </h2>
      <ul>

      <li onClick={() => toggleItem(9)} style={{ cursor: 'pointer' }}>
      "Wisdom from the Edge: Writing Ethnography in Turbulent Times":
      {expandedItem === 9 && (
        <div className="expanded-item-box">
        <a href="https://read.amazon.com/kp/embed?asin=B0BJ4Q2M6Z&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_F6NQQGTVKKBKVH5JB8RG" target="_blank" rel="noopener noreferrer">
<img src={book7} style={{paddingLeft: '35px'}} alt="Image 2" />
</a>

      <ul>
      <li>
      In "Wisdom From the Edge," Paul Stoller discusses how anthropologists can contribute to shaping a socially and culturally positive future. He emphasizes the use of vivid ethnographic narratives to effectively convey insights to diverse audiences, highlighting the significance of respecting nature for humanity's future. Stoller employs techniques from film, poetry, and fiction to make anthropological knowledge more engaging and relatable to the public, emphasizing the value of incorporating indigenous wisdom to address pressing social issues.






      </li>
      </ul>
      </div>
      )}

    </li>
        <li onClick={() => toggleItem(10)} style={{ cursor: 'pointer' }}>
          "In Sorcery's Shadow: A Memoir of Apprenticeship Among the Songhay of Niger":
          {expandedItem === 10 && (
            <div className="expanded-item-box">
            <a href="https://www.amazon.com/Sorcerys-Shadow-Memoir-Apprenticeship-Songhay/dp/0226775437" target="_blank" rel="noopener noreferrer">
  <img src={book1} style={{paddingLeft: '35px'}} alt="Image 2" />
</a>

          <ul>
          <li>
          In this memoir, Paul Stoller recounts his experiences living among the Songhay people of Niger as an apprentice to a sorcerer. He delves into the fascinating world of sorcery, exploring the cultural, spiritual, and social aspects of Songhay society.
          </li>
          </ul>
          </div>
          )}

        </li>
        <li onClick={() => toggleItem(11)} style={{ cursor: 'pointer' }}>
        "The Taste of Ethnographic Things: The Senses in Anthropology":
          {expandedItem === 11 && 
            (
              <div>
<a href="https://www.amazon.com/Taste-Ethnographic-Things-Anthropology-Contemporary/dp/0812212924" target="_blank" rel="noopener noreferrer">
  <img src={book2} style={{paddingLeft: '35px'}} alt="Image 2" />
</a>
            <ul>
            <li>
            In this book, Stoller examines the role of the senses in anthropology and ethnography. He explores how sensory experiences shape our understanding of culture, using vivid examples from his fieldwork among different communities to illustrate the profound impact of the senses on human perception.          </li>
            
            </ul>
            </div>
            )}
            
            
           
        </li>
        <li onClick={() => toggleItem(12)} style={{ cursor: 'pointer' }}>
        "Fusion of the Worlds: An Ethnography of Possession Among the Songhay of Niger":
          {expandedItem === 12 &&
            (
              <div>
<a href="https://www.amazon.com/Fusion-Worlds-Ethnography-Possession-Songhay/dp/0226775453" target="_blank" rel="noopener noreferrer">
  <img src={book3} style={{paddingLeft: '35px'}} alt="Image 2" />
</a>
            <ul>
            <li>
            This ethnographic study focuses on possession rituals among the Songhay people of Niger. Stoller delves into the complexities of possession, shedding light on how spiritual beliefs and practices shape individual and collective identities within the Songhay culture.          </li>
            
            </ul>
            </div>
            )}
            
        </li>
        <li onClick={() => toggleItem(13)} style={{ cursor: 'pointer' }}>
        "Money Has No Smell: The Africanization of New York City":
          {expandedItem === 13 && 
            (
              <div>
<a href="https://www.amazon.com/Money-Has-No-Smell-Africanization/dp/0226775305" target="_blank" rel="noopener noreferrer">
  <img src={book4} style={{paddingLeft: '35px'}} alt="Image 2" />
</a>
            <ul>
            <li>
            This book delves into the experiences of West African immigrants living in New York City. Stoller explores the ways in which these immigrants navigate the challenges of cultural adaptation, economic survival, and maintaining their cultural identities in a multicultural urban environment.          </li>
            
            </ul>
            </div>
            )}
            
            
            
        </li>
        <li onClick={() => toggleItem(14)} style={{ cursor: 'pointer' }}>
        "Ethnography and Virtual Worlds: A Handbook of Method":
          {expandedItem === 14 && 
            
            (
              <div>
<a href="https://www.amazon.com/Ethnography-Virtual-Worlds-Handbook-Method-ebook/dp/B008U4UKL2" target="_blank" rel="noopener noreferrer">
  <img src={book5} style={{paddingLeft: '35px'}} alt="Image 2" />
</a>
            <ul>
            <li>
            Co-authored with Tom Boellstorff, Bonnie Nardi, and Celia Pearce, this book examines the intersection of ethnography and virtual worlds. The authors explore how ethnographic methods can be adapted to study online communities, virtual realities, and digital cultures.          </li>
            
            </ul>
            </div>
            )}
             
        </li>
        <li onClick={() => toggleItem(15)} style={{ cursor: 'pointer' }}>
        "The Power of the Between: An Anthropological Odyssey":
          {expandedItem === 15 &&
            
                 
            (
              <div>
<a href="https://www.amazon.com/Power-Between-Anthropological-Odyssey/dp/0226775356" target="_blank" rel="noopener noreferrer">
  <img src={book6} style={{paddingLeft: '35px'}} alt="Image 2" />
</a>
            <ul>
            <li>
            In this memoir, Stoller shares his personal journey as an anthropologist, recounting his experiences and reflections from fieldwork in West Africa. He explores the complexities of cultural encounters, the power of ritual and symbolism, and the transformative potential of anthropological inquiry.          </li>
            
            </ul>
            </div>
            )}
             
          
        </li>
      
      </ul>

      <h3>These are just some of Dr. Paul Stoller's accomplishments, to check out more: <Link to = 'https://www.wcupa.edu/sciences-mathematics/anthropologySociology/documents/pStoller.pdf' target= '_blank'>
            <Button style={{ backgroundColor: 'rgb(221, 105, 29)' }} type="button" className="btn btn-primary">
            Click Here!
          </Button>
            
            </Link></h3>
    </div>
  );
};

export default Paul_Stoller;
