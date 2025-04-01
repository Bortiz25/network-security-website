import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import jose from './resources/headshots/jose_ayala.jpg';
import brandon from './resources/headshots/brandon_ortiz.jpg';
import InvincibleStory from './Invincible'; // Make sure this import matches your actual file name

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Jose and Brandon's Website</h1>
      </header>
      <div>
        <h2> Choose Your Fighter</h2>
      </div>
      <div className='App-body'>
        <div className='column'>
          <h3>Jose "Group Leader" Ayala</h3>
          <img className='image' src={jose} alt='Jose'/>
          <p>Greatest front-end developer to touch a set of keys. He is dominant in and out of the classroom and is the future CEO of AIG.</p>
        </div>
        <div className='column'>
          <h3>Brandon Ortiz</h3>
          <img className='image' src={brandon} alt='Brandon'/>
          <p>Pretty cool at coding but only with a nice theme in vscode. His passion is data science and will take over flight in the US one day.</p>
        </div>
      </div>
      <div className='Story-section'>
        <div className='Story-header'>
          <h2>Jose's Story Corner</h2>
          <button rel="noreferrer" onClick={() => navigate('/invincible')}>
            Read about the time Brandon and Jose became invincible.
          </button>
        </div>
        <div className='article'>
          <p>Jose is a story teller and he's taking to drop some bars for us in this website! </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invincible" element={<InvincibleStory />} />
      </Routes>
    </Router>
  );
}

export default App;