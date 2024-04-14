import React from 'react'
import "./contact.scss"

const Contact = () => {
    return (
        <div className='overall-contact'>
            <div className='container'>
                <h1>Contact</h1>
                <p>Feel free to reach out to discuss collaborations, projects, or just to say hello! I'm always eager to connect and explore new opportunities.</p>

                <div className='contact-box '>
                    <div className='col-lg-6 col-md-8 col-sm-12'>
                        {/* <h5 className='text-center mt-2 fw-bold d-block' style={{color:"gray"}}>Email Me</h5> */}
                        <div>
                            <input type='text' autoComplete='off' placeholder='Email' />
                            <input type='text' autoComplete='off' placeholder='Name' />
                            <input type='text' autoComplete='off' placeholder='Subject' />
                            <textarea multiple autoComplete='off' type='text' placeholder='Message' className='py-3' />
                            <div className='btn'>
                                <button className='resume-btn'>Send</button>
                            </div>
                        </div>

                    </div>



                </div>


            </div>


        </div>
    )
}

export default Contact
