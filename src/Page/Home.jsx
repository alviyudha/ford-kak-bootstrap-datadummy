/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import NavbarComp from '../Components/NavbarComp';
import CarouselComp from '../Components/CarouselComp';
import { carouselHome } from '../assets/js/DataFord';
import TabProdukComp from '../Components/TabProdukComp';
import Footer from '../Components/Footer';
import SocialShareComp from '../Components/SocialShareComp';
import SlideImgComp from '../Components/SlideImgComp';
import LoadingSpinner from '../Components/LoadingSpinner';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <NavbarComp />
          {/* <CarouselComp imagesProf={carouselHome} /> */}
          <SlideImgComp />
          <section className="section-custom bg-white" id="section-produk">
            <h2 className="text-center" data-aos="fade-right" data-aos-duration="1000">
              Discover The Next - Generation
            </h2>
            <p className="text-center" data-aos="fade-left" data-aos-duration="1000">
              Conquering the passion has come to the next level with wilder performance built completely extraordinary
              under The Next Big Thing challenge
            </p>
            <TabProdukComp />
          </section>
          <SocialShareComp />
          <Footer />
        </>
      )}
    </>
  );
}
