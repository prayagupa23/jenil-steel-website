import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import TitleManager from './components/TitleManager';

const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const CSR = lazy(() => import('./pages/CSR'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Reach = lazy(() => import('./pages/Reach'));
const Careers = lazy(() => import('./pages/Careers'));
// import MiddleScrollToTop from './components/MiddleScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <TitleManager/>
      <div className="site-shell">
        <Navbar />
        <Suspense fallback={<div style={{ minHeight: '60vh' }} aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/reach" element={<Reach />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <WhatsAppButton />
        
        {/* <MiddleScrollToTop/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;