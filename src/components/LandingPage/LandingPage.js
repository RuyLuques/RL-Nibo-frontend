import React, { useState } from 'react';
import { HeartIcon, ClipboardListIcon, SpeakerphoneIcon, PhoneIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import Information from '../Shared/Information/Information';

const LandingPage = () => {
  const [menuOpen] = useState(false);
  
    return (
      <div>
        <Navbar backgroundColor="bg-indigo-800" textColor="text-white" />
  
        {menuOpen && (
          <div className="bg-indigo-800 text-white p-4 md:hidden">
            <ul className="space-y-4">
              <li>
                  <Link to="/" className="text-white font-bold hover:font-bold">
                    <i className="fa fa-home text-indigo-800"></i> Home
                  </Link>
              </li>
            </ul>
          </div>
        )}
  
        <div className="bg-indigo-800 text-white py-16 p-5">
        <Information />

          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-4">Welcome to Landing Page</h1>
            <p className="text-lg md:text-xl lg:text-xl mb-8">Lorem Ipsum is simply... <span className="text-yellow-400">dummy text</span>.</p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 py-2 px-4 rounded-full font-semibold transition duration-300">Learn More</button>
              <button className="bg-transparent border border-yellow-400 hover:bg-yellow-400 text-yellow-400 hover:text-blue-900 py-2 px-4 rounded-full font-semibold transition duration-300">Contact</button>
            </div>
          </div>
        </div>
  
        <section className="bg-white py-12 p-5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-blue-900 mb-6">What is Lorem Ipsum?</h2>
            <p className="mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </section>
  
        <section className="bg-white py-12 p-5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-blue-900 mb-6">What is Lorem Ipsum?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-4">
                <HeartIcon className="h-12 w-12 text-indigo-800 mx-auto" />
                <h3 className="text-2xl font-semibold mt-4">What is Lorem Ipsum?</h3>
                <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="p-4">
                <ClipboardListIcon className="h-12 w-12 text-indigo-800 mx-auto" />
                <h3 className="text-2xl font-semibold mt-4">What is Lorem Ipsum?</h3>
                <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="p-4">
                <SpeakerphoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
                <h3 className="text-2xl font-semibold mt-4">What is Lorem Ipsum?</h3>
                <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="bg-gray-100 py-12 p-5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-blue-900 mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="p-4">
                <PhoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
                <h3 className="text-2xl font-semibold mt-4">What is Lorem Ipsum?</h3>
                <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="p-4">
                <PhoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
                <h3 className="text-2xl font-semibold mt-4">What is Lorem Ipsum?</h3>
                <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="p-4">
                <PhoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
                <h3 className="text-2xl font-semibold mt-4">What is Lorem Ipsum?</h3>
                <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="p-4">
                <PhoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
                <h3 className="text-2xl font-semibold mt-4">What is Lorem Ipsum?</h3>
                <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="p-4">
                <PhoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
                <h3 className="text-2xl font-semibold mt-4">What is Lorem Ipsum?</h3>
                <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="bg-indigo-800 text-white py-12 p-5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold mb-6">What is Lorem Ipsum?</h2>
            <p className="mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <form className='text-left'>
              <div className="mb-4">
                <label className="block text-lg">Name</label>
                <input type="text" className="w-full p-2 border border-white rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-lg">Email</label>
                <input type="email" className="w-full p-2 border border-white rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-lg">Message</label>
                <textarea className="w-full p-2 border border-white rounded" rows="4"></textarea>
              </div>
              <button className="bg-yellow-400 w-full hover:bg-yellow-500 text-blue-900 py-2 px-4 rounded-full font-semibold transition duration-300">Send</button>
            </form>
          </div>
        </section>
  
        <Footer backgroundColor="bg-white" />
      </div>
    );
  };
  
export default LandingPage;
