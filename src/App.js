import logo from './logo.svg';
import './App.css';
import Navbar from './views/Navbar.js'
import Account from './controllers/Account.js';
import Pokemon from './controllers/Pokemon.js';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Project Pokemon
            </p>
            <Navbar/>
          </header>
          <body>
            <Routes>
              <Route path="/account" component={Account}/>
              <Route path="/pokemon" component={Pokemon}/>
            </Routes>
          </body>
        </div>
      </>
  </Router>
  );
}

export default App;
