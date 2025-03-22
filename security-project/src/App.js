import './App.css';
import jose from './resources/headshots/jose_ayala.jpg';
import brandon from './resources/headshots/brandon_ortiz.jpg';

function App() {
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
        </div>
        <div className='article'>
          <p>Jose is a story teller and he's taking to drop some bars for us in this website! </p>
        </div>
      </div>
    </div>
  );
}

export default App;
