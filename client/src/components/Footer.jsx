import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer1 _relative">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-3 col-md-6 col-12 d-flex flex-column justify-content-start"
            style={{ marginTop: -25 }}
          >
            <div className="single-footer-items footer-logo-area">
              <div className="footer-logo" style={{ textAlign: "center" }}>
                <Link to="/" style={{ display: "inline-block", textDecoration: "none" }}>
                  <img
                    src="/aspireedge-logo.png"
                    alt="AspireEdge Logo"
                    id="footer-logo-img"
                    style={{ maxHeight: 60, display: "block", margin: "0 auto" }}
                  />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#252525",
                      whiteSpace: "nowrap",
                      display: "block",
                      marginTop: 4,
                    }}
                  >
                    Unlocking Growth, Inspiring Leadership.
                  </span>
                </Link>
              </div>
              <div className="space20"></div>
              <div className="heading1">
                <p>AspireEdge offers smart software and training for growth and success.</p>
              </div>
              <ul className="social-icon">
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
              <div className="footer-extra-image mt-3">
                <img
                  src="/new-images/iso_logo__1_-removebg-preview.png"
                  alt="Extra Footer Image"
                  style={{ width: 165, height: "auto" }}
                />
              </div>
            </div>
          </div>

          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Service We Offer</h3>
              <ul className="menu-list">
                <li>
                  <Link to="/aai">AI Solutions</Link>
                </li>
                <li>
                  <Link to="/demand">Marketing Analysis</Link>
                </li>
                <li>
                  <Link to="/software">Software Development</Link>
                </li>
                <li>
                  <Link to="/consulting">IT Consulting</Link>
                </li>
                <li>
                  <Link to="/disclaimer">Disclaimer</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Useful Links</h3>
              <ul className="menu-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/solutions">Software Solution</Link>
                </li>
                <li>
                  <Link to="/specialized-programs">Specialized Program</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Contact Us</h3>
              <div className="contact-box">
                <div className="icon">
                  <img src="/assets/img/icons/footer1-icon1.png" alt="" />
                </div>
                <div className="pera">
                  <a href="tel:+91XXXXXXXXXX">+91 7205729525</a>
                </div>
              </div>
              <div className="contact-box">
                <div className="icon">
                  <img src="/assets/img/icons/footer1-icon2.png" alt="" />
                </div>
                <div className="pera">
                  <a href="tel:+91XXXXXXXXXX">+91 9078170607</a>
                </div>
              </div>
              <div className="contact-box">
                <div className="icon">
                  <img
                    src="/assets/img/icons/contact-page-icon2.png"
                    alt=""
                    style={{ width: 24, filter: "brightness(0) saturate(100%)" }}
                  />
                </div>
                <div className="pera">
                  <a href="mailto:connect@aspireedge.com">connect@aspireedge.com</a>
                </div>
              </div>
              <div className="contact-box">
                <div className="icon">
                  <img src="/assets/img/icons/footer1-icon4.png" alt="" />
                </div>
                <div className="pera">
                  <a href="https://aspireedge.com/" target="_blank" rel="noreferrer">
                    aspireedge.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space40"></div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="coppyright">
                <p>© {year} AspireEdge All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="coppyright right-area">
                <Link to="/terms-conditions">Terms &amp; Conditions</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
