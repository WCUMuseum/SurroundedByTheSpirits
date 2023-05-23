import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './Components/NavbarComponent'
import Home from './Components/Home'
import Paul_Stoller from './pages/Paul_Stoller';
import All_Videos from './pages/All_Videos';
import Main_Museum from './pages/Main_Museum';
import About from './pages/About';
import EarlyLife from './pages/EarlyLife';
import AnotherOne from './pages/AnotherOne';
import { Route, Routes } from 'react-router-dom';
import Card1 from './pages/Card1';
import Card2 from './pages/Card2';
import Card3 from './pages/Card3';
import Card4 from './pages/Card4';




function App() {

  

  return (



    <div>
      <NavbarComponent />
       <Routes>
         <Route path="/SurroundedByTheSpirits" element={<Home/>} />
         <Route path="/museum_page" element={<Main_Museum     />} />
         <Route path="/about" element={<About/>} />
         
         <Route path="/paul_stoller" element={<Paul_Stoller/>} />

         <Route path="/all_vidoes" element={<All_Videos/>} />
         <Route path="/earlylife" element={<EarlyLife/>} />
         <Route path="/anotherone" element={<AnotherOne/>} />
         <Route path="/Card1" element={<Card1/>} />
         <Route path="/Card2" element={<Card2/>} />
         <Route path="/Card3" element={<Card3/>} />
         <Route path="/Card4" element={<Card4/>} />




       
       </Routes>
      


    </div>
  );
}

export default App;
