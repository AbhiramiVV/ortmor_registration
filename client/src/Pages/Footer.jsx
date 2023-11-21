import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-peacock-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" size="lg" />
            <a href="mailto:headquarters@example.com" className="text-white">headquarters@example.com</a>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" size="lg" />
            <a href="tel:+1-888-555-1212" className="text-white">+1-888-555-1212</a>
          </div>
        </div>
        <p className="text-center mt-4">Copyright &copy; 2023 Example Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
