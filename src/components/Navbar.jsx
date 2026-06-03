import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/logo2.png';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label : 'Our Reach', to: '/reach'},
  { label: 'CSR', to: '/csr' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    const onPointerDown = (e) => {
      if (!menuRef.current) return;
      if (menuRef.current.contains(e.target)) return;
      setMenuOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  return (
    <header className="navbar-wrap">
      <nav className="navbar">
        <NavLink to="/" className="brand" aria-label="Jenil Steel Home">
          <img src={logo} alt="Jenil Steel logo" />
        </NavLink>
        <button
          type="button"
          className="nav-burger"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

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
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="nav-cta"
          onClick={() => setMenuOpen(false)}
        >
          Request a Quote
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
