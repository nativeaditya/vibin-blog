import React from "react";
import { Link } from "react-router-dom";
import BlogTag from "../BlogTag/BlogTag";
//import BlogTag from "../BlogTag/BlogTag";
import "./main.css";
export default function BlogItem({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    subCategory,
    cover,
    category,
    id,
  },
}) {
  return (
    <Link className='lk' to={`/blog/${id}`}>
    <li className="blog_item">
      <div className="blog_img">
        <img
          src={cover}
        ></img>
      </div>
      <div className="blog_content">
        <h2 className="blog_title">
          {title}
        </h2>
        
          <BlogTag subCategory={subCategory} />
        <p className="blogs_item__description">{description}</p>
      </div>
    </li>
    </Link>
  );
}
