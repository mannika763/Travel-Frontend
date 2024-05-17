import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap'
import Sidebar from './SidebarData';
import Home from './Home';
import Profile from './Profile';


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
            <Sidebar setCurrentView={setCurrentView} />
            <div className="main_content">
                {renderContent()}
            </div>
        </div>
        
   </>
  )
}

export default Dashboard
