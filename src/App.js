import './App.css';
import Navbar from './views/Navbar.js'
import Account from './controllers/Account.js';
import Pokemon from './controllers/Pokemon.js';
import TrainerList from './controllers/TrainerList.js';



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <>
        <div className="App">
          <header className="App-header">
            <p>
              Project Pokemon
            </p>
            <Navbar/>
          </header>
          <Routes>
            <Route path="/account/:id" element={<Account/>}/>
            <Route path="/pokemon" element={<Pokemon/>}/>
            <Route path="/trainerlist" element={<TrainerList/>}/>
          </Routes>
        </div>
      </>
  </Router>
  );
}

export default App;
