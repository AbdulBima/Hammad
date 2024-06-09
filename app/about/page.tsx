import React from "react";

const AboutUs = () => {
	return (
		<div className='w-screen mx-auto p-5 sm:p-10 mt-20 md:mt-0 md:p-16 relative'>
			<div
				className='bg-contain bg-no-repeat h-[40vh] md:mt-10 bg-center text-center overflow-hidden'
				style={{
					minHeight: "300px",
					backgroundImage:
						"url('/images/logo.png')",
				}}
			></div>
			<div className='max-w-3xl mx-auto mt-40'>
				<div className='mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
					<div className='bg-white relative top-0 -mt-32 p-5 sm:p-10'>
						<div>
							<h1 className='text-gray-900 font-bold text-3xl mb-2'>
								About Hammad Empire
							</h1>

							<p className='text-base leading-8 my-5'>
								Hammad Empire is a
								dynamic and innovative
								company dedicated to
								providing top-notch products
								and services to our
								customers. With a focus on
								excellence and customer
								satisfaction, we strive to
								exceed expectations in
								everything we do.
							</p>

							<h3 className='text-2xl font-bold my-5'>
								Our Mission
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								Our mission at Hammad
								Empire is to empower
								individuals and businesses
								by offering innovative
								solutions that enhance
								productivity, connectivity,
								and efficiency. We are
								committed to delivering
								exceptional value to our
								clients through superior
								products, personalized
								service, and continuous
								improvement.
							</p>

							<h3 className='text-2xl font-bold my-5'>
								Core Values
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								At Hammad Empire, we
								uphold the highest standards
								of integrity,
								professionalism, and respect
								in all our interactions. We
								believe in fostering a
								culture of collaboration,
								accountability, and
								transparency to achieve
								shared goals and mutual
								success.
							</p>

							<h3 className='text-2xl font-bold my-5'>
								Our Commitment
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								We are dedicated to building
								long-lasting relationships
								with our customers based on
								trust, reliability, and
								mutual respect. Our team of
								skilled professionals is
								committed to delivering
								innovative solutions and
								exceptional service to meet
								the evolving needs of our
								clients.
							</p>

							<h3 className='text-2xl font-bold my-5'>
								Get in Touch
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								We welcome the opportunity
								to connect with you and
								discuss how Hammad
								Empire can help you
								achieve your goals. Contact
								us today to learn more about
								our products and services or
								to schedule a consultation
								with one of our experts.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
