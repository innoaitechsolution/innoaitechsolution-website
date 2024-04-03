import React from 'react';
import './skills.css';
import WebDev from '../../assets/webdev.png';
import MobileAppDev from '../../assets/mobileappdev.png';
import DatabaseDev from '../../assets/databasedev.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">Who We are?</span>
            <span className="skillDesc">Lorem.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDev} alt="WebDevelopent" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Developent</h2>
                        <p>This is a demo text, you can write your own content here.</p>
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