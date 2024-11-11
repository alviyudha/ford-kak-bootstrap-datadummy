/* eslint-disable no-unused-vars */
import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { fordKAKLogo } from '../assets/images/importImage';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer" className="footer mt-5" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
    <div className="footer-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <h3>Office</h3>
              <p>
                Jl. RP. Soeroso No.38, RT.2/RW.2,<br/>
                Gondangdia, Kec. Menteng, Kota Jakarta Pusat
                Daerah Khusus Ibukota Jakarta 10350 <br/>
              <strong>Phone:</strong>0812-3000-2453<br />
              <strong>Email:</strong> info@ford-ak.co.id<br />
              </p>
            </div>
          </div>

          <div className="col-lg-5 col-md-7 footer-links">
            {/* <h4>Quick Link</h4>
            <div className="row">
              <div className="col-4">
                <Link to="/Models">Vehicles</Link>
                <Link to="/Models">Test Drive</Link>
                <Link to="/Models">Services</Link>
              </div> */}
              {/* {Object.keys(infoDealer).map((dealer, index) => (
                <div key={index} className="col-4">
                  <FontAwesomeIcon icon={faChevronRight} />
                  <a onClick={() => handleShowToast(dealer)}>{infoDealer[dealer].namaDelaer}</a>
                </div>
              ))} */}
            {/* </div> */}
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <img src={fordKAKLogo} alt="Ford AK" className='img-fluid' />
          </div>
        </div>
      </div>
    </div>

    <div className="footer-legal text-center">
      <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
        <div className="d-flex flex-column align-items-center align-items-lg-start">
          <div className="copyright">
            &copy; Copyright <strong><span>PT.Kreasi Auto Kencana</span></strong>. All Rights Reserved
          </div>
        </div>

        <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
          {/* <a href="#" className="twitter"><FontAwesomeIcon icon={faSquareXTwitter} /></a> */}
          <a href="#" className="facebook"><FontAwesomeIcon icon={faSquareFacebook} /></a>
          <a href="https://www.instagram.com/ford.ak.official/" target='_blank' className="instagram" rel="noreferrer"><FontAwesomeIcon icon={faSquareInstagram} /></a>
        </div>
      </div>
    </div>
    
  </footer>
  )
}
