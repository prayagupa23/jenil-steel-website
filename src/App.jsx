import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import CSR from './pages/CSR';
import Contact from './pages/Contact';
// import MiddleScrollToTop from './components/MiddleScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <WhatsAppButton />
        
        {/* <MiddleScrollToTop/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;