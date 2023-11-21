import './App.css';
import {BrowserRouter,Routes,Route}from "react-router-dom";
import axios from 'axios';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import RegistrationForm from './Pages/RegistrationForm';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/registration" element={<RegistrationForm/>} />
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
