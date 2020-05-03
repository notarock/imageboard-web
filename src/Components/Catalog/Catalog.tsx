import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { CatalogThumbnail } from './CatalogThumbnail';
import { useAxios } from '../../services/apiClient';

interface CatalogProps {
  board: string;
  boardList: Board[];
}

export interface Post {
  id: number;
  name: string;
  content: string;
  uri: string;
}

interface Board {
  id: string;
  name: string;
  abbreviation: string;
}

export const CatalogPage: React.FC<CatalogProps> = (props: CatalogProps) => {
  const board = props.boardList.find((b: Board) => b.abbreviation === props.board);
  const [{ data, loading, error }] = useAxios({
    url: `/boards/${props.board}/posts`,
  });

  if (!board) {
    return (<><h2>Not found!</h2></>);
  }

  if (loading) return <p>Loading stuff...</p>;

  if (error) {
    return <p>Fuuuug :DDDD</p>;
  }

  const { posts } = data;

  return (
    <>
      <BoardTitle>
        <h1>{board.name}</h1>
      </BoardTitle>
      <CatalogContainer>
        {posts.map((post: Post) => (
          <CatalogThumbnail key={post.id} post={post} />
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
