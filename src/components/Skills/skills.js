import React from 'react';
import './skills.css';
import WebDev from '../../assets/webdev.png';
import MobileAppDev from '../../assets/mobileappdev.png';
import DatabaseDev from '../../assets/databasedev.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">Who We are?</span>
            <span className="skillDesc">InnoAl Tech Solution offers comprehensive web, mobile, and database development services. With our expertise and passion for innovation, we help businesses thrive in the digital landscape. Contact us to discuss your project!</span>                 
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDev} alt="WebDevelopent" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Developent</h2>
                        <p>We provide personalized web solutions that meet our customer's needs. By working closely with them, we understand their business goals and preferences, shaping the design and coding processes based on their feedback.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={MobileAppDev} alt="MobilAppDevelopent" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Mobile App Development</h2>
                        <p>We develop innovative and user-friendly mobile applications tailored to our client's needs. By leveraging modern technologies, we provide customized mobile solutions to our clients.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={DatabaseDev} alt="DatabaseDevelopment" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Database Development</h2>
                        <p>We offer customized database solutions to meet our client's data management needs. Our goal is to help our clients improve their data management processes and achieve their business objectives through database-based solutions.</p>
                    </div>
                </div>
            </div>            
        </section>
    );
}

export default Skills;