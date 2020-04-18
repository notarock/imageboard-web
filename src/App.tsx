import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CatalogPage } from "./Components/Pages/Catalog";

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
        <Switch>
          <Route path="/catalog">
            <h2>Catalog page</h2>
            <CatalogPage message={"This is my message"} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
