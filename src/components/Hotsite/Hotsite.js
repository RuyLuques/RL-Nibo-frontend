import React, { useState, useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import Information from '../Shared/Information/Information';
import { fetchHotsite, submitHotsite } from '../../services/api';

function Hotsite() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formMessage, setFormMessage] = useState(null);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await fetchHotsite();
      setProducts(productsData);
    };

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

    const formData = { name, email, phone };
    const formSubmitResponse = await submitHotsite(formData);

    setFormMessage(formSubmitResponse);
  };

  const filteredProducts = products.filter((product) => {
    const productName = product.name ? product.name.toLowerCase() : '';
    return productName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="bg-gradient-to-b from-black to-gray-600 min-h-screen text-white">
      <Navbar backgroundColor="bg-gradient-to-b from-black to-gray-200" textColor="text-white" />
      <div className="container mx-auto py-16">
        <Information />

        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Hotsite</h1>
        <p className="text-xl text-center mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <SearchIcon className="w-6 h-6 text-orange-600" />
            <input
              type="text"
              placeholder="Type product name..."
              className="bg-transparent px-2 border-b border-white text-white placeholder-white::placeholder"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
          <div className="bg-white bg-opacity-10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
            <ul>
              {filteredProducts.map((product) => (
                <li key={product.id} className="flex items-center space-x-2">
                  <div className="text-white rounded-full p-5">
                    <i className="fa fa-shopping-basket text-orange-600"></i>
                  </div>
                  <div>
                    <strong>{product.name}</strong> {product.title} - R$ {product.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>

            {formMessage && (
              <div className={`text-${formMessage.type === 'success' ? 'green' : 'red'}-500 mb-4`}>
                {formMessage.text}
              </div>
            )}

            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-2 p-2 bg-transparent border-b border-white text-white placeholder-white::placeholder"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-2 p-2 bg-transparent border-b border-white text-white placeholder-white::placeholder"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-white">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => {
                    const numericValue = e.target.value.replace(/\D/g, '');
                    setPhone(numericValue);
                  }}
                  className="w-full px-2 p-2 bg-transparent border-b border-white text-white placeholder-white::placeholder"
                  pattern="[0-9]*"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-600 w-full hover:bg-yellow-600 text-white py-2 px-4 rounded"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer backgroundColor="bg-gradient-to-b from-gray-800 to-black" textColor="text-white" />
    </div>
  );
}

export default Hotsite;
