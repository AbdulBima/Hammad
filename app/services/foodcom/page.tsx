import GalleryCard from "@/components/GalleryCard";
import React from "react";

const Foodcom = () => {
	const images = [
		{
			src: "/images/food/f1.jpg",
			alt: "Image 1",
			width: 900,
			height: 900,
		},
		{
			src: "/images/food/f2.jpg",
			alt: "Image 2",
			width: 900,
			height: 900,
		},
		{
			src: "/images/food/f3.jpg",
			alt: "Image 3",
			width: 900,
			height: 900,
		},
		{
			src: "/images/food/f4.jpg",
			alt: "Image 3",
			width: 900,
			height: 900,
		},
		{
			src: "/images/food/f5.jpg",
			alt: "Image 3",
			width: 900,
			height: 900,
		},

    	{
			src: "/images/food/f6.jpg",
			alt: "Image 3",
			width: 900,
			height: 900,
		}

		// Add more images as needed
	];
	return (
		<div className='w-screen mx-auto p-5 sm:p-10 mt-20 md:mt-0 md:p-16 relative'>
			<div
				className='bg-cover shadow-lg  bg-center text-center overflow-hidden'
				style={{
					minHeight: "500px",
					backgroundImage:
						"url('/images/food/f6.jpg')",
				}}
			></div>
			<div className='max-w-3xl mx-auto'>
				<div className='mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
					<div className='bg-white relative top-0 -mt-32 p-5 sm:p-10'>
						<div>
							<h1 className='text-gray-900 font-bold text-3xl mb-2'>
								Food Commodities Services at
								Hammad Empire
							</h1>

							<p className='text-base leading-8 my-5'>
								Hammad Empire is your
								trusted partner for
								high-quality and diverse
								food products sourced from
								around the globe. With a
								commitment to excellence and
								integrity, we provide a
								comprehensive range of food
								commodities to meet the
								needs of consumers,
								retailers, and businesses
								across various industries.
							</p>

							<h3 className='text-2xl font-bold my-5 '>
								Premium Sourcing and Quality
								Assurance
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								Our dedicated team works
								tirelessly to source the
								finest food products from
								reputable suppliers and
								producers worldwide. We
								uphold strict quality
								standards and conduct
								rigorous quality assurance
								checks to ensure that our
								products meet and exceed
								regulatory requirements and
								industry standards. From
								fresh produce to packaged
								goods, we guarantee the
								quality and freshness of
								every item we deliver.
							</p>

							<h3 className='text-2xl font-bold my-5'>
								Diverse Range of Products
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								At Hammad Empire, we
								understand that every
								customer has unique
								preferences and dietary
								requirements. That&apos;s
								why we offer a diverse range
								of food products to cater to
								a variety of tastes and
								preferences. Whether
								you&apos;re looking for
								fresh fruits and vegetables,
								grains and pulses, dairy
								products, meats, or
								specialty ingredients, we
								have you covered with an
								extensive selection of
								high-quality food
								commodities.
							</p>

							<h3 className='text-2xl font-bold my-5 '>
								Reliable Supply Chain and
								Logistics
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								Our efficient supply chain
								and logistics network ensure
								timely delivery of our food
								commodities to customers
								worldwide. We work closely
								with trusted logistics
								partners to streamline the
								transportation process,
								minimize transit times, and
								optimize inventory
								management. Whether
								you&apos;re a retailer,
								distributor, or foodservice
								provider, you can rely on us
								to deliver your orders
								promptly and efficiently,
								ensuring uninterrupted
								supply and customer
								satisfaction.
							</p>

							<h3 className='text-2xl font-bold my-5 '>
								Commitment to Food Safety
								and Sustainability
							</h3>

							<p className='text-base leading-8 my-5 text-justify'>
								Food safety and
								sustainability are paramount
								considerations in everything
								we do at Hammad Empire.
								We adhere to strict food
								safety protocols and
								standards throughout the
								supply chain, from sourcing
								and production to packaging
								and distribution, to ensure
								the safety and integrity of
								our products. Additionally,
								we are committed to
								promoting sustainability and
								responsible sourcing
								practices, working towards a
								more environmentally
								friendly and socially
								responsible food system.
							</p>
						</div>

						<GalleryCard images={images} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Foodcom;
