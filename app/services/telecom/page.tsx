import GalleryCard from '@/components/GalleryCard';
import React from 'react';

const Telecom = () => {


  const images = [
		{
			src: "/images/teleco/t1.jpg",
			alt: "Image 1",
			width: 900,
			height: 900,
		},
		{
			src: "/images/teleco/t2.jpg",
			alt: "Image 2",
			width: 900,
			height: 900,
		},
		{
			src: "/images/teleco/t3.jpg",
			alt: "Image 3",
			width: 900,
			height: 900,
		},
		

		// Add more images as needed
	];
    return (
        <div className="w-screen mx-auto p-5 sm:p-10 mt-20 md:mt-0 md:p-16 relative">
            <div className="bg-cover shadow-lg  bg-center text-center overflow-hidden"
                style={{ minHeight: '500px', backgroundImage: "url('/images/teleco/t1.jpg')" }}
                >
            </div>
            <div className="max-w-3xl mx-auto">
                <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                    <div>
  <h1 className="text-gray-900 font-bold text-3xl mb-2">Telecommunication Services at Hammad Empire</h1>

  <p className="text-base leading-8 my-5">
    Hammad Empire is a leading provider of cutting-edge telecommunication solutions designed to keep individuals and businesses connected in today&apos;s digital age. With a focus on innovation and reliability, we offer a comprehensive range of services to meet the diverse communication needs of our clients.
  </p>

  <h3 className="text-2xl font-bold my-5">Advanced Connectivity Solutions</h3>

  <p className="text-base leading-8 my-5 text-justify">
    Our telecommunication services encompass advanced connectivity solutions tailored to meet the demands of modern communication networks. From high-speed internet and broadband services to wireless communication and VoIP solutions, we provide reliable connectivity options to keep you connected anytime, anywhere.
  </p>

  <h3 className="text-2xl font-bold my-5">Innovative Technologies</h3>

  <p className="text-base leading-8 my-5 text-justify">
    At Hammad Empire, we stay ahead of the curve by leveraging the latest technologies and innovations in the telecommunication industry. Whether it&apos;s 5G networks, IoT (Internet of Things) solutions, or cloud-based communication platforms, we offer state-of-the-art technologies to enhance communication efficiency, scalability, and security for our clients.
  </p>

  <h3 className="text-2xl font-bold my-5">Customized Solutions for Businesses</h3>

  <p className="text-base leading-8 my-5 text-justify">
    We understand that every business has unique communication requirements. That&apos;s why we offer customized telecommunication solutions tailored to the specific needs and objectives of our corporate clients. Whether you&apos;re a small startup or a large enterprise, we provide scalable and flexible communication solutions to help you stay connected and productive.
  </p>

  <h3 className="text-2xl font-bold my-5 ">Reliable Support and Maintenance</h3>

  <p className="text-base leading-8 my-5 text-justify">
    Our commitment to customer satisfaction extends beyond the initial setup and installation. We provide ongoing support and maintenance services to ensure the smooth operation of your telecommunication systems. Our team of experienced technicians is available round-the-clock to address any issues and concerns promptly, minimizing downtime and maximizing uptime for your business.
  </p>
</div>





<GalleryCard images={images} />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Telecom;
