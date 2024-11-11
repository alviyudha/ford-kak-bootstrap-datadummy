/* eslint-disable no-unused-vars */
import React from 'react'
import NavbarComp from '../Components/NavbarComp'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom';
import { BrochureData, SafetyData, carData, designData, linkYoutube, modelSpecData, performanceData, techData } from '../assets/js/DataFord';
import ColorModelsComp from '../Components/ColorModelsComp';
import TabCarsDetail from '../Components/TabCarsDetail';
import TabTypeCars from '../Components/TabTypeCars';
import SocialShareComp from '../Components/SocialShareComp';
import ModelSpecComp from '../Components/ModelSpecComp';
import YoutubeFrameComp from '../Components/YoutubeFrameComp';

export default function ModelsDetail() {


  let { modelName } = useParams();
  let modelNames="";
  let imgSrcBg,titleCar ="";
  const selectedCarData = carData[modelName]
  const getUrlDesignData = designData[modelName]
  const getUrlPerformance = performanceData[modelName]
  const getSaftyData = SafetyData[modelName]
  const getTechData = techData[modelName]
  const getUrlSpecData = modelSpecData[modelName]
  const getUrlBrochure = BrochureData[modelName];
  
  const videoLink = linkYoutube[modelName].link[0];
  
  if (selectedCarData) {
    modelNames = modelName;
    imgSrcBg=selectedCarData.srcImg;
    titleCar=selectedCarData.titleCars;
  }
  return (
    <>
    <NavbarComp />
    <img src={imgSrcBg} alt="Ford Raptor" className='img-fluid d-block w-100' />
    <TabTypeCars
    ModelNameCss={modelName}
    />
    <ColorModelsComp
      modelNameProps={modelNames}
      titleCarsProps={titleCar}
    />
    <YoutubeFrameComp
    youtubeProps={videoLink}
    />
    <div data-aos="fade-up"
     data-aos-duration="3000">
    <TabCarsDetail
    designDataProps2={getUrlDesignData}
    performanceProps2={getUrlPerformance}
    safetyProps2={getSaftyData}
    techProps2={getTechData}
    brochProps={getUrlBrochure}
    />
    <ModelSpecComp
    specDataProps={getUrlSpecData}
    />
    </div>
    <SocialShareComp />
    <Footer />
    </>
  )
}
