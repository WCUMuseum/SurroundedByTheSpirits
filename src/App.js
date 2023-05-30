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
import { Route, Routes, Redirect  } from 'react-router-dom';
import Cards from './Components/Cards';

function Card1() {
  window.location.href = 'https://youtu.be/S1hBjKaFYS0';
  return null;
}

function Card2() {
  window.location.href = 'https://youtu.be/kgCGOEoJy-o';
  return null;
}

function Card3() {
  window.location.href = 'https://youtu.be/jFebWvMaVTo';
  return null;
}

function Card4() {
  window.location.href = 'https://youtu.be/J-BrhMPXB0o';
  return null;
}

function Card5() {
  window.location.href = 'https://youtu.be/F7bFFX_wRYk';
  return null;
}

function Card6() {
  window.location.href = 'https://youtu.be/adXTANj1fKc';
  return null;
}

function Card7() {
  window.location.href = 'https://youtu.be/iZ77YNl47Lg';
  return null;
}

function Card8() {
  window.location.href = 'https://youtu.be/rImtc865lgc';
  return null;
}



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
  




       
       </Routes>
      


    </div>
  );
}

export default App;
