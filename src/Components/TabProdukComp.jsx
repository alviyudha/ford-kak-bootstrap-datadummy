/* eslint-disable no-unused-vars */
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SlickCarouselComp from './SlickCarouselComp';
import { slideDataCarsEverest, slideDataCarsRanger, slideDataCarsRaptor } from '../assets/js/DataFord';

export default function TabProdukComp() {
  return (
    <div id="tabProduct" data-aos="zoom-out-right" data-aos-duration="1000">
    <Tabs
    defaultActiveKey="Ford Ranger"
    id="fill-tab-example"
    className="mb-3 mt-5"
    fill
  >
    {/* <Tab eventKey="Ford Ranger Raptor" title="Ford Ranger Raptor" >
    <SlickCarouselComp
      getDatatypeProf={slideDataCarsRaptor}
      />
    </Tab> */}
    <Tab eventKey="Ford Ranger" title="Ford Ranger">
      <SlickCarouselComp
      getDatatypeProf= {slideDataCarsRanger} />
    </Tab>
    <Tab eventKey="Ford Everest" title="Ford Everest">
      <SlickCarouselComp
      getDatatypeProf={slideDataCarsEverest}
      />
    </Tab>
  </Tabs>
  </div>
  )
}
