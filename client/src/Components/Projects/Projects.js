import React from 'react'
import "./project.scss"
import MyMilan from "../../assets/Screenshot from 2024-04-09 21-53-42.png"
import Admin from "../../assets/admin.png"
import User from "../../assets/user.png"


const Projects = () => {
  return (
    <div id='projects' className=' overall-projects py-5'>
      <div className='container'>
        <h1>Projects</h1>
        <div className='content pt-4'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-12'>
              <a href='https://milancloud.com/' target='_blank' rel="noreferrer">
                <div className='box'>
                  <div className='rounded'>
                    <img src={MyMilan} alt='mymilan' className='w-100 rounded' />
                  </div>
                  <div className='chips'>
                    <div>Html</div>
                    <div>Css</div>
                    <div>Scss</div>
                    <div>Bootstrap</div>
                    <div>Javascript</div>
                    <div>React JS</div>
                    <div>Material UI</div>
                    <div>Apex Chart</div>
                  </div>
                  <div className='description'>
                    <h5>Milan Cloud</h5>
                    <p>Created a React-based Milan Cloud webpage for seamless IoT integration across locations and partners, with real-time data visualization for informed decisions and efficiency.</p>
                  </div>
                </div>
              </a>
            </div>

            <div className='col-lg-4 col-md-6 col-12'>
              <a href='https://github.com/sakthimuthuselvan/Shopy_Admin' target='_blank' rel="noreferrer">
                <div className='box'>
                  <div className='rounded'>
                    <img src={Admin} alt='mymilan' className='w-100 rounded' />
                  </div>
                  <div className='chips'>
                    <div>Html</div>
                    <div>Css</div>
                    <div>Scss</div>
                    <div>Bootstrap</div>
                    <div>Javascript</div>
                    <div>React JS</div>
                    <div>Material UI</div>
                    <div>Node JS</div>
                    <div>Express</div>
                    <div>MongoDB</div>
                    <div>Mongoose</div>
                    <div>JWT</div>
                    <div>OTP Validation</div>
                    <div>Web Socket</div>
                  </div>
                  <div className='description'>
                    <h5>Shopy Admin</h5>
                    <p>Crafted a robust MERN stack E-commerce Admin Dashboard, empowering administrators with comprehensive control and integrated charts for data-driven decisions, optimizing business operations.</p>
                  </div>
                </div>
              </a>
            </div>

            <div className='col-lg-4 col-md-6 col-12'>
              <a href='https://github.com/sakthimuthuselvan/Shopy_User' target='_blank' rel="noreferrer">
                <div className='box'>
                  <div className='rounded'>
                    <img src={User} alt='mymilan' className='w-100 rounded' />
                  </div>
                  <div className='chips'>
                    <div>Html</div>
                    <div>Css</div>
                    <div>Scss</div>
                    <div>Bootstrap</div>
                    <div>Javascript</div>
                    <div>React JS</div>
                    <div>Material UI</div>
                    <div>Node JS</div>
                    <div>Express</div>
                    <div>MongoDB</div>
                    <div>Mongoose</div>
                    <div>JWT</div>
                    <div>OTP Validation</div>
                    <div>Responsive</div>
                  </div>
                  <div className='description'>
                    <h5>Shopy User</h5>
                    <p>Created a comprehensive MERN stack E-commerce platform with seamless user experience and secure payment gateways, driving enhanced engagement and conversions.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
