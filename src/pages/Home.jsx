
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeFooter from './HomeFooter';

const images = [
  {
    src: 'https://framerusercontent.com/images/CHhbWIwjBVUkS43koZq9VGSsgg.png',
    title: 'Advance Payment Solutions',
    description: 'Description for Image 1',
  },
  {
    src: 'https://framerusercontent.com/images/nNS2f5gUumY0r5zW0tQIaPFhgkM.png',
    title: 'Automated Payroll',
    description: 'Description for Image 2',
  },
  {
    src: 'https://framerusercontent.com/images/KExxxw4ObE9qXhCFwOugzPf2w.webp?scale-down-to=1024',
    title: 'Easy In-Person Payments',
    description: 'Description for Image 3',
  },
  {
    src: 'https://framerusercontent.com/images/kuxCWrCpVyLY8wQnUqqRsmDMmE.png',
    title: 'Effortless Banking',
    description: 'Description for Image 4',
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full  overflow-hidden ">
      {/* Slider */}
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full flex-shrink-0">
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
            <div className="absolute left-1 bottom-80 flex flex-col items-start justify-center text-blue-600 p-4 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-1">{image.title}</h1>
              <p className="mb-4">{image.description}</p>
              <div className="flex space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-3 rounded">
                  Sign Up &rarr;
                </button>
                <button className="bg-transparent hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4">
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Navigation */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
          }
          className="text-blue-600 p-2 rounded-full text-2xl"
        >
          &lt;
        </button>
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
          className="text-2xl text-blue-400 p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
      
      <HomeFooter />
    </div>
  );
}
