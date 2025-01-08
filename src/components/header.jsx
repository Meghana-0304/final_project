import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">MyLogo</div>
      <div className="header-icons">
        <span className="icon notification-icon">🔔</span>
        <span className="icon profile-icon">👤</span>
      </div>
    </header>
  );
}

export default Header;