import React from 'react'
import "./experience.scss"
import Milanity from "../../assets/milanity.jpeg"

const Experience = () => {
    return (
        <div id='experience' className='container overall-experience'>
            <h1>Experience</h1>

            <div className='row pt-4'>

                <div className='col-lg-12 col-md-12 col-sm-12 mb-4'>
                    <div className='box'>
                        <div className='content'>
                                <div className='img-content'><img src={Milanity} alt='milanity' /> </div>
                                <div className='info'>
                                    <h5>React.js Developer | Milanity Innovation Pvt Limited</h5>
                                    <p>Duration: [Jan, 2023] - Present</p>

                                    <div className='list'>
                                        <li>Actively involved in developing innovative and user-centric web applications using React.js, HTML, CSS, and JavaScript.</li>
                                        <li>Continuously enhancing skills in building responsive, dynamic, and scalable front-end solutions to ensure seamless user experiences.</li>
                                        <li>Collaborating closely with cross-functional teams to drive forward the development of cutting-edge projects.</li>
                                        <li>Proactively staying updated with the latest industry trends and best practices to deliver high-quality solutions that surpass client expectations.</li>
                                        <li>Contributing significantly to the ongoing success of projects and making a lasting impact in the field of web development.</li>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Experience
