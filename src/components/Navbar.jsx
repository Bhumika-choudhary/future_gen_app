import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/Logo-FutureGenApps.png";
import companyProfile from "../assets/FutureGenApps_Company_Profile.pdf";
import "./Navbar.css";

const Navbar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // how much user scrolled
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight; // total scrollable height

      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ---------- 🔹 TOPBAR SECTION ---------- */}
      <div className="container-fluid head-size  ">
        <div className="row align-items-center">
          {/* Left - Contact Info */}
          <div className="col-md-5 text-md-start text-center left-content">
            <p className="mb-0" style={{ fontSize: "14px", display: "flex" }}>
              <a href="" style={{ color: "white" }} title="+91 7428623109">
                <i className="fa-solid fa-phone"></i> +91 7428623109, +91
                9650436809
              </a>
              <a
                href=""
                style={{ color: "white", paddingLeft: "15px" }}
                title="info@futuregenapps.com"
              >
                <i className="fa fa-envelope"></i>info@futuregenapps.com
              </a>
            </p>
          </div>

          {/* Right - Links */}
          <div className="col-md-7 ">
            <Link
              to="/"
              style={{
                color: "white",
                marginLeft: "20px",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              to="/"
              style={{
                color: "white",
                marginLeft: "20px",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              About
            </Link>

            {/* <a href="/About" style={{ color: "white", marginLeft: "20px", fontSize: "14px" }}>
              About
            </a> */}

            <Link
              to="/"
              style={{
                color: "white",
                marginLeft: "20px",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Portfolio
            </Link>
            <Link
              to="/"
              style={{
                color: "white",
                marginLeft: "20px",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Career
            </Link>
            <Link
              to="/"
              style={{
                color: "white",
                marginLeft: "20px",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Blog
            </Link>
            <Link
              to="/"
              style={{
                color: "white",
                marginLeft: "20px",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Refer &amp; Earn Money
            </Link>

            <a
              href=""
              style={{ color: "white", marginLeft: "20px", fontSize: "14px" }}
            >
              Refer &amp; Earn Money
            </a>
            <a
              href={companyProfile}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", marginLeft: "20px", fontSize: "14px" }}
            >
              <i className="fa fa-download" style={{ color: "#F59260" }}></i>{" "}
              Download Profile
            </a>
          </div>
        </div>
      </div>

      {/* ---------- 🔹 NAVBAR SECTION ---------- */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0 ">
        {/* Logo */}
        <a
          href="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
          title="FutureGenApps Logo"
        >
          <img
            src={logo}
            alt="FutureGenApps Logo"
            style={{ width: "100%", maxWidth: "220px", height: "auto" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Links */}
        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            {/* Company Dropdown */}
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Company
              </a>
              <div className="dropdown-menu fade-down m-0">
                <a href="about" className="dropdown-item head">
                  About FutureGenApps®
                </a>
                <hr className="fga-line" />
                <a href="our-mission-and-vision" className="dropdown-item head">
                  Our Mission & Vision
                </a>
                <hr className="fga-line" />
                <a href="why-futuregenapps" className="dropdown-item head">
                  Why FutureGenApps®
                </a>
                <hr className="fga-line" />
                <a href="our-success-stories" className="dropdown-item head">
                  Testimonials
                </a>
                <hr className="fga-line" />
                <a href="our-process" className="dropdown-item head">
                  Our Process
                </a>
              </div>
            </div>

            {/* Website Designing Dropdown */}
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Website Designing
              </a>
              <div className="dropdown-menu fade-down m-0">
                <a href="static-website-design" className="dropdown-item head">
                  Static Website Design
                </a>
                <hr className="fga-line" />
                <a href="dynamic-website-design" className="dropdown-item head">
                  Dynamic Website Design
                </a>
                <hr className="fga-line" />
                <a
                  href="ecommerce-website-design"
                  className="dropdown-item head"
                >
                  E-Commerce Website Design
                </a>
                <hr className="fga-line" />
                <a
                  href="corporate-website-design"
                  className="dropdown-item head"
                >
                  Corporate Website Design
                </a>
                <hr className="fga-line" />
                <a
                  href="responsive-website-design"
                  className="dropdown-item head"
                >
                  Responsive Website Design
                </a>
                <hr className="fga-line" />
                <a
                  href="landing-page-website-design"
                  className="dropdown-item head"
                >
                  Landing Page Website Design Services
                </a>
              </div>
            </div>

            {/* Website Development Dropdown */}
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Website Development
              </a>
              <div className="dropdown-menu fade-down m-0">
                <a href="wordpress-development" className="dropdown-item head">
                  WordPress Development
                </a>
                <hr className="fga-line" />
                <a href="laravel-development" className="dropdown-item head">
                  Laravel Development
                </a>
                <hr className="fga-line" />
                <a
                  href="codeigniter-development"
                  className="dropdown-item head"
                >
                  CodeIgnitor Development
                </a>
                <hr className="fga-line" />
                <a href="web-portal-development" className="dropdown-item head">
                  Web Portal Development
                </a>
                <hr className="fga-line" />
                <a href="cms-development" className="dropdown-item head">
                  CMS Development
                </a>
                <hr className="fga-line" />
                <a
                  href="ecommerce-website-development"
                  className="dropdown-item head"
                >
                  Ecommerce Website Development
                </a>
              </div>
            </div>

            {/* Other Links */}
            <a
              href="website-maintenance-services-in-delhi"
              className="nav-item nav-link"
            >
              Website Maintenance
            </a>
            <a href="onpage-seo" className="nav-item nav-link">
              SEO Services
            </a>
            <a
              href="industries-we-serve-futuregenapps"
              className="nav-item nav-link"
            >
              Industries
            </a>
            <a href="contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="header">
          <div className="progress-container">
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 9999,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "5px",
                  background: "#f1f1f1",
                }}
              >
                <div
                  style={{
                    width: `${scrollWidth}%`,
                    height: "5px",
                    background: "#F8588B",
                    transition: "width 0.6s ease",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
