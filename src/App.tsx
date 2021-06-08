import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/lista">Lista</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/lista">
            <Lista />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Lista() {
  return <h2>Lista</h2>;
}


export default App;
