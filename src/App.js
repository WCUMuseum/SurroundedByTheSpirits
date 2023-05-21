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


function App() {

  let pages 
  switch (window.location.pathname) {
    case '/':
      pages = <Home/>
      break; 
   case '/museum_page':
      pages = <Main_Museum     />
      break;
  case '/about':
      pages = <About />     
      break; 
   case '/paul_stoller':
      pages = <Paul_Stoller />
      break;  
   case '/all_vidoes':
      pages = <All_Videos  />   
      break;
   case '/earlylife':
      pages = <EarlyLife  />   
      break;
   case '/anotherone':
      pages = <AnotherOne />   
      break;

    default:
      break;
  }

  return (



    <div>
      <NavbarComponent />
       {pages}
      


    </div>
  );
}

export default App;
