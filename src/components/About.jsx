import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/_slide-in.css'; 
import '../styles/_about.sass'; 
import '../styles/_typography.sass';

const About = () => {
  const { t } = useTranslation();
  const [isAnimated, setIsAnimated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsAnimated(true);
  }, [location.pathname]);


  return (
    <div className={`slide-in ${isAnimated ? 'active' : ''} content-about`}>
      <h1 className="header-big">{t('about-header')}</h1>
      <p className="about-text">{t('about-me')}</p>
      <h2 className="header-small">{t('educations')}</h2>
      <p>2021-2022 KonstLab, Lunnevad Folkhögskola</p>
      <p>2020-2021 KG II, Falkenbergs Konstskola</p>
      <h2 className="header-small">{t('exhibitions-done')}</h2>
      <p>2022 "Alone Together", NP33 Galleri Sander, Norrköping</p>
      <p>{t('exhibition-falkenberg')}</p>
      <p></p>
    </div>
  );
};

export default About;
