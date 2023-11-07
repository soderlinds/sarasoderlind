import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../images/logo2.png';
import '../styles/_header.sass';

const Header = () => {
  const { t, i18n } = useTranslation();

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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <NavLink to="/">
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
              {t('work')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" activeClassName="active-link" onClick={closeBurgerMenu}>
              {t('about')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/exhibitions" className="nav-link" activeClassName="active-link" onClick={closeBurgerMenu}>
              {t('exhibitions')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" activeClassName="active-link" onClick={closeBurgerMenu}>
              {t('contact')}
            </NavLink>
          </li>
          <li className="language-toggle-mobile">
            <span onClick={() => changeLanguage('en')}>English</span>
            <span> | </span>
            <span onClick={() => changeLanguage('swe')}>Svenska</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
