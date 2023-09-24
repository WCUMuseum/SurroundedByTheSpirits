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


function App() {

  

  return (



    <div>
      <NavbarComponent />
       <Routes>
         <Route path="/SurroundedByTheSpirits" element={<Home/>} />
         <Route path="https://www.wcupa.edu/sciences-mathematics/anthropologySociology/museum/surrounded-by-the-spirits.aspx" element={<Main_Museum     />} />
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
