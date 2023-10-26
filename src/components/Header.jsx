import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import logo from '../images/logo2.png';
import '../styles/_header.sass';

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const closeBurgerMenu = useCallback(() => {
    setIsBurgerMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScreenResize = () => {
      const screenWidth = window.innerWidth;
      const breakpoint = 768;

      if (screenWidth > breakpoint) {
        closeBurgerMenu();
      }
    };

    window.addEventListener('resize', handleScreenResize);

    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, [closeBurgerMenu]);

  return (
    <header className="header">
      <NavLink to="/"> {/* Use NavLink instead of Link */}
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>
      <nav>
        <div
          className={`burger-icon ${isBurgerMenuOpen ? 'open' : ''}`}
          onClick={toggleBurgerMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isBurgerMenuOpen ? 'show' : ''}`}>
          <li>
            <NavLink to="/work" className="nav-link" activeClassName="active-link" onClick={closeBurgerMenu}>
              WORK
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" activeClassName="active-link" onClick={closeBurgerMenu}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/exhibitions" className="nav-link" activeClassName="active-link" onClick={closeBurgerMenu}>
              EXHIBITIONS
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" activeClassName="active-link" onClick={closeBurgerMenu}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
