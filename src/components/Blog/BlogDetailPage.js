import React from "react";
import { useParams } from "react-router-dom";
import "./BlogDetailPage.css";


const BlogDetailPage = () => {
  const { id } = useParams();

  const blogs = [
    {
      id: "1",
      title: "The Future of Web Development",
      date: "January 1, 2025",
      description: "Discover the latest trends in web development and how they can shape your business in 2025.",
      content: (
        <>
          <p>
            The landscape of web development is constantly evolving, and 2025 is no exception. Emerging technologies like
            artificial intelligence, machine learning, and progressive web apps (PWAs) are setting new benchmarks for
            user experience and functionality.
          </p>
          <p>
            One significant trend is the shift toward low-code and no-code platforms, enabling businesses to develop
            robust web solutions faster and with fewer resources. Additionally, serverless architectures are gaining
            traction, reducing operational overhead while increasing scalability.
          </p>
          <p>
            For businesses, staying ahead means embracing these innovations and ensuring their web presence is dynamic,
            engaging, and efficient. Are you ready to leverage these trends to future-proof your business?
          </p>
        </>
      ),    
    },
    {
      id: "2",
      title: "Why Custom Mobile Apps Matter",
      date: "February 10, 2025",
      description: "Learn why having a custom mobile app is crucial for businesses in today's digital age.",
      content: (
        <>
          <p>
            In today’s digital-first world, having a custom mobile app is more than just a convenience—it's a necessity.
            Custom apps are designed to meet the unique needs of your business, offering tailored solutions that
            off-the-shelf software simply cannot.
          </p>
          <p>
            Consider this: a personalized app can enhance customer engagement, streamline internal operations, and even
            open new revenue streams. For example, a retail business with a custom app can offer personalized
            recommendations, driving sales and boosting customer loyalty.
          </p>
          <p>
            With mobile usage at an all-time high, businesses without custom apps risk falling behind. Don’t miss out on
            the opportunity to elevate your brand in the palms of your customers.
          </p>
        </>
      ),     
    },
    {
      id: "3",
      title: "Optimizing Your Database for Performance",
      date: "March 5, 2025",
      description: "Tips and tricks for building and managing efficient database systems.",
      content: (
        <>
          <p>
            A well-optimized database is the backbone of any efficient business system. As businesses grow, so does their
            data, making it essential to prioritize database performance. Slow database queries and unoptimized structures
            can lead to operational bottlenecks and lost opportunities.
          </p>
          <p>
            The key to performance lies in indexing, normalization, and regularly monitoring database health. Tools like
            automated query optimization and cloud-based database solutions are revolutionizing how businesses manage
            their data.
          </p>
          <p>
            By optimizing your database, you not only improve system speed but also ensure reliability and scalability,
            paving the way for seamless growth and better customer experiences.
          </p>
        </>
      ),    
    },
  ];

  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  return (
    <div className="blog-detail-page">
      {blog.image && <img src={blog.image} alt={blog.title} className="blog-detail-image" />}
      <h1 className="blog-title">{blog.title}</h1>
      <p className="blog-date">{blog.date}</p>
      <p className="blog-description">{blog.description}</p>
      <div className="blog-content">{blog.content}</div>
    </div>
  );
};

export default BlogDetailPage;
