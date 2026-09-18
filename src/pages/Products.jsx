import Footer from "../components/Footer";
import "./Products.css";
import tmtBar from '../assets/webp_images/tmtbar.webp';
import wireRods from '../assets/webp_images/wirerods.webp';
import angels from '../assets/webp_images/angels.webp';
import billets from '../assets/webp_images/billets.webp';
import roundBars from '../assets/webp_images/roundbars.webp';
import beams from '../assets/webp_images/beams.webp';
import channels from '../assets/webp_images/channels.webp';
import jswLogo from "../assets/images/jsw-logo-jv.webp";
import rinlLogo from "../assets/webp_images/Rashtriya_Ispat_Nigam.svg.webp";
import tataLogo from "../assets/webp_images/tata-steel-logo.webp";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import structuralSteel from '../assets/webp_images/structuralSteel.webp';
import pipes from '../assets/webp_images/pipes.webp';
import mukundLogo from '../assets/webp_images/mukund.webp';
import nicoLogo from '../assets/webp_images/nico.webp';
import eslLogo from '../assets/webp_images/esl.webp';
import sailLogo from '../assets/webp_images/sail.webp';
import bhushanLogo from '../assets/webp_images/bhushanLogo.webp';
import jindalLogo from '../assets/webp_images/jindalLogo.webp';
import vedantaLogo from '../assets/webp_images/vedantaLogo.webp';
import aboutProducts from '../assets/webp_images/products.webp';

const logos = [jswLogo, rinlLogo, tataLogo, mukundLogo, nicoLogo, eslLogo, sailLogo, bhushanLogo, jindalLogo, vedantaLogo];

const products = [
  {
    id: 1,
    title: "Wire Rods",
    description: "High-quality wire rods used in wire drawing, fasteners, electrodes, and engineering applications.",
    specs: [
      { label: "Size", value: "5.5mm – 32mm" },
    ],
    image: wireRods,
    brands: [jswLogo, rinlLogo, tataLogo, bhushanLogo, mukundLogo, sailLogo, nicoLogo, jindalLogo, eslLogo],
  },
  {
    id: 2,
    title: "Round Bars",
    description: "Hot-rolled round bars suitable for machining, construction, engineering, and fabrication applications.",
    specs: [
      { label: "Size", value: "8mm – 60mm" },
    ],
    image: roundBars,
    brands: [mukundLogo, rinlLogo, nicoLogo, bhushanLogo],
  },  
  {
    id: 3,
    title: "TMT Bars",
    description: "Fe-500D & Fe-550D grade TMT bars with superior strength and ductility.",
    specs: [
      { label: "Size", value: "8mm – 32mm" },
    ],
    image: tmtBar,
    brands: [],
  },
  {
    id: 4,
    title: "Billets",
    description: "Steel billets used as raw material for manufacturing TMT bars, wire rods, and other rolled products.",
    specs: [
      { label: "Available Sizes", value: "100×100 mm, 110×110 mm, 130×130 mm, 160×160 mm, 200×200 mm" },
    ],
    image: billets,
    brands: [],
  },
  {
    id: 5,
    title: "Structural Steel",
    description: "Engineered structural steel solutions comprising Channels, Beams, and Angles, delivering superior strength, durability, and performance across infrastructure and industrial applications.",
    specs: [],
    image: structuralSteel,
    brands: [],
  },    
  {
    id: 6,
    title: "Pipes",
    description: "Equal and unequal steel angles widely used in structural frameworks and fabrication projects.",
    specs: [
      { label: "Size", value: "25×25mm – 200×200mm" },
    ],
    image: pipes,
    brands: [],
  }
];

