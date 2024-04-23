import React from 'react'
import "./footer.scss"
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='overall-footer'>
      <div className='container pt-5 pb-4'>
        <h4 className='text-center'>Sakthi Muthuselvan</h4>
        <div className='d-flex justify-content-center'>
          <div>
            <FaFacebook className='icon' />
            <a href='https://www.instagram.com/sakthi1641/?next=%2F' target='_blank' rel="noreferrer">
              <FiInstagram className='icon' />
            </a>
            <a href='https://www.linkedin.com/in/sakthi-muthuselvan-13a3832a3/' target='_blank' rel="noreferrer" ><FaLinkedin className='icon' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
