import React from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactInfo from './ContactInfo/ContactInfo';

import './Contact.css';

const Contact: React.FC = () => {
 
  return (
    <div className="Contact">
        <>
          <ContactInfo />
          <ContactForm />
            <div className="contact-image-container">
              <img className="contact-image" src="/assets/images/shoesImage.jpg" alt="contact-image" />
          </div>
        </> 
    </div>
  );
};

export default Contact;