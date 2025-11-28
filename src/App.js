import logo from './logo.svg';
import './App.css';
import Navbar from './views/Navbar.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Project Pokemon
        </p>
        <Navbar/>
      </header>
    </div>
  );
}

export default App;
