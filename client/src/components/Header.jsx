import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <header className="desktop-header">
        <div className="header-area header-area1 header-area-all d-none d-md-block" id="header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-elements">
                  <div className="site-logo" style={{ textAlign: "center" }}>
                    <Link to="/" style={{ textDecoration: "none", display: "inline-block" }}>
                      <img
                        src="/aspireedge-logo.png"
                        alt="AspireEdge Logo"
                        style={{ maxHeight: 60, display: "block", margin: "0 auto" }}
                      />
                      <span
                        style={{
                          fontSize: 14,
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
                  <div className="main-menu-ex main-menu-ex1">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li className="dropdown-menu-parrent">
                        <a href="#">
                          About <i className="fa-solid fa-angle-down"></i>
                        </a>
                        <ul>
                          <li>
                            <Link to="/about">Overview</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu-parrent">
                        <a href="#">
                          Service <i className="fa-solid fa-angle-down"></i>
                        </a>
                        <ul>
                          <li>
                            <Link to="/solutions">Software Solutions</Link>
                          </li>
                          <li>
                            <Link to="/specialized-programs">Specialized Programs</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-resources">
                        <a href="#">Resources</a>
                      </li>
                      <li className="menu-item-careers">
                        <Link to="/careers">Career</Link>
                      </li>
                      <li className="menu-item-contact">
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li className="dropdown-menu-parrent more-menu">
                        <a href="#">
                          More <i className="fa-solid fa-angle-down"></i>
                        </a>
                        <ul>
                          <li>
                            <a href="#">Resources</a>
                          </li>
                          <li>
                            <Link to="/careers">Career</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact Us</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="header1-buttons">
                    <div className="button">
                      <Link className="theme-btn1" to="/login">
                        Register Now
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <div className="mobile-header d-block d-md-none">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div className="mobile-logo" style={{ textAlign: "center" }}>
                <Link to="/" style={{ display: "inline-block", textDecoration: "none" }}>
                  <img
                    src="/aspireedge-logo.png"
                    alt="AspireEdge Logo"
                    style={{ maxHeight: 50, display: "block", margin: "0 auto" }}
                  />
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#252525",
                      whiteSpace: "nowrap",
                      display: "block",
                      marginTop: 3,
                    }}
                  >
                    Unlocking Growth, Inspiring Leadership.
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <div
                className="mobile-nav-icon"
                id="mobile-menu-toggle"
                onClick={() => setMobileOpen(true)}
              >
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className="mobile-sidebar d-block d-md-none"
        style={mobileOpen ? { right: 0 } : undefined}
      >
        <div className="logo-m">
          <Link to="/">
            <img
              src="/aspireedge-logo.png"
              alt="AspireEdge Logo"
              style={{ maxHeight: 80, display: "block", margin: "0 auto" }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#ffffff",
                whiteSpace: "nowrap",
                display: "block",
                marginTop: 3,
                marginLeft: 45,
              }}
            >
              Unlocking Growth, Inspiring Leadership.
            </span>
          </Link>
        </div>
        <div className="menu-close" id="mobile-menu-close" onClick={() => setMobileOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>

        <div className="mobile-nav">
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
            </li>
            <li className="has-dropdown">
              <a href="#">About</a>
              <ul className="sub-menu">
                <li>
                  <Link to="/about" onClick={() => setMobileOpen(false)}>
                    Overview
                  </Link>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="#">Service</a>
              <ul className="sub-menu">
                <li>
                  <Link to="/solutions" onClick={() => setMobileOpen(false)}>
                    Software Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/specialized-programs" onClick={() => setMobileOpen(false)}>
                    Specialized Programs
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <Link to="/careers" onClick={() => setMobileOpen(false)}>
                Career
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="mobile-button">
            <Link className="menu-btn2" to="/login" onClick={() => setMobileOpen(false)}>
              Register Now{" "}
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>

          <div className="single-footer-items">
            <h3>Contact Us</h3>
            <div className="contact-box">
              <div className="icon">
                <img src="/assets/img/icons/footer1-icon1.png" alt="" />
              </div>
              <div className="pera">
                <a href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a>
              </div>
            </div>
            <div className="contact-box">
              <div className="icon">
                <img src="/assets/img/icons/footer1-icon2.png" alt="" />
              </div>
              <div className="pera">
                <a href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a>
              </div>
            </div>
            <div className="contact-box">
              <div className="icon">
                <img src="/assets/img/icons/footer1-icon3.png" alt="" />
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
                <a href="https://www.aspireedge.com/" target="_blank" rel="noreferrer">
                  aspireedge.com
                </a>
              </div>
            </div>
          </div>

          <div className="contact-infos">
            <h3>Our Location</h3>
            <ul className="social-icon">
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin-in"></i>
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
          </div>
        </div>
      </div>
    </>
  );
}
