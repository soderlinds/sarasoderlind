import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/_work.sass'
import '../styles/_slide-in.css'
import '../styles/_typography.sass';

import image1 from '../images/floe.jpeg';
import image2 from '../images/onum.jpg';
import image3 from '../images/arei.jpg';
import image4 from '../images/inum.jpg';
import image5 from '../images/grai.jpg';
import image6 from '../images/siel.jpg';
import image7 from '../images/ciru.jpg';


const Work = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsAnimated(true);
  }, [location.pathname]);

  const images = [image1, image2, image3, image4, image5, image6, image7];
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
     <div className={`slide-in ${isAnimated ? 'active' : ''} work`}>
      <h1 className="header-big">SELECTED WORK</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="image-container" key={index} onClick={() => handleImageClick(index)}>
            <img src={image} width="500" alt={`${index + 1}`} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="image-overlay" onClick={closeImage}>
          <div className="image-popup">
            <img src={selectedImage} alt="Full-Size" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
