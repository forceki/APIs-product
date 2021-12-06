import logo from './logo.svg';
import './App.css';
import Login from './components/login_page.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route path="/" element={ <Login/>} /> 
        <Route path="/dashboard" element={ <div></div>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
