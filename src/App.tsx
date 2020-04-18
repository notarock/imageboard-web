import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes } from "./Routes";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {Routes}
      </div>
    </Router>
  );
}

export default App;
