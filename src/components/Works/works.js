import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';


const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">Our Projects</h2>
            <span className="worksDesc">Our mobile app is still in development, stay tuned!🕒</span>
            <div className="worksImgs">
                <img src={Portfolio1} alt="" className="worksImg" />
              
            </div>
            <button className="workBtn">See More project!</button>
        </section>
    );
}

export default Works;