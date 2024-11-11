/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { linkTo } from '../assets/js/DataFord';

export default function TabTypeCars() {
  const navigate = useNavigate ();
  const handleLinkClick = (to) =>(event) => {
    // Lakukan sesuatu sebelum reload, jika diperlukan
    // ...
    navigate.push(to);
    // Setelah itu, reload halaman
    window.location.reload();
  };
  // Ambil path URL saat ini
  const currentPath = window.location.pathname;
  
  // Inisialisasi variabel untuk menentukan tab yang akan ditampilkan
  let tabsToDisplay = null;
  
 
  
  // Periksa apakah URL mengandung "ranger"
  if (currentPath.includes('ranger')) {
    tabsToDisplay = (
      <ul className="nav tabs-type-cars justify-content-center sticky-top z-3 ">
        <li className="nav-item">
          <Link className={`nav-link ${currentPath === linkTo.raptor ? 'active-cust' : ''}`} to="/model/details/ranger-raptor" onClick={handleLinkClick(linkTo.raptor)}>RANGER RAPTOR</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${currentPath === linkTo.rangerWildtrak ? 'active-cust' : ''}`} to="/model/details/ranger-wildtrak" onClick={handleLinkClick(linkTo.rangerWildtrak)}>RANGER WILDTRAK</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${currentPath === linkTo.rangerXlt ? 'active-cust' : ''}`} to="/model/details/ranger-xlt" onClick={handleLinkClick(linkTo.rangerXlt)}>Ranger XLT</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${currentPath === linkTo.rangerBase ? 'active-cust' : ''}`} to="/model/details/ranger-base" onClick={handleLinkClick(linkTo.rangerBase)}>RANGER BASE</Link>
        </li>
      </ul>
    );
  }
  
  // Periksa apakah URL mengandung "everest"
  else if (currentPath.includes('everest')) {
    tabsToDisplay = (
      <ul className="nav tabs-type-cars justify-content-center sticky-top z-3">
        <li className="nav-item">
          <Link className={`nav-link ${currentPath === linkTo.evrXlt ? 'active-cust' : ''}`} to="/model/details/everest-xlt" onClick={handleLinkClick(linkTo.evrXlt)}>EVEREST XLT</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${currentPath === linkTo.evrTitanium ? 'active-cust' : ''}`} to="/model/details/everest-titanium" onClick={handleLinkClick(linkTo.evrTitanium)}>EVEREST TITANIUM</Link>
        </li>
      </ul>
    );
  }
  
  return (
    <>
      {tabsToDisplay}
    </>
  );
}
