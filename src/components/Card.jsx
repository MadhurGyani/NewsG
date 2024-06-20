import React from 'react';
import news from '../../news.jpg';
const Card = ({title,img,url,content,description}) => {
  const src = img ? img : news;
  return (
    <div className="bg-gray-200 max-w-xs shadow-xl border-gray-200 rounded-lg duration-300 hover:scale-105">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="rounded-t-lg" src={src} alt="poster" />
      </a>
      <div className="p-5">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">
        {description?description:content ? content.substring(0, 100) + '...' : ''}
        </p>
        <a
          href={url}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Card;
