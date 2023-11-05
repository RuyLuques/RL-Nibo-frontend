import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Footer = ({ backgroundColor, textColor }) => {

  const headerStyle = {
    background: backgroundColor || 'bg-white',
  };

  const linkStyle = {
    color: textColor || 'text-white',
    fontFamily: 'Arial, sans-serif',
  };
  return (
    <footer className={`p-2 ${headerStyle.background}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
        <div className="text-orange-600 text-sm font-bold">Ana Ruy</div>
        </div>

        <div className="flex space-x-4">
          <a href="https://www.ruyluques.com.br/" target="_black" className="text-orange-600" style={linkStyle}>
          <i className="fa fa-user-circle-o"></i>
          </a>
          <a href="https://github.com/RuyLuques" target="_black" className="text-orange-600" style={linkStyle}>
          <i className="fa fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ruyluques" target="_black" className="text-orange-600" style={linkStyle}>
          <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="mailto:ruyluques@hotmail.com" target="_black" className="text-orange-600" style={linkStyle}>
          <i className="fa fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
