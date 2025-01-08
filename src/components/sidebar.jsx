import React from 'react';
import './sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <span className="icon"></span> Home
        </li>
        <li>
          <span className="icon">📄</span> Recently Viewed
        </li>
        <li>
          <span className="icon">⚙️</span> Settings
        </li>
        <li>
          <span className="icon">📧</span> Messages
        </li>
        <li>
          <span className="icon">📊</span> Analytics
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;