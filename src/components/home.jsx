import React from 'react';
import './home.css';
import mylogo from '../images/logo.jpg';

export default function Home() {
    return(
        <div className='HOME'>
        <header className='header'>   
        <icon  className='icons'>
            <span className="icon notification-icon">🔔</span> 
            <span className="icon profile-icon">👤</span>
        </icon>
        </header>
        <aside className="sidebar">
            <div className='logo'>
                <img src={mylogo} alt="Logo" className="logo-image"/>
            </div> 
            <ul> 
                <li> <span className="icon"></span> Search </li>  
                <li> <span className="icon"></span> Trending </li> 
                <li> <span className="icon"></span> Workshops </li> 
                <li> <span className="icon"></span> internships </li> 
                <li> <span className="icon"></span> Jobs </li> 
                <li> <span className="icon"></span> History </li> 
                <li> <span className="icon"></span> About us </li> 
            </ul> 
        </aside>
        </div>
    );
}
  
