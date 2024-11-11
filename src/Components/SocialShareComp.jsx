/* eslint-disable no-unused-vars */
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react';
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faRoadCircleCheck } from '@fortawesome/free-solid-svg-icons'

export default function SocialShareComp() {
  // State untuk melacak apakah tombol "Scroll Up" harus ditampilkan
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Efek untuk menampilkan atau menyembunyikan tombol "Scroll Up" berdasarkan posisi scroll
  useEffect(() => {
    // Fungsi untuk menangani peristiwa scroll
    const handleScroll = () => {
      // Tampilkan tombol "Scroll Up" jika posisi scroll lebih dari 100 piksel
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Tambahkan event listener untuk peristiwa scroll
    window.addEventListener('scroll', handleScroll);

    // Bersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fungsi untuk menggulir halaman ke atas
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section id="fixed-social">
        <ul className="social">
          <li>
            <a href="#" onClick={scrollToTop}>
              <span>Scroll up</span>
              <span><FontAwesomeIcon icon={faArrowUp} size="2xl" /></span>
            </a>
          </li>
          <li><a href="https://instagram.com/ford.indonesia.co.id?igshid=NGVhN2U2NjQ0Yg==" target='_blank' rel="noreferrer"><span>Instagram</span><span><FontAwesomeIcon icon={faInstagram} size="2xl" /></span></a></li>
          <li><a href="https://wa.me/+6281230002453" target='_blank' rel="noreferrer"><span>Whastapp</span><span><FontAwesomeIcon icon={faWhatsapp} size="2xl" /></span></a></li>
          <li><Link to="/booking-services" ><span>Service</span><span><FontAwesomeIcon icon={faGear} size="2xl" /></span></Link></li>
          <li><Link to="/test-drive" ><span>Test Drive</span><span><FontAwesomeIcon icon={faRoadCircleCheck} size="2xl"/></span></Link></li>
        </ul>
      </section>
    </>
  )
}
