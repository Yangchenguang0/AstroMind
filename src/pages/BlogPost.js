import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const BlogPostContainer = styled.div`
  padding: 2rem;
  text-align: left;
  color: #333;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #007bff;
`;

const BlogContent = styled.div`
  font-size: 1.25rem;
`;

const blogPosts = {
  1: {
    title: '第一篇博客',
    content: '这是第一篇博客的内容。',
  },
  2: {
    title: '第二篇博客',
    content: '这是第二篇博客的内容。',
  },
};

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogPosts[id];

  return (
    <BlogPostContainer>
      <BlogTitle>{blog.title}</BlogTitle>
      <BlogContent>{blog.content}</BlogContent>
    </BlogPostContainer>
  );
};

export default BlogPost;
