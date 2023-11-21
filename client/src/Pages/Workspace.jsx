import React from 'react';
import Asset3 from '../assets/Asset 3.png';
import Asset4 from '../assets/Asset 4.png';
import Asset5 from '../assets/Asset 5.png';
import Asset6 from '../assets/Asset 6.png';

function Workspace() {
  const data = [
    { image: Asset3, text: 'System,   Processes &  Assurance - Be  Good  not  Lucky' },
    { image: Asset4, text: 'The Leaders in Delivering Success - What Type of Leader is Needed' },
    { image: Asset5, text: 'Human Reliability - Why Things Go Wrong and What Can We Do?' },
    { image: Asset6, text: 'Creating a Learning Culture - The Way We Choose Do Things Around Here' },
  ];

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
                className="object-cover w-full h-20 w-20"
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
                          className="text-white text-sm font-bold  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-400 dark:focus:ring-gray-700 dark:border-gray-700"
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
      <div className="flex flex-wrap justify-center">
        {data.slice(2).map((item, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-300 shadow-lg w-full mt-12 mx-3">
            <div className="flex justify-center mt-6">
              <img
                className="object-cover w-full h-20 w-20"
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
                          className="text-white text-sm font-bold  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-400 dark:focus:ring-gray-700 dark:border-gray-700"
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
