import React from "react";
import "./testimonial.css";
const Testimonial = () => {
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">My client saying</span>

      <div className="testimonial__container container swiper-container">
        <div className="swiper-wrapper">
          {/* <!--==================== TESTIMONIAL 1 ====================--> */}
          <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img
                  src="./packages/images/arun.PNG"
                  alt=""
                  className="testimonial__img"
                />

                <div>
                  <h3 className="testimonial__name">Arun Prashanth</h3>
                  <span className="testimonial__client">Client</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
              </div>
            </div>

            <p className="testimonial__description">
              I get a good impression, I carry out my project with all the
              possible quality and attention and support 24 hours a day.
            </p>
          </div>
          {/* <!--==================== TESTIMONIAL 2 ====================--> */}
          <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img
                  src="./packages/images/yuga.PNG"
                  alt=""
                  className="testimonial__img"
                />

                <div>
                  <h3 className="testimonial__name">Yugadarshan</h3>
                  <span className="testimonial__client">Client</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
              </div>
            </div>

            <p className="testimonial__description">
              I get a good impression, I carry out my project with all the
              possible quality and attention and support 24 hours a day.
            </p>
          </div>
          {/* <!--==================== TESTIMONIAL 3 ====================--> */}
          <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img
                  src="./packages/images/shenan.PNG"
                  alt=""
                  className="testimonial__img"
                />

                <div>
                  <h3 className="testimonial__name">Shenan Sachinthan</h3>
                  <span className="testimonial__client">Client</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
                <i className="uil uil-star testimonial__icon-star"></i>
              </div>
            </div>

            <p className="testimonial__description">
              I get a good impression, I carry out my project with all the
              possible quality and attention and support 24 hours a day.
            </p>
          </div>
        </div>

        {/* <!--Add pagination--> */}
        <div className="swiper-pagination swiper-pagination-testimonial"></div>
      </div>
    </section>
  );
};

export default Testimonial;
