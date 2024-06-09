import Image from 'next/image';
import React from 'react';

interface HeaderSlideProps {
  imageUrl: string;
  title: string;
  description: string;
  learnMoreLink: string;
}

const HeaderSlide: React.FC<HeaderSlideProps> = ({
  imageUrl,
  title,
  description,
  learnMoreLink,
}) => {
  return (
    <div className="relative md:mt-0 mt-16 md:h-[80vh] h-[65vh] w-[80vw] md:w-screen">
      <Image
        src={imageUrl}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
        unoptimized
        width={1080}
        height={1080}
      />
      <div className="relative bg-gradient-to-t px-10 from-black to-transparent md:h-[80vh] h-[65vh]">
      <div className='absolute top-0 left-0 w-full h-full  bg-gradient-to-t from-black to-transparent'></div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="-ml-8 sm:mr-20 flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full md:max-w-full pr-20 mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="absolute bottom-56 pr-10 sm:text-left md:bottom-52 max-w-full md:max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                {title}
              </h2>
              <p className="absolute bottom-32 md:bottom-20 pr-10 max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                {description}
              </p>
              <a
                href={learnMoreLink}
                aria-label=""
                className="inline-flex text-blue-500 absolute bottom-24 md:bottom-10  items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Explore Now
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlide;
