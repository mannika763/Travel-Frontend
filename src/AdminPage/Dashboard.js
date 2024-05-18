import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap'
import Sidebar from './SidebarData';
import Home from './Home';
import Profile from './Profile';
import "./Dashboard.css"


function Dashboard() {
    const [currentView, setCurrentView] = useState('home');

    const renderContent = () => {
        switch (currentView) {
            case 'home':
                return <Home/>;
            case 'profile':
                return <Profile />;
            // case 'about':
            //     return <About />;
            // case 'portfolio':
            //     return <Portfolio />;
            // case 'blogs':
            //     return <Blogs />;
            // case 'contact':
            //     return <Contact />;
            // case 'map':
            //     return <Map />;
            default:
                return <Home />;
        }
    };
  
  return (
   <>
   <div className="wrapper">
            {/* <Sidebar setCurrentView={setCurrentView} /> */}

                {renderContent()}
          
        </div>
        
   </>
  )
}

export default Dashboard
