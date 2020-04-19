import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CatalogPage } from "./Components/Pages/Catalog";

const Background = styled.div`
  ${tw`bg-green-100 h-screen`}
`;

function App() {
  return (
    <Background>
      <Router>
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
      </Router>
    </Background>
  );
}

export default App;
