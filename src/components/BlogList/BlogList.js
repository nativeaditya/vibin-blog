import React from 'react';
import BlogItem from '../BlogItem/BlogItem';
import './main.css';
import { blogList } from '../../data/data';

export default function BlogList() {
  return <ul className='blog_list'>
  {blogList.map((blog) =>(
    <BlogItem key={blog.id} blog={blog} />
  ))}
  </ul>;
}
