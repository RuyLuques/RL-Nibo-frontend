import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Technologies.sass';
import { fetchTechnologies } from '../../services/api'; 

const Technologies = () => {
  const [technologyData, setTechnologyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTechnologies(); 
      setTechnologyData(data);
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="py-10">
      <div className="container mx-auto h-full">
        <Slider {...settings}>
          {technologyData.map((technology) => (
            <div className="text-center" key={technology.id}>
              <img
                src={technology.image}
                alt={technology.title}
                className="h-12 w-12 mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Technologies;
