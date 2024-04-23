import React, { useState } from 'react'
import "./contact.scss"
import axios from 'axios';
import Loader from '../../Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		subject: '',
		message: ''
	});
	const [showLoader, setShowLoader] = useState(false)
	const [disable, setDisable] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prevData => ({
			...prevData,
			[name]: value
		}));
	};


	const sendEmail = async () => {
		const { email, name, message, subject } = formData
		setShowLoader(true)
		try {
			await axios.post('https://my-portfolio-hnog.onrender.com/send-email', {
				user_name: name,
				user_email: email,
				subject: subject,
				text: message
			});
			setShowLoader(false)
			setDisable(true)
			toast.success("Email sent successfully", {
				position: "top-right",
				autoClose: 2000
			});
			setFormData(prevData => ({
				...prevData,
				email: '',
				name: '',
				subject: '',
				message: ''
			}));
		} catch (error) {
			setShowLoader(false)
			toast.error("Error sending email", {
				position: "top-right",
				autoClose: 2000
			});
		}
	}

	const submitContact = () => {
		if (!formData.name) {
			toast.error("Name field is required", {
				position: "top-right",
				autoClose: 2000
			});

		} else if (!formData.email) {
			toast.error("Email field is required", {
				position: "top-right",
				autoClose: 2000
			});
		} else if (!formData.subject) {
			toast.error("Subject field is required", {
				position: "top-right",
				autoClose: 2000
			});
		} else if (!formData.message) {
			toast.error("Message field is required", {
				position: "top-right",
				autoClose: 2000
			});
		} else {
			sendEmail()
		}
	}
	return (
		<div id='contacts' className='overall-contact py-5'>
			<ToastContainer pauseOnFocusLoss={false} />
			<Loader open={showLoader} />
			<div className='container'>
				<h1>Contact</h1>
				<p>Feel free to reach out to discuss collaborations, projects, or just to say hello! I'm always eager to connect and explore new opportunities.</p>

				<div className='contact-box '>
					<div className='col-lg-6 col-md-8 col-sm-12'>
						{/* <h5 className='text-center mt-2 fw-bold d-block' style={{color:"gray"}}>Email Me</h5> */}
						<div>
							<div>
								<input
									type='text'
									autoComplete='off'
									placeholder='Name'
									name='name'
									value={formData.name}
									onChange={handleChange}
								/>
								<input
									type='text'
									autoComplete='off'
									placeholder='Email'
									name='email'
									value={formData.email}
									onChange={handleChange}
								/>

								<input
									type='text'
									autoComplete='off'
									placeholder='Subject'
									name='subject'
									value={formData.subject}
									onChange={handleChange}
								/>
								<textarea
									multiple
									autoComplete='off'
									placeholder='Message'
									className='py-3'
									name='message'
									value={formData.message}
									onChange={handleChange}
								/>
							</div>
							<div className='btn'>
								<button disabled={disable} className='resume-btn' onClick={() => submitContact()}>Send</button>
							</div>
						</div>

					</div>



				</div>


			</div>


		</div>
	)
}

export default Contact
