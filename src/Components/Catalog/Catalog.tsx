import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
// import { range } from 'lodash';
// import tempPost from '../../ressources/tempPost.json';
// import { CatalogThumbnail } from './CatalogThumbnail';
import { useAxios } from '../../services/apiClient';

interface CatalogProps {
  board: string;
}

export interface Post {
  id: number;
  name: string;
  content: string;
  uri: string;
}

export const CatalogPage: React.FC<CatalogProps> = (props: CatalogProps) => {
  const [{ data, loading, error }, refetch] = useAxios({
    url: '/post',
  });

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.log('error', error);
    return <p>Error!</p>;
  }

  console.log('data', data);

  //const tempPost = { id: 0, name: 'aa', content: 'aa', uri: 'aa' };
  //
  //range(50).forEach((id: number) => {
  //posts.push({
  //...tempPost,
  //id,
  //});
  //});
  //

  return (
    <>
      <BoardTitle>
        <h1>{props.board}</h1>
      </BoardTitle>
      <CatalogContainer>
        {/*posts.map((post) => (
          <CatalogThumbnail post={post} />
        ))*/}
      </CatalogContainer>
    </>
  );
};

const BoardTitle = styled.div`
  ${tw`text-center text-6xl py-16`}
`;

const CatalogContainer = styled.div`
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: min-content;
  display: grid;
  justify-items: center;
`;
