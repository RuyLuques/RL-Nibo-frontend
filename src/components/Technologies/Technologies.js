import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Technologies.sass';

const Technologies = () => {
  const [technologyData, setTechnologyData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/technologies')
      .then((response) => response.json())
      .then((data) => setTechnologyData(data));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        }
      }
    ]
  };

  return (
    <div className="py-10">
      <div className="container mx-auto h-full">
        <div className="container mx-auto">
          <Slider {...settings}>
            {technologyData.map((technology) => (
              <div className="text-center" key={technology.id}>
                <img
                  src={technology.image}
                  alt={technology.title}
                  className="h-12 w-12 mb-2 mx-auto"
                />
                <p className='text-gray-800 text-sm'>{technology.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
