import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/menu">Menu</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/clients">Clients</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>

          <div className="footer__contact">
            <h3>Contact Us</h3>
            <p>08 Pizza Street, Cimahi City, PT Bahara</p>
            <p>
              Email: <a href="https://teguhbagasm04@gmail.com">info@thievpizza.com</a>
            </p>
            <p>Phone: +62 123 456 789</p>
          </div>

          <div className="footer__social">
            <h3>Follow Us</h3>
            <div className="footer__social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/teguhbagasm/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            &copy; 2024 ThievPizza. Created with <FaHeart /> by Teguh Bagas M.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
