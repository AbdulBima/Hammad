import React from 'react';
import Image from 'next/image';


interface CardProps {
  imageUrl: string;
  url2: string
  category: string;
  date: string;
  title: string;
  description: string;
  learnMoreLink: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, url2, category, date, title, description, learnMoreLink }) => {
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white  shadow-sm hover:opacity-90">
      <Image
        src={imageUrl}
        className="object-cover w-full h-64"
        alt=""
        width={100}
        height={64}
      />
      <div className="p-5 border border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href={url2}
            className="transition-colors duration-200 text-blue-gray-900 hover:opacity-70"
            aria-label="Category"
            title={category}
          >
            {category}
          </a>
          <span className="text-gray-600"> — {date}</span>
        </p>
        <a
          href={url2}
          aria-label="Category"
          title={title}
          className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          {title}
        </a>
        <p className="mb-2 text-gray-700">
          {description}
        </p>
        <a
          href={learnMoreLink}
          aria-label=""
          className="inline-flex text-blue-400  items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Card;
