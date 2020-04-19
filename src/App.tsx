import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CatalogPage } from "./Components/Pages/Catalog";
import boardList from "./ressources/boardList.json";

function App() {
  //TODO: Connect boardList to backend
  const boardsLink = boardList.map(board => (
    <NavLi>
      <Link to={`/boards/${board.name}/catalog`}>{board.name}</Link>
    </NavLi>
  ));

  return (
    <Background>
      <Router>
        <nav>
          <NavUl>{boardsLink}</NavUl>
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

const NavUl = styled.ul`
  ${tw`flex text-center`}
`;

const NavLi = styled.li`
  ${tw`p-2 m-2`}
`;

const Background = styled.div`
  ${tw`bg-green-100 min-h-screen max-w-screen`}
`;

export default App;
