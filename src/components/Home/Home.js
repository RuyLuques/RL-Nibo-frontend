import React from 'react';

const Home = () => {
  return (
    <main className="p-5 border-black border">
      <div className="container mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4">
          <h1 className="text-4xl md:text-6xl lg:text-9xl text-3xl md:text-5xl lg:text-7xl text-blue-500 py-5">Welcome</h1>
          <h2 className="text-3xl md:text-5xl lg:text-7xl text-2xl md:text-4xl lg:text-6xl text-blue-400">I'm Ana Ruy</h2>
          <h3 className="text-2xl md:text-4xl lg:text-6xl text-xl md:text-3xl lg:text-5xl text-gray-500">Web Developer</h3>
        </div>
        <div className="bg-white p-4">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="Marketing Image 2"
            className="w-full h-auto rounded-full"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
