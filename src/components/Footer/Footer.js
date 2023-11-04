import React from 'react';
import { MailIcon, GlobeAltIcon } from '@heroicons/react/solid';

function Footer() {
  return (
    <footer className="bg-indigo-800 text-white p-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">Ana Ruy Luques</h2>
        </div>

        <div className="flex space-x-4">
          <a href="mailto:ruyluques@hotmail.com" className="text-white hover:text-gray-400">
            <MailIcon className="h-5 w-5" />
          </a>
          <a href="https://www.ruyluques.com.br/" className="text-white hover:text-gray-400">
            <GlobeAltIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
