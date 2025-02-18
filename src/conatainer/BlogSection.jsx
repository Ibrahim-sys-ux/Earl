<<<<<<< HEAD
import React from "react";
import "./BlogSection.css";

const blogs = [
  {
    id: 1,
    image: "/lasagna.jpg",
    title: "Make a proper salad with high proteins",
    date: "January 30, 2023",
    comments: 2,
    description:
      "Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum.",
    author: "Admin",
  },
  {
    id: 2,
    image: "/eggplant.jpg",
    title: "Make the essential dish at Earl's restaurant",
    date: "February 10, 2023",
    comments: 2,
    description:
      "Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum.",
    author: "Admin",
  },
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h3 className="blog-title">Blogs</h3>
      <h2 className="blog-heading">
        Latest <span>Updates</span>
      </h2>
      <p className="blog-subtext">
        Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit.
      </p>
      <img src="/swoosh.png" style={{width:90}}/><br/><br/><br/><br/>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} /><br/>
            <div className="blog-content">
              <div className="blog-meta">
                <span>👤 {blog.author}</span>
                <span>📅 {blog.date}</span>
                <span>💬 {blog.comments} Comments</span>
              </div><br/>
              <h4>{blog.title}</h4>
              <p>{blog.description}</p><br/>
              <a href="#" className="blog-link">
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
=======
import React from "react";
import "./BlogSection.css";

const blogs = [
  {
    id: 1,
    image: "/lasagna.jpg",
    title: "Make a proper salad with high proteins",
    date: "January 30, 2023",
    comments: 2,
    description:
      "Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum.",
    author: "Admin",
  },
  {
    id: 2,
    image: "/eggplant.jpg",
    title: "Make the essential dish at Earl's restaurant",
    date: "February 10, 2023",
    comments: 2,
    description:
      "Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum.",
    author: "Admin",
  },
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h3 className="blog-title">Blogs</h3>
      <h2 className="blog-heading">
        Latest <span>Updates</span>
      </h2>
      <p className="blog-subtext">
        Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit.
      </p>
      <img src="/swoosh.png" style={{width:90}}/><br/><br/><br/><br/>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} /><br/>
            <div className="blog-content">
              <div className="blog-meta">
                <span>👤 {blog.author}</span>
                <span>📅 {blog.date}</span>
                <span>💬 {blog.comments} Comments</span>
              </div><br/>
              <h4>{blog.title}</h4>
              <p>{blog.description}</p><br/>
              <a href="#" className="blog-link">
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
>>>>>>> c774365 (Initial upload of folder and files)
