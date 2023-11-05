import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = ({ backgroundColor, textColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const headerStyle = {
    background: backgroundColor || 'bg-indigo-800',
  };

  const linkStyle = {
    color: textColor || 'text-white',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <>
      <header className={`p-2 ${headerStyle.background}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className={`text-2xl font-bold ${linkStyle.color}`}>Ana Ruy</div>
          <div className="md:hidden flex ml-auto">
            <button
              onClick={toggleMenu}
              className={`text-sm ${linkStyle.color}`}
            >
              {menuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="md:flex space-x-4">
            <ul className="hidden md:flex space-x-4">
              <li>
                <Link to="/" className={`text-sm font-bold ${linkStyle.color}`}>
                  <i className="fa fa-home text-orange-600"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/landingPage" className={`text-sm font-bold ${linkStyle.color}`}>
                  <i className="fa fa-rocket text-orange-600"></i> Landing Page
                </Link>
              </li>
              <li>
                <Link to="/hotsite" className={`text-sm font-bold ${linkStyle.color}`}>
                  <i className="fa fa-rocket text-orange-600"></i> Hotsite
                </Link>
              </li>
              <li>
                <a href='https://www.ruyluques.com.br/' target="_black" className={`text-sm font-bold ${linkStyle.color}`}>
                  <i className="fa fa-user-circle-o text-orange-600"></i> Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {menuOpen && (
        <div className={`p-4 mx-auto md:hidden ${headerStyle.background}`}>
          <ul className="p-4 space-y-4">
            <li>
              <Link to="/" className={`text-sm font-bold ${linkStyle.color}`}>
                <i className="fa fa-home text-orange-600"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/landingPage" className={`text-sm font-bold ${linkStyle.color}`}>
                <i className="fa fa-rocket text-orange-600"></i> Landing Page
              </Link>
            </li>
            <li>
              <Link to="/hotsite" className={`text-sm font-bold ${linkStyle.color}`}>
                <i className="fa fa-rocket text-orange-600"></i> Hotsite
              </Link>
            </li>
            <li>
              <a href='https://www.ruyluques.com.br/' target="_black" className={`text-sm font-bold ${linkStyle.color}`}>
                <i className="fa fa-user-circle-o text-orange-600"></i> Portfolio
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
