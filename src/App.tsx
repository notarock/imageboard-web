import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CatalogPage } from "./Components/Pages/Catalog";

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
              <Link to="/boards/Random/catalog">Catalog</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route
            exact
            path="/boards/:board/catalog"
            render={props => (
              <CatalogPage board={props.match.params.board || ""} />
            )}
          />
        </Switch>
      </Router>
    </Background>
  );
}

const Background = styled.div`
  ${tw`bg-green-100 min-h-screen max-w-screen`}
`;

export default App;
