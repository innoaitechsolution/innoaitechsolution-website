import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">We are <span className="introName">software</span> <br />Company</span>  
                <p className="introPara">InnoAI Tech Solution<br />Web Design, AI, Database, Software Solutions.</p> 
                <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/>Empower Your Digital Presence with Us!</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;