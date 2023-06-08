import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (

    <>
      {/* preloader  */}
      <div id="preloader">
        <div id="ctn-preloader" className="ctn-preloader">
          <div className="animation-preloader">
            <div className="spinner" />
            <div className="txt-loading">
              <span data-text-preloader="C" className="letters-loading">
                C
              </span>
              <span data-text-preloader="I" className="letters-loading">
                I
              </span>
              <span data-text-preloader="O" className="letters-loading">
                O
              </span>
              <span data-text-preloader="S" className="letters-loading">
                S
              </span>
            </div>
          </div>
          <div className="loader">
            <div className="row">
              <div className="col-3 loader-section section-left">
                <div className="bg" />
              </div>
              <div className="col-3 loader-section section-left">
                <div className="bg" />
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg" />
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* preloader end */}
      <div className="mouseCursor cursor-outer" />
      <div className="mouseCursor cursor-inner">
        <span>Drag</span>
      </div>
      {/* header area start  */}
      <header>
        <div className="cp-header3">
          <div className="cp-header3-bottom">
            <div className="container">
              <div className="d-flex align-items-center justify-content-between cp-menu3-border-bottom pt-30 pb-30">
                <div className="cp-header3-bottom-item">
                  <a
                    className="cp-header3-menu-icon side-toggle"
                    href="#"
                  >
                    <span>me</span>
                    <span>nu</span>
                  </a>
                </div>
                <div className="cp-header3-bottom-item">
                  <a className="cp-header3-logo" href="/">
                    <img src="/img/logo/logo.svg" alt="logo" />
                  </a>
                </div>
                <div className="cp-header3-bottom-item d-none d-md-block">
                  <a
                    className="cp-btn-3 cp-btn-nav"
                    data-bs-toggle="modal"
                    data-bs-target="#formPopup"
                   
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="main-menu3 d-none">
            <nav id="mobile-menu2">
              <ul>
                <li>
                  <a href="#">Who We Are</a>
                </li>
                <li>
                  <a href="#">Cios Learn</a>
                </li>
                <li>
                  <a href="#">Cioss Media</a>
                </li>
                <li>
                  <a
                    className="cp-btn-3"
                    data-bs-toggle="modal"
                    data-bs-target="#formPopup"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {/* header area end */}
      {/* side toggle start */}
      <div className="fix">
        <div className="side-info">
          <div className="side-info-content">
            <div className="offset-widget offset-logo mb-50">
              <div className="row align-items-center">
                <div className="col-9">
                  <a href="/">
                    <img src="/img/logo/logo.svg" alt="Logo" />
                  </a>
                </div>
                <div className="col-3 text-end">
                  <button className="side-info-close">
                    <i className="fal fa-times" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mobile-menu2 fix" />
            <div className="offset-widget offset-support mb-30">
              <h3 className="cp-offset-widget-title">Contact Info</h3>
              <div className="footer-support">
                <div className="irc-item support-meta">
                  <div className="irc-item-icon">
                    <i className="fal fa-phone-alt" />
                  </div>
                  <div className="irc-item-content">
                    <p>Call Now</p>
                    <div className="support-number">
                      <a href="tel:98965963168">+234 (0) 803 948 4135</a>
                    </div>
                  </div>
                </div>
                <div className="irc-item support-meta">
                  <div className="irc-item-icon">
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="irc-item-content">
                    <p>Mail Us</p>
                    <div className="support-number">
                      <a href="mailto:example@gmail.com">info@cioss.com</a>
                    </div>
                  </div>
                </div>
                <div className="irc-item support-meta">
                  <div className="irc-item-icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="irc-item-content">
                    <p>Location</p>
                    <div className="support-number">
                      <a href="#" target="_blank">
                        XHXC+CH5, Jogagos Plaza Nyanya-Karu
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-widget offset-social mb-30">
              <div className="footer-social">
                <div className="social-links">
                  <ul>
                    <li>
                      <a target="_blank" href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="#">
                        <i className="fab fa-behance" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* side toggle end */}

      {/* search popup start */}
      <div className="search__popup">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="search__wrapper">
                <div className="search__top d-flex justify-content-end">
                  <div className="search__close">
                    <button
                      type="button"
                      className="search__close-btn search-close-btn"
                    >
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 1L1 17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 1L17 17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="search__form">
                  <form action="#">
                    <div className="search__input">
                      <input
                        className="search-input-field"
                        type="text"
                        placeholder="Search Here"
                      />
                      <button type="submit">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.0002 19.0002L17.2002 17.2002"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* search popup end */}
      <div className="offcanvas-overlay" />
      <div className="offcanvas-overlay-white" />

      {/* Add your site or application content here */}
      <main>
        {/* services 3 start here  */}
        <section className="cp-service3-area mt-30 pb-15">
          <div className="cp-service3-wrap">
            <div
              className="cp-service3-inner p-relative wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
            >
              <div className="swiper-container cp-service3-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="cp-service3-item">
                      <div className="cp-service3-img">
                        <img
                          src="/img/service/service-11.jpg"
                          alt="service"
                        />
                      </div>
                      <h3 className="cp-service3-title">
                        <a href="http://media.cioss.net" target="_blank">
                          CIOS MEDIA{" "}
                          <span>
                            <img
                              src="/img/icon/play-icon.png"
                              alt=""
                              srcSet=""
                            />
                          </span>
                        </a>
                      </h3>
                    </div>
                  </div>
                 
                  <div className="swiper-slide">
                    <div className="cp-service3-item">
                      <div className="cp-service3-img">
                        <img
                          src="/img/service/service-12.jpg"
                          alt="service"
                        />
                      </div>
                      <h3 className="cp-service3-title">
                        <a href="http://tech.cioss.net" target="_blank">
                          CIOS TECH
                          {" "}
                          <span>
                            <img
                              src="/img/icon/play-icon.png"
                              alt=""
                              srcSet=""
                            />
                          </span>
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cp-service3-item">
                      <div
                        className="cp-service3-img"
                        style={{ objectFit: "contain" }}
                      >
                        <img
                          src="/img/service/service-13.jpg"
                          alt="service"
                        />
                      </div>
                      <h3 className="cp-service3-title">
                        <a href="http://tech.cioss.net" target="_blank">
                          CIOS LEARN
                          {" "}
                          <span>
                            <img
                              src="/img/icon/play-icon.png"
                              alt=""
                              srcSet=""
                            />
                          </span>
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cp-service3-nav d-none d-lg-block">
                <div
                  className="cp-service3-button cp cp-service3-button-prev"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <i className="fas fa-chevron-left" />
                </div>
                <div
                  className="cp-service3-button cp cp-service3-button-next"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <i className="fas fa-chevron-right" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="cp-service3-content-wrap pt-65 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.5s"
          >
            <div className="container">
              <div className="row">
                <div className="col-xxl-7 col-xl-6">
                  <div className="cp-section-title mb-30">
                    <h2 className="cp-title2">
                      Welcome <br /> to <br />{" "}
                    </h2>
                    <div className="cp-about3-cta-text">
                      <h3>CIOS TECH CONSULT</h3>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-6">
                  <div className="cp-service3-content mb-30">
                    <p className="mb-40">
                      We are solutions-driven technology company with a history of
                      success p brands and customers.
                    </p>
                    <div className="cp-service3-btn">
                      <a href="http://tech.cioss.net" target="_blank">View More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service 3 end here  */}
        {/* case-study 3 start here  */}
        {/* <section className="cp-case-study3-area pt-30 pb-30 fix">
          <div className="cp-case-study3-wrap">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7">
                <div
                  className="cp-section-title t-center mb-70 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <h2 className="cp-title2">Our stunning Showcases</h2>
                </div>
              </div>
            </div>
            <div className="cp-case-study-inner">
              <div
                className="swiper-container cp-case-study3-active mb-30 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="cp-case-study3-item">
                      <div className="cp-case-study3-img">
                        <a href="#">
                          <img
                            src="/img/case/case-study-7.jpg"
                            alt="case-study"
                          />
                        </a>
                      </div>
                      <div className="cp-case-study3-content">
                        <h3 className="cp-case-study3-title">
                          <a href="#">Flyer Design</a>
                        </h3>
                        <p className="cp-case-study3-text">
                          communications det, consec tetur adipiscing elit duis nec
                          fringi communicate
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cp-case-study3-item">
                      <div className="cp-case-study3-img">
                        <a href="#">
                          <img
                            src="/img/case/case-study-8.jpg"
                            alt="case-study"
                          />
                        </a>
                      </div>
                      <div className="cp-case-study3-content">
                        <h3 className="cp-case-study3-title">
                          <a href="#">Mug Branding Design</a>
                        </h3>
                        <p className="cp-case-study3-text">
                          communications det, consec tetur adipiscing elit duis nec
                          fringi communicate
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cp-case-study3-item">
                      <div className="cp-case-study3-img">
                        <a href="#">
                          <img
                            src="/img/case/case-study-9.jpg"
                            alt="case-study"
                          />
                        </a>
                      </div>
                      <div className="cp-case-study3-content">
                        <h3 className="cp-case-study3-title">
                          <a href="#">T-Shirt Printing Design</a>
                        </h3>
                        <p className="cp-case-study3-text">
                          communications det, consec tetur adipiscing elit duis nec
                          fringi communicate
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cp-case-study3-item">
                      <div className="cp-case-study3-img">
                        <a href="#">
                          <img
                            src="/img/case/case-study-10.jpg"
                            alt="case-study"
                          />
                        </a>
                      </div>
                      <div className="cp-case-study3-content">
                        <h3 className="cp-case-study3-title">
                          <a href="#">Social Media Banner</a>
                        </h3>
                        <p className="cp-case-study3-text">
                          communications det, consec tetur adipiscing elit duis nec
                          fringi communicate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-container cp-case-study4-active mb-30 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="cp-case-study3-item">
                      <div className="cp-case-study3-img">
                        <a href="#">
                          <img
                            src="/img/case/case-study-10.jpg"
                            alt="case-study"
                          />
                        </a>
                      </div>
                      <div className="cp-case-study3-content">
                        <h3 className="cp-case-study3-title">
                          <a href="#">Social Media Banner</a>
                        </h3>
                        <p className="cp-case-study3-text">
                          communications det, consec tetur adipiscing elit duis nec
                          fringi communicate
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cp-case-study3-item">
                      <div className="cp-case-study3-img">
                        <a href="#">
                          <img
                            src="/img/case/case-study-8.jpg"
                            alt="case-study"
                          />
                        </a>
                      </div>
                      <div className="cp-case-study3-content">
                        <h3 className="cp-case-study3-title">
                          <a href="#">Mug Branding Design</a>
                        </h3>
                        <p className="cp-case-study3-text">
                          communications det, consec tetur adipiscing elit duis nec
                          fringi communicate
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cp-case-study3-item">
                      <div className="cp-case-study3-img">
                        <a href="#">
                          <img
                            src="/img/case/case-study-11.jpg"
                            alt="case-study"
                          />
                        </a>
                      </div>
                      <div className="cp-case-study3-content">
                        <h3 className="cp-case-study3-title">
                          <a href="#">T-Shirt Branding Design</a>
                        </h3>
                        <p className="cp-case-study3-text">
                          communications det, consec tetur adipiscing elit duis nec
                          fringi communicate
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="cp-case-study3-item">
                      <div className="cp-case-study3-img">
                        <a href="#">
                          <img
                            src="/img/case/case-study-12.jpg"
                            alt="case-study"
                          />
                        </a>
                      </div>
                      <div className="cp-case-study3-content">
                        <h3 className="cp-case-study3-title">
                          <a href="#">Mug Branding Design</a>
                        </h3>
                        <p className="cp-case-study3-text">
                          communications det, consec tetur adipiscing elit duis nec
                          fringi communicate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* floating area start here  */}
        <div className="cp-floating-area d-none d-sm-block zi-1100 p-relative d-none">
          <div className="cp-floating-action cp-bg-move-y">
            <span
              className="cp-floating-btn cp-floating-phone-btn cp"
              data-bs-toggle="modal"
              data-bs-target="#phonePopup"
            >
              <i className="fal fa-phone-alt" />
            </span>
            <span
              className="cp-floating-btn cp-floating-location-btn cp"
              data-bs-toggle="modal"
              data-bs-target="#locationPopup"
            >
              <i className="fal fa-location-arrow" />
            </span>
            <span
              className="cp-floating-btn cp-floating-form-btn cp"
              data-bs-toggle="modal"
              data-bs-target="#formPopup"
            >
              <i className="fal fa-envelope-open-text" />
            </span>
          </div>
          {/* phone Modal start */}
          <div
            className="modal fade cp-floating-model"
            id="phonePopup"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="phonePopupLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div
                  className="cp-floating-item cp-phone-popup"
                  id="phonePopupLabel"
                >
                  <div className="cp-floating-left w-img">
                    <img src="/img/cta/popup2.jpg" alt="contact" />
                  </div>
                  <div className="cp-floating-text">
                    <h4 className="cp-floating-title">
                      Our <span>Office Time</span>
                    </h4>
                    <div className="cp-floating-text-inner">
                      <span className="cp-floating-text-inner-icon">
                        <i className="fal fa-calendar-day" />
                      </span>
                      <span className="cp-floating-text-inner-text">
                        monday - sunday
                      </span>
                    </div>
                    <div className="cp-floating-text-inner">
                      <span className="cp-floating-text-inner-icon">
                        <i className="fal fa-watch" />
                      </span>
                      <span className="cp-floating-text-inner-text">
                        8.00 am - 9.00 pm
                      </span>
                    </div>
                    <div className="cp-floating-text-inner">
                      <span className="cp-floating-text-inner-icon">
                        <i className="far fa-phone-alt" />
                      </span>
                      <span className="cp-floating-text-inner-text">
                        <a href="tel:+910265362003">+910265362003</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* phone Modal end */}
          {/* location Modal start */}
          <div
            className="modal fade cp-floating-model"
            id="locationPopup"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="locationPopupLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div
                  className="cp-floating-item cp-location-popup"
                  id="locationPopupLabel"
                >
                  <div className="cp-floating-left">
                    <div className="cp-floating-location">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.14184006557!2d-77.0846156762382!3d38.89386718919168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sbd!4v1671881294236!5m2!1sen!2sbd"
                        style={{ border: 0 }}
                        // allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                  <div className="cp-floating-text">
                    <h4 className="cp-floating-title">
                      know <span>our location</span>
                    </h4>
                    <div className="cp-floating-text-inner">
                      <span className="cp-floating-text-inner-icon">
                        <i className="fal fa-location-arrow" />
                      </span>
                      <span className="cp-floating-text-inner-text">
                        <a
                          target="_blank"
                          href="https://www.google.com/maps/@38.8938672,-77.0846157,12z"
                        >
                          88 New Street, Washington DC, America
                        </a>
                      </span>
                    </div>
                    <div className="cp-floating-text-inner">
                      <span className="cp-floating-text-inner-icon">
                        <i className="fal fa-location-arrow" />
                      </span>
                      <span className="cp-floating-text-inner-text">
                        <a
                          target="_blank"
                          href="https://www.google.com/maps/@1.952577,44.3912535,3z"
                        >
                          100 New Street, melbon, Australian
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* location Modal end */}
          {/* form Modal start */}
          <div
            className="modal fade cp-floating-model"
            id="formPopup"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="formPopupLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div className="cp-floating-item" id="formPopupLabel">
                  <div className="cp-floating-form-img w-img">
                    <img src="/img/cta/cta-img.png" alt="contact" />
                  </div>
                  <div className="cp-floating-left cp-signup-popup">
                    <h3 className="cp-floating-title">Do you have any question?</h3>
                    <div className="cp-floating-form">
                      <form action="#">
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="cp-input-field">
                              <label htmlFor="name">Your Name</label>
                              <input type="text" id="name" />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="cp-input-field">
                              <label htmlFor="email">Your Email</label>
                              <input type="email" id="email" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <select className="cp-input-field  sw-auto">
                              <option>Select Subject</option>
                              <option value="graphic-design">Graphic Design</option>
                              <option value="photography">Photography</option>
                              <option value="videography">Videography</option>
                              <option value="ict-training">ICT Training</option>
                              <option value="content-creation-branding">
                                Content Creation/Branding
                              </option>
                              <option value="live-broadcast-media-coverage">
                                Live Broadcast/Media Coverage
                              </option>
                              <option value="it-consultancy">IT Consultancy</option>
                              <option value="web-design">Web Design</option>
                              <option value="mobile-development">
                                Mobile Application Development
                              </option>
                              <option value="hardware-supply-installation">
                                Hardware Supply/Installation/Maintenance
                              </option>
                            </select>
                          </div>
                          <div className="col-xl-12">
                            <div className="cp-input-field">
                              <label htmlFor="message">Your question</label>
                              <textarea
                                id="message"
                                cols={30}
                                rows={10}
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="cp-btn mt-20">
                          send question
                          <span className="cp-btn__inner">
                            <span className="cp-btn__blobs">
                              <span className="cp-btn__blob" />
                              <span className="cp-btn__blob" />
                              <span className="cp-btn__blob" />
                              <span className="cp-btn__blob" />
                            </span>
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* form Modal end */}
        </div>
        {/* floating area end here  */}
      </main>

      {/* footer area start  */}
      <footer>
        <div className="cp-footer2-area cp-footer3-area-bg p-relative">
          <div className="cp-footer3-top">
            <div className="container">
              <div className="cp-footer3-bg">
                <div className="row align-items-center">
                  <div className="col-xl-3">
                    <div className="cp-footer3-logo mb-30">
                      <img
                        src="/img/logo/logo-white.svg"
                        style={{ width: "4rem" }}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="col-xl-9">
                    <div className="cp-footer3-call justify-content-xl-end mb-30">
                      <svg
                        width={50}
                        height={50}
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M45.7708 38.1868C45.7708 38.9368 45.6041 39.7077 45.25 40.4577C44.8958 41.2077 44.4375 41.916 43.8333 42.5827C42.8125 43.7077 41.6875 44.5202 40.4166 45.041C39.1666 45.5618 37.8125 45.8327 36.3541 45.8327C34.2291 45.8327 31.9583 45.3327 29.5625 44.3118C27.1666 43.291 24.7708 41.916 22.3958 40.1868C20 38.4368 17.7291 36.4993 15.5625 34.3535C13.4166 32.1868 11.4791 29.916 9.74996 27.541C8.04163 25.166 6.66663 22.791 5.66663 20.4368C4.66663 18.0618 4.16663 15.791 4.16663 13.6243C4.16663 12.2077 4.41663 10.8535 4.91663 9.60352C5.41663 8.33268 6.20829 7.16602 7.31246 6.12435C8.64579 4.81185 10.1041 4.16602 11.6458 4.16602C12.2291 4.16602 12.8125 4.29102 13.3333 4.54102C13.875 4.79102 14.3541 5.16602 14.7291 5.70768L19.5625 12.5202C19.9375 13.041 20.2083 13.5202 20.3958 13.9785C20.5833 14.416 20.6875 14.8535 20.6875 15.2493C20.6875 15.7493 20.5416 16.2493 20.25 16.7285C19.9791 17.2077 19.5833 17.7077 19.0833 18.2077L17.5 19.8535C17.2708 20.0827 17.1666 20.3535 17.1666 20.6868C17.1666 20.8535 17.1875 20.9993 17.2291 21.166C17.2916 21.3327 17.3541 21.4577 17.3958 21.5827C17.7708 22.2702 18.4166 23.166 19.3333 24.2493C20.2708 25.3327 21.2708 26.4368 22.3541 27.541C23.4791 28.6452 24.5625 29.666 25.6666 30.6035C26.75 31.5202 27.6458 32.1452 28.3541 32.5202C28.4583 32.5618 28.5833 32.6243 28.7291 32.6868C28.8958 32.7493 29.0625 32.7702 29.25 32.7702C29.6041 32.7702 29.875 32.6452 30.1041 32.416L31.6875 30.8535C32.2083 30.3327 32.7083 29.9368 33.1875 29.6868C33.6666 29.3952 34.1458 29.2493 34.6666 29.2493C35.0625 29.2493 35.4791 29.3327 35.9375 29.5202C36.3958 29.7077 36.875 29.9785 37.3958 30.3327L44.2916 35.2285C44.8333 35.6035 45.2083 36.041 45.4375 36.5618C45.6458 37.0827 45.7708 37.6035 45.7708 38.1868Z"
                          stroke="white"
                          strokeWidth="1.2"
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M33.75 16.25H43.75M33.75 16.25V6.25V16.25Z"
                          stroke="white"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <a href="tel:+2348039484135">
                        We are commited to serve you better.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="cp-footer2-wrap pt-70 mb-10">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                  <div className="cp-footer3-widget mb-60">
                    <h3 className="cp-footer3-widget-title">Address</h3>
                    <p>
                      Made with love in Abuja, by <br />
                      CIOS Tech.
                    </p>
                    <span className="cp-footer2-location">
                      <i className="fal fa-map-marker-alt" />
                      <a
                        target="_blank"
                        href="https://goo.gl/maps/cgCc1hogK4WYQr7x5"
                      >
                        CIOS Tech by Shafa gas station, C.B.N Junction, <br /> Karu,
                        Abuja, FCT
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                  <div className="cp-footer3-widget mb-60">
                    <h3 className="cp-footer3-widget-title">More</h3>
                    <div className="cp-footer3-widget-link">
                      <ul>
                        <li>
                          <a href="http://tech.cioss.net" target="_blank">CIOS Tech</a>
                        </li>
                        <li>
                          <a href="http://tech.cioss.net" target="_blank">CIOS Learn</a>
                        </li>
                        <li>
                          <a href="http://tech.cioss.net" target="_blank">CIOS Media</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                  <div className="cp-footer3-widget mb-60">
                    <h3 className="cp-footer3-widget-title">Discover</h3>
                    <div className="cp-footer3-widget-link">
                      <ul>
                        <li>
                          <a href="http://media.cioss.net" target="_blank">Become Digital Expert</a>
                        </li>
                        <li>
                          <a href="http://media.cioss.net" target="_blank">What We Offer</a>
                        </li>
                        <li>
                          <a href="http://media.cioss.net" target="_blank">Request a Quote</a>
                        </li>
                        <li>
                          <a href="http://media.cioss.net" target="_blank">For Creators</a>
                        </li>
                        <li>
                          <a href="http://media.cioss.net" target="_blank">News</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
                  <div className="cp-footer3-widget mb-60">
                    <h3 className="cp-footer3-widget-title">COMPANY</h3>
                    <div className="cp-footer3-widget-link">
                      <ul>
                        <li>
                          <a href="http://tech.cioss.net" target="_blank">About</a>
                        </li>
                        <li>
                          <a href="http://tech.cioss.net" target="_blank">Careers</a>
                        </li>
                        <li>
                          <a href="http://tech.cioss.net" target="_blank">Reviews</a>
                        </li>
                        <li>
                          <a href="http://tech.cioss.net" target="_blank">Contact</a>
                        </li>
                        <li>
                          <a href="http://tech.cioss.net" target="_blank">Help Center</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                  <div className="cp-footer3-widget mb-60">
                    <h3 className="cp-footer3-widget-title">Newsletter</h3>
                    <p className="mb-25">
                      Get the latest news, events &amp; more delivered to your
                      inbox.
                    </p>
                    <div className="cp-footer2-subscribe p-relative mb-35">
                      <form action="#">
                        <input type="email" placeholder="Enter your email" />
                        <button className="cp-footer2-subscribe-btn" type="submit">
                          <i className="fas fa-paper-plane" />
                        </button>
                      </form>
                    </div>
                    <div className="cp-footer2-social">
                      <ul>
                        <li>
                          <a target="_blank" href="#">
                            <i className="fab fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="cp-copy2-border">
              <div className="row">
                <div className="col-lg-8">
                  <div className="cp-copy3-text">
                    <p>
                      Copyright From 2013 - | Design By{" "}
                      <a href="http://tech.cioss.net" target="_blank">
                        CIOS Tech
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="cp-footer3-page text-lg-end mb-10">
                    <ul>
                      <li>
                        <a href="#">Privacy &amp; Terms Condition</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end  */}

      {/* back to top start */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* back to top end */}
    </>

  )
}
