import React, { useState, useEffect } from 'react';
import "./about.scss";
import Myimg from "../../assets/myimg.jpeg"
const About = () => {

    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("Full Stack Developer");
    const [speed, setSpeed] = useState(100);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isDeleting) {
                setDisplayText(prevText => prevText.slice(0, -1));
                if (displayText === '') {
                    setIsDeleting(false);
                    setIndex(0);
                }
            } else {
                if (index < text.length) {
                    setDisplayText(prevText => prevText + text.charAt(index));
                    setIndex(prevIndex => prevIndex + 1);
                } else {
                    setIsDeleting(true);
                }
            }
        }, speed);

        return () => clearInterval(interval);
    }, [index, text, speed, displayText, isDeleting]);


    return (
        <div className='overall-about'>

            <div className='row'>
                <div className='part-1 col-lg-7 col-md-6 col-sm-12'>
                    <h2>Hi, I am </h2>
                    <div>
                        <h1>Sakthi Muthuselvan</h1>
                    </div>
                    <h1>I am a <span>{displayText+"|"}</span></h1>
                    <div>
                        <p>
                        I am a skilled React.js developer with 1.5 years of experience working at Milanity Private Limited. During my time there, I've been instrumental in developing efficient and dynamic front-end solutions using React.js. My expertise lies in building responsive user interfaces, optimizing performance, and integrating with backend systems to create seamless web applications. I thrive in collaborative environments, where I can leverage my problem-solving skills and passion for clean, maintainable code to deliver high-quality software products.                        </p>
                    </div>
                    <div className='btn'>
                        <button className='resume-btn'>Check Resume</button>
                    </div>
                </div>

                <div className='part-2 col-lg-5 col-md-6 col-sm-12'>
                   <div>
                    {/* <h1>sakthi</h1> */}
                    <img src={Myimg} alt='image'/>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default About;
