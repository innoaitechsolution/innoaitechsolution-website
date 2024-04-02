import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/image2.jpg';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">We are <span className="introName">software</span> <br />Company</span>
                <p className="introPara">lorem<br />lorem.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> lorem</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;