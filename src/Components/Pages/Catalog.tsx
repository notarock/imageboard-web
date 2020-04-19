import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { range } from "lodash";

interface Props {
  message: string;
}

interface Post {
  id: number;
  name: string;
  content: string;
  uri: string;
}

export const CatalogPage = (props: Props) => {
  const examplePost: Post = {
    id: 0,
    name: "Shill my new client",
    content: "its too good",
    uri: "https://source.unsplash.com/rcolors-andom"
  };

  const posts: [Post?] = [];

  range(50).forEach((id: number) => {
    posts.push({
      ...examplePost,
      id
    });
  });

  return (
    <CatalogContainer>
      {posts.map(post => (
        <PostBlock>
          <h4>{post?.name}</h4>
        </PostBlock>
      ))}
    </CatalogContainer>
  );
};

const CatalogContainer = styled.div`
  ${tw`block`}
`;

const PostBlock = styled.div`
  ${tw`border-solid border-2 border-black bg-green-200 m-4 p-2`}
`;
