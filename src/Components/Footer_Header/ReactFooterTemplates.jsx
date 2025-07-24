import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCreditCard,
  FaPaypal,
} from "react-icons/fa";
import "./ReactHeaderTemplates.css";

const ReactFooterTemplates = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-5 pb-4 ">
      <div className="container">
        <div className="row gy-4">
          {/* Quick Links */}

          <div className="col-12 col-sm-6 col-lg-3 hover-scale">
            <h5 className="text-warning mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                "About Us",
                "Contact",
                "Menu",
                "Delivery Information",
                "Terms of Service",
              ].map((link) => (
                <li key={link}>
                  <button className="btn btn-link text-secondary text-decoration-none ps-0 hover-orange">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-sm-6 col-lg-3 hover-scale">
            <h5 className="text-warning mb-3">Contact Information</h5>
            <div className="text-secondary">
              <p className="mb-2 hover-orange">123 Food Street, Cuisine City</p>
              <p className="mb-2 hover-orange">Phone: (555) 123-4567</p>
              <p className="mb-2 hover-orange">Email: info@foodiespot.com</p>
              <p className="mb-0 hover-orange">Hours: Mon-Sun 10:00 - 22:00</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="col-12 col-sm-6 col-lg-3 hover-scale">
            <h5 className="text-warning mb-3">Follow Us</h5>
            <div className="d-flex gap-3  ">
              {[
                { icon: <FaFacebookF />, label: "Facebook" },
                { icon: <FaTwitter />, label: "Twitter" },
                { icon: <FaInstagram />, label: "Instagram" },
                { icon: <FaLinkedinIn />, label: "LinkedIn" },
              ].map((social) => (
                <button
                  key={social.label}
                  className="btn btn-secondary rounded-circle p-2 hover-scale hover-orange "
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="text-warning mb-3">Newsletter</h5>
            <div className="d-grid gap-3">
              <input
                type="email"
                className="form-control newsletter-input"
                placeholder="Enter your email"
              />
              <button className="btn btn-warning btn-press hover-orange">
                Subscribe
              </button>
            </div>
          </div>
          {/* <div className="col-12 col-sm-6 col-lg-3 hover-scale">
            <h5 className="text-warning mb-3">Newsletter</h5>
            <div className="d-grid gap-3">
              <input
                type="email"
                className="form-control input-focus-outline bg-dark text-white border-secondary"
                placeholder="Enter your email"
              />
              <button className="btn btn-warning hover-scale">Subscribe</button>
            </div>
          </div> */}
        </div>

        {/* Bottom bar */}
        <div className="border-top border-secondary mt-5 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="d-flex gap-4 mb-3 mb-md-0">
            <FaCreditCard className="fs-3 hover-orange hover-scale" />
            <FaPaypal className="fs-3 hover-orange hover-scale" />
          </div>
          <p className="text-secondary mb-0 hover-orange text-center">
            © {currentYear} FoodieSpot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ReactFooterTemplates;
