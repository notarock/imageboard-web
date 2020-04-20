import React from 'react';
import { Post } from './Catalog';
import styled from 'styled-components';
import tw from 'tailwind.macro';

interface CatalogThumbnailProps {
  post?: Post;
}

export const CatalogThumbnail: React.FC<CatalogThumbnailProps> = (
  props: CatalogThumbnailProps,
) => {
  const { post } = props;
  return (
    <PostBlock>
      <h4>{post?.name}</h4>
    </PostBlock>
  );
};

const PostBlock = styled.div`
  ${tw`flex border-solid border border-black bg-green-200 m-4 p-2`}
`;
