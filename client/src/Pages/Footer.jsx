import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 w-full h-56 bg-[#31C48D] pt-5 sm:p-12 bottom-0'>
      <div className='text-white text-center mb-4'>
        <FontAwesomeIcon icon={faMapMarker} className='mx-auto mb-2' />
        <p>Headquarters: Muscat, Oman</p>
      </div>

      <div className='text-white text-center mb-4'>
        <FontAwesomeIcon icon={faEnvelope} className='mx-auto mb-2' />
        <p>Email: oqhsse@oq.com</p>
      </div>

      <div className='text-white text-center mb-4'>
        <FontAwesomeIcon icon={faPhone} className='mx-auto mb-2' />
        <p>Phone: +968 12345678</p>
      </div>

      {/* Line Separation */}
      <div className='col-span-3 flex justify-center'>
        <div className='w-4/5 border-t border-gray my-5'></div>
      </div>

      {/* Text on Left */}
      <div className='text-white text-center sm:text-left col-span-3 sm:col-span-1 mb-4'>
        &OQ HSSE Symposium 2023
      </div>

      {/* Text on Right */}
      <div className='text-white text-center  sm:text-right col-span-3 sm:col-span-1 mb-4'>
        Qq.com | @thissoq
      </div>

      {/* Social Icons */}
      <div className='flex justify-center col-span-3 sm:col-span-1'>
        <FontAwesomeIcon icon={faTwitter} className='text-white mx-2' />
        <FontAwesomeIcon icon={faLinkedin} className='text-white mx-2' />
        <FontAwesomeIcon icon={faInstagram} className='text-white mx-2' />
        <FontAwesomeIcon icon={faFacebook} className='text-white mx-2' />
      </div>
    </div>
  );
};

export default Footer;
