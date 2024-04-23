import React from 'react';
import './blog.css';

const Blog = () => {
  return (
    <section id='blog'>
      <span className="blogTitle">InnoAl Tech Solution: Providing Innovative Solutions in the Digital World</span>
      <span className="blogDesc">At InnoAl Tech Solution, we believe in the power of digital transformation and contribute to our customers' success by providing innovative solutions. Our mission is to optimize business processes, enhance customer experiences, and be a leader in digital transformation.<Link to="/fullblog">Read More</Link></span>            
      <div className="blogBars">
        <div className="blogBar">
          <img src={WebDev} alt="WebDevelopent" className="blogBarImg" />
          <div className="blogBarText">
            <h2></h2>            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
