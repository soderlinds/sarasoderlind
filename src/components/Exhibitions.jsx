import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/_slide-in.css';
import '../styles/_exhibitions.sass';
import '../styles/_typography.sass';

import image1 from '../images/gallery1.jpg';
import image2 from '../images/gallery2.jpg';
import image3 from '../images/gallery3.jpg';
import image4 from '../images/gallery4.jpg';

const Exhibitions = () => {
  const { t } = useTranslation();
  const [isAnimated, setIsAnimated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsAnimated(true);
  }, [location.pathname]);

  const images = [image1, image2, image3, image4];
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`slide-in ${isAnimated ? 'active' : ''} exhibitions`}>
      <div className="exhibitions">
        <h1 className="header-big">{t('exhibitions-header')}</h1>
        <p>2022 ”Alone Together”, NP33 Galleri Sander, Norrköping</p>
        <div className="gallery">
          {images.map((image, index) => (
            <div className="image-container" key={index} onClick={() => handleImageClick(index)}>
              <img src={image} width="500" alt={`${index + 1}`} />
              <div className="image-text">Text</div>
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
    </div>
  );
};

export default Exhibitions;
