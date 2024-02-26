import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ok from "../assets/ok.png";
import ok1 from "../assets/ok1.png";

const PinnedImagesAnimation = () => {
  const pinnedImagesRef = useRef(null);

  const imagesData = [
    {
      imageUrl: ok,
      title: 'Image 1 Title',
    },
    {
      imageUrl: ok1,
      title: 'Image 2 Title',
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinnedImagesRef.current,
        start: 'top top',
        end: `+=${100 * imagesData.length}%`, // Adjust based on the number of images
        pin: true,
        scrub: true,
      },
    });

    imagesData.forEach(({ imageUrl, title }, index) => {
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('pinned-image-container');

      const img = new Image();
      img.src = imageUrl.default; // Access the image using the 'default' property
      img.alt = `Image ${index + 1}`;
      img.style.width = '100%';
      img.style.height = '100%';
      imageContainer.appendChild(img);

      const titleElement = document.createElement('div');
      titleElement.innerText = title;
      titleElement.classList.add('image-title');
      imageContainer.appendChild(titleElement);

      pinnedImagesRef.current.appendChild(imageContainer);

      tl.fromTo(
        imageContainer,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, ease: 'power2.inOut' }
      );
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, [imagesData]);

  return (
    <div>
      <div style={{ height: '100vh', background: '#f0f0f0' }}>
        Scroll down...
      </div>

      <div ref={pinnedImagesRef} style={{ height: `${100 * imagesData.length}vh` }}>
        {/* Images and titles will be added dynamically */}
      </div>

      <div style={{ height: '100vh', background: '#f0f0f0' }}>
        More content...
      </div>
    </div>
  );
};

export default PinnedImagesAnimation;
