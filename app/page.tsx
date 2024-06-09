"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderSlide from "@/components/HeaderSlide";
import Image from "next/image";
import Card from "../components/Card";
import Testimonial from "@/components/Testmonial";

const HomePage = () => {
	return (
		<>
			<div className='md:hidden flex carousel carousel-center p-4 space-x-4 bg-white h-[70vh]'>
				<div className='carousel-item '>
					<HeaderSlide
						imageUrl={"/images/teleco/t1.jpg"}
						title={
							"Unlocking Excellence Across Industries"
						}
						description={`Where innovation drives success across telecommunications, food commodities, energy, and transportation.`}
						learnMoreLink={"/"}
					/>
				</div>

				<div className='carousel-item'>
					<HeaderSlide
						imageUrl={
							"/images/education/e6.jpg"
						}
						title={
							"Empowering Minds, Shaping Futures"
						}
						description={
							"Our innovative solutions and resources pave the way for lifelong learning and growth."
						}
						learnMoreLink={
							"/services/education"
						}
					/>
				</div>

				<div className='carousel-item'>
					<HeaderSlide
						imageUrl={"/images/food/f6.jpg"}
						title={"Quality You Can Taste"}
						description={
							"Our diverse range of high-quality food products guarantees satisfaction in every bite."
						}
						learnMoreLink={"/services/foodcom"}
					/>
				</div>

				<div className='carousel-item'>
					<HeaderSlide
						imageUrl={"/images/teleco/t2.jpg"}
						title={"Connecting You to Tomorrow"}
						description={
							"Our cutting-edge telecommunications solutions ensure you stay ahead in the digital era."
						}
						learnMoreLink={"/services/telecom"}
					/>
				</div>

				<div className='carousel-item'>
					<HeaderSlide
						imageUrl={"/images/energy/en1.jpg"}
						title={
							"Powering the Future, Responsibly"
						}
						description={
							"Our energy solutions, driven by renewable sources, promise a greener tomorrow."
						}
						learnMoreLink={"/services/energy"}
					/>
				</div>
			</div>

			<div className='hidden md:flex w-screen'>
				<HeaderSlide
					imageUrl={"/images/transport/tr2.jpg"}
					title={
						"Unlocking Excellence Across Industries"
					}
					description={
						"Welcome to Hammad Empire, where innovation meets excellence in telecommunications, food commodities, energy, and transportation solutions. Join us on a journey of relentless progress and unparalleled service."
					}
					learnMoreLink={"/services"}
				/>
			</div>

			<section className='bg-white'>
				<div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8'>
					<div className='mx-auto max-w-3xl text-center'>
						<h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
							Trusted Solutions for Every
							Business
						</h2>

						<p className='mt-4 text-gray-500 sm:text-xl'>
							At Hammad, we understand the
							diverse needs of businesses. Our
							tailored solutions are trusted
							by a wide range of industries,
							providing reliability and
							efficiency every step of the
							way.
						</p>
					</div>

					<div className='mt-8 sm:mt-12'>
						<dl className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
							<div className='flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center'>
								<dt className='order-last text-lg font-medium text-gray-500'>
									Total Sales
								</dt>

								<dd className='text-4xl font-extrabold text-blue-600 md:text-5xl'>
									N43.7B+
								</dd>
							</div>

							<div className='flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center'>
								<dt className='order-last text-lg font-medium text-gray-500'>
									Clients
								</dt>

								<dd className='text-4xl font-extrabold text-blue-600 md:text-5xl'>
									829+
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>

			<h2 className='text-3xl text-center font-bold text-gray-900 sm:text-4xl'>
				Our Services
			</h2>

			<div className='overflow-x-hidden md:space-x-4 space-y-10 px-4 flex flex-col md:space-y-6 md:grid md:grid-cols-3 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
				<Card
					imageUrl={"/images/education/e6.jpg"}
					category={"Education "}
					date={""}
					title={
						"Empowering Minds, Shaping Futures"
					}
					description={
						"Transforming education with Hammad Empire. Our innovative solutions and resources pave the way for lifelong learning and growth."
					}
					learnMoreLink={"/services/education"}
					url2={"/services/education"}
				/>

				<Card
					imageUrl={"/images/food/f6.jpg"}
					category={"Food Commodities & Agricultural Produce"}
					date={""}
					title={"Quality You Can Taste"}
					description={
						"Indulge in excellence with Hammad Empire. Our diverse range of high-quality food products guarantees satisfaction in every bite."
					}
					learnMoreLink={"/services/foodcom"}
					url2={"/services/foodcom"}
				/>

				<Card
					imageUrl={"/images/teleco/t1.jpg"}
					category={"Telecommunication "}
					date={""}
					title={"Connecting You to Tomorrow"}
					description={
						"Experience seamless connectivity with Hammad Empire. Our cutting-edge telecommunications solutions ensure you stay ahead in the digital era."
					}
					learnMoreLink={"/services/telecom"}
					url2={"/services/telecom"}
				/>

				<Card
					imageUrl={"/images/energy/en3.jpg"}
					category={"Energy "}
					date={""}
					title={
						"Powering the Future, Responsibly"
					}
					description={
						"Embrace sustainability with Hammad Empire. Our energy solutions, driven by renewable sources, promise a greener tomorrow."
					}
					learnMoreLink={"/services/energy"}
					url2={"/services/energy"}
				/>

				<Card
					imageUrl={"/images/transport/tr1.jpg"}
					category={"Transportation "}
					date={""}
					title={"Moving Your World, Seamlessly"}
					description={
						"Experience efficiency with Hammad Empire. Our transportation services ensure timely and secure deliveries, wherever you need to go."
					}
					learnMoreLink={
						"/services/transportation"
					}
					url2={"/services/transportation"}
				/>
			</div>

			<section className='bg-white'>
				<div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
					<h2 className='text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
						Read trusted reviews from our
						customers
					</h2>

					<div className='mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8'>
						<Testimonial
							name='Chinwe Okonkwo'
							content='Working with Hammad Company has been a game-changer for me. Their professionalism and dedication to quality are unparalleled.'
						/>
						<Testimonial
							name='Abdulahi Ibrahim'
							content="I'm impressed by the level of expertise Hammad Company brings to every project. They deliver results that exceed expectations."
						/>
						<Testimonial
							name='Chidimma Eze'
							content='Hammad Company truly understands our needs and delivers tailored solutions. I highly recommend them for any business.'
						/>
						<Testimonial
							name='Obinna Okafor'
							content="Hammad Company's attention to detail and commitment to customer satisfaction make them stand out in the industry. I'm glad to have partnered with them."
						/>
						<Testimonial
							name='Aisha Mohammed'
							content="As a client of Hammad Company, I've experienced nothing but excellence. They go above and beyond to ensure our success."
						/>
						<Testimonial
							name='Emeka Nwosu'
							content='Choosing Hammad Company was one of the best decisions I made for my business. Their innovative solutions have propelled us to new heights.'
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomePage;
