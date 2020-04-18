import React from "react";

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
    uri: "https://source.unsplash.com/random"
  };

  const posts: [Post?] = [];

  [1, 2, 3, 4, 5, 6, 6, 7, 8, 9].forEach(id => {
    posts.push({
      ...examplePost,
      id
    });
  });

  return (
    <>
      {posts.map(post => (
        <p>{post?.name}</p>
      ))}
    </>
  );
};
