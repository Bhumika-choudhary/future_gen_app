import "./Home.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images import

import Img from "../assets/web-designing-company-India.png";




//  services img

import Img1 from "../assets/Web-Designing-Services.png";
import Img2 from "../assets/Ecommerce-Development-Company.png";
import Img3 from "../assets/Digital-Marketing-Services.png";
import Img4 from "../assets/Mobile-App-Development.png";
import Img5 from "../assets/Graphics-Designing-Services.png";
import Img6 from "../assets/Software-Development-Company.png";


// work flow img 

import best from "../assets/1.png";
import Research from "../assets/2.png";
import Development from "../assets/3.png";
import Demo from "../assets/4.png";


// rating img 

import google from "../assets/Google-RatingsN.png";
import facebook from "../assets/Facebook-Ratings.png";
import justdial from "../assets/JustDial-Ratings.png";

// brand img 

import brand1 from "../assets/Maple-Bear-South-Asia.png"
import brand2 from "../assets/3S-Graphic-Solutions.png"
import brand3 from "../assets/HCI-Tech.png"
import brand4 from "../assets/Greenfields-Public-School-VivekVihar.png"
import brand5 from "../assets/Quantinox.png"
import brand6 from "../assets/Cam-Edu-Consult.png"
import brand7 from "../assets/United-Homez.png"
import brand8 from "../assets/Ra-Legal.png"
import brand9 from "../assets/Vivah-Luxury-Weddings.png"


// technologies img

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript1.png";
import react from "../assets/react.png";
import php from "../assets/php.png";
import laravel from "../assets/laravel.png";
import codeignetor from "../assets/codeignetor.png";
import python from "../assets/python.png";
import nodejs from "../assets/nodejs.png";
import android from "../assets/android.png";
import ios from "../assets/ios.png";
import seo from "../assets/seo.png";
// import smo from "../assets/smo.png";
// import localseo from "../assets/Local-SEO.png";
// import googleads from "../assets/Google_Ads.png";
// import facebook from "../assets/facebook.png";
// import ecommerce from "../assets/Ecommerce-SEO.png";




// clients Image 


import GrandTambu from "../assets/grand-tambu.png";
import UnitedHomez from "../assets/United_Homez.png";
import IAPRichs from "../assets/IAP-Logo_Small.png";
import VetaasNatuure from "../assets/vetaasnature.png";
import Autoflex from "../assets/autoflex logo -FutureGenApps.jpg";
import Maplebear from "../assets/Maplebear.png";
import Graphic from "../assets/3sgraphicsolutions.jpg";
import Cambridge from "../assets/cambridge-logo.png";
import HCI from "../assets/Logo HCI Technologies.png";


// blog images 

import blog1 from "../assets/maintaince.jpg";
import blog2 from "../assets/Organic-Digital-Marketing-FutureGenApps.jpg";
import blog3 from "../assets/Social bookmarking sites for seo - FutureGenApps.webp";


// footer image 

import footer1 from "../assets/justdial-logo.png"
import footer2 from "../assets/indiamart-logo.png"


const clients = [
 
  {
    img: GrandTambu,
    alt: "Grand Tambu",
    title: "Grand Tambu",
  },
  {
    img: UnitedHomez,
    alt: "United Homez",
    title: "United Homez",
  },
  {
    img: IAPRichs,
    alt: "IAP-Richs",
    title: "IAP-Richs",
  },
  {
    img: VetaasNatuure,
    alt: "Vetaas Natuure",
    title: "Vetaas Natuure",
  },
  {
    img: Autoflex,
    alt: "Autoflex",
    title: "Autoflex",
  },
  {
    img: Maplebear,
    alt: "Mapple Bear South Asia",
    title: "Mapple Bear South Asia",
  },
  {
    img: Graphic,
    alt: "3 S Graphic Solutions",
    title: "3 S Graphic Solutions",
  },
  {
    img: Cambridge,
    alt: "Cambridge Education Consultants",
    title: "Cambridge Education Consultants",
  },
  {
    img: HCI,
    alt: "HCI Technologies",
    title: "HCI Technologies",
  },
];


// Custom Buttons
const PrevArrow = (props) => (
  <button
    {...props}
    className="slick-prev custom-arrow"
    style={{
      left: "-50px",
      background: "#00805F",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      zIndex: 2,
    }}
  >
    ‹
  </button>
);

const NextArrow = (props) => (
  <button
    {...props}
    className="slick-next custom-arrow"
    style={{
      right: "-50px",
      background: "#00805F",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      zIndex: 2,
    }}
  >
    ›
  </button>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1200, // for large tablets or small laptops
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 992, // tablets
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768, // landscape mobile
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 576, // small mobile
      settings: { slidesToShow: 2 },
    },
  ],
};

