import GalleryCard from "@/components/GalleryCard";
import React from "react";

const Energy = () => {
	const images = [
		{
			src: "/images/energy/en1.jpg",
			alt: "Image 1",
			width: 900,
			height: 900,
		},
		{
			src: "/images/energy/en2.jpg",
			alt: "Image 2",
			width: 900,
			height: 900,
		},
		{
			src: "/images/energy/en3.jpg",
			alt: "Image 3",
			width: 900,
			height: 900,
		},
		{
			src: "/images/energy/en4.jpg",
			alt: "Image 3",
			width: 900,
			height: 900,
		},
		{
			src: "/images/energy/en5.jpg",
			alt: "Image 3",
			width: 900,
			height: 900,
		},
		
		// Add more images as needed
	];
	return (
		<div className='w-screen mx-auto p-5 sm:p-10 mt-20 md:mt-0 md:p-16 relative'>
			<div
				className='bg-cover shadow-lg  bg-center text-center overflow-hidden'
				style={{
					minHeight: "500px",
					backgroundImage:
						"url('/images/energy/en3.jpg')",
				}}
			></div>
			<div className='max-w-3xl mx-auto'>
				<div className='mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
					<div className='bg-white relative top-0 -mt-32 p-5 sm:p-10'>
						<div>
							<h1 className='text-gray-900 font-bold text-3xl mb-2'>
								Energy Services at Hammad
								Empire
							</h1>

							<p className='text-base leading-8 my-5 text-justify'>
								Hammad Empire is
								committed to revolutionizing
								the energy sector with
								sustainable and efficient
								solutions that power the
								future while prioritizing
								environmental
								responsibility. Our
								comprehensive range of
								energy services encompasses
								renewable energy solutions,
								energy efficiency
								optimization, and smart grid
								technologies, designed to
								meet the diverse needs of
								our clients.
							</p>

							<h3 className='text-2xl font-bold my-5'>
								Embracing Renewable Energy
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								At Hammad Empire, we
								believe in harnessing the
								power of renewable energy
								sources such as solar, wind,
								and hydroelectric power to
								create a cleaner and more
								sustainable energy future.
								Our team of experts
								specializes in the design,
								implementation, and
								management of renewable
								energy projects, helping our
								clients reduce their carbon
								footprint and transition to
								a greener energy supply.
							</p>

							<h3 className='text-2xl font-bold my-5'>
								Maximizing Energy Efficiency
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								Energy efficiency is key to
								reducing energy consumption
								and minimizing environmental
								impact. That&apos;s why we
								offer energy efficiency
								optimization services aimed
								at helping our clients
								maximize the efficiency of
								their energy systems and
								operations. From energy
								audits to retrofits and
								upgrades, we provide
								tailored solutions that help
								businesses and organizations
								save money, conserve
								resources, and reduce
								greenhouse gas emissions.
							</p>

							<h3 className='text-2xl font-bold my-5'>
								Harnessing Smart Grid
								Technologies
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								Smart grid technologies play
								a crucial role in
								modernizing the energy
								infrastructure and enabling
								more efficient energy
								distribution and management.
								At Hammad Empire, we
								leverage the latest
								advancements in smart grid
								technologies to optimize
								energy distribution, improve
								grid reliability, and
								empower consumers to make
								informed energy choices. By
								integrating renewable energy
								sources, energy storage
								systems, and demand response
								technologies, we create
								smarter and more resilient
								energy systems for the
								future.
							</p>

							<h3 className='text-2xl font-bold my-5 '>
								Promoting Sustainability and
								Environmental Responsibility
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								Sustainability and
								environmental responsibility
								are at the core of
								everything we do at Hammad
								Empire. We are
								committed to helping our
								clients reduce their
								environmental impact and
								achieve their sustainability
								goals through innovative
								energy solutions and
								responsible business
								practices. By promoting
								energy conservation, carbon
								neutrality, and circular
								economy principles, we
								strive to create a more
								sustainable future for
								generations to come.
							</p>
						</div>

						<GalleryCard images={images} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Energy;
