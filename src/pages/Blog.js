import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogContainer = styled.div`
  padding: 2rem;
  text-align: center;
  color: #333;
`;

const BlogTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #007bff;
`;

const BlogList = styled.ul`
  list-style: none;
  padding: 0;
`;

const BlogItem = styled.li`
  margin: 1rem 0;
  font-size: 1.5rem;

  & > a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const blogs = [
  { id: 1, title: '第一篇博客', link: '/blog/1' },
  { id: 2, title: '第二篇博客', link: '/blog/2' },
];

const Blog = () => {
  return (
    <BlogContainer>
      <BlogTitle>博客</BlogTitle>
      <BlogList>
        {blogs.map(blog => (
          <BlogItem key={blog.id}>
            <Link to={blog.link}>{blog.title}</Link>
          </BlogItem>
        ))}
      </BlogList>
    </BlogContainer>
  );
};

export default Blog;
