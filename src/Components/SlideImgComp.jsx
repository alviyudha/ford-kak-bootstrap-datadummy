import React from 'react'
import { bgSlide } from '../assets/js/DataFord'
export default function SlideImgComp() {


  return (
    <div id="carouselSlideFord" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">    
        {bgSlide.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </div>
        ))}
        </div>
        <div id="btnGroup">
        <button className="btn-prev-custom" type="button" data-bs-target="#carouselSlideFord" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="btn-next-custom" type="button" data-bs-target="#carouselSlideFord" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>
      </div>
  )
}
