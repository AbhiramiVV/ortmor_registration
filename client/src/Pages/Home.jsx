import React from 'react';
import homes from '../assets/home.png';
import about from '../assets/about.png';
import { Link } from 'react-router-dom';
import Agenda from './Agenda';
import agendas from '../assets/Asset 2.png'
import Workspace from './Workspace';
import RegistrationForm from './RegistrationForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

function Home() {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-white'>
      <div className="relative grid h-[40rem] w-full flex-col items-end justify-end overflow-hidden  bg-white  text-center text-gray-200 mt-12">
        <div className="absolute inset-0 m-0 h-full overflow-hidden rounded-none bg-cover bg-clip-border bg-center text-gray-400 shadow-none w-full" style={{ backgroundImage: `url(${homes})` }}>
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-6 py-5 px-6 md:px-12 w-full text-left text-white" style={{ paddingRight: '880px' }}>
          <h3 className='text-2xl'>OQ HSSE SYMPOSIUM 2023</h3>
          <h1 className='text-4xl'>Enhancing a Safer </h1>
          <h2 className='text-4xl'>and Sustainable Future</h2>
          <p className='text-1xl'>Join us as we embark on a journey to elevate our Health, Safety, Security, and Environment performance at OQ to new heights. At OQ, we are committed to fostering a culture of excellence in HSSE, and this symposium serves as a pivotal platform for reflection, collaboration, and innovation.</p>
        </div>

        <div className="relative p-6 py-5 px-6 md:px-12 w-full" style={{ paddingRight: '880px' }}>
          <Link to='/registration'>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px- text-center block text-2xl"
            >
              Register
            </button>
          </Link>
        </div>
      </div>

      <div className="relative grid h-[15rem] w-full overflow-hidden rounded-xl bg-white text-center text-gray-200">
        <div className="absolute inset-0 m-0 h-full overflow-hidden  bg-cover  bg-center text-gray-100 shadow-none w-full" style={{ backgroundImage: `url(${about})`}}>
          <div className="to-bg-black-5 absolute inset-0 h-full w-full bg-gradient-to-t "></div>
        </div>
      </div>
     <div>
        <Agenda/>
     </div>
     <div>
     <Workspace/>

     </div>
     <RegistrationForm/>
     <div>
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
     </div>
    </div>
  );
}

export default Home;
