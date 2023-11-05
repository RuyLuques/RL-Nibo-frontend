import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import LandingPageHome from '../LandingPageHome/LandingPageHome';
import LandingPageAbout from '../LandingPageAbout/LandingPageAbout';
import LandingPageAdvantage from '../LandingPageAdvantage/LandingPageAdvantage';
import LandingPageServices from '../LandingPageServices/LandingPageServices';
import LandingPageForm from '../LandingPageForm/LandingPageForm';

const LandingPage = () => {
    return (
      <div data-test="landingpage-component">
        <Navbar backgroundColor="bg-indigo-800" textColor="text-white" />
        <LandingPageHome />
        <LandingPageAbout />
        <LandingPageAdvantage />
        <LandingPageServices />
        <LandingPageForm />
        <Footer backgroundColor="bg-white" />
      </div>
    );
  };
  
export default LandingPage;
