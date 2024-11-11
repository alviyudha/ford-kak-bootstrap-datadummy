/* eslint-disable no-unused-vars */
import React from 'react'
import NavbarComp from '../Components/NavbarComp'
import SocialShareComp from '../Components/SocialShareComp'
import Footer from '../Components/Footer'
import TestDriveComp from '../Components/TestDriveComp'

export default function BookingTestDrive() {
  return (
    <>
    <NavbarComp />
    <main className='BookingServices'>
      <div className="box-form shadow-lg ">
        <h1 className='text-center text-color-primary'>Form Test Drive</h1>
        <p className='text-color-gray'>
          Untuk Booking tanggal Test Drive, Silahkan lengkapi data Anda pada form Berikut ini
        </p>
        <TestDriveComp />
      </div>
    </main>
    <SocialShareComp />
    <Footer />
    </>
  )
}
