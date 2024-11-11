/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../Components/Footer';
import SocialShareComp from '../Components/SocialShareComp';
import NavbarComp from '../Components/NavbarComp';
import { fordDealer } from '../assets/images/importImage';
import TabDealerComp from '../Components/TabDealerComp';

export default function Dealer() {
  return (
    <>
      <NavbarComp />
      <div id="Dealer">
        <img src={fordDealer} alt="Ford Dealer" className="img-fluid p-5 bg-white" />
        <div className="dealer bg-white p-3 text-color-primary">
          <h1 className="text-center">Dealer Location</h1>
          <TabDealerComp />
        </div>
        <div className="gMaps text-center mt-3 bg-white p-5"></div>
      </div>
      <SocialShareComp />
      <Footer />
    </>
  );
}