function ProductCard({ product, onOpenModal }) {
  const isMobile = () => window.innerWidth < 768;

  const handleCardClick = (e) => {
    e.stopPropagation();
    if (e.target.closest('a, button')) return;
    onOpenModal(product);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      {/* Full-card background image */}
      <img src={product.image} alt={product.title} className="card-image" loading="lazy" decoding="async" />

      {/* Dark gradient overlay — content sits on top of this */}
      <div className="card-overlay" />

      {/* Content overlaid on the image */}
      <div className="card-content">
        <div className="card-accent-line" />
        <h3 className="card-title">{product.title}</h3>
        
        <div className="card-specs">
          {product.specs.map((spec) => (
            <div className="spec-row" key={spec.label}>
              <span className="spec-label">{spec.label}</span>
              <span className="spec-value">{spec.value}</span>
            </div>
          ))}
        </div>
        
        {isMobile() ? (
          <button 
            className="card-know-more-btn"
            onClick={() => onOpenModal(product)}
          >
            Know More
          </button>
        ) : (
          <div className="card-know-more-container">
            <button 
              className="card-know-more-btn"
              onClick={() => onOpenModal(product)}
            >
              Know More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {product && (
        <motion.div 
          className="product-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="product-modal-card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            onClick={(e) => e.stopPropagation()} // Prevents accidental background closing clicks
          >
            {/* Close Button Button Element */}
            <button 
              className="product-modal-close-btn" 
              onClick={onClose}
              aria-label="Close Modal"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="product-modal-body">
              {/* Left Side: Dynamic Image Layout */}
              <div className="product-modal-img-container">
                <img src={product.image} alt={product.title} decoding="async" />
                <div className="product-modal-caption">
                  <h3 className="product-modal-name">{product.title}</h3>
                  <p className="product-modal-description">{product.description}</p>
                </div>
              </div>

              {/* Right Side: Bio Text Content Panel */}
              <div className="product-modal-content-container">
                <div className="product-modal-specs">
                  {product.specs.map((spec, index) => (
                    <div className="spec-row-modal" key={spec.label}>
                      <span className="spec-label-modal">{spec.label}</span>
                      <span className="spec-value-modal">{spec.value}</span>
                    </div>
                  ))}
                </div>
                {product.brands?.length > 0 && (
                <div className="product-modal-brands-container">
                  <p className="brands-title">Companies</p>
                  <div className="product-modal-brands">
                    {product.brands.map((brand, idx) => (
                      <div className="brand-logo" key={brand}>
                        <img src={brand} alt={`Company logo ${idx}`} decoding="async" />
                      </div>
                    ))}
                  </div>
                </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AboutIndustry() {
  return (
    <section className="about-industry-container animate-fade-in-up">
      <div className="about-industry-content">
        
        {/* Left Side: Worker Image with Zoom Frame */}
        <div className="about-industry-image-wrapper">
          <div className="about-industry-image-frame">
            <img 
              src={aboutProducts}
              alt="Worker in industrial factory" 
              className="about-industry-main-img"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Right Side: Text details */}
        <div className="about-industry-text-wrapper">
          <h2 className="about-industry-heading-products">
            Engineered for Strength. Trusted for Generations.
          </h2>
          <p className="about-industry-subtext-products">
            Jenil Steel offers a comprehensive range of high-quality steel products sourced from leading manufacturers across India. Our portfolio includes Wire Rods, TMT Bars, Billets, Beams, Channels, Angles, Flats, and other structural steel solutions designed to meet diverse industrial requirements. With a strong focus on quality, reliability, and timely delivery, we ensure that every product meets the highest industry standards and supports the success of our customers' projects.
          </p>

          <div className="about-industry-features">
            <div className="industry-feature-item">
              <h3>
                <span className="feature-arrow">›</span> Best Quality Services
              </h3>
            </div>
            
            <div className="industry-feature-item">
              <h3>
                <span className="feature-arrow">›</span> We Guarantee Success
              </h3>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

function ClientsStrip() {
  return (
    <section className="clients-strip-products">
      <p className="clients-title-products">Our Principal Suppliers</p>
      <div className="marquee-fade-container-products">
        <div className="marquee-track-products">
          <div className="marquee-content-products">
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div className="client-logo-products" key={`${logo}-${idx}`}>
                <img src={logo} alt="Customer logo" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenProductModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  // Make modal accessible globally for the card component
  window.showProductModal = (product) => {
    handleOpenProductModal(product);
  };

  return (
    <div className="products-page">
      {/* Product Modal Portal */}
      <ProductModal product={selectedProduct} onClose={handleCloseProductModal} />

      {/* Hero Banner */}
      <section className="products-hero">
      <div className="hero-bg-products">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1800&q=80"
          alt="Steel factory"
          className="hero-bg-img-products"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-overlay-products" />
      </div>
      <div className="hero-content-products">
        <nav className="hero-breadcrumbs-products">
          <a href="/" className="breadcrumb-link-products">
            <svg className="breadcrumb-home-svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            Home
          </a>
          <span className="breadcrumb-separator-products">|</span>
          <span className="breadcrumb-current-products">Products</span>
        </nav>
        <h1 className="hero-heading-products">
          Our <span className="hero-heading-accent-products">Products</span>
        </h1>
      </div>
      </section>

      <AboutIndustry/>

      {/* Products Section Header */}
      <div className="products-section-header">
        <div className="products-header-accent">
          <span className="accent-line"></span>
          <span className="accent-text">Our Products</span>
        </div>
        <h2 className="products-main-title">What We Deliver</h2>
        <p className="products-header-subtext">
          We provide high-grade, resilient steel products tailored to meet the strict performance standards and customer requirements.
        </p>
      </div>      

      {/* Products Grid */}
      <section className="products-section">
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onOpenModal={handleOpenProductModal} />
          ))}
        </div>
      </section>
      <ClientsStrip/>
      <Footer />
    </div>
  );
}

export default Products;