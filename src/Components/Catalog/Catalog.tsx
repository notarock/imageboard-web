import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { CatalogThumbnail } from './CatalogThumbnail';
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

  if (loading) return <p>Loading stuff...</p>;

  if (error) {
    return <p>Fuuuug :DDDD</p>;
  }

  const { posts } = data;

  return (
    <>
      <BoardTitle>
        <h1>{props.board}</h1>
      </BoardTitle>
      <CatalogContainer>
        {posts.map((post: Post) => (
          <CatalogThumbnail post={post} />
        ))}
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
