import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogList } from "../../data/data";
import BlogTag from "../../components/BlogTag/BlogTag";
import "./main.css";

export default function PostPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
      console.log(blog);
    }
  }, []);

  return (
    <main>
      {blog ? (
        <div className="postpage">
          <section>
            <div className="cover_img">
              <img src={blog.cover}></img>
            </div>
            <h1 className="posttitle">{blog.title}</h1>
            <BlogTag subCategory={blog.subCategory} />
          </section>
          <section>
            <h2 className="postcontent_tltle">{blog.authorName}</h2>
            <p className="postcontent_desc">{blog.description}</p>
            <p className="postcontent_desc">{blog.description}</p>
            <p className="postcontent_desc">{blog.description}</p>
          </section>

          <section className="postpage_about">
            <img
              className="postpage_about_image"
              src="https://vibin-blogs.netlify.app/dist/images/mildly-useful-N_xjrdKZPkw-unsplash.jpg"
            ></img>
            <div className='postpage_about_content'>
            <h2 className='postpage_about_title'>{blog.title}</h2>
            <p className='postpage_about_desc'>{blog.description}</p>
            <p className='postpage_about_desc'>{blog.description}</p>
            </div>
          </section>
        </div>
      ) : (
        <h1>back</h1>
      )}
    </main>
  );
}
