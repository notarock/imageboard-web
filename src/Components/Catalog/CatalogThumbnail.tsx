import React from 'react';
import { Post } from './Catalog';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import _ from 'lodash';

interface CatalogThumbnailProps {
  post: Post;
}

const POST_LENGTH = 150;

export const CatalogThumbnail: React.FC<CatalogThumbnailProps> = (
  props: CatalogThumbnailProps,
) => {
  let { post } = props;

  if (post.content.length > POST_LENGTH) {
    post.content = _.truncate(post?.content, { length: POST_LENGTH });
  }

  return (
    <PostBlock>
      <Title>{post?.name}</Title>
      <p>{post?.content}</p>
    </PostBlock>
  );
};

const PostBlock = styled.span`
  ${tw`inline border-solid border border-black bg-green-200 m-4 p-2`}
`;

const Title = styled.span`
  ${tw`font-semibold`}
`;
