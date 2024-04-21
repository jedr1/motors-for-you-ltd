import {
  BrowserRouter as Router,
  Route,
  Routes,
  ScrollRestoration,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dropdown from './components/Navbar/Dropdown';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import StockPage from './pages/StockPage';

import ContactPage from './pages/ContactPage';
import Testimonials from './components/Testimonials';
import BenefitsPage from './pages/BenefitsPage';
import MobileLatest from './components/Stock/MobileLatest';
import TestimonialsPage from './pages/TestimonialsPage';
import Reliable from './components/Blogs/Reliable';
import CreditScore from './components/Blogs/Credit';
import BlogPage from './pages/BlogPage';
import BenefitsOfReg from './components/Blogs/BenefitsOfReg';
import RightCar from './components/Blogs/RightCar';
import Leasing from './components/Blogs/Leasing';
import FamilyCar from './components/Blogs/FamilyCar';
import HomePage2 from './pages/HomePage2';
import OnLoad from './components/Animation/OnLoad';
import Mercs from './components/Stock';
import Rover3 from './components/Stock/Rover3.0';
import Van from './components/Stock/van';
import Sold from './components/Stock/Sold';
import Mercs2 from './components/Stock/mercs2';
import Hyundai from './components/Stock/Hyundai';
import Peugeot from './components/Stock/Peugeot';
import Mini from './components/Stock/mini';
import Fiat from './components/Stock/fiat';
import Ford from './components/Stock/ford';
import PBlack from './components/Stock/pblack';
import ScrollToTopOnNavigate from './pages/ScrollToTop';
import ScrollToTop from './components/ScrollToTop';
import LeadMag from './components/Blogs/LeadMag';
import Maintenance from './components/Blogs/Maintenance';
import Kia from './components/Stock/kia';
import Corsa from './components/Stock/corsa';
import LocatePage from './pages/Locate-a-carPage';
import TrustpilotWidget from './components/Trust/Trust';
import Mit from './components/Stock/mit';
import Nis from './components/Stock/nis';
import Bni from './components/Stock/bni';
import Pco from './components/Stock/pco';
import Bmw from './components/Stock/bmw';
import Wmerc from './components/Stock/wmerc';
import Golf from './components/Stock/golf';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {loading ? (
        <OnLoad />
      ) : (
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="*" element={<ScrollToTop />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/sold" element={<Sold />} />
            <Route path="/latest-stock" element={<StockPage />} />
            <Route path="/locate-a-car" element={<LocatePage />} />
            <Route path="/mercedes-benz-E220-CDi" element={<Mercs />} />
            <Route path="/mercedes-benz-C220-CDi" element={<Mercs2 />} />
            <Route path="/mini-countryman" element={<Mini />} />
            <Route path="/fiat-500" element={<Fiat />} />
            <Route path="/peugeot-207" element={<Pco />} />
            <Route path="/ford-ka" element={<Ford />} />
            <Route path="/peugeot-207" element={<PBlack />} />
            <Route path="/hyundai-i30" element={<Hyundai />} />
            <Route path="/peugeot-208" element={<Peugeot />} />
            <Route path="/vauxhall-corsa" element={<Corsa />} />
            <Route path="/nissan-qashqai" element={<Bni />} />
            <Route path="/land-rover-range-rover-3-0" element={<Rover3 />} />
            <Route path="/ford-transit-connect" element={<Van />} />
            <Route path="/volkswagen-golf" element={<Golf />} />
            <Route path="/nissan-pathfinder" element={<Nis />} />
            <Route path="/kia-picanto" element={<Kia />} />
            <Route path="/bmw-318" element={<Bmw />} />
            <Route path="/mercedes-benz-b-class" element={<Wmerc />} />
            <Route path="/mitsubishi-outlander" element={<Mit />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/benefits" element={<BenefitsPage />} />
            <Route
              path="/how-to-find-a-reliable-car-dealer"
              element={<Reliable />}
            />
            <Route path="/5-things-to-know" element={<LeadMag />} />
            <Route path="/basics-of-car-financing" element={<CreditScore />} />
            <Route
              path="/benefits-of-maintenance"
              element={<BenefitsOfReg />}
            />
            <Route path="/find-the-perfect-car" element={<RightCar />} />
            <Route path="/reliable-car-dealer" element={<Reliable />} />
            <Route path="/leasing-vs-buying" element={<Leasing />} />
            <Route
              path="/top-features-of-a-family-car"
              element={<FamilyCar />}
            />
            <Route path="/maintenance-tips" element={<Maintenance />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
