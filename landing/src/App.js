import React from 'react';
import Footer from './Components/Footer';
import content_team from './Images/content_team.png';
import NavBar from './Components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Landing</h1>
      <img src={content_team} alt="content_team" className="content_team" />
      <Footer />
    </div>
  );
}

export default App;
