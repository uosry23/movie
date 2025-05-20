import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaFilm, FaHeart } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-main">
          <Col md={4} className="footer-brand mb-4 mb-md-0">
            <div className="footer-logo">
              <span className="brand-text">CineFlix</span>
            </div>
            <p className="footer-description">
              Your ultimate destination for movies and TV series. Discover, explore, and enjoy the best of entertainment.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaYoutube />
              </a>
            </div>
          </Col>

          <Col md={2} sm={6} className="footer-links mb-4 mb-md-0">
            <h5 className="footer-heading">Explore</h5>
            <ul className="footer-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/movies">Movies</Link></li>
              <li><Link to="/series">TV Series</Link></li>
              <li><Link to="#">New Releases</Link></li>
            </ul>
          </Col>

          <Col md={2} sm={6} className="footer-links mb-4 mb-md-0">
            <h5 className="footer-heading">Company</h5>
            <ul className="footer-list">
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Blog</Link></li>
            </ul>
          </Col>

          <Col md={4} className="footer-newsletter">
            <h5 className="footer-heading">Stay Updated</h5>
            <p>Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="footer-bottom">
          <Col md={6} className="copyright">
            <p>© {new Date().getFullYear()} CineFlix. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="footer-bottom-links">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="#">Cookie Policy</Link>
          </Col>
        </Row>

        <div className="made-with-love">
          <p>Made with <FaHeart className="heart-icon" /> by <span>CineFlix Team</span></p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
