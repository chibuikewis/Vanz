import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-dark">
        <section className="footer">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  Vanz
                </h6>
                <p>lorem</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Web Development
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    IT Support
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Design & Editing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Marketing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Writing & Blogs
                  </a>
                </p>
              </div>{" "}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {" "}
                <h6 className="text-uppercase fw-bold mb-4">Quick links</h6>
                <p>
                  <a href="/about" className="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    SERVICES
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    PORTFOLIO
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    BLOG
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3" /> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3" /> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="/">
            {" "}
            VANZ
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
