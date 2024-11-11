/* eslint-disable no-unused-vars */
import React from 'react'
import NavbarComp from '../Components/NavbarComp'
import SocialShareComp from '../Components/SocialShareComp'
import Footer from '../Components/Footer'
import FormServicesComp from '../Components/FormServicesComp'

export default function BookingServices() {
  return (
    <>
    <NavbarComp />
    <main className='BookingServices'>
      <div className="box-form shadow-lg ">
        <h1 className='text-color-primary'>Form Booking Service</h1>
        <p className='text-color-gray'>
          Untuk Booking tanggal service, Silahkan lengkapi data Anda pada form Booking Service dibawah ini.
        </p>
        <FormServicesComp />
      </div>
    </main>
    <SocialShareComp />
    <Footer />
    </>
  )
}
