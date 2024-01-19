import logo from './tooth.svg';
import img1 from './img1.jpg';
import './App.css';
import './output.css';
import React, { useState, useEffect } from 'react';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className="sm:hidden">
      <button
        onClick={toggleMenu}
        type="button"
        className="block text-gray-500 hover:text-black focus:text-black focus:outline-none"
      >
        <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
          {isOpen ? (
            <path
              fillRule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          )}
        </svg>
      </button>
    </div>
  );
};

const MyNavigation = ({ isOpen }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`my-navigation ${isOpen ? 'block' : 'hidden'}`}>
      <ul className={`flex ${isMobile ? 'flex-col' : 'flex-row'}`}>
        <li className="mr-4">
          <a href="App.js">Home</a>
        </li>
        <li className="mr-4">
          <a href="#for-patients">For Patients</a>
          <div className="dropdown-content">
            <a href="#services">View Services</a>
            <a href="#meet-the-team">Meet the Team</a>
          </div>
        </li>
        <li className="mr-4">
          <a href="#for-professionals">For Professionals</a>
          <div className="dropdown-content">
            <a href="#career">Career</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className="navbar sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div className="flex items-center">
            <img className="h-11 mr-1 logo" src={logo} alt="ZenDental"></img>
            <span className="text-lg font-semibold">ZenDental Care</span>
          </div>
          <MobileMenu isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
        </div>
        <MyNavigation isOpen={isOpen} />
      </div>
      <div className="body">
        <div className="container">
          <div className="background-image"></div>
          <div className="introduction lg:pt-39 sm:pt-20">
            <div className="intro1-1k intro1-2k text-4xl lg:text-5xl sm:text-4xl font-bold xs-intro">Welcome to <span style={{ color: '#1681a8' }}>ZenDental Care</span></div>
            <div className="intro2-1k intro2-2k pt-4 text-base lg:text-xl sm:text-md font-semibold xs-intro2">Your go-to destination for creating radiant smiles in Malaysia</div>
            <div className="extraIntro lg:text-base sm:text-sm pt-2">
              Experience the difference with ZenDental Care – where exceptional dentistry meets genuine care.
            </div>

            <div className="buttonCont flex justify-center space-x-4 mt-6">
              <button className="w-full bg-blue hover:bg-black text-white font-semibold py-2 px-4 lg:text-lg rounded opacity-100 transition-all duration-300 md:px-1 md:text-base md:w-50 sm:text-xs sm:w-20">
                Book Appointment
              </button>
              <button className="w-full bg-blue hover:bg-black text-white font-semibold py-2 px-4 lg:text-lg rounded opacity-100 transition-all duration-300 md:px-1 md:text-base md:w-50 sm:text-xs sm:w-20">
                View Services
              </button>
            </div>
          </div>
        </div>

        <div className="container2 bg-white">
          <div className="left-column">
            <div className="introduction2 lg:pt-14 sm:pt-10">
              <div className="intro1-1k intro1-2k text-3xl font-bold xs-introC2">Why you should consider ZenDental Care?</div>
            </div>
            <div className="feature-list text-xl lg:text-xl sm:text-base">
              <div class="column">
                <div className="feature-item">
                  <span className="tick-icon">✔</span> Invisalign® Certified Providers
                </div>
                <div className="feature-item">
                  <span className="tick-icon">✔</span> Most Dental Insurances Accepted
                </div>
                <div className="feature-item">
                  <span className="tick-icon">✔</span> Weeknight & Weekend Appointments
                </div>
                <div className="feature-item">
                  <span className="tick-icon">✔</span> Financing Available with CareCredit®
                </div>
                <div className="feature-item">
                  <span className="tick-icon">✔</span> Access to Top-Rated Specialists
                </div>
              </div>
              <div className="column">
                <div className="feature-item">
                  <span className="tick-icon">✔</span> Affordable Dental Memberships
                </div>
                <div className="feature-item">
                  <span className="tick-icon">✔</span> Same-Day Emergency Appointments
                </div>
                <div className="feature-item">
                  <span className="tick-icon">✔</span> Real-Time Available Online Booking
                </div>
                <div className="feature-item">
                  <span className="tick-icon">✔</span> Online Patient Forms
                </div>
              </div>
            </div>
          </div>
          <div className="right-column">
            <img src={img1} alt="whyChooseUs" className="whyChooseUs"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
