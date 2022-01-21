import React from "react";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import BlogList from "../../components/BlogList/BlogList";
import "./main.css";

function Blog() {
  return (
    <main>
    <section className="blogPage">
      <BlogHeader />
      <BlogList/>
      
    </section>
    </main>
  );
}

export default Blog;
