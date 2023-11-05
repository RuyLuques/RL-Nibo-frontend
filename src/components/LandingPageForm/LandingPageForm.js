import React, { useState, useEffect } from 'react';
import { fetchLandingPageData, submitLandingpage } from '../../services/api';

const LandingPageForm = () => {
  const [data, setData] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const landingPageData = await fetchLandingPageData();
        setData(landingPageData);
      } catch (error) {
      }
    }

    fetchData();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      setFormMessage({ type: 'error', text: 'Name and email are required fields.' });
      return;
    }

    if (!/^.+@.+$/i.test(email)) {
      setFormMessage({ type: 'error', text: 'Invalid email format.' });
      return;
    }

    const formData = { name, email, message };

    try {
      const formSubmitResponse = await submitLandingpage(formData);
      setFormMessage(formSubmitResponse);
    } catch (error) {
      setFormMessage({ type: 'error', text: 'An error occurred while submitting the form.' });
    }
  };

  return (
    <div>
      <section className="bg-indigo-800 text-white py-12 p-5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold mb-6">{data.titleForm1}</h2>
          <p className="mb-8">{data.subtitleForm1}</p>

          {formMessage && (
          <div className="text-white mb-4">
            {formMessage.text}
          </div>
        )}
            
          <form className='text-left' onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg">{data.formFiedlName}</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full p-2 border border-white text-black rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg">{data.formFiedlEmail}</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-white text-black rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg">{data.formFiedlMessage}</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-white text-black rounded"
                rows="4"
              ></textarea>
            </div>
            <button className="bg-yellow-400 w-full hover:bg-yellow-500 text-blue-900 py-2 px-4 rounded-full font-semibold transition duration-300">{data.formButton}</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingPageForm;
