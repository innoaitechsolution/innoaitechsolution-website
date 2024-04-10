import React from 'react';
import './skills.css';
import WebDev from '../../assets/webdev.png';
import MobileAppDev from '../../assets/mobileappdev.png';
import DatabaseDev from '../../assets/databasedev.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">Who We are?</span>
            <span className="skillDesc">We are InnoAl Tech Solution, a technology company focused on web, mobile app, and database development. Our mission is to support clients in the digital world by offering innovative solutions. Our mission is to support clients in the digital world by offering innovative solutions.</span>   
            <p>Please feel free to contact us for more! </p>       
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDev} alt="WebDevelopent" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Developent</h2>
                        <p>We provide personalized web solutions that meet our customer's needs. By working closely with them, we understand their business goals and preferences, shaping the design and coding processes based on their feedback.Our aim is to strengthen their digital presence by delivering dependable, impressive, and adaptable web solutions. </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={MobileAppDev} alt="MobilAppDevelopent" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Mobile App Development</h2>
                        <p>We develop innovative and user-friendly mobile applications tailored to our client's needs. By leveraging modern technologies, we provide customized mobile solutions to our clients. We value user feedback and shape the app development process accordingly. Our goal is to deliver reliable and effective mobile applications that help our clients achieve their business objectives.</p>
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