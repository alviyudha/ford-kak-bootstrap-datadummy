/* eslint-disable no-unused-vars */
import React from 'react'
import '../error.css'
import { fordKAKLogo } from '../assets/images/importImage'

export default function ErrorPage() {
  return (
    <div className="error-page">
      <div className="container text-center">
        <img src={fordKAKLogo} alt="Ford KAK Logo" className="img-fluid error-logo" />
        <h1 className="error-heading">Oops! Something went wrong.</h1>
        <p className="error-message">The page you are looking for might be temporarily unavailable or does not exist.</p>
      </div>
    </div>
  )
}
