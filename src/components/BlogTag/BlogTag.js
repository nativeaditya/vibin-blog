import React from "react";
import "./main.css";

export default function BlogTag({ subCategory }) {
  return (
    <ul className="blog_tag">
      {subCategory.map((tag) => (
        <li key={tag} className="tag">
          <p>{tag}</p>
        </li>
  ))}
    </ul>
  );
}
