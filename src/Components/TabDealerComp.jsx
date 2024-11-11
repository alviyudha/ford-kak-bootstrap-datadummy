/* eslint-disable no-unused-vars */
import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { dealerBalikpapan, dealerMampang, dealerMedan, dealerPalangkaraya } from '../assets/images/importImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

export default function TabDealerComp() {

  const dealerData = {
    'Jakarta':{

      Mampang:
      [{
      title:"Dealer Ford Mampang",
      address: "Jl. Wr. Jati Barat No.9, RT.6/RW.5, Kalibata, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12740",
      whatsApp:"+6281230002453",
      instagram:"https://www.instagram.com/fordmampangofficial/",
      maps:"https://goo.gl/maps/fo5UrfLqoxLprePh7",
      imgSrc:dealerMampang
    }],
    },
    'Kalimantan':{
      Balikpapan:
      [
        {
      title:"Dealer Ford Balikpapan",
      address: "Jl. Jenderal Sudirman No.708, Damai, Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76114",
      whatsApp:"+6281230002453",
      instagram:"",
      maps:"https://goo.gl/maps/fo5UrfLqoxLprePh7",
      imgSrc:dealerBalikpapan
    }
    ],
      Palangkaraya:[
        {
      title:"Dealer Ford Palangkaraya",
      address: "Jl. Tjilik Riwut No.KM. 6",
      whatsApp:"+6281230002453",
      instagram:"",
      maps:"https://goo.gl/maps/fo5UrfLqoxLprePh7",
      imgSrc:dealerPalangkaraya
        }
    ]
    },
    'Sumatera':{
      Medan:[
        {
          title:"Dealer Ford Medan",
          address: "Jl. Gatot Subroto No.107, Sei Sikambing B, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20123",
          whatsApp:"+6281230002453",
          instagram:"https://www.instagram.com/ford.aka.medan/",
          maps:"https://goo.gl/maps/fo5UrfLqoxLprePh7",
          imgSrc:dealerMedan
        }
      ]
    }
  }
  return (
    <>
    <Tab.Container  defaultActiveKey="all-tab">
      <nav id="nav-tab-dealer">
        <Nav variant="tabs" className="tabs-type-cars justify-content-center sticky-top z-3">
          <Nav.Item>
            <Nav.Link eventKey="all-tab" className='mb-1'>All</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link eventKey="jakarta-tab" className='mb-1'>Jakarta</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="kalimantan-tab" className='mb-1'>Kalimantan</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="sumatera-tab" className='mb-1'>Sumatera</Nav.Link>
          </Nav.Item> */}
        </Nav>
      </nav>
      <div id="nav-dealer-content">
        <Tab.Content>
          <Tab.Pane eventKey="all-tab" className='p-5'>
            
            <div className="row row-cols-1 row-cols-md-3 g-4">
                          {Object.keys(dealerData).map((province) => (
                Object.keys(dealerData[province]).map((city) => (
                  dealerData[province][city].map((dealer, index) => (
                    <div className="col" key={index}>
                      <div className="card h-100">
                        <img src={dealer.imgSrc} className="card-img-top" alt="test" />
                        <div className="card-body">
                          <h5 className="card-title">{dealer.title}</h5>
                          <p className="card-text">{dealer.address}</p>
                        </div>
                        <div className="card-footer">
                          <a href={`https://wa.me/${dealer.whatsApp}`} target='_blank' rel="noreferrer"><span><FontAwesomeIcon icon={faWhatsapp} size="xl" /></span></a>
                          <a href={dealer.instagram}><span><FontAwesomeIcon icon={faInstagram} size="xl" /></span></a>
                          <a href={dealer.maps}><FontAwesomeIcon icon={faLocationArrow} size="xl" /></a>
                        </div>
                      </div>
                    </div>
                  ))
                ))
              ))}
            
            </div>
          </Tab.Pane>
          {/* <Tab.Pane eventKey="jakarta-tab" className='p-5'>
          <div className="row row-cols-1 row-cols-md-3 g-4">
          {Object.keys(dealerData["Jakarta"]).map((city) => (
            dealerData["Jakarta"][city].map((dealer, index) => (
            <div className="col" key={index}>
            <div className="card h-100">
            <img src={dealer.imgSrc} className="card-img-top" alt="test" />
            <div className="card-body">
            <h5 className="card-title">{dealer.title}</h5>
            <p className="card-text">{dealer.address}</p>
            </div>
            <div className="card-footer">
            <a href={`https://wa.me/${dealer.whatsApp}`}><span><FontAwesomeIcon icon={faWhatsapp} size="xl" /></span></a>
            <a href={dealer.instagram}><span><FontAwesomeIcon icon={faInstagram} size="xl" /></span></a>
            <a href={dealer.maps}><FontAwesomeIcon icon={faLocationArrow} size="xl" /></a>
            </div>
            </div>
            </div>
            ))
            ))}

          </div>
          </Tab.Pane>
          <Tab.Pane eventKey="kalimantan-tab" className='p-5'>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {Object.keys(dealerData["Kalimantan"]).map((city) => (
            dealerData["Kalimantan"][city].map((dealer, index) => (
            <div className="col" key={index}>
            <div className="card h-100">
            <img src={dealer.imgSrc} className="card-img-top" alt="test" />
            <div className="card-body">
            <h5 className="card-title">{dealer.title}</h5>
            <p className="card-text">{dealer.address}</p>
            </div>
            <div className="card-footer">
            <a href={`https://wa.me/${dealer.whatsApp}`}><span><FontAwesomeIcon icon={faWhatsapp} size="xl" /></span></a>
            <a href={dealer.instagram}><span><FontAwesomeIcon icon={faInstagram} size="xl" /></span></a>
            <a href={dealer.maps}><FontAwesomeIcon icon={faLocationArrow} size="xl" /></a>
            </div>
            </div>
            </div>
            ))
            ))}
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="sumatera-tab" className='p-5'>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                      {Object.keys(dealerData["Sumatera"]).map((city) => (
            dealerData["Sumatera"][city].map((dealer, index) => (
              <div className="col" key={index}>
                <div className="card h-100">
                  <img src={dealer.imgSrc} className="card-img-top" alt="test" />
                  <div className="card-body">
                    <h5 className="card-title">{dealer.title}</h5>
                    <p className="card-text">{dealer.address}</p>
                  </div>
                  <div className="card-footer">
                    <a href={`https://wa.me/${dealer.whatsApp}`}><span><FontAwesomeIcon icon={faWhatsapp} size="xl" /></span></a>
                    <a href={dealer.instagram}><span><FontAwesomeIcon icon={faInstagram} size="xl" /></span></a>
                    <a href={dealer.maps}><FontAwesomeIcon icon={faLocationArrow} size="xl" /></a>
                  </div>
                </div>
              </div>
            ))
          ))}
          </div>
          </Tab.Pane> */}
        </Tab.Content>
      </div>
    </Tab.Container>
    {/* <div id="detail-dealer">
    <div className="row p-5">
  <div className="col-12 col-lg-6">
    <img src={dealerMampang} alt="Dealer Mampang" className='img-fluid' />
  </div>
  <div className="col-12 col-lg-6">
    <div className="title-dealer border-bottom border-2 mb-3">
      <h3 className=''>Dealer Ford Mampang</h3>
      <p className='text-secondary mb-3'>Jakarta Selatan, DKI Jakarta</p>
    </div>
    <div className="row border-bottom pb-3">
      <div className="col-12 col-sm-6 mb-5">
        <h5>Sales</h5>
        <div className="d-flex flex-column text-secondary">
          <div className="d-flex justify-content-between">
            <p>Senin-Jumat</p>
            <p>08.15 – 12.15</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Sabtu</p>
            <p>08.15 – 14.00</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 mb-5">
        <h5>Services</h5>
        <div className="d-flex flex-column text-secondary">
          <div className="d-flex justify-content-between">
            <p>Senin-Jumat</p>
            <p>08.15 – 12.15</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Sabtu</p>
            <p>08.15 – 14.00</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6">
        <h5>Spareparts</h5>
        <div className="d-flex flex-column text-secondary">
          <div className="d-flex justify-content-between">
            <p>Senin-Jumat</p>
            <p>08.15 – 12.15</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Sabtu</p>
            <p>08.15 – 14.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */}

        </>
  );
}
