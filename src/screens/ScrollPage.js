import React, { useState, useEffect } from 'react';
import { Element, scroller } from 'react-scroll';

const images = [
  'https://via.placeholder.com/400x300/ff0000',
  'https://via.placeholder.com/400x300/00ff00',
  'https://via.placeholder.com/400x300/0000ff',
];

const ScrollPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleImageChange = () => {
    const newIndex = Math.floor(scrollY / 300); // Change image every 300 pixels scrolled
    setCurrentImage(newIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    handleImageChange();
  }, [scrollY]);

  const scrollTo = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className="flex">
      <div className="w-1/2 h-screen overflow-y-auto p-8">
        <Element name="section1">
          <h2 className="text-3xl font-semibold mb-4">Section 1</h2>
          <p>Scroll down to see the images change on the right side.</p>
        </Element>

        <Element name="section2">
          <h2 className="text-3xl font-semibold mb-4 mt-8">Section 2</h2>
          <p>Content for the second section...</p>
        </Element>

        {/* Add more sections as needed */}
      </div>

      <div className="w-1/2 h-screen overflow-hidden fixed top-0 right-0">
        <img
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Add a sidebar for navigation if needed */}
      <div className="fixed top-0 right-0 h-screen p-4">
        <ul>
          <li className="mb-4 cursor-pointer" onClick={() => scrollTo('section1')}>
            Section 1
          </li>
          <li className="mb-4 cursor-pointer" onClick={() => scrollTo('section2')}>
            Section 2
          </li>
          {/* Add links to other sections as needed */}
        </ul>
      </div>
    </div>
  );
};

export default ScrollPage;
