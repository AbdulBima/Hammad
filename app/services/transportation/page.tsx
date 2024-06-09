import GalleryCard from "@/components/GalleryCard";
import React from "react";

const Transportation = () => {
	  const images = [
		{
			src: "/images/transport/tr1.jpg",
			alt: "Image 1",
			width: 900,
			height: 900,
		},
		{
			src: "/images/transport/tr2.jpg",
			alt: "Image 2",
			width: 900,
			height: 900,
		},
		{
			src: "/images/transport/tr3.jpg",
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
						"url('/images/transport/tr2.jpg')",
				}}
			></div>
			<div className='max-w-3xl mx-auto'>
				<div className='mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
					<div className='bg-white relative top-0 -mt-32 p-5 sm:p-10'>
						<div>
							<h1 className='text-gray-900 font-bold text-3xl mb-2'>
								Transportation Services at
								Hammad Empire
							</h1>

							<p className='text-base leading-8 my-5 text-justify'>
								Hammad Empire is your
								trusted partner for
								efficient and reliable
								transportation solutions
								tailored to meet the diverse
								needs of businesses and
								individuals. With a
								commitment to excellence and
								customer satisfaction, we
								offer a comprehensive range
								of transportation services
								to ensure timely and secure
								delivery of goods and people
								across various destinations.
							</p>

							<h3 className='text-2xl font-bold my-5'>
								Seamless Movement and
								Logistics
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								Our transportation services
								encompass a wide range of
								solutions aimed at
								facilitating seamless
								movement and logistics.
								Whether it&apos;s road
								transportation, maritime
								shipping, air freight, or
								multimodal transportation,
								we provide efficient and
								reliable services to meet
								the unique requirements of
								our clients and ensure
								on-time delivery of their
								goods and cargo.
							</p>

							<h3 className='text-2xl font-bold my-5 '>
								Efficient Transportation of
								Goods and People
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								At Hammad Empire, we
								understand the importance of
								efficient transportation in
								today&apos;s fast-paced
								world. That&apos;s why we
								offer a comprehensive suite
								of services to facilitate
								the transportation of goods
								and people, including
								freight forwarding,
								passenger transportation,
								and last-mile delivery
								solutions. With a focus on
								safety, reliability, and
								cost-effectiveness, we
								ensure that our
								clients&apos; transportation
								needs are met with precision
								and professionalism.
							</p>

							<h3 className='text-2xl font-bold my-5'>
								Timely and Secure Delivery
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								Timeliness and security are
								our top priorities when it
								comes to transportation
								services. We leverage
								advanced tracking and
								monitoring systems, robust
								security measures, and
								strategic partnerships with
								trusted carriers to ensure
								that our clients&apos;
								shipments are delivered
								safely and on schedule.
								Whether it&apos;s perishable
								goods, sensitive cargo, or
								time-sensitive deliveries,
								we guarantee the highest
								standards of service and
								reliability.
							</p>

							<h3 className='text-2xl font-bold my-5 '>
								Comprehensive Solutions for
								Every Need
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								Our transportation services
								are designed to address a
								wide range of needs and
								requirements, from small
								businesses to large
								corporations, from local
								deliveries to global
								shipments. Whether you need
								dedicated transportation
								services, logistics support,
								warehousing solutions, or
								supply chain management,
								Hammad Empire has the
								expertise and resources to
								deliver customized solutions
								that meet your unique
								transportation challenges
								and objectives.
							</p>
						</div>

						<GalleryCard images={images} />

					</div>
				</div>
			</div>
		</div>
	);
};

export default Transportation;
