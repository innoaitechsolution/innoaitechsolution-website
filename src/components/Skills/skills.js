import React from 'react';
import './skills.css';
import WebDev from '../../assets/webdev.png';
import MobileAppDev from '../../assets/mobileappdev.png';
import DatabaseDev from '../../assets/databasedev.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">Who We are?</span>
            <span className="skillDesc">InnoAl Tech Solution is a technology company specializing in web development, mobile app development, and database development.
Our mission is to help our clients enhance their success in the digital world by providing them with innovative and scalable solutions. With our experienced team, we leverage the latest technologies and best practices to develop your projects. We are committed to delivering quality service by offering tailored solutions to meet our clients' needs. Feel free to contact us for more information.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDev} alt="WebDevelopent" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Developent</h2>
                        <p>We provide personalized web solutions that meet our customer's needs. By working closely with them, we understand their business goals and preferences, shaping the design and coding processes based on their feedback. We aim to strengthen their digital presence by delivering dependable, impressive, and adaptable web solutions.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={MobileAppDev} alt="MobilAppDevelopent" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Mobile App Development</h2>
                        <p>This demo text can be changed while making the production ready website.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={DatabaseDev} alt="DatabaseDevelopment" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Database Development</h2>
                        <p>You can write text related to mobile app development.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;