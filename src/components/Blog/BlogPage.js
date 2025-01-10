import React from "react";
import { Link } from "react-router-dom";
import "./BlogPage.css";
import futureWebImage from "../../assets/Blog/future-web.png";
import customMobileImage from "../../assets/Blog/custom-mobile.png";
import databasePerformanceImage from "../../assets/Blog/database-performance.png";


const BlogPage = () => {
  const blogs = [
    {
      id: "1",
      title: "The Future of Web Development",
      date: "January 1, 2025",
      author: "InnoAl TS Editorial Team", 
      description: "Discover the latest trends in web development and how they can shape your business in 2025.",
      image: futureWebImage,
    },
    {
      id: "2",
      title: "Why Custom Mobile Apps Matter",
      date: "February 10, 2025",
      author: "InnoAl TS Editorial Team", 
      description: "Learn why having a custom mobile app is crucial for businesses in today's digital age.",
      image: customMobileImage,
    },
    {
      id: "3",
      title: "Optimizing Your Database for Performance",
      date: "March 5, 2025",
      author: "InnoAl TS Editorial Team", 
      description: "Tips and tricks for building and managing efficient database systems.",
      image: databasePerformanceImage,
    },
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-title">Our Blog</h1>
      <p className="blog-intro">Explore insights, tips, and updates from the world of technology.</p>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            {blog.image && <img src={blog.image} alt={blog.title} className="blog-card-image" />}
            <h2 className="blog-card-title">{blog.title}</h2>
            <p className="blog-card-date">
              {blog.date} | <span className="blog-card-author">{blog.author}</span>
            </p>
            <p className="blog-card-description">{blog.description}</p>
            <Link to={`/blog/${blog.id}`} className="blog-read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;




