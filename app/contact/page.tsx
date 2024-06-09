"use client";
import React, { useState } from "react";

// ContactForm Component
const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		// You can handle form submission here, for example, sending form data to a server
		console.log("Form submitted:", {
			name,
			email,
			message,
		});
	};

	return (
		<>
		
			<div className='bg-black p-6 h-[80vh] md:flex md:flex-col md:items-center mt-16 max-lg:text-center'>
				<h2 className='text-xl mt-20 font-bold text-white'>
					Contact Information
				</h2>
				<p className='text-sm text-gray-400 mt-3'>
					Have some big idea or brand to develop
					and need help?
				</p>
				<div className='mt-32 space-y-10 text-center flex flex-col'>
					<a className='flex items-center max-lg:justify-center'
					href='mailto:hammadempirelimited@gmail.com'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16px'
							height='16px'
							fill='#fff'
							viewBox='0 0 479.058 479.058'
						>
							<path d='M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z' />
						</svg>
						<strong
							
							className='text-white text-sm ml-3 decoration-amber-400 underline decoration-2'
						>
						
								Click to send a mail
					
						</strong>
						</a>
            <strong className='text-white text-sm ml-3'
						>
						
								Tel -  +234 916 546 1788
							</strong>
					
				
				</div>
			</div>
			<div>
				{/* <div className='bg-black p-6 pb-28 md:px-80'>
					<h2 className='text-xl font-bold text-white mb-4'>
						Contact Us
					</h2> 
					<form onSubmit={handleSubmit}>
						<div className='mb-4'>
							<input
								type='text'
								placeholder='Your Name'
								className='w-full px-4 py-3 rounded-none bg-[#fff] text-[#011c2b] focus:outline-none'
								value={name}
								onChange={(e) =>
									setName(e.target.value)
								}
								required
							/>
						</div>
						<div className='mb-4'>
							<input
								type='email'
								placeholder='Your Email'
								className='w-full px-4 py-3 rounded-none bg-[#fff] text-[#011c2b] focus:outline-none'
								value={email}
								onChange={(e) =>
									setEmail(e.target.value)
								}
								required
							/>
						</div>
						<div className='mb-4'>
							<textarea
								placeholder='Your Message'
								className='w-full h-32 px-4 py-3 rounded-none  bg-[#fff] text-[#011c2b] focus:outline-none resize-none'
								value={message}
								onChange={(e) =>
									setMessage(
										e.target.value
									)
								}
								required
							></textarea>
						</div>
						<div className='text-center'>
							<button
								type='submit'
								className='bg-blue-600 text-white px-6 py-3  font-bold hover:bg-blue-700 transition-colors'
							>
								Send Message
							</button>
						</div>
					</form>
				</div> */}
			</div>
		</>
	);
};

export default ContactForm;
