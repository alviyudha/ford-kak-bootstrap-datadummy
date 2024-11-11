/* eslint-disable no-unused-vars */
import React from 'react';
import NavbarComp from '../Components/NavbarComp';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { vehicleData } from '../assets/js/DataFord';
import SocialShareComp from '../Components/SocialShareComp';

export default function Models() {
  const clickToZeroPosition = () =>{
    window.scrollTo(0,0)
  }
  const getvehicleData = vehicleData;
  return (
    <>
      <NavbarComp />
      <section className="section-custom" style={{ marginTop: '30px' }} id="section-secvehicles">
        <div className="container">
          <nav>
            <div className="nav nav-tabs box-tab-secvehicles" id="nav-tab" role="tablist">
              {getvehicleData.map((vehicleType, index) => (
                <button
                  key={index}
                  className={`nav-link nav-link-sec ${index === 0 ? 'active' : ''}`}
                  id={`nav-${vehicleType.type}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#nav-${vehicleType.type}`}
                  type="button"
                  role="tab"
                  aria-controls={`nav-${vehicleType.type}`}
                  aria-selected={index === 0 ? 'true' : 'false'}
                >
                  {vehicleType.type}
                </button>
              ))}
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            {getvehicleData.map((vehicleType, index) => (
              <div
                key={index}
                className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                id={`nav-${vehicleType.type}`}
                role="tabpanel"
                aria-labelledby={`nav-${vehicleType.type}-tab`}
              >
                <div className="card_vehicles justify-content-between">
                  <div className="row">
                    {vehicleType.models.map((model, modelIndex) => (
                      <div key={modelIndex} className="col-md-4 card-vehicles">
                        <Link to={`/model/details/${model.link}`} className="vehicle-link" onClick={clickToZeroPosition}>
                          <img src={model.image} className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                          <p className="card-text text-center vehicles-card-caption ">{model.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SocialShareComp />
      <Footer />
    </>
  );
}
