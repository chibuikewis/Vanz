import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Layout from "./../components/Layout";
import { services } from "../resources/services";
import { teams } from "../resources/team";
import { posts } from "../resources/posts";
import { portfolios } from "../resources/portfolio";
import { Link } from "react-router-dom";

// Mock authentication check function
const isAuthenticated = () => {
  // Replace this with actual authentication check logic
  return true; // Assuming user is authenticated for demonstration
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`custom-arrow prevArrow ${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`custom-arrow nextArrow ${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const Home = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    arrows: true,
    dots: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  const authenticated = isAuthenticated();

  return (
    <Layout>
      <div className="hero-slider">
        <Slider {...settings}>
          <div className="slider-item hero1">
            <img src="images/comp.jpg" alt="Hero 1" />
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center block">
                  <h1>Empowering Your Tech</h1>
                  <p>
                    Innovative IT Solutions, Stunning Designs, and Expert
                    Development
                  </p>
                  <a href="services.html" className="btn btn-main">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item hero1">
            <img src="images/fiat.jpg" alt="Hero 2" />
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center block">
                  <h1>Curating Ideas into Innovations</h1>
                  <p>Special IT support, education learning and more</p>
                  <a href="services.html" className="btn btn-main">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <section className="service-2 section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="title text-center">
                <h2>What We Do</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, earum.
                </p>
                <div className="border" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center d-none d-md-block">
              <img
                loading="lazy"
                src="images/tfh.jpg"
                className="img-fluid serv inline-block"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="row text-center">
                {services.map((service, index) => (
                  <div className="col-md-6 col-sm-6" key={index}>
                    <div className="service-item">
                      <i>{service.icon}</i>
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section classname="about-2 section" id="about">
        <div className="contact-wrappers">
          <div className="container">
            <div className="why-wrapper">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-9">
                  <div className="why-caption text-center">
                    <h2>Why Choose Us?</h2>
                    <p>
                      Our professional leadership team is truly committed to
                      producing the best results for our clients very
                      successfully..
                    </p>
                    <p className="p-bottom">
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation.
                    </p>
                    <a href="#" className="btn btn-main">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="title text-center ">
                <h2>Examples</h2>
                <div className="border" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus facere accusamus, reprehenderit libero inventore nam.
                </p>
              </div>
            </div>
            <div className="row">
  {portfolios.map((portfolio, index) => (
    <article className="col-lg-4 col-md-6" key={index}>
      <div className="post-item">
        <div className="media-wrapper">
          <Link to={`/portfolio/${portfolio.name}`}>
            <img
              src={portfolio.image}
              className="img-fluid"
              alt={`${portfolio.name}`}
            />
          </Link>
        </div>
        <div className="content text-center">
          <h3>
            <Link to={`/portfolio/${portfolio.name}`}>
              {portfolio.name}
            </Link>
          </h3>
          <p>{portfolio.description}</p>
        </div>
      </div>
    </article>
  ))}
</div>

          </div>
        </div>
      </section>

      <section className="call-to-action section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 text-center">
              <h2>Let's Work Together</h2>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin
                bibendum auctor, nisi elit consequat ipsum, nesagittis sem nid
                elit. Duis sed odio sitain elit.
              </p>
              <a href="contact.html" className="btn btn-main">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="text-center section">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h2>Team Member</h2>
            <p className="separator">
              Integer cursus bibendum augue ac cursus .
            </p>
          </div>
          <div className="row">
            {teams.map((team, index) => (
              <div
                className="col-md-6 col-md-4 col-lg-3"
                data-aos="zoom-in"
                data-aos-delay={(index + 1) * 100}
                key={index}
              >
                <div className="team-block bottom">
                  <img
                    src={team.image}
                    className="img-responsive"
                    alt={`${team.name}`}
                  />
                  <div className="team-content">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">{team.icon}</a>
                      </li>
                    </ul>
                    <span>{team.title}</span>
                    <h4>{team.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blog" id="blog">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="title text-center ">
                <h2>
                  Latest <span className="color">Posts</span>
                </h2>
                <div className="border" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus facere accusamus, reprehenderit libero inventore nam.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {posts.map((post, index) => (
              <article className="col-lg-4 col-md-6" key={index}>
                <div className="post-item">
                  <div className="media-wrapper">
                    <img
                      src={post.image}
                      className="img-fluid"
                      alt={`${post.name}`}
                    />
                  </div>
                  <div className="content">
                    <h3>
                      <a href="single-post.html">{post.title}</a>
                    </h3>
                    <p>{post.description}</p>
                    <a className="btn btn-main" href="single-post.html">
                      Read more
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
