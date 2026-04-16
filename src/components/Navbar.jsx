import { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import './Navbar.css';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/features', label: 'Features' },
  { path: '/team', label: 'Team' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  const logoSrc = isDark ? '/logo_light.png' : '/logo.png';

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo">
          <img
            src={logoSrc}
            alt="Aarovan.ai Logo"
          />
          <span>Aarovan.ai</span>
        </NavLink>

        <div className="navbar-links">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="navbar-actions">
          <Link to="/contact" className="btn-demo">Request Demo</Link>
          <Link to="/contact" className="btn-partner gradient-primary btn-ripple">Partner with Us</Link>
          <button
            className="navbar-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      <div className={`navbar-mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {label}
          </NavLink>
        ))}
        <button className="btn-partner gradient-primary btn-ripple" style={{ marginTop: '0.5rem', width: '100%' }}>
          Partner with Us
        </button>
      </div>
      </nav>
    </>
  );
}
