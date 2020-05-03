import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CatalogPage } from './Components/Catalog';
import { useAxios } from './services/apiClient';

interface Board {
  id: string;
  name: string;
  abbreviation: string;
}

function App() {
  const [{ data, loading, error }] = useAxios({
    url: '/boards',
  });

  if (loading) return <p>Loading stuff...</p>;

  if (error) {
    return <p>Fuuuug :DDDD</p>;
  }

  const { boards } = data;

  const boardsLink = boards.map((board: Board) => (
    <NavLi key={board.abbreviation}>
      <Link to={`/boards/${board.abbreviation}/catalog`}>{board.name}</Link>
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
            render={(props) => (
              <CatalogPage boardList={boards} board={props.match.params.board || ''} />
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
