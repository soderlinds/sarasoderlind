import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import '../styles/_contact.sass';
import '../styles/_slide-in.css';
import '../styles/_typography.sass';

const Contact = () => {
  const { t } = useTranslation();
  const [isAnimated, setIsAnimated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsAnimated(true);
  }, [location.pathname]);
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const userEmail = form.current.user_email.value;
    if (!userEmail) {
      alert('Please enter your email address.');
      return;
    }

    emailjs
      .sendForm('service_rvvrnud', 'template_43fl1oi', form.current, 'PUbrvJ1ofgaAgVB-p')
      .then(
        (result) => {
          setIsSubmitted(true); 
          form.current.reset(); 
        }
      );
  };

  return (
    <div className={`slide-in ${isAnimated ? 'active' : ''} form`}>
      <div className="form">
        <h2 className="header-small">{t('contact-intro')}</h2>
        {isSubmitted ? ( 
          <div className="confirmation-message"> <p>{t('contact-confirmation')}</p></div>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <label className="label-contact">{t('contact-name')}</label>
            <input className="input-contact" type="text" name="user_name" />
            <label className="label-contact">{t('contact-email')}</label>
            <input className="input-contact" type="email" name="user_email" required={true} />
            <label className="label-contact">{t('contact-message')}</label>
            <textarea className="input-contact" name="message" />
            <input type="submit" value={t('send')} />
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
