import React from 'react';
import Asset15 from '../assets/Asset 15.png';

function Modal({ closeModal, content }) {
  const isAsset15 = content.image === Asset15;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
<div className="bg-white p-4 max-w-xl mx-auto rounded-md">        <img
          className="object-cover h-20 w-20"
          src={content.image}
          alt=""
        />
        <h2 className='text-2xl'>About Workshop</h2>
        <p className="text-xl">{content.text}</p>

        <button
          className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-md"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