export default function Home() {
  const words = [
    "Software Development",
    "Paid Marketing",
    "Mobile Application",
    "Website Designing",
    " Website Development",
    " SEO Service",
    " Website Maintenance",
    " Social Media Management",
  ];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentWord.substring(0, charIndex - 1)
          : currentWord.substring(0, charIndex + 1)
      );

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }

      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  });

  // technology

  const techItems = [
    { name: "HTML", img: html, title: "HTML" },
    { name: "CSS", img: css, title: "CSS" },
    { name: "JavaScript", img: javascript, title: "JavaScript" },
    { name: "React", img: react, title: "React" },
    { name: "PHP", img: php, title: "PHP" },
    { name: "Laravel", img: laravel, title: "Laravel" },
    { name: "CodeIgniter", img: codeignetor, title: "CodeIgniter" },
    { name: "Python", img: python, title: "Python" },
    { name: "Node.Js", img: nodejs, title: "Node.Js" },
    { name: "Android", img: android, title: "Android" },
    { name: "iOS", img: ios, title: "iOS" },
    { name: "SEO", img: seo, title: "SEO" },
    // { name: "SMO", img: smo, title: "SMO" },
    // { name: "Local SEO", img: localseo, title: "Local SEO" },
    // { name: "Google Ads", img: googleads, title: "Google Ads" },
    // { name: "Facebook", img: facebook, title: "Facebook" },
    // { name: "Ecommerce", img: ecommerce, title: "Ecommerce" },
  ];

  // work flow


  const steps = [
    {
      img: best,
      title: "Requirement understanding",
      alt: "best website designers in India",
      topMargin: "30px",
    },
    {
      img:Research,
      title: "Research, Analysis & Design",
      alt: "Web development services in India",
      topMargin: "20px",
    },
    {
      img: Development,
      title: "Development & Testing",
      alt: "Responsive website designing in India",
      topMargin: "30px",
    },
    {
      img: Demo,
      title: "Demo & Final Delivery",
      alt: "website maintenance services in India",
      topMargin: "30px",
    },
  ];

  // rating

  const ratings = [
    {
      img: google,
      link: "https://g.page/FutureGenApps-SoftwareSolutions",
      alt: "Website Designing Company in India",
      title: "FutureGenApps Google Ratings",
    },
    {
      img: facebook,
      link: "https://www.facebook.com/FutureGenApp",
      alt: "website development company in India",
      title: "FutureGenApps Facebook Ratings",
    },
    {
      img: justdial,
      link: "https://www.justdial.com/Delhi/Future-Gen-Apps-Software-Solutions-Behind-Wave-Cinemas-Kaushambi/011PXX11-XX11-170516110010-F9I5_BZDET",
      alt: "Best Web designing Company in India",
      title: "FutureGenApps JustDial Ratings",
    },
  ];

  // brand

  const brands = [
    {
      name: "Maple Bear South Asia",
      img: brand1,
      title: "website designing in India",
    },
    {
      name: "3 S Graphic Solutions",
      img: brand2,
      title: "Top website developer in India",
    },
    {
      name: "HCI Technologies",
      img: brand3,
      title: "Website designing in India",
    },
    {
      name: "Greenfields School Vivek Vihar",
      img: brand4,
      title: "Website Designing Company India",
    },
    {
      name: "QUANTINOX B2B Solutions",
      img: brand5,
      title: "Web Designing Company in India",
    },
    {
      name: "Cambridge Education Consultants",
      img: brand6,
      title: "Indian Web Design Company",
    },
    {
      name: "United Homez",
      img: brand7,
      title: "website design samples",
    },
    {
      name: "Rajeshwari & Associates",
      img: brand8,
      title: "Best website developer in India",
    },
    {
      name: "Vivah Luxury Weddings",
      img: brand9,
      title: "website design in India",
    },
  ];



  // why hire

  const cards = [
    { title: "Best Quality" },
    { title: "100% Satisfaction" },
    { title: "Ontime Delivery" },
    { title: "Long term Support" },
  ];

  // FQA

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "Why should you hire FutureGenApps® for website designing in India?",
      answer:
        "With years of experience in the website designing and development industry, we have a team of professional website designers in India. We have established ourselves as the best website designing company in India to tailor websites to customer unique needs.",
    },
    {
      question:
        "What makes FutureGenApps® the top website designing company in India?",
      answer:
        "Our website designers and developers in India have diverse expertise in designing and delivering quality websites in India within scheduled timelines.",
    },
    {
      question: "How long does it take to develop a website in India?",
      answer:
        "The actual effort for website designing in India relies on the size and complexity of the project. A static website takes about 4-5 days, while an ecommerce or dynamic website can take 15–20 days, depending on client requirements.",
    },
    {
      question: "How to hire affordable web designing company in India?",
      answer:
        "FutureGenApps® offers affordable website designing services in India. Our pricing is reasonable and aims to make websites accessible for every business to leverage digital marketing.",
    },
    {
      question: "Is web designer in demand in India?",
      answer:
        "Yes, the demand for web designers in India has increased drastically as more businesses and startups go online to promote their products and services.",
    },
    {
      question: "Which company is best for website designing in India?",
      answer:
        "Choosing the best company depends on your needs and budget. FutureGenApps® is a leading website development company in India with strong presence in Delhi, Noida, and PAN India, offering design, maintenance, and SEO services.",
    },
    {
      question:
        "Can we request changes to our website design during the development process?",
      answer:
        "Yes, we collaborate closely with clients to make timely changes during the design phase based on feedback after initial demos.",
    },
    {
      question:
        "How to get started with FutureGenApps for my website designing project in India?",
      answer:
        "You can call or WhatsApp our team at +91 7428623109 or click 'Get Free Callback' on our website to start your project. We’ll discuss requirements, share estimates, and guide you through the process.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/*-------------hero section---------*/}

      <section className="hero-section">
        <div className="container">
          <div className="row col-rw">
            {/* Left Column */}
            <div className="col-md-7 slide-col">
              <h3 className="display-heading">
                <strong>
                  <span className="font-me outlined-text">
                    Grow your Business with
                  </span>
                  <br />
                  <span className="font-me text-dark">
                    Digital Marketing Services:
                  </span>
                  <br />
                  <span id="word" className="text-highlight">
                    {text}
                  </span>
                  <span id="cursor"></span>
                </strong>
              </h3>
              <br />
              <h1 className="subheading">
                Best Website Designing Company in India offering complete
                <br /> Web Designing &amp; Development solution with SEO
                Services
                <br />
              </h1>
              <br />
              <p>
                <a
                  title="Website Design Company in India"
                  href="tel:+917428623109"
                >
                  <button className="fga-btnn call-btn">
                    <i className="fa fa-phone-alt"></i>{" "}
                    <span>+91 7428623109</span>
                  </button>
                </a>
                &nbsp;&nbsp;&nbsp;
                <button
                  className="fga-btnt email-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#enquiryModal"
                >
                  <i className="fa fa-envelope"></i>{" "}
                  <span className="our-icon">Send email</span>
                </button>
              </p>
            </div>

            {/* Right Column */}
            <div className="col-md-4">
              <div className="contact-box">
                <h5 className="contact-title">
                  Call Now:{" "}
                  <a href="tel:+917428623109" className="contact-number">
                    +91 7428623109
                  </a>
                </h5>

                <form
                  className="form-group"
                  method="post"
                  action="saveContacts"
                >
                  <h4 className="form-heading">
                    Share your requirement
                    <br />
                    <small>Get instant Quotation</small>
                  </h4>
                  <center>
                    <img
                      src="https://www.futuregenapps.com/frontend/img/icons1.png"
                      alt="website designing in India"
                      title="website development company in India"
                      className="form-icon"
                    />
                  </center>

                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    name="mobile"
                    placeholder="Mobile"
                    required
                  />
                  <textarea
                    className="form-control"
                    rows="1"
                    name="message"
                    placeholder="Write your requirement"
                    required
                  ></textarea>

                  <button className="fga-btnn offer-btn">Get Best Offer</button>
                </form>
              </div>
            </div>
          </div>
          <br />
        </div>
      </section>

      {/*-----------mission section-----------*/}

      <section className="mission-section hide">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-2 mission-left">
              <p>
                <b>OUR MISSION:</b>
              </p>
            </div>

            {/* Right Column */}
            <div className="col-md-10 text-center mission-right ">
              <p>
                <b>
                  We are on a mission to develop{" "}
                  <b>website for every business</b> in India and across the
                  Globe. Join us in carrying out our mission.
                </b>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*------------services------------*/}

      <section
        className="fga-section1"
        style={{
          background: "white",
          borderBottom: "5px solid #086AD8",
          borderRadius: "0px 0px 20px 20px",
        }}
      >
        <br />
        <br />
        <div className="container">
          <h2
            className="text-center"
            style={{ color: "#010948", fontSize: "30px" }}
          >
            Explore Our Digital Marketing Services in India
          </h2>
          <h3
            className="text-center"
            style={{ color: "#010948", fontSize: "20px", fontWeight: "bold" }}
          >
            <span style={{ color: "#207DE9" }}>FutureGenApps®</span> - Best
            Website Designing Company in India
          </h3>
          <br />
          <br />

          {/* ===== First Row ===== */}
          <div className="row">
            <div className="col-md-4">
              <div className="hover-2">
                <br />
                <center>
                  <img
                    className="fga-img"
                    src={Img1}
                    alt="Web Designing Services in India - FutureGenApps®"
                    title="web designing company in India"
                    style={{
                      width: "80px",
                      height: "80px",
                      border: "1px solid white",
                    }}
                  />
                </center>
                <br />
                <a
                  title="Web Designing Company in India"
                  href=""
                  style={{ zIndex: 200, textDecoration: "none" }}
                >
                  <h4
                    className="text-center"
                    style={{
                      color: "#010948",
                    }}
                  >
                    Web Designing Services
                  </h4>
                </a>
                <p
                  className="text-center perr"
                  style={{ padding: "30px", color: "black", fontWeight: "450" }}
                >
                  Static &amp; Dynamic{" "}
                  <a
                    href=""
                    style={{
                      textDecoration: "none",
                      color: "#05AAD3",
                      fontWeight: "500",
                    }}
                  >
                    Website Designing
                  </a>{" "}
                  &amp; Development in WordPress, PHP, Laravel, HTML, CSS,
                  JavaScript, etc.
                </p>
                <center>
                  <a
                    title="Website Development Company in India"
                    href="website-design-company-in-delhi-ncr"
                    style={{ zIndex: 200 }}
                    className="button"
                  >
                    <i
                      className="fa fa-arrow-right icon"
                      style={{
                        color: "#F26D2B",
                        background: "#010948",
                        padding: "10px",
                        borderRadius: "10px",
                        fontSize: "20px",
                      }}
                    ></i>
                  </a>
                </center>
              </div>
            </div>

            <div className="col-md-4">
              <div className="hover-2">
                <br />
                <center>
                  <img
                    className="fga-img"
                    src={Img2}
                    alt="Web Development Company in India - FutureGenApps®"
                    title="website development in India"
                    style={{
                      width: "80px",
                      height: "80px",
                      border: "1px solid #8AC43C",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  />
                </center>
                <br />
                <a
                  title="Ecommerce Website Development"
                  href="ecommerce-website-development-company-in-delhi"
                  style={{ zIndex: 200, textDecoration: "none" }}
                >
                  <h4
                    className="text-center"
                    style={{
                      color: "#010948",
                      fontSize: "23px",
                    }}
                  >
                    Ecommerce Website Services
                  </h4>
                </a>
                <p className="text-center" style={{ padding: "24px" }}>
                  Having team of skilled web developers to develop e-commerce
                  website that can grow your business.
                </p>
                <center>
                  <a
                    title="SEO Company in Delhi"
                    href="ecommerce-website-development-company-in-delhi"
                    className="button"
                  >
                    <i
                      className="fa fa-arrow-right icon"
                      style={{
                        color: "#F26D2B",
                        background: "#010948",
                        padding: "10px",
                        borderRadius: "10px",
                        fontSize: "20px",
                      }}
                    ></i>
                  </a>
                </center>
              </div>
            </div>

            <div className="col-md-4">
              <div className="hover-2">
                <br />
                <center>
                  <img
                    className="fga-img"
                    src={Img3}
                    alt="Website Design India"
                    title="website designing in India"
                    style={{
                      width: "80px",
                      height: "80px",
                      border: "1px solid #8AC43C",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  />
                </center>
                <br />
                <a
                  href="digital-marketing-company-in-delhi-ncr"
                  title="Digital Marketing"
                  style={{ zIndex: 200, textDecoration: "none" }}
                >
                  <h4
                    className="text-center"
                    style={{
                      color: "#010948",
                    }}
                  >
                    Digital Marketing Services
                  </h4>
                </a>
                <p className="text-center" style={{ padding: "30px" }}>
                  We help Promote your Business with SEO &amp; Digital Marketing
                  Services leading more Revenue.
                </p>
                <center>
                  <a
                    href="digital-marketing-company-in-delhi-ncr"
                    title="Seo Company"
                    className="button"
                  >
                    <i
                      className="fa fa-arrow-right icon"
                      style={{
                        color: "#F26D2B",
                        background: "#010948",
                        padding: "10px",
                        borderRadius: "10px",
                        fontSize: "20px",
                      }}
                    ></i>
                  </a>
                </center>
              </div>
            </div>
          </div>

          <br />
          <br />

          {/* ===== Second Row ===== */}
          <div className="row">
            <div className="col-md-4">
              <div className="hover-2">
                <br />
                <center>
                  <img
                    className="fga-img"
                    src={Img4}
                    alt="Web Design Company in India"
                    title="Web Design Company in India"
                    style={{
                      width: "80px",
                      height: "80px",
                      border: "1px solid #8AC43C",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  />
                </center>
                <br />
                <a
                  href="mobile-app-development-company-in-delhi"
                  title="Mobile App Development Company"
                  style={{ zIndex: 200, textDecoration: "none" }}
                >
                  <h4
                    className="text-center"
                    style={{
                      color: "#010948",
                    }}
                  >
                    Mobile App Development
                  </h4>
                </a>
                <p className="text-center" style={{ padding: "30px" }}>
                  Have an Idea? Get in touch with a Top Mobile Apps Development
                  Company in India.
                </p>
                <center>
                  <a
                    href="mobile-app-development-company-in-delhi"
                    title="Mobile App Development Company"
                    className="button"
                  >
                    <i
                      className="fa fa-arrow-right icon"
                      style={{
                        color: "#F26D2B",
                        background: "#010948",
                        padding: "10px",
                        borderRadius: "10px",
                        fontSize: "20px",
                      }}
                    ></i>
                  </a>
                </center>
              </div>
            </div>

            <div className="col-md-4">
              <div className="hover-2">
                <br />
                <center>
                  <img
                    className="fga-img"
                    src={Img5}
                    alt="India Website designing Company"
                    title="India Website designing Company"
                    style={{
                      width: "80px",
                      height: "80px",
                      border: "1px solid #8AC43C",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  />
                </center>
                <br />
                <a
                  href="logo-designing-company-in-delhi"
                  title="Logo Designing Company"
                  style={{ zIndex: 200, textDecoration: "none" }}
                >
                  <h4
                    className="text-center"
                    style={{
                      color: "#010948",
                      fontSize: "23px",
                    }}
                  >
                    Graphics Designing Services
                  </h4>
                </a>
                <p className="text-center" style={{ padding: "30px" }}>
                  Our Graphics Designing services include Logo, Brochure
                  Designing, and Printing Services.
                </p>
                <center>
                  <a
                    href="logo-designing-company-in-delhi"
                    title="Logo Designing Company"
                    className="button"
                  >
                    <i
                      className="fa fa-arrow-right icon"
                      style={{
                        color: "#F26D2B",
                        background: "#010948",
                        padding: "10px",
                        borderRadius: "10px",
                        fontSize: "20px",
                      }}
                    ></i>{" "}
                  </a>
                </center>
              </div>
            </div>

            <div className="col-md-4">
              <div className="hover-2">
                <br />
                <center>
                  <img
                    className="fga-img"
                    src={Img6}
                    alt="website designer in India"
                    title="website designer in India"
                    style={{
                      width: "80px",
                      height: "80px",
                      border: "1px solid #8AC43C",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  />
                </center>
                <br />
                <a
                  href="software-company-in-delhi"
                  title="Software Development"
                  style={{ zIndex: 200, textDecoration: "none" }}
                >
                  <h4
                    className="text-center"
                    style={{
                      color: "#010948",
                    }}
                  >
                    Software Development
                  </h4>
                </a>
                <p className="text-center" style={{ padding: "30px" }}>
                  Team of experienced developers to develop cloud-based or
                  offline software (ERP, CRM)
                </p>
                <center>
                  <a
                    href="seo-company-in-ghaziabad"
                    title="Seo Company"
                    className="button"
                  >
                    <i
                      className="fa fa-arrow-right icon"
                      style={{
                        color: "#F26D2B",
                        background: "#010948",
                        padding: "10px",
                        borderRadius: "10px",
                        fontSize: "20px",
                      }}
                    ></i>
                  </a>
                </center>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>

      {/*-----------work flow section---------*/}

      <section className="workflow-section">
        <div className="container text-center">
          <h2 className="workflow-title">
            Turning Ideas into Reality: Our Web Design & Development Workflow
            <br />
            <span className="workflow-subtitle">
              Creating Websites That Grow your Business - Our Web Designing
              Process Steps
            </span>
          </h2>

          <div className="row mt-5">
            {steps.map((step, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
                <div className="workflow-card">
                  <img src={step.img} alt={step.alt} className="workflow-img" />
                  <p
                    className="workflow-text"
                    style={{ marginTop: step.topMargin }}
                  >
                    {step.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*-----------technologies section-----------*/}

      <section
        id="defaultOpen"
        style={{
          background: "#E7E9EB",
          borderRadius: "10px",
          boxShadow: "0 0 3px 0 #1C8CC9",
          padding: "50px 0",
        }}
      >
        <div className="container  technologies">
          <h3
            className="text-center"
            style={{ color: "#010948", fontSize: "30px" }}
          >
            Web Design &amp; Development Technologies We Expertise
            <br />
            <span style={{ fontSize: "20px" }}>
              We have a team of professional web designers &amp; developers in
              India working on latest web technologies.
            </span>
          </h3>

          <br />

          <div className="container mt-4">
            <div className="tech-slider-container">
              <div className="tech-slider">
                {[...techItems, ...techItems].map((item, index) => (
                  <div className="tech-item" key={index}>
                    <img src={item.img} alt={item.title} />
                    <h5
                      style={{
                        fontSize: "20px",
                        textAlign: "center",
                        marginTop: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*---------about section------*/}

      <section className="about-section">
        <div className="container-xxl">
          <div className="container">
            <div className="row g-5 align-items-center">
              {/* Text Content */}
              <div className="col-lg-6 about-text">
                <h2 className="about-title">
                  FutureGenApps® - Best Web Designing & Development Company in
                  India
                </h2>
                <hr className="about-hr" />

                <p className="about-paragraph">
                  <a
                    href=""
                    className="about-link"
                  >
                    FutureGenApps®
                  </a>{" "}
                  is a top Indian web designing & development agency grown from
                  a local market provider of digital marketing services to one
                  with a global clientele. We are a top service provider for{" "}
                  <a
                    href=""
                    className="about-link"
                  >
                    website design and development
                  </a>
                  , search engine optimization,{" "}
                  <a href="" className="about-link">
                    web portal development
                  </a>
                  , social media marketing services, etc. We have experience
                  working in a variety of sectors, including manufacturing,
                  chemicals, education, corporations, real estate, and start-ups
                  in e-commerce.
                </p>

                <p className="about-paragraph">
                  Our core web designing team put best efforts to express
                  businesses online.
                </p>
              </div>

              {/* Image Content */}
              <div className="col-lg-6 about-image text-center">
                <img
                  src={Img}
                  alt="website designing in India"
                  className="about-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*-------RatingsSection---------*/}

      <section className="ratings-section">
        <div className="container">
          <h2 className="ratings-title text-center">
            Your Partner in Success: Delivering Excellence and Building Trust
          </h2>
          <h3 className="ratings-subtitle text-center">
            Recognized as the Best Website Design Company in India
          </h3>

          <div className="row mt-5">
            {ratings.map((rating, index) => (
              <div className="col-md-4 mb-4 text-center" key={index}>
                <a
                  href={rating.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={rating.title}
                  className="rating-link"
                >
                  <img
                    src={rating.img}
                    alt={rating.alt}
                    className="rating-img"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*----------video section-----------*/}

      <section className="video-section">
        <div className="container-xxl">
          <div className="container">
            <br />
            <br />
            <h2 className="video-title text-center">
              Transform Ideas into Reality with Website Development Services in
              India
            </h2>
            <hr className="video-hr" />

            <div className="row g-5 align-items-center ">
              {/* Text Content */}
              <div className="col-lg-6 video-text">
                <p>
                  We at <strong>FutureGenApps®</strong> are dedicated to being
                  the most trusted and reliable{" "}
                  <strong>website design service provider in India</strong>. Our
                  vision is to offer premium{" "}
                  <a
                    href=""
                    className="video-link"
                    style={{
                      textDecoration: "none",
                      color: "#06BBCC",
                    }}
                  >
                    website development services in India
                  </a>{" "}
                  at affordable prices with best website design packages, and
                  website maintenance services. Hence, we designate a dedicated
                  resource to provide after-sale support and{" "}
                  <a
                    href=""
                    className="video-link"
                    style={{
                      textDecoration: "none",
                      color: "#06BBCC",
                    }}
                  >
                    website maintenance services
                  </a>{" "}
                  in accordance with the needs of the clients. We have created a
                  stress-free working environment for employees where they can
                  utilize full potential to make the client projects successful.
                </p>

                <p>
                  We firmly believe in offering{" "}
                  <strong>
                    website design & development services in India
                  </strong>{" "}
                  free of bugs and delivering{" "}
                  <strong>website solutions in India</strong> keeping the
                  scheduled timelines.
                </p>
              </div>

              {/* Video Content */}
              <div className="col-lg-6 video-iframe">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/vyStPq3ntbo"
                  title="Website Designing Company in India"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*----------brand section--------*/}

      <section className="brands-section">
        <div className="container">
          <h3 className="text-center brands-title">
            <span>Our Website Designing Work for Major Brands</span>
          </h3>
          <p className="text-center brands-subtitle">
            Pleasure of working with Startups, MSMESs, MNCs to large Corporates.
            Delivered stunning web design work.
          </p>

          <div className="row">
            {brands.map((brand, index) => (
              <div key={index} className="col-md-4 mb-4">
                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={brand.title}
                >
                  <div className="brand-card">
                    <img
                      src={brand.img}
                      alt={brand.title}
                      title={brand.title}
                    />
                    <h4 className="text-center">{brand.name}</h4>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*---------WhyHireSection----------*/}

      <section className="why-hire-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Text Column */}
            <div className="col-lg-5 text-col">
              <h2 className="leadtxt2" style={{ fontSize: "30px" }}>
                Why hire FutureGenApps® for Web Designing Services in India?
              </h2>
              <p
                className="sub-cont_txt"
                style={{ color: "#181D38", fontSize: "18px" }}
              >
                With a team of enthusiastic web designers and developers working
                tirelessly to create websites for every business in India and
                around the world, FutureGenApps® is a reliable web design and
                development company in India. Join our mission to create website
                for every business and establish as a best{" "}
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#06BBCC", textDecoration: "none" }}
                >
                  website designing company in India
                </a>
                .
              </p>
            </div>

            {/* Right Cards Column */}
            <div className="col-lg-7">
              <div className="row">
                {cards.map((card, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div
                      className="card hire-card"
                      style={{
                        borderTop: "5px solid #8AC43C",
                        borderRadius: "20px",
                        transition: "border-color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderTopColor = "#F8588B")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderTopColor = "#8AC43C")
                      }
                    >
                      <h3>{card.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*--------------hiring-----------*/}

      <section
        style={{
          background: "#15233C",
          paddingTop: "30px",
          paddingBottom: "70px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2
                className="text-white"
                style={{
                  fontSize: "30px",
                  fontFamily: "'Source Serif Pro', serif",
                }}
              >
                Looking for the Best{" "}
                <a href="" style={{ color: "white", textDecoration: "none" }}>
                  Web Development Company
                </a>{" "}
                in India?
              </h2>
              <p
                className="text-white"
                style={{ fontSize: "20px", marginTop: "15px" }}
              >
                Connect with one of our Specialists for a free consultation, get
                support from our customer success team, today!
              </p>
              <p style={{ marginTop: "20px" }}>
                <button
                  className="fga-btnn"
                  data-bs-toggle="modal"
                  data-bs-target="#enquiryModal"
                  style={{
                    borderRadius: "20px",
                    background: "#108CCC",
                    border: "1px solid #108CCC",
                    padding: "10px 20px",
                    marginRight: "10px",
                    color: "#fff",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  Get Free Consultation
                </button>
                <a href="tel:+917428623109">
                  <button
                    className="fga-btnn mob-col"
                    data-bs-toggle="modal"
                    data-bs-target="#enquiryModal"
                    style={{
                      borderRadius: "20px",
                      background: "#F26D2B",
                      border: "1px solid #F26D2B",
                      padding: "10px 20px",
                      color: "#fff",
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    <i
                      className="fa fa-phone-alt"
                      style={{ fontSize: "14px", marginRight: "5px" }}
                    ></i>
                    +91 7428623109
                  </button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*----------top web design------------*/}

      <section
        className="top-web-design-section"
        style={{
          background: "#F4EFE9",
          borderBottom: "5px solid #086AD8",
          borderRadius: "0px 0px 20px 20px",
        }}
      >
        <div className="container-xxl">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 fade-up">
                <h3
                  className="section-title"
                  style={{
                    paddingTop: "30px",
                    fontFamily: "'Source Serif Pro', serif",
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                >
                  Top Website Designing Company in India
                </h3>
                <hr className="section-hr" />

                <p
                  className="section-text"
                  style={{
                    fontSize: "18px",
                    color: "#00434A",
                  }}
                >
                  Being one of the Top Website Design Companies in India,{" "}
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#06BBCC", textDecoration: "none" }}
                  >
                    FutureGenApps®
                  </a>{" "}
                  is committed to delivering innovative web solutions that raise
                  the benchmark for digital excellence. We have established the
                  best team of website designers and developers in India. Our
                  Top <strong>Web Designers in India</strong> create visually
                  appealing websites that captivate and engage your audience,
                  all while preserving creativity at the forefront of their
                  endeavors.
                </p>

                <p
                  className="section-text"
                  style={{
                    fontSize: "18px",
                    color: "#00434A",
                    fontWeight: "500",
                  }}
                >
                  We are pleased to have been recognized by India Best{" "}
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#06BBCC", textDecoration: "none" }}
                  >
                    Website Designing Company
                  </a>{" "}
                  as a trusted leader in the website design industry. What
                  distinguishes us is our steadfast commitment to quality,
                  innovation and services.
                </p>
              </div>

              <div className="col-lg-6 fade-up">
                <center>
                  <img
                    src={Img}
                    alt="website development services in India"
                    className="section-img"
                  />
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*---------client slider-----------*/}

      <section className="slider-area">
        <div className="container">
          <h3 className="text-center">
            <span
              style={{ color: "#010948", fontWeight: "bold", fontSize: "29px" }}
            >
              Trusted by Enterprises across Industries
            </span>
          </h3>
          <h4
            className="text-center"
            style={{ fontSize: "20px", fontWeight: "normal", color: "#010948" }}
          >
            Our{" "}
            <a
              href=""
              title="Cost of website"
              style={{ textDecoration: "none", color: "#06BBCC" }}
            >
              website design price in India
            </a>{" "}
            starts within your Budget, Call +91 7428623109 to get exact
            quotation.
            <br />
            Join Our Happy customers network!
            <br />
            <i className="fa fa-star icon-star"></i>
            <i className="fa fa-star icon-star"></i>
            <i className="fa fa-star icon-star"></i>
            <i className="fa fa-star icon-star"></i>
            <i className="fa fa-star icon-star"></i>
          </h4>

          <div className="sliders-list mt-4">
            <Slider {...settings}>
              {clients.map((client, index) => (
                <div key={index} className="single-slider">
                  <div className="slider-img">
                    <img
                      src={client.img}
                      alt={client.alt}
                      title={client.title}
                      className="fga-slider-img"
                      style={{
                        width: "230px",
                        height: "150px",
                        paddingBottom: "30px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/*------------build presence------------*/}

      <section
        style={{
          backgroundColor: "#DFE6F6",
          borderBottom: "5px solid #086AD8",
          borderRadius: "0 0 20px 20px",
        }}
      >
        <div className="container-xxl">
          <div className="container">
            <div className="row g-5">
              {/* Left Column: Image */}
              <div
                className="col-lg-6 animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.3s" }}
              >
                <center>
                  <img
                    width="450"
                    style={{ marginBottom: "30px" }}
                    src={Img}
                    alt="website development"
                  />
                </center>
              </div>

              {/* Right Column: Text Content */}
              <div
                className="col-lg-6 animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.3s" }}
              >
                <h3
                  className="text-center"
                  style={{
                    color: "#0E3D52",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  Build Your Online Presence with the Top Web Designing Company
                  in India
                </h3>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <hr style={{ width: "50px", border: "2px solid #0E3D52" }} />
                </div>
                <p
                  style={{
                    textAlign: "justify",
                    fontSize: "18px",
                    color: "#0E3D52",
                  }}
                >
                  <a
                    href=""
                    style={{
                      fontSize: "18px",
                      color: "#06BBCC",
                      textDecoration: "none",
                    }}
                  >
                    FutureGenApps®
                  </a>{" "}
                  is always committed towards providing quality website design
                  &amp; development services to clients across PAN India and
                  globe. We specialize in website designing, web development
                  services, SEO services, software meetings, and digital
                  marketing services.
                </p>

                <p
                  style={{
                    textAlign: "justify",
                    fontSize: "18px",
                    color: "#0E3D52",
                  }}
                >
                  We have evolved to establish one of the{" "}
                  <a
                    href=""
                    style={{
                      fontSize: "18px",
                      color: "#06BBCC",
                      textDecoration: "none",
                    }}
                  >
                    creative website design
                  </a>{" "}
                  agencies in India serving Delhi NCR, Noida, and Gurgaon. Our
                  team of software engineers work relentlessly towards offering
                  customized website development solutions to clients. Having a
                  team of energetic IT professionals with a combination of
                  innovation and hard work, we firmly believe that client
                  satisfaction is our satisfaction. We are recognized as the
                  best{" "}
                  <a
                    href=""
                    style={{
                      fontSize: "18px",
                      color: "#06BBCC",
                      textDecoration: "none",
                    }}
                  >
                    website design company in Noida
                  </a>{" "}
                  and Delhi NCR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*---------------FQA section -----------*/}

      <section>
        <div className="faq-container">
          <h2
            className="faq-heading"
            style={{
              fontFamily: "'Source Serif Pro', serif",
              fontWeight: "bold",
            }}
          >
            <span className="small-text">
              Important Frequently Asked Questions to
            </span>
            <br />
            <span className="large-text">
              Hire Website Designing Companies in India
            </span>
          </h2>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <button
                  className={`faq-question ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h4
                    style={{
                      fontFamily: "'Source Serif Pro', serif",
                      fontWeight: "bold",
                    }}
                  >
                    FAQ{index + 1}: {faq.question}
                  </h4>
                </button>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <h6>Answer:{faq.answer}</h6>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*---------------blog section------------*/}

      <section
        style={{
          background: "white",
          borderBottom: "5px solid #086AD8",
          borderTop: "5px solid #086AD8",
          borderRadius: "20px",
        }}
      >
        <br />
        <br />
        <div className="container">
          <h3 className="text-center">
            <span
              style={{
                color: "#010948",
                fontSize: "30px",
                fontFamily: "'Source Serif Pro', serif",
                fontWeight: "bold",
              }}
            >
              Get Inspired: Explore Our Latest Blogs
              <br />
            </span>
          </h3>
          <br />

          <div className="row">
            {/* Blog 1 */}
            <div className="col-md-4 " style={{}}>
              <a
                href="website-amc-company"
                target="_blank"
                rel="noopener noreferrer"
                title="website designing in India"
                style={{
                  color: "#010948",
                  fontSize: "30px",
                  textDecoration: "none",
                }}
              >
                <div
                  className="colm"
                  style={{ padding: "10px", boxShadow: "0px 0px 3px 0px gray" }}
                >
                  <img
                    src={blog1}
                    style={{
                      zIndex: -1,
                      height: "315px",
                      width: "100%",
                      padding: "20px",
                    }}
                    alt="website designing in India"
                    title="website designing in India"
                  />
                  <h4
                    style={{
                      fontSize: "18px",
                      marginTop: "20px",
                      textAlign: "center",
                      fontFamily: "'Source Serif Pro', serif",
                      fontWeight: "bold",
                      paddingLeft: "10px",
                    }}
                  >
                    Importance of Regular Website AMC Services for your Business
                  </h4>
                  <h5
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      fontFamily: "'Source Serif Pro', serif",
                      fontWeight: "bold",
                    }}
                  >
                    Posted: 6th Jan, 2025
                  </h5>
                </div>
              </a>
            </div>

            {/* Blog 2 */}
            <div className="col-md-4">
              <a
                href="organic-digital-marketing-and-benefits"
                target="_blank"
                rel="noopener noreferrer"
                title="website designing in India"
                style={{
                  color: "#010948",
                  fontSize: "30px",
                  textDecoration: "none",
                  fontFamily: "'Source Serif Pro', serif",
                  fontWeight: "bold",
                }}
              >
                <div
                  className="colm"
                  style={{ padding: "10px", boxShadow: "0px 0px 3px 0px gray" }}
                >
                  <img
                    src={blog2}
                    style={{
                      zIndex: -1,
                      height: "315px",
                      width: "100%",
                      padding: "20px",
                    }}
                    alt="website designing in India"
                    title="website designing in India"
                  />
                  <h4
                    style={{
                      fontSize: "18px",
                      marginTop: "20px",
                      textAlign: "center",
                      fontFamily: "'Source Serif Pro', serif",
                      fontWeight: "bold",
                    }}
                  >
                    What is Organic Digital Marketing &amp; its Benefits?
                  </h4>
                  <h5
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      fontFamily: "'Source Serif Pro', serif",
                      fontWeight: "bold",
                    }}
                  >
                    Posted: 1st Jan, 2025
                  </h5>
                </div>
              </a>
            </div>

            {/* Blog 3 */}
            <div className="col-md-4">
              <a
                href="social-bookmarking-sites-list"
                target="_blank"
                rel="noopener noreferrer"
                title="website designing in India"
                style={{
                  color: "#010948",
                  fontSize: "30px",
                  textDecoration: "none",
                }}
              >
                <div
                  className="colm"
                  style={{ padding: "10px", boxShadow: "0px 0px 3px 0px gray" }}
                >
                  <img
                    src={blog3}
                    style={{
                      zIndex: -1,
                      height: "315px",
                      width: "100%",
                      padding: "10px",
                    }}
                    alt="website designing in India"
                    title="website designing in India"
                  />
                  <h4
                    style={{
                      fontSize: "18px",
                      marginTop: "20px",
                      textAlign: "center",
                      fontFamily: "'Source Serif Pro', serif",
                      fontWeight: "bold",
                    }}
                  >
                    Grow SEO Ranking with Social Bookmarking Sites.
                  </h4>
                  <h5
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      fontFamily: "'Source Serif Pro', serif",
                      fontWeight: "bold",
                    }}
                  >
                    Posted: 31st Dec, 2024
                  </h5>
                </div>
              </a>
            </div>
          </div>

          <br />
        </div>
        <br />
        <br />
      </section>

      {/*----------------business grow---------*/}

      <section
        style={{
          backgroundColor: "#F1F0EC",
          color: "#15233C",
          marginTop: "30px",
          marginBottom: "-47px",
        }}
      >
        <div className="container-xxl">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-lg-12 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <h3
                  style={{
                    color: "#15233C",
                    fontSize: "30px",
                    textAlign: "center",
                    fontFamily: "'Source Serif Pro', serif",
                    fontWeight: "bold",
                  }}
                >
                  Every Great Business Grow Online With a Great Website Design
                  in India
                </h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <hr style={{ width: "50px", border: "2px solid red" }} />
                </div>
                <p
                  style={{
                    textAlign: "justify",
                    fontSize: "18px",
                    color: "black",
                  }}
                >
                  Embark your online digital presence with our team of{" "}
                  <strong>website designing experts in India</strong>. We are
                  always excited to help startups and enterprises of all sizes
                  to create stunning website design to present their business
                  online which help them enhance online visibility. With our
                  result oriented SEO services, we help brands and business
                  owners reach their potential customers to generate sales
                  online. This help them drive right targetted audience and
                  hence grow sales and revenue. From the business perspective,
                  Website is not mere a set of web pages, it is a brands online
                  presentation in front of target customers. So, in this digital
                  world, having a strong online presence has now become
                  mandatory for every enterprise.
                </p>

                <p
                  style={{
                    textAlign: "justify",
                    fontSize: "18px",
                    color: "black",
                  }}
                >
                  We have successfully completed 300+ website design projects
                  acoross various industries. Hire our{" "}
                  <strong>Indian website design company</strong> for your
                  website design requirements. Request a free website quote. You
                  can not imagine a strong online growth without having a
                  creative website design. Upgrade your business today with our{" "}
                  <strong>website designers in India.</strong> We help you
                  achieve your entrepreneurial goals.
                  <br />
                  <br />
                  Lets establish your business online together!
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------upper footer----------*/}

      <section className="upper-footer">
        <div
          className="container-fluid text-light footer pt-5 mt-5"
          style={{ background: "rgb(11, 45, 93)" }}
        >
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-3">
                <div
                  className="text-center"
                  style={{
                    background: "#38E8B6",
                    padding: "5px",
                    borderRadius: "10px",
                    height: "120px",
                  }}
                >
                  <h4 style={{ marginLeft: "10px", marginTop: "20px" }}>
                    <a
                      href="tel:+917428623109"
                      style={{ color: "black", textDecoration: "none" }}
                      title="futuregenapps contact number: +91 7428 623109"
                    >
                      +91 7428 623109
                    </a>
                  </h4>
                  <p className="text-center">
                    <a
                      href="mailto:info@futuregenapps.com"
                      style={{ color: "black", textDecoration: "none" }}
                      title="futuregenapps contact email: info@futuregenapps.com"
                    >
                      info@futuregenapps.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-lg-5 text-center col-mar">
                <a
                  style={{ color: "#38E8B6"}}
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-map-marker"
                    style={{ color: "#38E8B6", fontSize: "30px" , marginTop:"10px"}}
                  ></i>
                </a>

                <p className="text-center text-white">
                  <strong style={{ color: "#38E8B6" }}>
                    FutureGenApps® Head Office:
                  </strong>
                  <br />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href=""
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    AAG-15, Azure Shipra Krishna,
                    <br />
                    Near Kaushambi Metro Station, Kaushambi,
                    <br />
                    Delhi-NCR-201012, INDIA
                  </a>
                  <br />
                  <a
                    style={{ color: "#38E8B6", textDecoration: "none" }}
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-mar">
                <p className="text-center">
                  <button
                    className="fga-btnt"
                    style={{
                      background: "#38E8B6",
                      border: "1px solid #38E8B6",
                      padding: "10px",
                      width: "150px",
                    }}
                  >
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "black", textDecoration: "none" }}
                      title="Pay Online FutureGenApps"
                      className="tags"
                    >
                      Pay Online
                    </a>
                  </button>
                  <br />
                  <br />
                  <button
                    className="paybtn1 fga-btnt"
                    style={{
                      background: "#38E8B6",
                      border: "1px solid #38E8B6",
                      padding: "10px",
                      width: "150px",
                    }}
                  >
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "black", textDecoration: "none" }}
                      title="Get a Website"
                      className="tags"
                    >
                      Get a Website
                    </a>
                  </button>
                </p>
              </div>
            </div>

            <hr style={{ border: "1px solid #FF76A2" }} />

            <div className="row">
              <div className="col-lg-4 text-center col-mar">
                <a
                  style={{ color: "#38E8B6" }}
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-map-marker"
                    style={{ color: "#38E8B6", fontSize: "30px" }}
                  ></i>
                </a>
                <p className="text-center text-white">
                  <strong style={{ color: "#38E8B6" }}>
                    FutureGenApps® Noida Branch:
                  </strong>
                  <br />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href=""
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    A Block, Sector 63, Noida,
                    <br /> Uttar Pradesh-201301, INDIA
                  </a>
                  <br />
                  <a
                    style={{ color: "#38E8B6", textDecoration: "none" }}
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </p>
              </div>

              <div className="col-lg-4 text-center col-mar">
                <a
                  style={{ color: "#38E8B6" }}
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-map-marker"
                    style={{ color: "#38E8B6", fontSize: "30px" }}
                  ></i>
                </a>
                <p className="text-center text-white">
                  <strong style={{ color: "#38E8B6" }}>
                    FutureGenApps® Gurgaon Branch:
                  </strong>
                  <br />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href=""
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    545, Sector 105, Gurugram,
                    <br /> Haryana, INDIA
                  </a>
                  <br />
                  <a
                    style={{ color: "#38E8B6", textDecoration: "none" }}
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </p>
              </div>

              <div className="col-lg-4 text-center col-mar">
                <i
                  className="fa fa-map-marker"
                  style={{ color: "#38E8B6", fontSize: "30px" }}
                ></i>
                <p className="text-center text-white">
                  <strong style={{ color: "#38E8B6" }}>
                    FutureGenApps® Canada Office:
                  </strong>
                  <br />
                  1186 Hooke Road, Edmonton,
                  <br /> Alberta, Canada
                </p>
              </div>

              {/* You can move this CSS to your stylesheet */}
              <style>{`
    @media screen and (max-width:667px) {
      .tags {
        font-size: 13px;
      }
      .paybtn1 {
        width: 120px !important;
      }
      .brands {
        text-align: justify;
        padding-left: 40px;
      }
    }
    .brands {
      text-align: center;
    }
  `}</style>
            </div>

            <hr style={{ border: "1px solid #FF76A2" }} />

            <div className="row g-5">
              {/* Our Services */}
              <div className="col-lg-3 col-md-6">
                <h4
                  style={{
                    color: "#38E8B6",
                    fontSize: "24px",
                    paddingLeft: "13px",
                  }}
                >
                  Our Services
                </h4>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Web Design"
                  href=""
                >
                  Web Design & Development
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Web Development"
                  href=""
                >
                  Web Development Company
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                  }}
                  title="E-Commerce Website"
                  href=""
                >
                  E-Commerce Website Development
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Responsive Website"
                  href=""
                >
                  Responsive Website Designing
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Software Development"
                  href=""
                >
                  Software Development Company
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Website Designer"
                  href=""
                >
                  Website Designer in Delhi
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="SEO Services"
                  href=""
                >
                  SEO Services Agency
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Website Designing Company"
                  href=""
                >
                  Website Designing Company
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Top Website Design Agency in India"
                  href=""
                >
                  Top Website Design Agency in India
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Website Designing Company"
                  href=""
                >
                  Website Designing Company
                </a>
              </div>

              {/* Web Designing */}
              <div className="col-lg-3 col-md-6">
                <h4
                  style={{
                    color: "#38E8B6",
                    fontSize: "24px",
                    paddingLeft: "13px",
                  }}
                >
                  Web Designing
                </h4>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Static Website"
                  href=""
                >
                  Static Website Design Services
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Dynamic Website"
                  href=""
                >
                  Dynamic Website Design Services
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Responsive Website"
                  href=""
                >
                  Responsive Website Design Services
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="E-Commerce Website Design"
                  href=""
                >
                  E-Commerce Website Design Company
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Custom Website"
                  href=""
                >
                  Custom Website Design Services
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Website Design"
                  href=""
                >
                  Website Design Noida
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Website Design Ghaziabad"
                  href=""
                >
                  Website Design Ghaziabad
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Website Designing company in Delhi"
                  href=""
                >
                  Website Designing Company in Delhi
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Website Designer near Me"
                  href=""
                >
                  Website Designer near Me
                </a>
              </div>

              {/* Web Development */}
              <div className="col-lg-3 col-md-6">
                <h4
                  style={{
                    color: "#38E8B6",
                    fontSize: "24px",
                    paddingLeft: "13px",
                  }}
                >
                  Web Development
                </h4>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="PHP Development"
                  href=""
                >
                  PHP Development
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Laravel Development"
                  href=""
                >
                  Laravel Development Company
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Codeigniter Development"
                  href=""
                >
                  Codeigniter Development Company
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Wordpress Development"
                  href=""
                >
                  Wordpress Development Company
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Web Development"
                  href=""
                >
                  Web Development Company
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Website Designing"
                  href=""
                >
                  Website Designing Packages
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Web Designing Company"
                  href=""
                >
                  Web Designing Company
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Web Designing Company in India"
                  href=""
                >
                  Website Designing Company in India
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "12px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Website Design Company in south Delhi"
                  href=""
                >
                  Website Design Company South Delhi
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Website Development Company"
                  href=""
                >
                  Website Development Company
                </a>
              </div>

              {/* Web Portal Development */}
              <div className="col-lg-3 col-md-6">
                <h4
                  style={{
                    color: "#38E8B6",
                    fontSize: "24px",
                    paddingLeft: "13px",
                  }}
                >
                  Web Portal Development
                </h4>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="ERP Portal"
                  href=""
                >
                  ERP Portal Development
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="B2B & B2C Portal"
                  href=""
                >
                  B2B & B2C Portal Development
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Job Portal"
                  href=""
                >
                  Job Portal Development
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Real Estate"
                  href=""
                >
                  Real Estate Portal
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="News Portal"
                  href=""
                >
                  News Portal Development
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Web Portal"
                  href=""
                >
                  Web Portal Development Company
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Software Company"
                  href=""
                >
                  Software Company in Delhi
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Corporate Website"
                  href=""
                >
                  Corporate Website Design
                </a>
                <a
                  className="btn btn-link"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                  title="Website Development Company"
                  href=""
                >
                  Website Design Company
                </a>
              </div>
            </div>

            <hr style={{ border: "1px solid #FF76A2" }} />

            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h4 style={{ color: "#38E8B6", fontSize: "24px" }}>
                  Website Maintenance
                </h4>
                <a
                  className="btn btn-link"
                  title="Website Maintenance"
                  href=""
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  Website Maintenance Services
                </a>
                <a
                  className="btn btn-link"
                  title="Wordpress Maintenance"
                  href=""
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  Wordpress Maintenance
                </a>
                <a
                  className="btn btn-link"
                  title="Website Maintenance Cost"
                  href=""
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  Website Maintenance Cost
                </a>
                <a
                  className="btn btn-link"
                  title="Website Maintenance Noida"
                  href=""
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  Website Maintenance Noida
                </a>
                <a
                  className="btn btn-link"
                  title="Ecommerce Website Maintenance"
                  href=""
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  Ecommerce Website Maintenance
                </a>
              </div>

              <div className="col-lg-3 col-md-6">
                <h4 style={{ color: "#38E8B6", fontSize: "24px" }}>
                  SEO &amp; SMO Services
                </h4>
                <a
                  className="btn btn-link"
                  title="SEO Services in Delhi"
                  href=""
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  SEO Services Delhi
                </a>
                <a
                  className="btn btn-link"
                  title="SMO Services Delhi"
                  href=""
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  SMO Services Delhi
                </a>
                <a
                  className="btn btn-link"
                  title="SEO Services Noida"
                  href=""
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  SEO Services Noida
                </a>
                <a
                  className="btn btn-link"
                  title="SEO company in Ghaziabad"
                  href=""
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  SEO company in Ghaziabad
                </a>
              </div>

              <div className="col-lg-3 col-md-6">
                <h4 style={{ color: "#38E8B6", fontSize: "24px" }}>Training</h4>
                <a
                  className="btn btn-link"
                  title="PHP Training"
                  href="#"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  PHP Training Ghaziabad
                </a>
                <a
                  className="btn btn-link"
                  title="Laravel Training"
                  href="#"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  Laravel Training Ghaziabad
                </a>
                <a
                  className="btn btn-link"
                  title="C Training"
                  href="#"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  C Training Ghaziabad
                </a>
                <a
                  className="btn btn-link"
                  title="C++ Training"
                  href="#"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  C++ Training Ghaziabad
                </a>
                <a
                  className="btn btn-link"
                  title="Wordpress Training"
                  href="#"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  Wordpress Training Delhi
                </a>
                <a
                  className="btn btn-link"
                  title="Digital Marketing"
                  href=""
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  Digital Marketing Training
                </a>
              </div>

              <div className="col-lg-3 col-md-6">
                <h4 style={{ color: "#38E8B6", fontSize: "24px" }}>
                  Our Social Profiles
                </h4>
                <a
                  className="btn btn-link"
                  title="FutureGenApps Facebook Profile"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  <i
                    className="fab fa-facebook"
                    style={{ fontSize: "20px" }}
                  ></i>{" "}
                  Facebook
                </a>
                <a
                  className="btn btn-link"
                  title="FutureGenApps Instagram Profile"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  <i
                    className="fab fa-instagram"
                    style={{ fontSize: "20px" }}
                  ></i>{" "}
                  Instagram
                </a>
                <a
                  className="btn btn-link"
                  title="FutureGenApps LinkedIn Profile"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  <i
                    className="fab fa-linkedin"
                    style={{ fontSize: "20px" }}
                  ></i>{" "}
                  LinkedIn
                </a>
                <a
                  className="btn btn-link"
                  title="FutureGenApps Twitter Profile"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  <i
                    className="fab fa-twitter"
                    style={{ fontSize: "20px" }}
                  ></i>{" "}
                  Twitter
                </a>
                <a
                  className="btn btn-link"
                  title="FutureGenApps YouTube Channel"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    textDecoration: "none",
                    align: "left",
                  }}
                >
                  <i
                    className="fab fa-youtube"
                    style={{ fontSize: "20px" }}
                  ></i>{" "}
                  YouTube
                </a>
              </div>
            </div>

            <hr style={{ border: "1px solid #FF76A2" }} />

            <div className="row">
              <div className="col-md-7">
                <ul
                  style={{
                    color: "white",
                    listStyle: "none",
                    fontSize: "14px",
                  }}
                >
                  <h6 style={{ color: "#38E8B6" }}>Important Links</h6>
                  <li
                    style={{
                      float: "left",
                      border: "0px 0px 0px 1px solid red",
                    }}
                  >
                    <a
                      href="about"
                      style={{ color: "white", textDecoration: "none" }}
                      title="About FutureGenApps"
                    >
                      About
                    </a>{" "}
                    <span>|</span>
                  </li>
                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="privacy-policy"
                      style={{ color: "white", textDecoration: "none" }}
                      title="FutureGenApps privacy policy"
                    >
                      Privacy Policy
                    </a>{" "}
                    <span>|</span>
                  </li>
                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="refund-policy"
                      style={{ color: "white", textDecoration: "none" }}
                      title="FutureGenApps refund policy"
                    >
                      Refund Policy
                    </a>{" "}
                    <span>|</span>
                  </li>
                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="terms-and-condition"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Terms & Conditions"
                    >
                      Terms &amp; Conditions
                    </a>{" "}
                    <span>|</span>
                  </li>
                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="careers"
                      style={{ color: "white", textDecoration: "none" }}
                      title="About Job Openings"
                    >
                      Job Openings
                    </a>{" "}
                    <span>|</span>
                  </li>
                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="#"
                      style={{ color: "white", textDecoration: "none" }}
                      title="FutureGenApps Internship"
                    >
                      Internship
                    </a>{" "}
                    <span>|</span>
                  </li>
                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="#"
                      style={{ color: "white", textDecoration: "none" }}
                      title="FutureGenApps Training"
                    >
                      Training
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-5 mob-col brands">
                <h6 style={{ color: "#38E8B6" }}>
                  <b>We are Verified at:</b>
                </h6>
                <b>
                  <a
                    title="FutureGenApps JustDial Profile"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={footer1}
                      alt="FutureGenApps JustDial Profile"
                      style={{
                        width: "100px",
                        height: "40px",
                        background: "white",
                        padding: "8px",
                        borderRadius: "10px",
                      }}
                    />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href=""
                    title="FutureGenApps IndiaMart Profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={footer2}
                      alt="FutureGenApps IndiaMart Profile"
                      style={{
                        width: "100px",
                        height: "40px",
                        background: "white",
                        padding: "8px",
                        borderRadius: "10px",
                      }}
                    />
                  </a>
                </b>
              </div>
            </div>

            <hr style={{ border: "1px solid #FF76A2" }} />

            <div className="row">
              <div className="col-md-10">
                <ul
                  style={{
                    color: "white",
                    listStyle: "none",
                    fontSize: "14px",
                  }}
                >
                  <h6 style={{ color: "#38E8B6" }}>Top Cities (India)</h6>

                  <li style={{ float: "left" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title="website design Delhi FutureGenApps"
                    >
                      Delhi
                    </a>
                    &nbsp; <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title="website design noida FutureGenApps"
                    >
                      Noida
                    </a>
                    &nbsp; <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title=" FutureGenApps Ghaziabad Web Design Company"
                    >
                      Ghaziabad
                    </a>
                    &nbsp; <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title=" website designing company in Meerut"
                    >
                      Meerut
                    </a>
                    &nbsp; <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design company Faridabad"
                    >
                      Faridabad
                    </a>
                    &nbsp; <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title=" FutureGenApps Kaushambi website design company"
                    >
                      Kaushambi
                    </a>
                    &nbsp; <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title=" Website designing company in Gurgaon"
                    >
                      Gurugram
                    </a>
                    &nbsp; <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title=" FutureGenApps Indirapuram web design agency"
                    >
                      Indirapuram
                    </a>
                    &nbsp; <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title=" FutureGenApps website designing company in Vaishali"
                    >
                      Vaishali
                    </a>
                    &nbsp; <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title=" FutureGenApps East Delhi website design company"
                    >
                      East Delhi
                    </a>
                    &nbsp; <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title="website designing company in Moradabad"
                    >
                      Moradabad
                    </a>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title="website designing company in Hyderabad"
                    >
                      Hyderabad
                    </a>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title="website designing company in Bangalore"
                    >
                      Bangalore
                    </a>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title="website designing company in Coimbatore"
                    >
                      Coimbatore
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <hr style={{ border: "1px solid #FF76A2" }} />

            <div className="row">
              <div className="col-md-10">
                <ul
                  style={{
                    color: "white",
                    listStyle: "none",
                    fontSize: "14px",
                  }}
                >
                  <h6 style={{ color: "#38E8B6" }}>
                    Our Web Designing Services in Punjab
                  </h6>

                  <li style={{ float: "left" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title="website design company in Hoshiarpur FutureGenApps"
                    >
                      Hoshiarpur
                    </a>
                    &nbsp; <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title="website design company in Amritsar FutureGenApps"
                    >
                      Shri Amritsar Sahib
                    </a>
                    &nbsp; <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title="FutureGenApps Ludhiana Web Design Company"
                    >
                      Ludhiana
                    </a>
                    &nbsp; <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title="website designing company in Jalandhar"
                    >
                      Jalandhar
                    </a>
                    &nbsp; <span></span>
                  </li>
                </ul>
              </div>
            </div>

            <hr style={{ border: "1px solid #FF76A2" }} />

            <div className="row">
              <div className="col-md-12">
                <ul
                  style={{
                    color: "white",
                    listStyle: "none",
                    fontSize: "14px",
                  }}
                >
                  <h6 style={{ color: "#38E8B6" }}>Top Countries We Serve</h6>

                  <li style={{ float: "left" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in India"
                    >
                      India
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in USA"
                    >
                      USA
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in Canada"
                    >
                      Canada
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in Switzerland"
                    >
                      Switzerland
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in Australia"
                    >
                      Australia
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in New Zealand"
                    >
                      New Zealand
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in UK"
                    >
                      UK
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in Germany"
                    >
                      Germany
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in Japan"
                    >
                      Japan
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in France"
                    >
                      France
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in Greece"
                    >
                      Greece
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in Denmark"
                    >
                      Denmark
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in Poland"
                    >
                      Poland
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in Norway"
                    >
                      Norway
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in Brazil"
                    >
                      Brazil
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in South Korea"
                    >
                      South Korea
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in Dubai"
                    >
                      Dubai
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href=""
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in Kuwait"
                    >
                      Kuwait
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in Saudi Arabia"
                    >
                      Saudi Arabia
                    </a>{" "}
                    <span>|</span>
                  </li>

                  <li style={{ float: "left", marginLeft: "10px" }}>
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      title="Website design Company in Qatar"
                    >
                      Qatar
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-4">
              <h6
                style={{
                  color: "#38E8B6",
                  fontFamily: "'Source Serif Pro', serif",
                  fontWeight: "bold",
                }}
              >
                © {new Date().getFullYear()} FutureGenApps® — All Rights
                Reserved
              </h6>
            </div>
          </div>
        </div>
      </section>

      {/*---------company details Section-------------*/}

      <section
        style={{
          backgroundColor: "white",
          marginTop: "20px",
        }}
      >
        <div className="container-xxl">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-lg-12 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <h3
                  className="text-center"
                  style={{
                    color: "#0E3D52",
                    fontSize: "20px",
                    fontFamily: "'Source Serif Pro', serif",
                    fontWeight: "bold",
                  }}
                >
                  Benefits of Hiring a Professional Web Development Company in
                  India
                </h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <hr style={{ width: "50px", border: "2px solid red" }} />
                </div>
                <p
                  style={{
                    textAlign: "justify",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  In today’s digital world, it has become much more important
                  for businesses and brands to have a fully functional and
                  attractive company website. Hiring a professional{" "}
                  <strong>Top web development company in India</strong>, like
                  FutureGenApps® can deliver huge benefits by helping customers
                  with customized website development solutions. Our team
                  designs and develops custom business websites tailored to your
                  business needs. Our experienced team of website developers in
                  India put every effort to make your website project a great
                  success! Our website designs and layouts are easy to use, load
                  quickly, and work well on mobile devices, which is crucial for
                  SEO rankings. Our web development services are focused on
                  functionality, security, scalability, bug-free performance,
                  and ensuring your website is SEO compatible. We offer
                  end-to-end web designing solutions in India ranging from
                  static websites, dynamic websites, and e-commerce platforms to
                  corporate websites — all at competitive prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "white",
        }}
      >
        <div className="container-xxl">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-lg-12 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <h3
                  className="text-center"
                  style={{
                    color: "#0E3D52",
                    fontSize: "20px",
                    fontFamily: "'Source Serif Pro', serif",
                    fontWeight: "bold",
                  }}
                >
                  Start your Website Development Journey with FutureGenApps
                  <br />
                  <span style={{ fontSize: "16px" }}>
                    Grow with Best Website Development Company in India
                  </span>
                </h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <hr style={{ width: "50px", border: "2px solid red" }} />
                </div>
                <p
                  style={{
                    textAlign: "justify",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  FutureGenApps® is recognized as the best{" "}
                  <strong>web design company in India</strong> offering
                  result-centric website design and development services to
                  startups looking to create strong online presence. Our
                  objective is to offer best quality website designing services
                  in India at very affordable prices so that all types of
                  businesses (Small, Medium and Enterprise) can benefit from
                  digital marketing services while growing their businesses
                  online. FutureGenApps® is one of the best web development
                  companies in India for website design services. Our team
                  focuses on responsive designs, ensuring your website looks
                  great on all devices. We offer range of digital marketing
                  services, including e-commerce website designing, custom
                  websites, SEO-friendly design, and integration with digital
                  marketing. Join hands with FutureGenApps® for modern,
                  functional, and attractive websites that help your business
                  grow. Contact us today to discuss your website requirements
                  and take your online presence to the next level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "white",
        }}
      >
        <div className="container-xxl">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-lg-12 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <h3
                  className="text-center"
                  style={{
                    color: "#0E3D52",
                    fontSize: "20px",
                    fontFamily: "'Source Serif Pro', serif",
                    fontWeight: "bold",
                  }}
                >
                  Hire Top Website Design Company in India
                </h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <hr style={{ width: "50px", border: "2px solid red" }} />
                </div>{" "}
                <p
                  style={{
                    textAlign: "justify",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  If you are planning to launch your startup or brand in India,
                  then the first step is to create a stunning website as part of
                  your overall marketing strategy. FutureGenApps® is known as
                  the best <strong>web designing company in India</strong> for
                  developing business websites using the latest web development
                  technologies and offering affordable prices for all types of
                  business segments. We provide a complete range of digital
                  marketing services, which include domain registration, website
                  design &amp; development, website redesigning, web hosting
                  services, SEO services, e-commerce website development, custom
                  website design, and social media marketing services in India
                  and worldwide. Our team of{" "}
                  <strong>website designers in India</strong> has years of
                  in-depth industry experience in website development as per
                  customer requirements. They create mobile-first websites that
                  are highly scalable, feature-rich, and bug-free. Contact our
                  team to get high-quality <strong>web design services</strong>{" "}
                  in India for all sized businesses and companies across the
                  globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*----------looking hire section----------*/}

      <section
        style={{
          background: "#15233C",
          paddingTop: "30px",
          paddingBottom: "70px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2
                className="text-white"
                style={{
                  fontSize: "30px",
                  fontFamily: "'Source Serif Pro', serif",
                  fontWeight: "bold",
                }}
              >
                Looking for the Best{" "}
                <a href="" style={{ color: "white", textDecoration: "none" }}>
                  Web Development Company
                </a>{" "}
                in India?
              </h2>
              <p
                className="text-white"
                style={{ fontSize: "20px", marginTop: "15px" }}
              >
                Connect with one of our Specialists for a free consultation, get
                support from our customer success team, today!
              </p>
              <p style={{ marginTop: "20px" }}>
                <button
                  className="fga-btnn"
                  data-bs-toggle="modal"
                  data-bs-target="#enquiryModal"
                  style={{
                    borderRadius: "20px",
                    background: "#108CCC",
                    border: "1px solid #108CCC",
                    padding: "10px 20px",
                    marginRight: "10px",
                    color: "#fff",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  Get Free Consultation
                </button>
                <a href="tel:+917428623109">
                  <button
                    className="fga-btnn mob-col"
                    data-bs-toggle="modal"
                    data-bs-target="#enquiryModal"
                    style={{
                      borderRadius: "20px",
                      background: "#F26D2B",
                      border: "1px solid #F26D2B",
                      padding: "10px 20px",
                      color: "#fff",
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    <i
                      className="fa fa-phone-alt"
                      style={{ fontSize: "14px", marginRight: "5px" }}
                    ></i>
                    +91 7428623109
                  </button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*--------business growth-----------*/}

      <section
        style={{
          backgroundColor: "white",
        }}
      >
        <div className="container-xxl">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-lg-12 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <h3
                  className="text-center"
                  style={{
                    color: "#15233C",
                    fontSize: "24px",
                    fontFamily: "'Source Serif Pro', serif",
                    fontWeight: "bold",
                  }}
                >
                  How Investing in Your Website Drives Business Growth
                  <br />
                  <span style={{ fontSize: "16px" }}>
                    Hire Top Indian Web Design Company
                  </span>
                </h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <hr style={{ width: "50px", border: "2px solid red" }} />
                </div>{" "}
                <p
                  style={{
                    textAlign: "justify",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  In today’s digital world, a business website is more than just
                  a set of static 4–5 web pages. A website has become an
                  essential online marketing tool to represent your company’s
                  visibility online, showcase a list of products and services,
                  provide online access to your company brochure, enable easy
                  WhatsApp communication, and help generate new sales inquiries
                  via designated email. Hire a professional{" "}
                  <strong>Indian website designing company</strong> in your area
                  to build a strong online presence.
                  <br />
                  <br />
                  Hence, a website is necessary for building an online
                  portfolio, growth, credibility, and long-term customer
                  engagement. From a business standpoint, investing in your
                  website provides numerous benefits that can directly impact
                  your success. A well-designed website creates an impactful
                  user experience, guiding visitors to learn everything they
                  need about your company — history, vision, mission, offerings,
                  clients, and contact information. An attractive website not
                  only increases conversion chances but also leaves an
                  everlasting impression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*---------  top rated company Section-------------*/}
      <section
        style={{
          backgroundColor: "white",
        }}
      >
        <div className="container-xxl">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-lg-12 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <h3
                  className="text-center"
                  style={{
                    color: "#15233C",
                    fontSize: "24px",
                    fontFamily: "'Source Serif Pro', serif",
                    fontWeight: "bold",
                  }}
                >
                  Top Rated Web Development Company in India
                  <br />
                  <span style={{ fontSize: "16px" }}>
                    Hire Top Indian Web Design Company
                  </span>
                </h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <hr style={{ width: "50px", border: "2px solid red" }} />
                </div>{" "}
                <p
                  style={{
                    textAlign: "justify",
                    fontSize: "16px",
                    fontWeight: "400",
                    paddingBottom: "30px",
                  }}
                >
                  Are you searching for the website design company in India who
                  can provide professional web development services to bring
                  your business/idea online? FutureGenApps® is established as
                  among the top website development companies in India. We have
                  a team of website experts in India having years of experience
                  in developing corporate websites which help us stand out from
                  the other web designing agencies. We ensure all our web
                  development projects are designed and developed using
                  cutting-edge web technologies. Being one of the best web
                  design companies in India, we have years of experience working
                  with top brands and companies to develop their corporate
                  websites and implement digital marketing strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer-section">
        <div className="container-fluid copy-section">
          <hr />
          <div className="row">
            <div className="col-12 text-center">
              <p>
                © 2025 FutureGenApps®. All Rights Reserved.{" "}
                <span>SEO & Website Design Company in India.</span>
                <br />
                FutureGenApps® is a registered trademark.
              </p>
              <p>
                All logos, brand names, and trademarks belong to their
                respective owners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
