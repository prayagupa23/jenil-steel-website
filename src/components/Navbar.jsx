import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/logo2.png';
import './Navbar.css';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Industries We Serve', to: '/services' },
  { label: 'Our Reach', to: '/reach' },
  { label: 'CSR', to: '/csr' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const close = () => setMenuOpen(false);

  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === 'Escape') close(); };
    const onPointerDown = (e) => {
      if (!menuRef.current) return;
      if (menuRef.current.contains(e.target)) return;
      if (e.target.closest('.nav-burger')) return;
      close();
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="navbar-wrap">
      <nav className="navbar">

        {/* Logo */}
        <NavLink to="/" className="brand" aria-label="Jenil Steel Home" onClick={close}>
          <img src={logo} alt="Jenil Steel logo" />
        </NavLink>

        {/* Nav links — desktop row / mobile dropdown */}
        <div
          ref={menuRef}
          className={`nav-links${menuOpen ? ' open' : ''}`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `nav-link${isActive ? ' nav-link-active' : ''}`
              }
              onClick={close}
            >
              {item.label}
            </NavLink>
          ))}

          {/* CTA inside dropdown — mobile only */}
          <NavLink
            to="/contact"
            className="nav-cta nav-cta-drawer"
            onClick={close}
          >
            Request a Quote
          </NavLink>
        </div>

        {/* CTA in navbar bar — desktop only */}
        <NavLink
          to="/contact"
          className="nav-cta nav-cta-desktop"
          onClick={close}
        >
          Request a Quote
        </NavLink>

        {/* Burger — mobile only */}
        <button
          type="button"
          className={`nav-burger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

      </nav>
    </header>
  );
}

export default Navbar;