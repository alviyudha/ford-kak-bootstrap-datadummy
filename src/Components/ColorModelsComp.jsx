/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { colorData } from '../assets/js/DataFord';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
export default function ColorModelsComp({ titleCarsProps, modelNameProps }) {
  const getColorsData = colorData[modelNameProps];
  const { initialImage, backgroundColor, colors } = getColorsData;

  const [currentImage, setCurrentImage] = useState(initialImage);
  const [currentBackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [currentDescColor, setCurrentDescColor] = useState(colors[0].descColor);

  const changeImage = (newImage, newBackgroundColor, newDescColor) => {
    setCurrentImage(newImage);
    setBackgroundColor(newBackgroundColor);
    setCurrentDescColor(newDescColor);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    
    <div id="pageColorCars" className="text-center mt-3" >
     <div className='bg-white p-5'>
        <div className='col-md-6 offset-md-3'>
    <h3 className='text-color-primary fw-semibold text-capitalize'>{getColorsData.title}</h3>
    <p>{getColorsData.text}</p>
    </div>
    </div>
      <p className="title-cars fs-4">{titleCarsProps}</p>
      <div className="row" style={{ height: '500px', background: `linear-gradient(0deg, ${currentBackgroundColor} 35%, rgba(255,255,255,1) 80%)` }}>
        <div className="col-sm-8 bg-car-view mt-3">
          <img src={currentImage} alt="Color-selection" className="img-fluid" style={{ width: '70%' }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"/>
        </div>
        <div className="col-sm-4">
          <div className='button-container pt-5' style={{zIndex:1005}}>
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => changeImage(color.image, color.background, color.descColor)}
              className="p-4 rounded-circle btn-colors m-1"
              style={{ background: color.background }} data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            ></button>
          ))}
          <p className='mt-5 fs-3 descColor text-white text-opacity-25'>{currentDescColor}</p>
        </div>
        </div>
      </div>
     
        
      </div>
  );
}
