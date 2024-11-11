import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Page/Home'
import Dealer from './Page/Dealer'
import BookingServices from './Page/BookingServices'
import BookingTestDrive from './Page/BookingTestDrive'
import Models from './Page/Models'
import ModelsDetail from './Page/ModelsDetail'
import ErrorPage from './Page/ErrorPage'
import View360degree from './Page/View360degree';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import CookieConsentComp from './Components/CookieConsent'
import PrivacyPolicy from './Page/PrivacyPolicy'

function App() {
  useEffect(() => {
    AOS.init();

    AOS.init();

    const refreshAOS = () => {
      AOS.refreshHard();
    };

    const tabElements = document.querySelectorAll('button[data-bs-toggle="tab"]');

    tabElements.forEach((tabElement) => {
      tabElement.addEventListener('hidden.bs.tab', refreshAOS);
      tabElement.addEventListener('shown.bs.tab', refreshAOS);
    });

    return () => {
      tabElements.forEach((tabElement) => {
        tabElement.removeEventListener('hidden.bs.tab', refreshAOS);
        tabElement.removeEventListener('shown.bs.tab', refreshAOS);
      });
    };
  }, []);
  return (
    <>
    <CookieConsentComp />
       <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dealer' element={<Dealer />} />
        <Route path='/Models' element={<Models />} />
        <Route path='/model/details/:modelName' element={<ModelsDetail />} />
        <Route path='/view-degree' element={<View360degree />} />
        <Route path='/booking-services' element={<BookingServices />} />
        <Route path='/test-drive' element={<BookingTestDrive />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='*' element={<ErrorPage />} />

      </Routes>
     </Router>
    </>
  )
}

export default App
