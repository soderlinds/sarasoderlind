import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/_slide-in.css'; 
import '../styles/_about.sass'; 
import '../styles/_typography.sass';

const About = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsAnimated(true);
  }, [location.pathname]);

  return (
    <div className={`slide-in ${isAnimated ? 'active' : ''} content-about`}>
      <h1 className="header-big">ABOUT</h1>
      <p>
        In my work, I stage an exploration of the nature and properties of color, of painting in its
        smallest component. I surrender to a process where the matter of color finally takes over and
        creates its own universe of gravity, effects, and phenomena.
      </p>
      <h2 className="header-small">Educations:</h2>
      <p>2021-2022 KonstLab, Lunnevad Folkhögskola</p>
      <p>2020-2021 KG II, Falkenberg Art School</p>
      <h2 className="header-small">Exhibitions:</h2>
      <p>2022 "Alone Together", NP33 Galleri Sander, Norrköping</p>
      <p>2021 Graduation exhibition, Falkenberg Art School</p>
    </div>
  );
};

export default About;
