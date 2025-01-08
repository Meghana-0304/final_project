import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main-content">
          <h1>Welcome to the Dashboard</h1>
          <p>This is where your main content will go.</p>
        </main>
      </div>
    </div>
  );
}

export default App;