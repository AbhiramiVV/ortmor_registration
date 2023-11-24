import React from "react";
import homes from "../assets/home.png";
import about from "../assets/about.png";
import { Link } from "react-router-dom";
import Agenda from "./Agenda";
import logo from "../assets/Asset 1.png"
import Workspace from "./Workspace";
import RegistrationForm from "./RegistrationForm";
import Footer from "./Footer";

function Home() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      
      <div className="relative grid sm:h-[40rem] h-auto w-full flex-col items-end justify-end overflow-hidden bg-white text-center text-gray-200 mt-12">
  <div
    className="absolute inset-0 m-0 h-full overflow-hidden rounded-none bg-cover bg-clip-border bg-center text-gray-400 shadow-none w-full"
    style={{ backgroundImage: `url(${homes})` }}
  >
    <img src={logo} alt="Logo" className="absolute top-10 left-7 h-12 md:h-16 m-4" />

    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div
    className="relative p-6 py-5 px-6 md:px-12 w-full text-left text-white"
    style={{ paddingRight: "5%", paddingLeft: "5%" }}
  >
    <h3 className="text-xl sm:text-2xl">OQ HSSE SYMPOSIUM 2023</h3>
    <h1 className="text-2xl sm:text-4xl">Enhancing a Safer </h1>
    <h2 className="text-2xl sm:text-4xl">and Sustainable Future</h2>
    <p className="text-xs sm:text-1xl">
  Join us as we embark on a journey to elevate our Health, Safety,
  Security, and Environment performance at OQ to new heights. At OQ,
  we are committed to fostering a culture of excellence in HSSE, and
  this symposium serves as a pivotal platform for reflection,
  collaboration, and innovation.
</p>

  </div>

  <div
    className="relative p-6 py-5 px-6 md:px-12 w-full"
    style={{ paddingRight: "5%", paddingLeft: "5%" }}
  >
    <Link to="/registration">
      <button
        type="button"
        className="text-white text-xs sm:text-sm font-bold dark:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-2 sm:px-4 py-1 sm:py-2 md:px-7 md:py-2.5 mr-2 sm:mr-4 mb-2 dark:bg-blue-400 dark:hover:bg-blue-400 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Register
      </button>
    </Link>
  </div>
</div>


<div className="relative grid h-[15rem] sm:h-[20rem] lg:h-[25rem] xl:h-[30rem] w-full overflow-hidden rounded-xl bg-white text-center text-gray-200">
  <div className="absolute inset-0 flex flex-col justify-center items-center">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-orange-500 mb-6">About OQ HSSE Symposium 2023</h1>
    <p className="text-black text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl">
      Welcome to the OQ HSSE Symposium 2023, a premier conference dedicated to Health, Safety,
      Security, and Environment (HSSE) excellence. At the heart of our vision lies a simple yet
      profound goal - to create a safer, healthier, and more sustainable future for our workforce,
      partners, and the communities we serve. As we look ahead to the year 2024 and beyond, we are
      steadfast in our commitment to lead by example and drive positive change within the industry.
    </p>
  </div>
</div>


      <div>
        <Agenda />
      </div>
      <div>
        <Workspace />
      </div>
        <RegistrationForm />
        <Footer />

    </div>
  );
}

export default Home;
