import Footer from "../components/Footer";
import "./Products.css";
import tmtBar from '../assets/images/tmtbar.jpeg';
import wireRods from '../assets/images/wirerods.jpeg';
import angels from '../assets/images/angels.jpeg';
import billets from '../assets/images/billets.jpeg';
import roundBars from '../assets/images/roundbars.jpeg';
import beams from '../assets/images/beams.jpeg';
import channels from '../assets/images/channels.jpeg';
import jswLogo from "../assets/images/jsw-logo-jv.webp";
import rinlLogo from "../assets/images/Rashtriya_Ispat_Nigam.svg.png";
import tataLogo from "../assets/images/tata-steel-logo.png";

const logos = [jswLogo, rinlLogo, tataLogo];

const products = [
  {
    id: 1,
    title: "Wire Rods",
    description: "High-quality wire rods used in wire drawing, fasteners, electrodes, and engineering applications.",
    specs: [
      { label: "Grade", value: "Low Carbon / High Carbon" },
      { label: "Standard", value: "IS 7887" },
      { label: "Size", value: "5.5mm – 16mm" },
    ],
    image: wireRods,
  },
  {
    id: 2,
    title: "TMT Bars",
    description: "Fe-500D & Fe-550D grade TMT bars with superior strength and ductility.",
    specs: [
      { label: "Grade", value: "Fe-500D / Fe-550D" },
      { label: "Standard", value: "IS 1786:2008" },
      { label: "Size", value: "8mm – 32mm" },
    ],
    image: tmtBar,
  },
  {
    id: 3,
    title: "Angles",
    description: "Equal and unequal steel angles widely used in structural frameworks and fabrication projects.",
    specs: [
      { label: "Type", value: "Equal / Unequal" },
      { label: "Standard", value: "IS 808" },
      { label: "Size", value: "25×25mm – 200×200mm" },
    ],
    image: angels,
  },
  {
    id: 4,
    title: "Billets",
    description: "Steel billets used as raw material for manufacturing TMT bars, wire rods, and other rolled products.",
    specs: [
      { label: "Grade", value: "MS / Carbon Steel" },
      { label: "Standard", value: "IS 2830" },
      { label: "Size", value: "100×100mm – 150×150mm" },
    ],
    image: billets,
  },
  {
    id: 5,
    title: "Round Bars",
    description: "Hot-rolled round bars suitable for machining, construction, engineering, and fabrication applications.",
    specs: [
      { label: "Grade", value: "MS / EN Series" },
      { label: "Standard", value: "IS 2062" },
      { label: "Size", value: "12mm – 100mm" },
    ],
    image: roundBars,
  },
  {
    id: 6,
    title: "Beams",
    description: "Structural steel beams designed for superior load-bearing performance in industrial and commercial construction.",
    specs: [
      { label: "Type", value: "H-Beam / I-Beam" },
      { label: "Standard", value: "IS 808 / IS 2062" },
      { label: "Size", value: "100mm – 600mm" },
    ],
    image: beams,
  },
  {
    id: 7,
    title: "Channels",
    description: "Steel channels used in structural support systems, fabrication works, and industrial frameworks.",
    specs: [
      { label: "Type", value: "ISMC / ISSC" },
      { label: "Standard", value: "IS 808" },
      { label: "Size", value: "75mm – 400mm" },
    ],
    image: channels,
  },  
];

function ProductCard({ product }) {
  return (
    <div className="product-card">
      {/* Full-card background image */}
      <img src={product.image} alt={product.title} className="card-image" />

      {/* Dark gradient overlay — content sits on top of this */}
      <div className="card-overlay" />

      {/* Content overlaid on the image */}
      <div className="card-content">
        <div className="card-accent-line" />
        <h3 className="card-title">{product.title}</h3>
        <p className="card-description">{product.description}</p>
        <div className="card-specs">
          {product.specs.map((spec) => (
            <div className="spec-row" key={spec.label}>
              <span className="spec-label">{spec.label}</span>
              <span className="spec-value">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClientsStrip() {
  return (
    <section className="clients-strip-products">
      <p className="clients-title-products">Companies We Work With</p>
      <div className="marquee-fade-container-products">
        <div className="marquee-track-products">
          <div className="marquee-content-products">
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div className="client-logo-products" key={`${logo}-${idx}`}>
                <img src={logo} alt="Customer logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <div className="products-page">
      {/* Hero Banner */}
      <section className="products-hero">
      <div className="hero-bg-products">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1800&q=80"
          alt="Steel factory"
          className="hero-bg-img-products"
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

      {/* Products Grid */}
      <section className="products-section">
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <ClientsStrip/>
      <Footer />
    </div>
  );
}

export default Products;