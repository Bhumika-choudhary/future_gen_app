import backgroundImage from "../assets/contact-futuregenapps.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section>
        <div>
          <a
            title="Start Whatsapp chat"
            href=""
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "fixed",
              width: "170px",
              height: "50px",
              bottom: "50px",
              right: "20px",
              backgroundColor: "#25D366",
              color: "white",
              borderRadius: "50px",
              textAlign: "center",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              textDecoration: "none",
              zIndex: 2000,
            }}
          >
            <i
              className="fab fa-whatsapp"
              style={{
                fontSize: "22px",
                marginRight: "10px",
              }}
            ></i>
            <b>WhatsApp Chat</b>
          </a>
        </div>
      </section>
      <section
        className="footer-section"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "70px",
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100%",
          zIndex: "1000",
        }}
      >
        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 text-center">
              <input
                type="text"
                className="model-input"
                placeholder="Contact Number"
                readOnly
                data-bs-toggle="modal"
                data-bs-target="#enquiryModal"
              />
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#enquiryModal"
              >
                Get Free CallBack
              </button>
            </div>
          </div>
        </div>
        <br />
      </section>
    </>
  );
};

export default Footer;
