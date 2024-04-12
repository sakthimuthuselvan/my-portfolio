import React from 'react'
import "./project.scss"
import MyMilan from "../../assets/Screenshot from 2024-04-09 21-53-42.png"
const Projects = () => {
  return (
    <div className=' overall-projects py-5'>
      <div className='container'>
        <h1>Projects</h1>

        <div className='content pt-4'>
          <div className='row'>

            <div className='col-lg-4 col-md-6 col-12'>
              <div className='box'>
                <div className='rounded'>
                  <img src={MyMilan} alt='mymilan' className='w-100 rounded'/>
                </div>
                <h4>sad</h4>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-12'>
              <div className='box'>
                <h4>sad</h4>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-12'>
              <div className='box'>
                <h4>sad</h4>
              </div>
            </div>


          </div>


        </div>
      </div>
    </div>
  )
}

export default Projects
