import GalleryCard from "@/components/GalleryCard";
import Image from "next/image";
import React from "react";

const Education = () => {
	const images = [
    { src: '/images/education/e1.jpg', alt: 'Image 1', width: 900, height: 900 },
    { src: '/images/education/e2.jpg', alt: 'Image 2', width: 900, height: 900 },
    { src: '/images/education/e3.jpg', alt: 'Image 3', width: 900, height: 900 },
    { src: '/images/education/e4.jpg', alt: 'Image 3', width: 900, height: 900 },
    { src: '/images/education/e5.jpg', alt: 'Image 3', width: 900, height: 900 },
    { src: '/images/education/e6.jpg', alt: 'Image 3', width: 900, height: 900 },
    // Add more images as needed
  ];

	return (
		<div className='w-screen mx-auto p-5 sm:p-10 mt-20 md:mt-0 md:p-16 relative'>
			<div
				className='bg-cover shadow-lg  bg-center text-center overflow-hidden'
				style={{
					minHeight: "500px",
					backgroundImage:
						"url('/images/education/e6.jpg')",
				}}
			></div>
			<div className='max-w-3xl mx-auto'>
				<div className='mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
					<div className='bg-white relative top-0 -mt-32 p-5 sm:p-10'>
						<div>
							<h1 className='text-gray-900 font-bold text-3xl mb-2'>
								Education Services at Hammad
								Empire
							</h1>

							<p className='text-base leading-8 my-5 text-justify'>
								Hammad Empire is
								dedicated to transforming
								education through innovative
								solutions tailored to the
								unique needs of learners and
								educators. With a deep
								understanding of the
								challenges facing modern
								educational institutions, we
								offer a comprehensive suite
								of services designed to
								enhance teaching and
								learning experiences.
							</p>

							<h3 className='text-2xl font-bold my-5 '>
								Customized Solutions for
								Every Institution
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								Our commitment to excellence
								drives us to collaborate
								closely with educational
								institutions of all sizes
								and types, including
								schools, colleges,
								universities, and online
								learning platforms. By
								gaining insights into each
								institution&apos;s specific
								challenges, goals, and
								student demographics, we
								tailor our solutions to
								address their unique needs
								effectively.
							</p>

							<h3 className='text-2xl font-bold my-5'>
								Empowering Educators with
								Cutting-Edge Tools
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								At Hammad Empire, we
								believe that educators are
								the backbone of our
								educational system.
								That&apos;s why we provide
								them with cutting-edge
								tools, resources, and
								professional development
								opportunities to enhance
								their teaching effectiveness
								and student engagement. From
								interactive learning
								platforms to data analytics
								tools, we empower educators
								to create dynamic and
								impactful learning
								experiences.
							</p>

							<h3 className='text-2xl font-bold my-5 text-justify'>
								Fostering Innovation and
								Collaboration
							</h3>

							<p className='text-base leading-8 my-5'>
								Innovation and collaboration
								are at the heart of our
								approach to education. We
								actively encourage educators
								to experiment with new
								teaching methodologies,
								technologies, and
								pedagogical approaches,
								fostering a culture of
								innovation and continuous
								improvement. Through
								collaborative partnerships
								and knowledge-sharing
								initiatives, we create
								opportunities for educators
								to learn from each other and
								drive positive change in the
								education landscape.
							</p>

							<h3 className='text-2xl font-bold my-5 '>
								Creating Inclusive Learning
								Environments
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								At Hammad Empire, we
								are committed to creating
								inclusive learning
								environments that cater to
								the diverse needs of all
								learners. Whether it&apos;s
								through accessible learning
								materials, adaptive
								technologies, or inclusive
								teaching practices, we
								strive to ensure that every
								student has the opportunity
								to succeed. By embracing
								diversity and fostering
								inclusivity, we empower
								learners to reach their full
								potential and contribute
								meaningfully to society.
							</p>
						</div>
            <GalleryCard images={images} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
