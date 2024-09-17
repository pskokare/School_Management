import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconStyle = {
    marginRight: '10px',
    color: '#fff',
  };

  return (
    <footer className="site-footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* News and Publications Section */}
          <div className="col-md-3">
            <h6>News</h6>
            <ul className="list-unstyled">
              <li><Link to="/latest-news" className="text-white">News 1</Link></li>
              <li><Link to="/latest-news" className="text-white">News 2</Link></li>
              <li><Link to="/latest-news" className="text-white">News 3</Link></li>
            </ul>
            
          </div>

          {/* Contact Information */}
          <div className="col-md-3">
            <h6>Contact</h6>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 1234 Street, City, Country</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/about-us" className="text-white">About Us</Link></li>
              <li><Link to="/contact-us" className="text-white">Contact Us</Link></li>
              <li><Link to="/contribute" className="text-white">Contribute</Link></li>
              <li><Link to="/privacy-policy" className="text-white">Privacy Policy</Link></li>
              <li><Link to="/sitemap" className="text-white">Sitemap</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
           
            <h6>Publications</h6>
            <ul className="list-unstyled">
              <li><Link to="/publications" className="text-white">Publication 1</Link></li>
              <li><Link to="/publications" className="text-white">Publication 2</Link></li>
              <li><Link to="/publications" className="text-white">Publication 3</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr />

      {/* Footer Bottom */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 col-sm-6">
            <p className="copyright-text">
              &copy; {currentYear} All Rights Reserved by <Link to="/" className="text-white">Your Website</Link>
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" style={iconStyle} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" style={iconStyle} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" style={iconStyle} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
