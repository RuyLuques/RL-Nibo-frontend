import React from 'react';

const Home = () => {
  return (
    <main className="p-5">
      <div data-test="home-component" className="container mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="bg-white p-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-6xl text-indigo-800 py-2">Welcome</h1>
          <h2 className="text-3xl md:text-5xl lg:text-4xl text-indigo-600 py-2">I'm Ana Ruy</h2>
          <h3 className="text-2xl md:text-4xl lg:text-2xl text-gray-500">Developer Web</h3>
        </div>
        <div className="bg-white p-4">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="Imagem de Marketing 2"
            className="max-w-full h-auto rounded-full"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
