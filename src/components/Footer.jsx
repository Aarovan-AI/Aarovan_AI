import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import './Footer.css';

export default function Footer() {
  const { isDark } = useTheme();

  const logoSrc = isDark ? '/logo_light.png' : '/logo.png';

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src={logoSrc}
              alt="Aarovan.ai Logo"
            />
            <span>Aarovan.ai</span>
          </div>
          <p>Pioneering AI-powered interview preparation for the next generation of global engineers.</p>
        </div>

        <div className="footer-column">
          <h4>Solutions</h4>
          <ul>
            <li><Link to="/features">For Colleges</Link></li>
            <li><Link to="/features">For Students</Link></li>
            <li><Link to="/features">Mock Interviews</Link></li>
            <li><Link to="/features">Skills Assessment</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>link</span>
            </a>
            <a href="#" aria-label="GitHub">
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>terminal</span>
            </a>
            <a href="#" aria-label="Email">
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>mail</span>
            </a>
          </div>
          <div className="footer-status">
            <div className="label">Platform Status</div>
            <div className="status-row">
              <div className="dot"></div>
              <span className="status-text">All systems operational</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Aarovan.ai. Engineering Excellence.</p>
        <div className="footer-bottom-links">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
