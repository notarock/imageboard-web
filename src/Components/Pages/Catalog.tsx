import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { range } from "lodash";
import tempPost from "../../ressources/tempPost.json"; //TODO: Query data from backend

interface CatalogProps {
  board: string;
}

interface Post {
  id: number;
  name: string;
  content: string;
  uri: string;
}

export const CatalogPage: React.FC<CatalogProps> = (props: CatalogProps) => {
  const posts: [Post?] = [];

  range(50).forEach((id: number) => {
    posts.push({
      ...tempPost,
      id
    });
  });

  return (
    <>
      <BoardTitle>
        <h1>{props.board}</h1>
      </BoardTitle>
      <CatalogContainer>
        {posts.map(post => (
          <PostBlock>
            <h4>{post?.name}</h4>
          </PostBlock>
        ))}
      </CatalogContainer>
    </>
  );
};

const BoardTitle = styled.div`
  ${tw`text-center text-6xl`}
`;

const CatalogContainer = styled.div`
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: min-content;
  display: grid;
  justify-items: center;
`;

const PostBlock = styled.div`
  ${tw`flex border-solid border border-black bg-green-200 m-4 p-2`}
`;
