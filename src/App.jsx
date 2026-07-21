import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import CSR from './pages/CSR';
import Contact from './pages/Contact';
import About from './pages/About';
import Reach from './pages/Reach';
import Careers from './pages/Careers';
import ScrollToTop from './components/ScrollToTop';
// import MiddleScrollToTop from './components/MiddleScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <div className="site-shell">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reach" element={<Reach/>}/>
          <Route path="/csr" element={<CSR />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <WhatsAppButton />
        
        {/* <MiddleScrollToTop/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;