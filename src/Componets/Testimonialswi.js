import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./Title";

const Testimonialswi = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Title
        title="Testimonial"
        titleadd="What our client say"
        titledis="Our clients love the comfortable living, modern amenities, and friendly community at Acquire PGs. Hear directly from them why they call it a true home away from home."
      />
      <div className="pb-6" style={{ background: "#FFEEA9" }}>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="slide">
              <div
                className="ud-single-testimonial mx-6 p-6 bg-yellow-300 mb-12 rounded-xl shadow-testimonial hover:shadow-2xl hover:bg-yellow-400 wow fadeInUp"
                data-wow-delay=".15s"
              >
                <div className="ud-testimonial-ratings flex justify-center items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span className="text-[#fbb040] mr-1" key={i}>
                      <svg
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                  ))}
                </div>
                <div className="ud-testimonial-content mb-6">
                  <p className="text-base tracking-wide text-body-color">
                    “Our members are so impressed. It's intuitive. It's clean.
                    It's distraction free. If you're building a community.”
                  </p>
                </div>
              </div>
            </div>
            <div className="slide">
              <div
                className="ud-single-testimonial mx-6 p-6 bg-yellow-300 mb-12 rounded-xl shadow-testimonial hover:shadow-2xl hover:bg-yellow-400 wow fadeInUp"
                data-wow-delay=".15s"
              >
                
                <div className="ud-testimonial-ratings flex justify-center items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span className="text-[#fbb040] mr-1" key={i}>
                      <svg
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                  ))}
                </div>
                <div className="ud-testimonial-content mb-6">
                  <p className="text-base tracking-wide text-body-color">
                    “Our members are so impressed. It's intuitive. It's clean.
                    It's distraction free. If you're building a community.”
                  </p>
                </div>
              </div>
            </div>
            <div className="slide">
              <div
                className="ud-single-testimonial mx-6 p-6 bg-yellow-300 mb-12 rounded-xl shadow-testimonial hover:shadow-2xl hover:bg-yellow-400 wow fadeInUp"
                data-wow-delay=".15s"
              >
                <div className="ud-testimonial-ratings flex justify-center items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span className="text-[#fbb040] mr-1" key={i}>
                      <svg
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                  ))}
                </div>
                <div className="ud-testimonial-content mb-6">
                  <p className="text-base tracking-wide text-body-color">
                    “Our members are so impressed. It's intuitive. It's clean.
                    It's distraction free. If you're building a community.”
                  </p>
                </div>
              </div>
            </div>
            <div className="slide">
              <div
                className="ud-single-testimonial mx-6 p-6 bg-yellow-300 mb-12 rounded-xl shadow-testimonial hover:shadow-2xl hover:bg-yellow-400 wow fadeInUp"
                data-wow-delay=".15s"
              >
                <div className="ud-testimonial-ratings flex justify-center items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span className="text-[#fbb040] mr-1" key={i}>
                      <svg
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                  ))}
                </div>
                <div className="ud-testimonial-content mb-6">
                  <p className="text-base tracking-wide text-body-color">
                    “Our members are so impressed. It's intuitive. It's clean.
                    It's distraction free. If you're building a community.”
                  </p>
                </div>
              </div>
            </div>
          </Slider>                                        
        </div>
      </div>
    </>
  );
};

export default Testimonialswi;
