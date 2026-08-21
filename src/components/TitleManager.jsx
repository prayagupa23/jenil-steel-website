import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titles = {
  '/': 'Jenil Steel',
  '/about': 'About Us',
  '/services': 'Services',
  '/products': 'Products',
  '/reach': 'Reach',
  '/csr': 'CSR',
  '/careers': 'Careers',
  '/contact': 'Contact',
};

function TitleManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] || 'Jenil Steel';
  }, [pathname]);

  return null;
}

export default TitleManager;
