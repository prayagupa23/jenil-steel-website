import Footer from "../components/Footer";
import "./Services.css";
import agriculture from '../assets/images/agriculture.jpeg';
import engineering from '../assets/images/engineering.jpeg';
import defence from '../assets/images/defence.jpeg';
import infrastructure from '../assets/images/infrastructure.jpeg';
import powerelectric from '../assets/images/powerelectric.jpeg';
import automobiles from '../assets/images/automobiles.jpeg';
import jswLogo from "../assets/images/jsw-logo-jv.webp";
import rinlLogo from "../assets/images/Rashtriya_Ispat_Nigam.svg.png";
import tataLogo from "../assets/images/tata-steel-logo.png";
import mukundLogo from '../assets/images/mukund.jpeg';
import nicoLogo from '../assets/images/nico.png';
import eslLogo from '../assets/images/esl.jpeg';
import sailLogo from '../assets/images/sail.png';
import aboutIndustry from '../assets/images/about-industry.jpeg';

const logos = [jswLogo, rinlLogo, tataLogo, mukundLogo, nicoLogo, eslLogo, sailLogo];

const services = [
  {
    id: 1,
    title: "Agriculture",
    description: "Supplying quality steel solutions for agricultural infrastructure, equipment, irrigation systems, and storage facilities.",
    image: agriculture,
  },
  {
    id: 2,
    title: "Engineering",
    description: "Providing reliable steel products for fabrication, industrial machinery, manufacturing, and engineering projects.",
    image: engineering,
  },
  {
    id: 3,
    title: "Defense",
    description: "Supporting defense and security sectors with high-quality steel materials that meet demanding performance requirements.",
    image: defence,
  },
  {
    id: 4,
    title: "Infrastructure",
    description: "Delivering steel products for large-scale infrastructure projects including bridges, highways, commercial buildings, and urban development.",
    image: infrastructure,
  },
  {
    id: 5,
    title: "Power & Electric",
    description: "Supplying steel solutions for power generation, transmission, electrical infrastructure, and energy-related projects.",
    image: powerelectric,
  },
  {
    id: 6,
    title: "Automobiles",
    description: "Providing steel materials that support automotive manufacturing, components, engineering, and transportation industries.",
    image: automobiles,
  },
];

function ServiceCard({ service, index }) {
  const cardNumber = String(index + 1).padStart(2, '0'); 

  return (
    <div className="service-card">
      <img src={service.image} alt={service.title} className="card-image" />
      <div className="card-overlay" />
      <div className="card-hover-number">{cardNumber}</div>
      <div className="card-content">
        <div className="card-accent-line" />
        <h3 className="card-title">{service.title}</h3>
        <p className="card-description">{service.description}</p>
      </div>
    </div>
  );
}

// New Section Component based on your image
function AboutIndustry() {
  return (
    <section className="about-industry-container animate-fade-in-up">
      <div className="about-industry-content">
        
        {/* Left Side: Worker Image with Zoom Frame */}
        <div className="about-industry-image-wrapper">
          <div className="about-industry-image-frame">
            <img 
              src={aboutIndustry}
              alt="Worker in industrial factory" 
              className="about-industry-main-img"
            />
          </div>
        </div>

        {/* Right Side: Text details */}
        <div className="about-industry-text-wrapper">
          <h2 className="about-industry-heading">
            The best solution for all industries and factories
          </h2>
          <p className="about-industry-subtext">
            Jenil Steel caters to a wide range of industries that drive India's growth and development. Our steel solutions serve Infrastructure, Construction, Automotive, Power & Energy, Engineering, Agriculture, Railways, and Defense sectors, providing the strength, durability, and performance required for critical applications. Backed by decades of industry expertise, we help businesses build, manufacture, and innovate with confidence.
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
    <section className="clients-strip-services">
      <p className="clients-title-services">Companies We Work With</p>
      <div className="marquee-fade-container-services">
        <div className="marquee-track-services">
          <div className="marquee-content-services">
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div className="client-logo-services" key={`${logo}-${idx}`}>
                <img src={logo} alt="Customer logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <div className="services-page">
      {/* Hero Banner */}
      <section className="services-hero">
        <div className="hero-bg-services">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1800&q=80"
            alt="Steel factory"
            className="hero-bg-img-services"
          />
          <div className="hero-overlay-services" />
        </div>
        <div className="hero-content-services">
          <nav className="hero-breadcrumbs-services">
            <a href="/" className="breadcrumb-link-services">
              <svg className="breadcrumb-home-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              Home
            </a>
            <span className="breadcrumb-separator-services">|</span>
            <span className="breadcrumb-current-services">Industries We Serve</span>
          </nav>
          <h1 className="hero-heading-services">
            Industries We <span className="hero-heading-accent-services">Serve</span>
          </h1>
        </div>
      </section>

      {/* Integrated split screen details section */}
      <AboutIndustry />

      {/* Services Section Header */}
      <div className="services-section-header">
        <div className="services-header-accent">
          <span className="accent-line"></span>
          <span className="accent-text">Industries We Serve</span>
        </div>
        <h2 className="services-main-title">What We Do for Our Industries</h2>
        <p className="services-header-subtext">
          We provide high-grade, resilient steel products tailored to meet the strict performance standards and structural requirements of diverse sectors across India.
        </p>
      </div>

      {/* services Grid */}
      <section className="services-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index}/>
          ))}
        </div>
      </section>
      
      <ClientsStrip/>
      <Footer />
    </div>
  );
}

export default Services;