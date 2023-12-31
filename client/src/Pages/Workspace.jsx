import React, { useState } from 'react';
import Asset3 from '../assets/Asset 3.png';
import Asset4 from '../assets/Asset 4.png';
import Asset5 from '../assets/Asset 5.png';
import Asset6 from '../assets/Asset 6.png';

import Asset15 from '../assets/Asset 15.png';

import Modal from './Modal';
function Workspace() {
  const data = [
    { image: Asset3, text: '"Systems, Processes & Assurance - Be a Good Steward, not a Lucky Gambler."' },
    { image: Asset4, text: 'The Leaders in Delivering Success - What Type of Leader is Needed' },
    { image: Asset5, text: 'Human Reliability - Why Things Go Wrong and What Can We Learn Do About It?' },
    { image: Asset6, text: 'Creating a Learning Culture - The Way We Choose Do Things Around Here' },
  ];
  const [modalContent, setModalContent] = useState(null);

  const openModal = () => {
    const image = Asset15;  // Set the image to Asset15
    const text = `
      "Systems, Processes & Assurance-Be Good, Not Lucky" will emphasize the significance of strong
      systems and processes for ensuring success and minimizing dependence on luck. It will delve into the
      benefits of prioritizing well-designed and efficient approaches, enabling individuals and organizations
      to attain consistent and dependable outcomes across diverse fields.
      Bio-Leslie Cox
      sustainability to achieve sustainable outcomes in complex and demanding projects worldwide. 
      promoting a culture of embracing vulnerability as a catalyst for change and implementing purposeful
      management systems for businesses globally.`;
  
    setModalContent({ image, text });
  };
  
  const closeModal = () => {
    setModalContent(null);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center mt-10 flex-wrap">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white text-center w-full">
        Workspace
      </h5>
      <div className="flex flex-wrap justify-center">
        {data.slice(0, 2).map((item, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-300 shadow-lg w-full mt-12 mx-3">
            <div className="flex justify-center mt-6">
              <img
                className="object-cover  h-11 w-9"
                src={item.image}
                alt=""
              />
            </div>
            <div className="container mx-auto p-3 bg-gray-100 max-w-sm  overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 mt-0">
              <div className="flex justify-between items-center mt-0">
                <table className="text-xs my-3">
                  <tbody>
                    <tr>
                      <td className="px-2 py-2 text-4xl font-normal">{item.text}</td>
                    </tr>
                    <tr>
                      <td>
                      <button
  type="button"
  className="text-white text-sm font-bold  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-300 dark:hover:bg-blue-400 dark:focus:ring-gray-700 dark:border-gray-700"
  onClick={openModal}
>
  Read more
</button>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modalContent && (
        <Modal closeModal={closeModal} content={modalContent} />
      )}
      <div className="flex flex-wrap justify-center">
        {data.slice(2).map((item, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-300 shadow-lg w-full  mx-3">
            <div className="flex justify-center mt-6">
              <img
                className="object-cover  h-11 w-9"
                src={item.image}
                alt=""
              />
            </div>
            <div className="container mx-auto p-3 bg-gray-100 max-w-sm  overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 mt-0">
              <div className="flex justify-between items-center mt-5">
                <table className="text-xs my-3">
                  <tbody>
                    <tr>
                      <td className="px-2 py-2 text-3xl font-normal">{item.text}</td>
                    </tr>
                    <tr>
                      <td>
                      <button
  type="button"
  className="text-white text-sm font-bold  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-300 dark:hover:bg-blue-400 dark:focus:ring-gray-700 dark:border-gray-700"
  onClick={openModal}
>
  Read more
</button>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workspace;