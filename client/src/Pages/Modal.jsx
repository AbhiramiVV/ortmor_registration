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
        <p className="text-xl">{content.text}</p>

        {isAsset15 && (
          <>
            <p>About Workshop
"Systems, Processes & Assurance-Be Good, Not Lucky" will emphasize the significance of strong
systems and processes for ensuring success and minimizing dependence on luck. It will delve into the
benefits of prioritizing well-designed and efficient approaches, enabling individuals and organizations
to attain consistent and dependable outcomes across diverse fields.
Bio-Leslie Cox
promoting a culture of embracing vulnerability as a catalyst for change and implementing purposeful
management systems for businesses globally.</p>
            {/* Bio-Leslie Cox and other content */}
          </>
        )}

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
