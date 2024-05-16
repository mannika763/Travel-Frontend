
import './App.css';
import AllFilter from './LandingPage/AllFilter';
import BelowBar from './LandingPage/BelowBar';
import NavBar from './LandingPage/NavBar';
import PopupBox from './PopupBox';
import {BrowserRouter, Route} from "react-router-dom";
import { Routes} from 'react-router';
import Admin from './AdminPage/Admin';
import LandingPage from './LandingPage';

function App() {
  return (
    <>
 
    
    
   
  
    <Routes>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/' element={<LandingPage/>}/>

    </Routes>
    
    </>
  );
}

export default App;
